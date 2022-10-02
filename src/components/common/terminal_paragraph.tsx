import styled from "styled-components";


export const TerminalParagraph = styled.p`
    width: 100%;
    margin: 0;
    word-wrap: break-word;
    font-family: 'CascadiaCode', monospace;
    font-size: 18px;
    white-space: pre-wrap;

    color: ${props => props.color ? props.color : "#c1c1c1"};
`
