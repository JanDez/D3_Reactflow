import styled from "styled-components"

const CustomNodeStyles = `
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 4px;
    border-radius: 5px;
    background-color: white;
    min-width: 250px;
    max-width: 250px;
`

export const SCustomNodeHeader = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    color: white;
    font-size: 14px;
    padding: 25px 15px 15px 15px;
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
    cursor: pointer;
    margin: 0;
`

export const SAddNodeBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    border: none;
    cursor: pointer; 
    font-weight: bolder;
    background-color: transparent;
    margin-left: auto;
    font-size: 18px;

    &:hover {
        color: black;
    }
`

export const SCloseBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1f2964;
    border: 2px #1f2964 solid;
    border-radius: 50%;
    color: white;
    cursor: pointer;
    font-size: 14px;
    top: calc(-60% + 25px);
    left: calc(103% - 25px);
    position: absolute;
    height: 30px;
    width: 30px;

    &:hover {
        background-color: white;
        color: #1f2964;
    }
`