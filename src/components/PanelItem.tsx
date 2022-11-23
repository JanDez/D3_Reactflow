import { PanelItemData, DiagramNodeType } from "../core/types"

interface PanelItemProps {
    data: PanelItemData
    onDragStart: (event: React.DragEvent<HTMLDivElement>, nodeType: DiagramNodeType) => void
}

const PanelItem = ({ data, onDragStart }: PanelItemProps) => {
    return (
        <div 
            id={data.id} 
            className="panel-item">
                <div 
                    className="panel-item-info" 
                    onDragStart={(event) => onDragStart(event, data.type)} 
                    draggable>{data.title}</div>
        </div>
    )
}

export default PanelItem