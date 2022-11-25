import { SCustomNodeBody, SNodeBody } from "../../styledComponents/CustomNodes.styles"

interface CustomNodeBodyProps {
    id: string
    content: string 
    onEditBody: (nodeId: string) => void
}

const CustomNodeBody = ({ id, content, onEditBody }: CustomNodeBodyProps) => {
    return (
        <SCustomNodeBody 
            onClick={() => onEditBody(id)} 
            className="custom-node-body">
                <SNodeBody>
                    {content}
                </SNodeBody>
        </SCustomNodeBody>
    )
}

export default CustomNodeBody