import { Handle, Position } from "reactflow"

interface ColorSelectorNodeProps {
    data: any
    isConnectable: boolean
}

const ElementNode = ({ data, isConnectable }: ColorSelectorNodeProps) => {
    return (
        <>
            <div className="element-node">
                <p>Element Node</p>
            </div>
            <Handle
                type="target"
                position={Position.Bottom}
                style={{ background: '#555' }}
                onConnect={(params) => console.log('handle onConnect', params)}
                isConnectable={isConnectable}
      />
        </>
    )
}

export default ElementNode