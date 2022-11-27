import { useEffect, useState } from 'react';

interface UseLocalStorageStateProps {
    key: string 
    initialData: any
}

const useLocalStorageState = ({ key, initialData }: UseLocalStorageStateProps) => {
    const [state, setState] = useState(() => {
        const storageData = localStorage.getItem(key)

        if (storageData) return JSON.parse(storageData)
        
        return initialData
    })

    useEffect(() => {
        const newStorageData = JSON.stringify(state)

        localStorage.setItem(key, newStorageData)
    }, [ state ])

    return [state, setState]
}

export default useLocalStorageState