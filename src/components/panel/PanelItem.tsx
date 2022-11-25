import { PanelItemData, DiagramNodeType } from "../../core/types";
import {
  SPanelItem,
  SPanelItemInfo,
} from "../../styledComponents/Panel.styles";

interface PanelItemProps {
  data: PanelItemData;
  nodeType: DiagramNodeType;
  onDragStart: (
    event: React.DragEvent<HTMLDivElement>,
    nodeType: DiagramNodeType
  ) => void;
}

const PanelItem = ({ data, nodeType, onDragStart }: PanelItemProps) => {
  return (
    <SPanelItem id={data.id}>
      <SPanelItemInfo
        onDragStart={(event) => onDragStart(event, nodeType)}
        draggable
      >
        {data.id}
      </SPanelItemInfo>
    </SPanelItem>
  );
};

export default PanelItem;
