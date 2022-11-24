interface CustomNodeHeaderProps {
    id: string 
    content: string
    onEditHeader: (id: string) => void
}

const CustomNodeHeader = ({ id, content, onEditHeader }: CustomNodeHeaderProps) => {
    return (
        <div onClick={() => onEditHeader(id)} className="custom-node-header">
            <p className="content">
                {content}
            </p>
        </div>
    )
}

export default CustomNodeHeader