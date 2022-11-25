import styled from "styled-components"

const CustomNodeStyles = `
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 4px;
    border-radius: 5px;
    background-color: white;
    min-width: 200px;
    max-width: 200px;
`

export const SCustomNodeHeader = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    color: white;
    font-size: 14px;
    padding: 10px;
`

export const SCustomNodeBody = styled.div`
    display: flex;
    font-size: 12px;
    padding: 30px;
    justify-content: center;
`

export const SPageNode = styled.div`
    ${CustomNodeStyles}

    .custom-node-header {
        background-color: rgba(7, 172, 76, 0.9);
        color: white;
    }
`

export const SElementNode = styled.div`
    ${CustomNodeStyles}

    .custom-node-header {
        background-color: rgba(228, 91, 12, 1);
        color: white;
    }
`

export const SElementNodeItem = styled.div`
    ${CustomNodeStyles}

    .custom-node-header {
        background-color: rgba(0, 100, 220, 0.9);
        color: white;
    }
`

export const SNodeBody = styled.p`

`

export const SHeaderContent = styled.p`
    margin: 0;
`

export const SAddNodeBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bolder;
    border-radius: 50%;
    margin-left: 10px;
    height: 25px;
    width: 25px;
`