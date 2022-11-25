import { Handle, NodeProps, Position } from "reactflow"
import { SElementNodeItem } from "../../styledComponents/CustomNodes.styles"
import CustomNodeBody from "./CustomNodeBody"
import CustomNodeHeader from "./CustomNodeHeader"

const ElementNodeItem = ({ id, data, isConnectable }: NodeProps) => {
    return (
        <>
            <Handle
                type="source"
                position={Position.Left}
                style={{ background: '#555' }}
                onConnect={(params) => console.log('handle onConnect', params)}
                isConnectable={isConnectable} />
            <SElementNodeItem>
                <CustomNodeHeader 
                    id={id}
                    content={data.title}
                    onEditHeader={data.onEditHeader}
                    onAddDefaultNode={data.onAddDefaultNode}
                    onRemoveNode={data.onRemoveNode} />
                <CustomNodeBody
                    id={id}
                    content={data.description} 
                    onEditBody={() => console.log('edit header', id)}/>
            </SElementNodeItem>
            <Handle
                type="target"
                position={Position.Right}
                style={{ background: '#555' }}
                onConnect={(params) => console.log('handle onConnect', params)}
                isConnectable={isConnectable} />
        </>
    )
}

export default ElementNodeItem