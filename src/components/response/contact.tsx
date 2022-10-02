import styled from "styled-components"
import {AiOutlineLinkedin, AiOutlineGithub, AiOutlineMail} from 'react-icons/ai'

const ContactContainer = styled.div`
display: flex;
flex-direction: column;
width: fit-content;
margin: 0;

h3 {
    font-size: 20px;
    font-weight: 400;
    color: inherit;
    margin: 0;
    margin-bottom: 15px;
    font-family: 'CascadiaCode', monospace;
    color: #c1c1c1;

    span {
        color: #098b91;
        font-size: inherit;
        font-weight: 600;
    }
}
`

const ContactList = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;

    a {
        font-size: 50px;
        color: #c1c1c1;
        text-decoration: none;
        margin: 5px 10px;
    }
`

export const Contact = () => {


    return (
        <ContactContainer>
            <h3>You can find me here! <span>**I'm currently looking for Summer 2023 internships**</span></h3>
            <ContactList>
                <a href="mailto: eriklungulescu@outlook.com"> <AiOutlineMail /> </a>
                <a href="https://www.linkedin.com/in/erik-lungulescu/"> <AiOutlineLinkedin /> </a> 
                <a href="https://github.com/eriklungulescu/"> <AiOutlineGithub /> </a> 
            </ContactList>
        </ContactContainer>
    )
}