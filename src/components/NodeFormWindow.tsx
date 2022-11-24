import NodeDetailsForm from "./NodeDetailsForm"
import { ChangeEvent } from 'react';

interface WindowProps {
    id: string 
    title: string 
    description: string 
    onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
    onSaveChanges: () => void
    onClose: () => void
}

const NodeFormWindow = ({ id, title, description, onInputChange, onSaveChanges, onClose }: WindowProps) => {
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
                    <NodeDetailsForm 
                        id={id} 
                        title={title} 
                        description={description} 
                        onInputChange={onInputChange} 
                        onSaveChanges={onSaveChanges}/>
                </div>
            </div>
        </div>
    )
}

export default NodeFormWindow