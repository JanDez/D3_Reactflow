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
            <form className="form">
                <div className="form-field">
                    <label className="input-label" htmlFor="title">Title</label>
                    <input 
                        onChange={onInputChange} 
                        className="input-text"
                        id="title" 
                        type="text" 
                        value={title} />
                </div>
                <div className="form-field">
                    <label className="input-label" htmlFor="description">Description</label>
                    <input 
                        onChange={onInputChange}
                        className='input-text'
                        id="description" 
                        type="text" 
                        value={description} />
                </div>
                <button onClick={onSaveChanges} className="save-btn" type="button">Save</button>
            </form>
        </div>
    )
}

export default NodeDetailsForm