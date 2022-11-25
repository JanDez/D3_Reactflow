import { SAddNodeBtn, SCustomNodeHeader, SHeaderContent } from "../../styledComponents/CustomNodes.styles"

interface CustomNodeHeaderProps {
    id: string 
    content: string
    onEditHeader: (id: string) => void
    onAddDefaultNode: (id: string) => void
}

const CustomNodeHeader = ({ id, content, onEditHeader, onAddDefaultNode }: CustomNodeHeaderProps) => {
    return (
        <SCustomNodeHeader className="custom-node-header">
            <SHeaderContent onClick={() => onEditHeader(id)}>
                {content}
            </SHeaderContent>
            <SAddNodeBtn 
                onClick={() => onAddDefaultNode(id)}>
                    
            </SAddNodeBtn>
        </SCustomNodeHeader>
    )
}

export default CustomNodeHeader