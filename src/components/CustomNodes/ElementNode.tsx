import { Handle, Position } from "reactflow"

interface ElementNodeProps {
    isConnectable: boolean
}

const ElementNode = ({ isConnectable }: ElementNodeProps) => {
    return (
        <>
            <Handle
                type="source"
                position={Position.Left}
                style={{ background: '#555' }}
                onConnect={(params) => console.log('handle onConnect', params)}
                isConnectable={isConnectable} />
            <div className="element-node">
                <p>Element Node</p>
            </div>
            <Handle
                type="target"
                position={Position.Left}
                style={{ background: '#555' }}
                onConnect={(params) => console.log('handle onConnect', params)}
                isConnectable={isConnectable} />
        </>
    )
}

export default ElementNode