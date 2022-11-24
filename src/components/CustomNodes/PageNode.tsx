import { Handle, NodeProps, Position } from "reactflow"
import CustomNodeBody from "./CustomNodeBody"
import CustomNodeHeader from "./CustomNodeHeader"

const PageNode = ({ id, data, isConnectable }: NodeProps) => {
    return (
        <>
            <Handle
                type='source'
                position={Position.Left}
                style={{ background: '#555' }}
                onConnect={(params) => console.log('handle onConnect', params)}
                isConnectable={isConnectable} />
            <div className="page-node custom-node">
                <CustomNodeHeader 
                    id={id}
                    content={data.title}
                    onEditHeader={() => data.onEditHeader(id)} />
                <CustomNodeBody
                    id={id}
                    content={data.description}
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