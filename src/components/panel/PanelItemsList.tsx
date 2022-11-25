import dataPanel from "../../core/panelData";
import { DiagramNodeType, panelTypeMapsToDiagramNode } from "../../core/types";
import {
  SPanelList,
  SPanelListContainer,
} from "../../styledComponents/Panel.styles";
import PanelItem from "./PanelItem";

interface PanelItemsListProps {
  onDragStart: (
    event: React.DragEvent<HTMLDivElement>,
    nodeType: DiagramNodeType
  ) => void;
}

const PanelItemsList = ({ onDragStart }: PanelItemsListProps) => {
  return (
    <SPanelListContainer>
      <SPanelList>
        {dataPanel.map((itemData, index) => (
          <PanelItem
            data={itemData}
            nodeType={
              panelTypeMapsToDiagramNode[itemData.type] as DiagramNodeType
            }
            onDragStart={onDragStart}
            key={index}
          />
        ))}
      </SPanelList>
    </SPanelListContainer>
  );
};

export default PanelItemsList;
