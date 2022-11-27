interface LocalStorageServiceActions {
    saveData: (key: string, data: any) => void
    getData: (key: string) => any
}

class LocalStorageHandler implements LocalStorageServiceActions {
    saveData(key: string, data: any) {
        const storageData = JSON.stringify(data)

        localStorage.setItem(key, storageData)
    }

    getData(key: string) {
        const storageData = localStorage.getItem(key)

        if (storageData) return JSON.parse(storageData)

        return undefined
    }
}

const LocalStorageService = new LocalStorageHandler()

export default LocalStorageService