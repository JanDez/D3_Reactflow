import { ChangeEvent } from "react"

interface NodeDetailsFormProps {
    id: string 
    title: string 
    description: string 
    onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
    onSaveChanges: () => void
}

const NodeDetailsForm = ({ id, title, description, onInputChange, onSaveChanges }: NodeDetailsFormProps) => {
    return (
        <div className="form-container">
            <p>{id}</p>
            <p>{title}</p>
            <p>{description}</p>
            
            <form className="form">
                <div className="form-field">
                    <label htmlFor="title">Title</label>
                    <input 
                        onChange={onInputChange} 
                        id="title" 
                        type="text" 
                        value={title} />
                </div>
                <div className="form-field">
                    <label htmlFor="description">Description</label>
                    <input 
                        onChange={onInputChange}
                        id="description" 
                        type="text" 
                        value={description} />
                </div>

                <button onClick={onSaveChanges} type="button">Save</button>
            </form>
        </div>
    )
}

export default NodeDetailsForm