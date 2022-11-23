import { useCallback } from 'react';
import ReactFlow, {
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Node,
  Edge,
  ReactFlowProvider,
} from 'reactflow';

import 'reactflow/dist/style.css';

const initialNodes: Node[] = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: 'Node 1' } },
  { id: '2', position: { x: 0, y: 100 }, data: { label: 'Node 2' } },
  { id: '3' , position: { x: 0, y: 200 }, data: { label: 'Node 3' }}
];

const initialEdges: Edge[] = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'el-3', source: '2', target: '3' },
  { id: 'el-4', source: '3', target: '2' }
];

const DiagramCanvas = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback((params: any) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

  return (
    <ReactFlowProvider>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}>
          <Background />
      </ReactFlow>
    </ReactFlowProvider>
  );
}

export default DiagramCanvas;