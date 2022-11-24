import { Node } from "reactflow"

interface WindowProps {
    data: Node | null
    onClose: () => void
}

const Window = ({ data, onClose }: WindowProps) => {
    return (
        <div className="window-container">
            <div className="window">
                <div className="window-top">
                    <button 
                        onClick={onClose} 
                        className="close-btn" 
                        type="button">X</button>
                </div>
                <div className="window-content">
                    <p>{data?.id}</p>
                </div>
            </div>
        </div>
    )
}

export default Window