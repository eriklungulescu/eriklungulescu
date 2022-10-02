import styled from "styled-components"
import { TerminalParagraph } from "../common/terminal_paragraph"

const JobEntryDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0;
    margin-bottom: 20px;
    justify-content: flex-start;
    align-items: flex-start;
    border: solid 2px #c1c1c1;
    padding: 10px 10px;
    border-radius: 10px;
`

const JobTitle = styled.h1`
    font-size: 25px;
    color: inherit;
    margin: 0;
    font-family: 'CascadiaCode', monospace;
    color: #c1c1c1;
`

const CompanyInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    width: 100%;
    font-family: 'CascadiaCode', monospace;
    color: #c1c1c1;

    .title {
        font-size: 20px;
        margin: 0;
    }

    h3 {
        font-size: 18px;
        margin: 0px 10px;
    }
`

const TechStack = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 10px 0px;
`

const TechStackItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    height: fit-content;
    background-color: ${props => props.color ? props.color : "#3b82bc"};
    margin-right: 5px;
    padding: 2.5px 5px;
    border-radius: 10px;
`

interface JobEntryProps {
    title: string,
    company: string,
    info: string,
    stack: {name: string, color: string}[],
    description: string,
}

const JobEntry = ({
    title,
    company,
    info,
    stack,
    description
}: JobEntryProps) => {
    return <JobEntryDiv>
        <JobTitle>{title}</JobTitle>
        <CompanyInfo>
            <h3 className="title">{company}</h3> 
            <h3>{info}</h3>
        </CompanyInfo>
        <TechStack>
            {
                stack.map((item) => {
                    return <TechStackItem color={item.color}>
                        <TerminalParagraph>{item.name}</TerminalParagraph>
                    </TechStackItem>
                })
            }
        </TechStack>
        <TerminalParagraph>
            {description}
        </TerminalParagraph>
    </JobEntryDiv>
}

export const Jobs = () => {
    return <>
        <JobEntry 
            title="Software Engineer (Co-op)"
            company="⚡️ Snapcommerce ⚡️"
            info="Toronto Ontario, Sep 2022 - Present"
            stack={[{name: 'React', color: "#48adc6"}, {name: 'Typescript', color: "#3178c6"}, {name: 'Javascript', color: "#8b8b00"}]}
            description="Where I'm currently working! This is my first front-end focused position and my first introduction to React.js and Typescript. It's also the reason why I had the motivation to create this website and improve my React skills. Currently I've been working on building new components and user flows. I found it incredibly interesting that we use state machines (XState) to help facilitate this process and I found it even more interesting that they are similar to DFA's which I learned in CS241e. I'm really looking forward to learning more and exploring frontend!"
        />
        <JobEntry 
            title="Software Engineer (Co-op)"
            company="🏛 Capital One 🏛"
            info="Toronto Ontario, Jan 2022 - Apr 2022"
            stack={[{name: 'Java', color: '#be5f00'}, {name: 'Amazon Web Services', color: '#716f56'}, {name: 'Lambda', color: '#ab3890'}, {name: 'S3', color: '#ab3890'}, {name: 'SQS', color: '#ab3890'}, {name: 'Docker', color: '#0896c1'}]}
            description={`I honestly really enjoyed working for Capital One, the team was very welcoming and friendly, the company culture culture was innovative, and the tech stack was modern. While there, I was given the task of creating a tool to archive user credit data in real time. To do this I created a primary Lambda which would intercept our DynamoDB insert events, process the data, and then forward it to our Snowflake database. I additionally created a retry system to ensure data retention and reliability in case of outages or data processing errors. This system involved the primary Lambda sending failed data to an SQS queue, which the retry Lambda would pickup asynchronously and then attempt to archive it again. In the event that the retry process failed, I implemented a retry-count mechanism to send failed data to S3 for manual inspection after a certain number of failures. 

Because of this I chose to get AWS certified! I achieved both the Solutions Architect Associate and Certified Cloud Practitioner!!`}
        />
        <JobEntry 
            title="Java Microservices Developer (Co-op)"
            company="🍇 Blackberry 🍇"
            info="Waterloo Ontario, May 2021 - Aug 2021"
            stack={[{name: 'Java', color: '#be5f00'}, {name: 'Spring Boot', color: '#1e541a'}, {name: 'Node.js', color: '#308728'}, {name: 'Express.js', color: '#2b2d2b'}, {name: 'Jaeger', color: '#26939b'}, {name: 'Docker', color: '#0896c1'}]}
            description="My first ever co-op! It was here that I was introduced to backend, RESTful API's, HTTP requests, and Microservices. I was fortunate enough to be exposed to a wide variety of tech stacks and languages. My first ever task was to create a Unleash Server with Authentication to keep track of our feature statuses using Node.js and Express.js. Following this I created a Spring Boot command line application to update our Unleash Server in our staging environments. I also implemented Jaeger tracing in our common libraries and modularized our applications using Docker. Overall it was a fantastic experience and I'm very grateful to the great team and mentors I had!"
        />
    </>
}