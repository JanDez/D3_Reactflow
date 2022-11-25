import { Handle, NodeProps, Position } from "reactflow"
import { SPageNode } from "../../styledComponents/CustomNodes.styles"
import { SHandle } from "../../styledComponents/Edges.styles"
import CustomNodeBody from "./CustomNodeBody"
import CustomNodeHeader from "./CustomNodeHeader"

const PageNode = ({ id, data, isConnectable }: NodeProps) => {
    return (
        <>
            <SHandle 
                type="source"
                position={Position.Left}
                isConnectable={isConnectable}/>
            <SPageNode>
                <CustomNodeHeader 
                    id={id}
                    content={data.title}
                    onEditHeader={data.onEditHeader}
                    onAddDefaultNode={data.onAddDefaultNode}
                    onRemoveNode={data.onRemoveNode} />
                <CustomNodeBody
                    id={id}
                    content={data.description}
                    onEditBody={() => console.log('edit body', id)} />
            </SPageNode>
            <SHandle 
                type="target"
                position={Position.Right}
                isConnectable={isConnectable}/>
        </>
    )
}

export default PageNode