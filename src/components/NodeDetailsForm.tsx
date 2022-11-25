import { ChangeEvent } from "react"
import { SForm, SFormContainer, SFormField, SInputLabel, SInputText, SSaveBtn } from "../styledComponents/Form.styles"

interface NodeDetailsFormProps {
    id: string 
    title: string 
    description: string 
    onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
    onSaveChanges: () => void
} 

const NodeDetailsForm = ({ id, title, description, onInputChange, onSaveChanges }: NodeDetailsFormProps) => {
    return (
        <SFormContainer>
            <SForm>
                <SFormField>
                    <SInputLabel htmlFor="title" >Title</SInputLabel>
                    <SInputText 
                        onChange={onInputChange} 
                        id="title" 
                        type="text" 
                        value={title} />
                </SFormField>
                <SFormField>    
                    <SInputLabel htmlFor="description">Description</SInputLabel>
                    <SInputText 
                        onChange={onInputChange} 
                        id="description" 
                        type="text" 
                        value={description} />
                </SFormField>
                <SSaveBtn 
                    onClick={onSaveChanges} 
                    type="button">
                        Save
                </SSaveBtn>
            </SForm>
        </SFormContainer>
    )
}

export default NodeDetailsForm