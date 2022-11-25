import { Handle } from "reactflow";
import styled from "styled-components";

export const SHandle = styled(Handle)`
    height: 12px;
    background-color: white;
    border: 1px gray solid;
    margin-top: 10px;
    width: 12px;
`

export const SEdgeBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
    border-radius: 50%;
    border: 2px black solid;
    color: white;
    cursor: pointer;
    height: 25px;
    width: 25px;

    &:hover{
        background-color: white;
        border: 2px red solid;
        color: red;
    }
`

export const SPath = styled.path`
    stroke: lightgray;
    stroke-width: 2px;
`