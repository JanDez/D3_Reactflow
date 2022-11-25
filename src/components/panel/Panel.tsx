import { SPanelContainer, SPanel } from "../../styledComponents/Panel.styles";
import PanelItemsList from "./PanelItemsList";

const Panel = () => {
  const onDragStart = (event: any, nodeType: any) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <SPanelContainer>
      <SPanel>
        <PanelItemsList onDragStart={onDragStart} />
      </SPanel>
    </SPanelContainer>
  );
};

export default Panel;
