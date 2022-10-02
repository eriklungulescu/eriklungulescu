import { TerminalParagraph } from "../components/common/terminal_paragraph"
import { About } from "../components/response/about"
import { Banner } from "../components/response/banner"
import { Contact } from "../components/response/contact"
import { Error } from "../components/response/error"
import { Help } from "../components/response/help"
import { Jobs } from "../components/response/jobs"

export const interpretCommand = (command: string) => {
    switch (command) {
        case "help": {
            return <Help />
        }
        case "banner": {
            return <Banner />
        }
        case "projects": {
            return (
                <p>
                    Absolutely cracked out the wazoo.
                </p>
            )
        }
        case "experience": {
            return (
                <Jobs />
            )
        }
        case "about": {
            return (
                <About />
            )
        }
        case "contact": {
            return (
                <Contact />
            )
        }
        case "cat": {
            const cat = ` /\\_/\\ \n( o.o )\n > ^ <\n`
            return <>
                {
                    cat.split('\n').map((item) => {
                        return <TerminalParagraph>{item}</TerminalParagraph>
                    })
                }
            </>
        }
        default: {
            return (
                <Error />
            )
        }
    }
}