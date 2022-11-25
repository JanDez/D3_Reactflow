interface CustomNodeBodyProps {
    id: string
    content: string 
    onEditBody: (nodeId: string) => void
}

const CustomNodeBody = ({ id, content, onEditBody }: CustomNodeBodyProps) => {
    return (
        <div onClick={() => onEditBody(id)} className="custom-node-body">
            <p className="node-body">
                {content}
            </p>
        </div>
    )
}

export default CustomNodeBody