import { Handle, Position } from "reactflow"

interface PageNodeProps {
    isConnectable: boolean
}

const PageNode = ({ isConnectable }: PageNodeProps) => {
    return (
        <>
            <Handle
                type='target'
                position={Position.Left}
                style={{ background: '#555' }}
                onConnect={(params) => console.log('handle onConnect', params)}
                isConnectable={isConnectable} />
            <div className="element-node">
                <p>Page Node</p>
            </div>
            <Handle
                type="target"
                position={Position.Right}
                style={{ background: '#555' }}
                onConnect={(params) => console.log('handle onConnect', params)}
                isConnectable={isConnectable} />
        </>
    )
}

export default PageNode