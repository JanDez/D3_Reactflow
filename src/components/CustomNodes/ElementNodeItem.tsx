import { Handle, Position } from "reactflow"

interface ElementNodeItemProps {
    isConnectable: boolean
}

const ElementNodeItem = ({ isConnectable }: ElementNodeItemProps) => {
    return (
        <>
            <Handle
                type="source"
                position={Position.Left}
                style={{ background: '#555' }}
                onConnect={(params) => console.log('handle onConnect', params)}
                isConnectable={isConnectable} />
            <div className="element-node">
                <p>Element Node Item</p>
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

export default ElementNodeItem