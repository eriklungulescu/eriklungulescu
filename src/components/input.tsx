import { useState } from "react"
import styled from "styled-components";
import { Command } from "../util/command";
import { interpretCommand } from "../util/commandInterpreter";

const InputContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: fit-content;
    width: 100%;
    margin: 5px 0px;
    color: #c1c1c1;
    font-family: 'Ubuntu', sans-serif;
    font-size: 18px;
    z-index: 1;

    h3 {
        margin: 0;
        font-size: 18px;
        margin-right: 5px;
        color: #6e9e37;
    }

    input {
        margin: 0;
        color: inherit;
        background-color: inherit;
        font-size: 18px;
        font-family: inherit;
        border: none;
        outline: none;

        &:focus {
            outline: none;
        }
    }
`



interface InputProps {
    setCommandData: (func: (input: Command[]) => Command[]) => void
}

export const Input = ({
    setCommandData
}: InputProps) => {
    const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            console.log('enter')
            value === "clear" ? setCommandData(() => []) : setCommandData((oldArray) => [...oldArray, {command: value, value: interpretCommand(value)}])
            setValue("")
        } else {
            console.log('other')
        }
    }
    

    const [value, setValue] = useState("")


    return (
        <InputContainer>
            <h3>
                guest@eriklungulescu:$ ~
            </h3>
            <input 
                type="text"
                value={value}
                onKeyDown={onKeyDown}
                onChange={(event) => setValue(event.target.value)}
            />

        </InputContainer>
    )
}