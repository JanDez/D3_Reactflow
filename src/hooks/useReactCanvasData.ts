import { useRef, useState } from "react"
import { NodeTypes, ReactFlowInstance, useEdgesState, useNodesState } from "reactflow"
import EdgeButton from "../components/CustomEdges/EdgeButton";
import ElementNode from "../components/CustomNodes/ElementNode";
import ElementNodeItem from "../components/CustomNodes/ElementNodeItem";
import PageNode from "../components/CustomNodes/PageNode";

const initialNodes = [
    {
      id: 'ewb-1',
      type: 'input',
      data: { label: 'Input 1' },
      position: { x: 250, y: 0 },
    },
    { id: 'ewb-2', data: { label: 'Node 2' }, position: { x: 250, y: 300 } },
    {
        id: 'ewb-3',
        type: 'input',
        data: { label: 'Input 1' },
        position: { x: 250, y: 400 },
    },
    { id: 'ewb-4', data: { label: 'Node 2' }, position: { x: 250, y: 450 } },
];

const edgeTypes = {
    buttonEdge: EdgeButton,
};

const nodeTypes: NodeTypes = {
    elementNode: ElementNode,
    pageNode: PageNode,
    elementNodeItem: ElementNodeItem
}

let id = 0
const generateNodeId = () => `dndnode_${id++}`

const useReactCanvasData = () => {
    const reactFlowContainer = useRef<HTMLDivElement | null>(null)
    const [ nodes, setNodes, handleNodesChange ] = useNodesState(initialNodes)
    const [ edges, setEdges, handleEdgesChange ] = useEdgesState([])
    const [ reactFlowInstance, setReactFlowInstance ] = useState<ReactFlowInstance | null>(null)

   return {
        reactFlowContainer,
        nodes, nodeTypes, setNodes, handleNodesChange,
        edges, edgeTypes, setEdges, handleEdgesChange,
        reactFlowInstance, setReactFlowInstance,
        generateNodeId,
   }
}

export default useReactCanvasData