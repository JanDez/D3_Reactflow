import { PanelItemData, DiagramNodeType } from "../core/types"

interface PanelItemProps {
    data: PanelItemData
    nodeType: DiagramNodeType
    onDragStart: (event: React.DragEvent<HTMLDivElement>, nodeType: DiagramNodeType) => void
}

const PanelItem = ({ data, nodeType, onDragStart }: PanelItemProps) => {
    return (
        <div 
            id={data.id} 
            className="panel-item">
                <div 
                    className="panel-item-info" 
                    onDragStart={(event) => onDragStart(event, nodeType)} 
                    draggable>{data.id}</div>
        </div>
    )
}

export default PanelItem