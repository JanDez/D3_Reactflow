import { 
    Background, 
    Controls, 
    MiniMap, 
    ReactFlow, 
    ReactFlowProvider } from "reactflow"

import 'reactflow/dist/style.css'
import './index.css'

import Panel from "./Panel"
import NodeFormWindow from "./NodeFormWindow"
import useNodeFormWindow from "../hooks/useNodeFormWindow"
import useReactCanvasData from "../hooks/useReactCanvasData"
import useReactCanvasHandlers from "../hooks/useReactCanvasHandlers"

const AppCanvas = () => {
    const {
        reactFlowContainer, 
        reactFlowInstance,
        setEdges,
        setNodes,
        nodes,
        nodeTypes,
        edgeTypes,
        edges,
        generateNodeId,
        setReactFlowInstance,
        handleEdgesChange,
        handleNodesChange
    } = useReactCanvasData()

    const { 
        showWindow, 
        nodeId, 
        nodeFormData, 
        handleCloseWindow, 
        handleInputChange, 
        handleShowWindow } = useNodeFormWindow({ nodes })

    const {
        handleConnect,
        handleDragOver,
        handleDrop,
    } = useReactCanvasHandlers({ 
        reactFlowContainer, 
        reactFlowInstance,
        setEdges,
        setNodes, 
        generateNodeId, 
        handleShowWindow
    })

    return (
        <ReactFlowProvider>
            <>  
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
                { showWindow && 
                    <NodeFormWindow 
                        id={nodeId? nodeId : ''}
                        title={nodeFormData.title}
                        description={nodeFormData.description}
                        onInputChange={handleInputChange}
                        onClose={handleCloseWindow}/>}
                <Panel />
            </>
        </ReactFlowProvider>
    )
}

export default AppCanvas