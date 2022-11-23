interface CustomNodeBodyProps {
    content: string 
}

const CustomNodeBody = ({ content }: CustomNodeBodyProps) => {
    return (
        <div className="custom-node-body">
            <p className="node-body">{content}</p>
        </div>
    )
}

export default CustomNodeBody