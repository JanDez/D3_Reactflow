import { ChangeEvent, useEffect, useState } from "react"
import { Node } from "reactflow"
import { NodeFormData } from "../core/types"

const initialNodeData: NodeFormData = {
    title: '',
    description: ''
}

interface UseNodeFormWindow {
    nodes: Node<any>[]
    updateNodeText: (nodeId: string, textData: NodeFormData) => void
}

const useNodeFormWindow = ({ nodes, updateNodeText }: UseNodeFormWindow) => {
    const [ showWindow, setShowWindow ] = useState(false)
    const [ nodeId, setNodeId] = useState<string | null>(null)
    const [ nodeFormData, setNodeFormData ] = useState<NodeFormData>({...initialNodeData})

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
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

    const handleSaveChanges = () => {
        if (nodeId) updateNodeText(nodeId, nodeFormData)

        handleCloseWindow()
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
        handleCloseWindow,
        handleSaveChanges
    }
}

export default useNodeFormWindow