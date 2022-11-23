import { Handle, NodeProps, Position } from "reactflow"
import CustomNodeHeader from "./CustomNodeHeader"

const PageNode = ({ isConnectable }: NodeProps) => {
    return (
        <>
            <Handle
                type='target'
                position={Position.Left}
                style={{ background: '#555' }}
                onConnect={(params) => console.log('handle onConnect', params)}
                isConnectable={isConnectable} />
            <div className="element-node">
                <CustomNodeHeader content="Page Node" />
            </div>
            <Handle
                type="target"
                position={Position.Right}
                style={{ background: '#555' }}
                onConnect={(params) => console.log('handle onConnect', params)}
                isConnectable={isConnectable} />
        </>
    )
}

export default PageNode