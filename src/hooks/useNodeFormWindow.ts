import { ChangeEvent, useEffect, useState } from "react"
import { Node } from "reactflow"
import { NodeFormData } from "../core/types"

const initialNodeData: NodeFormData = {
    title: '',
    description: ''
}

interface UseNodeFormWindow {
    nodes: Node<any>[]
}

const useNodeFormWindow = ({ nodes }: UseNodeFormWindow) => {
    const [ showWindow, setShowWindow ] = useState(false)
    const [ nodeId, setNodeId] = useState<string | null>(null)
    const [ nodeFormData, setNodeFormData ] = useState<NodeFormData>({...initialNodeData})

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(nodeFormData)
        const nformData = {...nodeFormData}

        if (e.target.id === 'title') nformData.title = e.target.value
        else nformData.description = e.target.value

        setNodeFormData(nformData)
    }

    const handleShowWindow = (nodeId: string) => {
        setNodeId(nodeId)
        setShowWindow(true)
    }

    const handleCloseWindow = () => {
        setShowWindow(false)
    }

    useEffect(() => {
        if (showWindow) {
            const node = nodes.find(node => node.id === nodeId) as Node
    
            if (node) {
                setNodeId(node.id)
                setNodeFormData({
                    title: node.data.title,
                    description: node.data.description
                })
            }
        }
    }, [ nodes, nodeId, showWindow ])

    return {
        showWindow,
        nodeId,
        nodeFormData,
        handleInputChange,
        handleShowWindow, 
        handleCloseWindow
    }
}

export default useNodeFormWindow