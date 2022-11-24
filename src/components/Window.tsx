interface WindowProps {
    content: JSX.Element | JSX.Element[]
    onClose: () => void
}

const Window = ({ content, onClose }: WindowProps) => {
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
                    {content}
                </div>
            </div>
        </div>
    )
}

export default Window