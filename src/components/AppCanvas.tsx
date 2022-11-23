import { Background, Controls, MiniMap, ReactFlow, ReactFlowProvider } from "reactflow"

import 'reactflow/dist/style.css'
import Panel from "./Panel"

const AppCanvas = () => {
    return (
        <ReactFlowProvider>
            <ReactFlow>
                <Background />
                <Controls />
                <MiniMap />
            </ReactFlow>
            <Panel />
        </ReactFlowProvider>
    )
}

export default AppCanvas