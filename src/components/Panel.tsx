const Panel = () => {
    const onDragStart = (event: any, nodeType: any) => {
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.effectAllowed = 'move';
    };
    
    return (
        <div className="panel-container">
            <aside className="panel">
                <div className="description">You can drag these nodes to the pane on the right.</div>
                <div className="dndnode input" onDragStart={(event) => onDragStart(event, 'input')} draggable>
                    Input Node
                </div>
                <div className="dndnode" onDragStart={(event) => onDragStart(event, 'default')} draggable>
                    Default Node
                </div>
                <div className="dndnode output" onDragStart={(event) => onDragStart(event, 'output')} draggable>
                    Output Node
                </div>
            </aside>
        </div>
    );
}

export default Panel