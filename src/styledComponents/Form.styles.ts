import styled from "styled-components";

export const SFormContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding: 15px 0;
    height: 100%;
    width: 100%;
`
export const SForm = styled.form`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
`
export const SFormField = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    font-size: 18px;
    width: 100%;

    &:not(:first-child) {
        margin-top: 20px;
    }
`
export const SInputLabel = styled.label`
    display: flex;
    font-weight: bold;
    width: 100%;
`

export const SInputText = styled.input`
    display: block;
    box-sizing: border-box;
    font-size: 18px;
    margin-top: 10px;
    padding: 5px 10px;
    width: 100%;
`

export const SSaveBtn = styled.button`
    border: 2px black solid;
    background-color: rgba(31, 41, 100, 1);
    border-radius: 10px;
    border: 2px rgba(31, 41, 100, 1) solid;
    color: white;
    font-size: 16px;
    font-weight: bold;
    padding: 12px;
    margin-top: auto;

    &:hover {
        border: 2px; 
        background-color: white;
        border: 2px rgba(31, 41, 100, 1) solid;
        color: rgba(31, 41, 100, 1);
        cursor: pointer;
    }
`