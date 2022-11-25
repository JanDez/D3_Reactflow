import NodeDetailsForm from "./NodeDetailsForm"
import { ChangeEvent } from 'react';
import { SCloseBtn, SWindow, SWindowContainer, SWindowContent, SWindowTop } from "../styledComponents/Window.styles";

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
        <SWindowContainer>
            <SWindow>
                <SWindowTop>
                    <SCloseBtn
                        onClick={onClose} 
                        type="button">X</SCloseBtn>
                </SWindowTop>
                <SWindowContent>
                    <NodeDetailsForm 
                            id={id} 
                            title={title} 
                            description={description} 
                            onInputChange={onInputChange} 
                            onSaveChanges={onSaveChanges}/>
                </SWindowContent>
            </SWindow>
        </SWindowContainer>
    )
}

export default NodeFormWindow