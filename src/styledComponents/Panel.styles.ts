import styled from 'styled-components'

export const SPanelContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-grow: 1;
`
export const SPanel = styled.aside`
    display: flex;
    border-right: 1px solid #eee;
    background: rgba(31, 41, 100, 1);
    color: white;
    font-size: 14px;
    padding: 10px 20px;
    margin-left: auto;
    height: 90%;
    width: 80px;
`

export const SPanelListContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
`

export const SPanelList = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const SPanelItem = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;

    &:not(:first-child) {
        margin-top: 20px;
    }
`

export const SPanelItemInfo = styled.div`
    background-color: rgba(31, 41, 100, 1);
    border: 1px white solid;
    color: white;
    padding: 6px;
    width: 100%;

    &:hover {
        cursor: grab;
        background-color: white;
        color: rgba(31, 41, 100, 1);
        border: 1px rgba(31, 41, 100, 1) solid;
    }
`