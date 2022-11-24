import { useState } from 'react';

interface UseNodeDetailsFormDataProps {
    initialTitle: string 
    initialDescription: string 
}

const useNodeDetailsFormData = ({ initialTitle, initialDescription }: UseNodeDetailsFormDataProps) => {
    const [ title, setTitle ] = useState(initialTitle)
    const [ description, setDescription ] = useState(initialDescription)

    return {
        title,
        setTitle,
        description,
        setDescription
    }
}

export default useNodeDetailsFormData