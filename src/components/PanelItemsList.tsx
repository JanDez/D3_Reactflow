import dataPanel from '../core/panelData';
import { DiagramNodeType, panelTypeMapsToDiagramNode } from "../core/types";
import PanelItem from "./PanelItem";

interface PanelItemsListProps {
    onDragStart: (event: React.DragEvent<HTMLDivElement>, nodeType: DiagramNodeType) => void
}

const PanelItemsList = ({ onDragStart }: PanelItemsListProps) => {
    return (
        <div className="panel-list-container">
            <div className="panel-list">
                {dataPanel.map((itemData, index) => 
                    <PanelItem 
                        data={itemData} 
                        nodeType={panelTypeMapsToDiagramNode[itemData.type] as DiagramNodeType}
                        onDragStart={onDragStart} 
                        key={index} />
                )}
            </div>
        </div>
    )
}

export default PanelItemsList