import { useEffect, useRef, useState } from "react"
import { Edge, Node, NodeTypes, ReactFlowInstance, useEdgesState, useNodesState } from "reactflow"
import EdgeButton from "../components/edges/EdgeButton";
import ElementNode from "../components/nodes/ElementNode";
import ElementNodeItem from "../components/nodes/ElementNodeItem";
import PageNode from "../components/nodes/PageNode";
import { NodeFormData } from "../core/types";
import LocalStorageService from "../services/LocalStorageService";

const edgeTypes = {
    buttonEdge: EdgeButton,
};

const nodeTypes: NodeTypes = {
    elementNode: ElementNode,
    pageNode: PageNode,
    elementNodeItem: ElementNodeItem
}

const nodesStorageKey = 'appcanvas:nodes'
const edgesStorageKey = 'appcanvas:edges'

const initialNodes = LocalStorageService.getData(nodesStorageKey) as Node<any>[] ?? []
const initialEdges = LocalStorageService.getData(edgesStorageKey) as Edge<any>[] ?? []

let id = initialNodes.length - 1
const generateNodeId = () => `dndnode_${id++}`

const useReactCanvasData = () => {
    const reactFlowContainer = useRef<HTMLDivElement | null>(null)
    const [ nodes, setNodes, handleNodesChange ] = useNodesState(initialNodes)
    const [ edges, setEdges, handleEdgesChange ] = useEdgesState(initialEdges)
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

    useEffect(() => {
        LocalStorageService.saveData(nodesStorageKey, [...nodes])
        LocalStorageService.saveData(edgesStorageKey, [...edges])
    }, [ nodes, edges ])

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