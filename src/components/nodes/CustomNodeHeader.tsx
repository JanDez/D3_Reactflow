import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { SAddNodeBtn, SCloseBtn, SCustomNodeHeader, SHeaderContent } from "../../styledComponents/CustomNodes.styles"

interface CustomNodeHeaderProps {
    id: string 
    content: string
    onEditHeader: (id: string) => void
    onAddDefaultNode: (id: string) => void
    onRemoveNode: (id: string) => void
}

const CustomNodeHeader = ({ id, content, onEditHeader, onAddDefaultNode , onRemoveNode}: CustomNodeHeaderProps) => {
    return (
        <SCustomNodeHeader className="custom-node-header">
            <SHeaderContent onClick={() => onEditHeader(id)}>
                {content}
                <FontAwesomeIcon icon={'pencil'}  className="icon"/>
            </SHeaderContent>
            <SAddNodeBtn 
                onClick={() => onAddDefaultNode(id)}>
                    <FontAwesomeIcon icon={'add'} />
            </SAddNodeBtn>
            <SCloseBtn onClick={() => onRemoveNode(id)}>x</SCloseBtn>
        </SCustomNodeHeader>
    )
}

export default CustomNodeHeader