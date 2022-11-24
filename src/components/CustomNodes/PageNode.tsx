import { Handle, NodeProps, Position } from "reactflow"
import CustomNodeBody from "./CustomNodeBody"
import CustomNodeHeader from "./CustomNodeHeader"

const PageNode = ({ id, data, isConnectable }: NodeProps) => {
    return (
        <>
            <Handle
                type='target'
                position={Position.Left}
                style={{ background: '#555' }}
                onConnect={(params) => console.log('handle onConnect', params)}
                isConnectable={isConnectable} />
            <div className="element-node">
                <CustomNodeHeader 
                    id={id}
                    content="Page Node"
                    onEditHeader={() => console.log('edit header', id)} />
                <CustomNodeBody
                    id={id}
                    content="node content"
                    onEditBody={() => console.log('edit body', id)} />
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