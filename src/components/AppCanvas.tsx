import { useCallback, useRef, useState } from "react"
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
import EdgeButton from "./CustomEdges/EdgeButton"
import ElementNode from "./CustomNodes/ElementNode"
import ElementNodeItem from "./CustomNodes/ElementNodeItem"
import PageNode from "./CustomNodes/PageNode"
import './index.css'

import Panel from "./Panel"

let id = 0
const generateNodeId = () => `dndnode_${id++}`

const nodeTypes: NodeTypes = {
    elementNode: ElementNode,
    pageNode: PageNode,
    elementNodeItem: ElementNodeItem
}

const edgeTypes = {
    buttonEdge: EdgeButton,
};

const initialNodes = [
    {
      id: 'ewb-1',
      type: 'input',
      data: { label: 'Input 1' },
      position: { x: 250, y: 0 },
    },
    { id: 'ewb-2', data: { label: 'Node 2' }, position: { x: 250, y: 300 } },
    {
        id: 'ewb-3',
        type: 'input',
        data: { label: 'Input 1' },
        position: { x: 250, y: 400 },
    },
    { id: 'ewb-4', data: { label: 'Node 2' }, position: { x: 250, y: 450 } },
];

const AppCanvas = () => {
    const reactFlowContainer = useRef<HTMLDivElement | null>(null)
    const [ nodes, setNodes, handleNodesChange ] = useNodesState(initialNodes)
    const [ edges, setEdges, handleEdgesChange ] = useEdgesState([])
    const [ reactFlowInstance, setReactFlowInstance ] = useState<ReactFlowInstance | null>(null)

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

            const newNode: Node<any>= {
                id: generateNodeId(),
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
                    edgeTypes={edgeTypes}
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