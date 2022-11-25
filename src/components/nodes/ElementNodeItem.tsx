import { NodeProps, Position } from "reactflow"
import { SElementNodeItem } from "../../styledComponents/CustomNodes.styles"
import { SHandle } from "../../styledComponents/Edges.styles"
import CustomNodeBody from "./CustomNodeBody"
import CustomNodeHeader from "./CustomNodeHeader"

const ElementNodeItem = ({ id, data, isConnectable }: NodeProps) => {
    return (
        <>
            <SHandle 
                type="source"
                position={Position.Left}
                isConnectable={isConnectable}/>
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
            <SHandle 
                type="target"
                position={Position.Right}
                isConnectable={isConnectable}/>
        </>
    )
}

export default ElementNodeItem