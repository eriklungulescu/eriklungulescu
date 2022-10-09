import { init } from 'ityped'
import { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { TerminalParagraph } from '../common/terminal_paragraph'

const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: fit-content;
    margin: 0;
    margin-bottom: 10px;
    h1 {
        font-size: 25px;
        color: inherit;
        margin: 0;
        font-family: 'CascadiaCode', monospace;
        color: #c1c1c1;
    }
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

const TechStack = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 10px 0px;

    h3 {
        margin: 0;
        margin-right: 5px;
        font-size: 18px;
        text-decoration: underline;
    }
`

const TechStackItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    height: fit-content;
    font-family: 'CascadiaCode', monospace;
    color: #c1c1c1;
    font-size: 18px;
    background-color: ${props => props.color ? props.color : "#3b82bc"};
    margin-right: 5px;
    padding: 2.5px 5px;
    border-radius: 10px;

    a {
        text-decoration: none;
        cursor: pointer;
        font-family: inherit;
        font-size: inherit;
        font-style: italic;
        color: inherit;
    }
`

export const About = () => {
    const spanRef = useRef<HTMLSpanElement>(null)

    useEffect(
        () => {
            init(
                spanRef.current!,
                { showCursor: false, strings: ['Frontend', 'Backend', 'Cloud'] }
            )
        }
    , [])

    const languages : {name: string, color: string}[] = [{name: 'Java', color: '#be5f00'}, {name: 'Typescript', color: "#3178c6"}, {name: 'Javascript', color: "#8b8b00"}, {name: 'Dart', color: "#3f74d7"},  {name: 'Python', color: "#1e8f40"}, {name: 'C', color: "#2b61c6"}, {name: 'C++', color: "#696900"}, {name: 'SQL', color: "#2e2e2b"}]
    const technologies: {name: string, color: string}[] = [{name: 'Amazon Web Services', color: "#716f56"}, {name: 'React', color: "#3b90a5"}, {name: 'Spring Boot', color: '#1e541a'}, {name: 'Node.js', color: '#308728'}, {name: 'Express.js', color: '#2b2d2b'}, {name: 'Flutter', color: '#284f87'}, {name: 'Jaeger', color: '#26939b'}, {name: 'Docker', color: '#0896c1'}]
    const certifications: {name: string, color: string, link: string}[] = [{name: 'AWS Solutions Architect Associate', color: "#6e287b", link: "https://www.credly.com/badges/8b3e5171-0dbb-4399-a071-17053bc8b326/public_url"}, {name: 'AWS Certified Cloud Practitioner', color: "#aa2d72", link: "https://www.credly.com/badges/ec1b9063-f724-4396-9419-cd5f20cac907/public_url"}]

    return (
        <AboutContainer>
            <h1>Hey there! I'm Erik Lungulescu.</h1>
            <h3>Aspiring <span ref={spanRef}/> Engineer</h3>
            <TerminalParagraph>
                I'm currently a 3A software engineering student at the University of Waterloo! I enjoy exploring new technologies, swimming, snowboarding, and spending time with friends and family 🙂. 
            </TerminalParagraph>
            <TechStack>
                <h3>Languages: </h3>
                {
                    languages.map(item => {
                        return <TechStackItem color={item.color}>{item.name}</TechStackItem>
                    })
                }
            </TechStack>
            <TechStack>
                <h3>Technologies: </h3>
                {
                    technologies.map(item => {
                        return <TechStackItem color={item.color}>{item.name}</TechStackItem>
                    })
                }
            </TechStack>
            <TechStack>
                <h3>Certifications: </h3>
                {
                    certifications.map(item => {
                        return <TechStackItem color={item.color}>
                            <a href={item.link}>{item.name}</a>
                        </TechStackItem>
                    })
                }
            </TechStack>

        </AboutContainer>
    )
}