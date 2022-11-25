import { useRef, useState } from "react"
import { NodeTypes, ReactFlowInstance, useEdgesState, useNodesState } from "reactflow"
import EdgeButton from "../components/edges/EdgeButton";
import ElementNode from "../components/nodes/ElementNode";
import ElementNodeItem from "../components/nodes/ElementNodeItem";
import PageNode from "../components/nodes/PageNode";
import { NodeFormData } from "../core/types";

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
    const [ nodes, setNodes, handleNodesChange ] = useNodesState([])
    const [ edges, setEdges, handleEdgesChange ] = useEdgesState([])
    const [ reactFlowInstance, setReactFlowInstance ] = useState<ReactFlowInstance | null>(null)

    const updateNodeText = (nodeId: string, textData: NodeFormData) => {
        setNodes(nds => nds.map(item => {
            if (item.id === nodeId) {
                item.data = {
                    ...item.data,
                    title: textData.title,
                    description: textData.description
                }

                return item
            }

            return item
        }))
    }

    return {
        reactFlowContainer,
        nodes, nodeTypes, setNodes, handleNodesChange,
        edges, edgeTypes, setEdges, handleEdgesChange,
        reactFlowInstance, setReactFlowInstance,
        generateNodeId,
        updateNodeText
    }
}

export default useReactCanvasData