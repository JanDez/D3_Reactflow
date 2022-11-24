interface CustomNodeHeaderProps {
    id: string 
    content: string
    onEditHeader: (id: string) => void
    onAddDefaultNode: (id: string) => void
}

const CustomNodeHeader = ({ id, content, onEditHeader, onAddDefaultNode }: CustomNodeHeaderProps) => {
    return (
        <div className="custom-node-header">
            <p onClick={() => onEditHeader(id)} className="content">
                {content}
            </p>
            <button onClick={() => onAddDefaultNode(id)} className="add-node-btn">+</button>
        </div>
    )
}

export default CustomNodeHeader