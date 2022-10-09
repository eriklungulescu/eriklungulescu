import { RefObject, useState } from "react"
import styled from "styled-components";
import { Command } from "../util/command";
import { interpretCommand } from "../util/command_interpreter";

const InputContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: fit-content;
    min-width: 700px;
    width: 100%;
    margin: 5px 0px;
    color: #c1c1c1;
    font-family: ' CascadiaCode', monospace;
    font-size: 18px;
    z-index: 1;

    h3 {
        margin: 0;
        font-size: 18px;
        margin-right: 5px;
        color: #6e9e37;

        span {
            color: #c1c1c1;
        }
    }

    input {
        margin: 0;
        color: inherit;
        background-color: inherit;
        font-size: 18px;
        font-family: inherit;
        border: none;
        outline: none;
        width: 50%;

        &:focus {
            outline: none;
        }
    }
`



interface InputProps {
    setCommandData: (func: (input: Command[]) => Command[]) => void
    innerRef: RefObject<HTMLInputElement>
}

export const Input = ({
    setCommandData,
    innerRef,
}: InputProps) => {
    const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            value === "clear" ? setCommandData(() => []) : setCommandData((oldArray) => [...oldArray, {command: value, value: interpretCommand(value)}])
            setValue("")
        }
    }
    

    const [value, setValue] = useState("")

    return (
        <InputContainer>
            <h3>
                guest@eriklungulescu:<span>$ ~ </span>
            </h3>
            <input 
                type="text"
                value={value}
                onKeyDown={onKeyDown}
                onChange={(event) => setValue(event.target.value)}
                ref={innerRef}
                maxLength={30}
            />

        </InputContainer>
    )
}