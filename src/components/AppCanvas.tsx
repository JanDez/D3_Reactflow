import { useCallback, useEffect, useRef, useState } from "react"
import { 
    addEdge, 
    Background, 
    Connection, 
    Controls, 
    MiniMap, 
    Node, 
    NodeTypes, 
    ReactFlow, 
    ReactFlowInstance, 
    ReactFlowProvider, 
    useEdgesState, 
    useNodesState } from "reactflow"

import 'reactflow/dist/style.css'
import ElementNode from "./CustomNodes/ElementNode"
import ElementNodeItem from "./CustomNodes/ElementNodeItem"
import PageNode from "./CustomNodes/PageNode"
import './index.css'

import Panel from "./Panel"

let id = 0
const generateId = () => `dndnode_${id++}`

const nodeTypes: NodeTypes = {
    elementNode: ElementNode,
    pageNode: PageNode,
    elementNodeItem: ElementNodeItem
}

const AppCanvas = () => {
    const reactFlowContainer = useRef<HTMLDivElement | null>(null)
    const [ nodes, setNodes, handleNodesChange ] = useNodesState([])
    const [ edges, setEdges, handleEdgesChange ] = useEdgesState([])
    const [ reactFlowInstance, setReactFlowInstance ] = useState<ReactFlowInstance | null>(null)

    useEffect(() => {
        
    }, [])

    const handleConnect = useCallback((connection: Connection) => setEdges((pedges) => {
        return addEdge(connection, pedges)
    }), [setEdges])

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

            console.log('the new node type', type)

            const newNode: Node<any>= {
                id: generateId(),
                type,
                position,
                data: { label: `${type} node` }
            }

            setNodes((pnodes) => pnodes.concat(newNode))
        }
    }, [reactFlowInstance, setNodes])

    return (
        <ReactFlowProvider>
            <div className="reactflow-container" ref={reactFlowContainer}>
                <ReactFlow 
                    nodes={nodes}
                    edges={edges}
                    nodeTypes={nodeTypes}
                    onInit={setReactFlowInstance}
                    onConnect={handleConnect}
                    onNodesChange={handleNodesChange}
                    onEdgesChange={handleEdgesChange}
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                    snapToGrid
                    snapGrid={[20, 20]}
                    minZoom={0.5}
                    maxZoom={2}
                    fitView
                    attributionPosition="bottom-left">
                        <Background />
                        <Controls />
                        <MiniMap />
                </ReactFlow>
            </div>
            <Panel />
        </ReactFlowProvider>
    )
}

export default AppCanvas