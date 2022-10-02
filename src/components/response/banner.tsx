import { TerminalParagraph } from "../common/terminal_paragraph"


export const Banner = () => {
    const bannerText = `███████╗██████╗ ██╗██╗  ██╗    ██╗\n██╔════╝██╔══██╗██║██║ ██╔╝    ██║\n█████╗  ██████╔╝██║█████╔╝     ██║\n██╔══╝  ██╔══██╗██║██╔═██╗     ██║\n███████╗██║  ██║██║██║  ██╗    ███████╗\n╚══════╝╚═╝  ╚═╝╚═╝╚═╝  ╚═╝    ╚══════╝\n`

    return <>
        {bannerText.split('\n').map((item, index) => {
            return <TerminalParagraph>{item}</TerminalParagraph>
        })}

        <TerminalParagraph>
            ~~
            <br/>👋 Welcome to my personal terminal and portoflio! 👋
            <br/>Type "help" to get started
            <br/>~~
            
        </TerminalParagraph>
    </>
}