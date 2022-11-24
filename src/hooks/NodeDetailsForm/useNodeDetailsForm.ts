import useNodeDetailsFormData from "./useNodeDetailsFormData"
import { ChangeEvent } from 'react';

interface UseNodeDetailsFormProps {
    initialTitle: string 
    initialDescription: string 
}

const useNodeDetailsForm = ({ initialTitle, initialDescription }: UseNodeDetailsFormProps) => {
    const {
        title, setTitle,
        description, setDescription
    } = useNodeDetailsFormData({ initialTitle, initialDescription })

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.id === 'title') setTitle(e.target.value)

        setDescription(e.target.value)
    }   

    const handleUpdate = () => {
        
    }

    return {
        title, 
        description,
        handleInputChange
    }
}

export default useNodeDetailsForm