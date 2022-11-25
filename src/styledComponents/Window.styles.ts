import styled from "styled-components";

export const SWindowContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 80, 150, 0.6);
    position: fixed;
    height: 100vh;
    width: 100%;
    z-index: 3;
`
export const SWindow = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    box-shadow: 0 0 15px gray;
    border-radius: 15px;
    padding: 25px 30px;
    height: 320px;
    width: 280px;
`
export const SWindowContent = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
`

export const SWindowTop = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
`

export const SCloseBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 50%;
    border: 2px rgba(31, 41, 100, 1) solid;
    background-color: rgba(31, 41, 100, 1);
    color: white;
    font-weight: bold;
    border: 2px rgba(31, 41, 100, 1) solid;
    padding: 15px;
    margin: 0;
    height: 25px;
    width: 25px;

    &:hover {
        background-color: white;
        color: rgba(31, 41, 100, 1);
    }
`
