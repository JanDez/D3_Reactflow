interface CustomNodeHeaderProps {
    content: string
}

const CustomNodeHeader = ({ content }: CustomNodeHeaderProps) => {
    return (
        <div className="custom-node-header">
            <p className="content">
                {content}
            </p>
        </div>
    )
}

export default CustomNodeHeader