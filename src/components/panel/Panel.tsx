import PanelItemsList from "./PanelItemsList";

const Panel = () => {
  const onDragStart = (event: any, nodeType: any) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div className="panel-container">
      <aside className="panel">
        <PanelItemsList onDragStart={onDragStart} />
      </aside>
    </div>
  );
};

export default Panel;
