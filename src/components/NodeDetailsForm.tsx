import useNodeDetailsForm from "../hooks/NodeDetailsForm/useNodeDetailsForm"

interface NodeDetailsFormProps {
    title: string 
    description: string 
}

const NodeDetailsForm = ({ title: initialTitle, description: initialDescription }: NodeDetailsFormProps) => {
    const { title, description, handleInputChange } = useNodeDetailsForm({ initialTitle, initialDescription })

    return (
        <div className="form-container">
            <form className="form">
                <div className="form-field">
                    <label htmlFor="title">Title</label>
                    <input 
                        onChange={handleInputChange} 
                        id="title" 
                        type="text" 
                        value={title} />
                </div>
                <div className="form-field">
                    <label htmlFor="description">Description</label>
                    <input 
                        onChange={handleInputChange}
                        id="description" 
                        type="text" 
                        value={description} />
                </div>
            </form>
        </div>
    )
}

export default NodeDetailsForm