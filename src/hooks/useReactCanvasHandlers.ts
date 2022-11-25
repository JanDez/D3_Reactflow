import { useCallback } from "react"
import { addEdge, Connection, Edge, Node, ReactFlowInstance } from "reactflow"

interface UseReactCanvasHandlersProps {
    reactFlowContainer: React.MutableRefObject<HTMLDivElement | null>
    reactFlowInstance: ReactFlowInstance<any, any> | null
    nodes: Node<any>[]
    setEdges: React.Dispatch<React.SetStateAction<Edge<any>[]>>
    setNodes: React.Dispatch<React.SetStateAction<Node<any>[]>>
    generateNodeId: () => string
    handleShowWindow: (nodeId: string) => void
}

const useReactCanvasHandlers = ({ 
    reactFlowContainer, 
    reactFlowInstance, 
    generateNodeId, 
    setNodes, 
    setEdges,
    handleShowWindow
}: UseReactCanvasHandlersProps) => {

    const handleAddDefaultNode = useCallback((nodeId: string) => {
        console.log('add default node')
        setNodes((pnodes) => {
            const actionNode = pnodes.find(node => node.id === nodeId)

            if (actionNode && reactFlowInstance) {
                const position = reactFlowInstance.project({
                    x: actionNode.position.x + 50,
                    y: actionNode.position.y + 50
                })
    
                const id = generateNodeId()
                const newNode: Node<any> = {
                    id,
                    type: 'default',
                    position,
                    data: {
                        label: `text ${id}`
                    },
                }
                
                return pnodes.concat(newNode)
            }
    
            return pnodes
        })
    }, [ setNodes, generateNodeId, reactFlowInstance ])

    const handleDeleteNode = useCallback((nodeId: string) => {
        setNodes((pnodes) => pnodes.filter(nd => nd.id !== nodeId))
    }, [ setNodes ])

    const handleDeleteEdge = useCallback((edgeId: string) => {
        setEdges((edgs) => edgs.filter(edg => edg.id !== edgeId))
    }, [setEdges])

    const handleConnect = useCallback((connection: Connection) => setEdges((pedges) => {
        return addEdge({
            ...connection, 
            type: 'buttonEdge',
            data: { handleDeleteEdge }
        }, pedges)
    }), [setEdges, handleDeleteEdge])

    const handleDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault()
        event.dataTransfer.dropEffect = 'move'
    }, [])

    const handleDrop = useCallback((event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault()

        if (reactFlowContainer.current && reactFlowInstance) {
            const reactFlowBounds = reactFlowContainer.current.getBoundingClientRect()
            const type = event.dataTransfer.getData('application/reactflow')

            if (typeof type === 'undefined' || !type) return 

            const position = reactFlowInstance.project({
                x: event.clientX - reactFlowBounds.left,
                y: event.clientY - reactFlowBounds.top
            })

            const id = generateNodeId()
            const newNode: Node<any> = {
                id,
                type,
                position,
                data: { 
                    label: `${type} node`, 
                    title: `Title ${id}`,
                    description: `Description ${id}`,
                    onEditHeader: handleShowWindow,
                    onAddDefaultNode: handleAddDefaultNode,
                    onRemoveNode: handleDeleteNode }
            }

            setNodes((pnodes) => pnodes.concat(newNode))
        }
    }, [reactFlowInstance, reactFlowContainer, setNodes, generateNodeId, handleShowWindow, handleAddDefaultNode, handleDeleteNode])

    return {
        handleConnect,
        handleDragOver,
        handleDrop,
        handleAddDefaultNode
    }
}

export default useReactCanvasHandlers