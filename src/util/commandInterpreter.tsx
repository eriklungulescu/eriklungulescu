
export const interpretCommand = (command: string) => {
    switch (command) {
        case "help": {
            return "These commands are defined interpretively. Try any of the following: help, projects, jobs"
        }
        case "projects": {
            return "Absolutely cracked out the wazoo."
        }
        case "jobs": {
            return "Please give"
        }
        default: {
            return "You have entered an invalid command! Dumbass ahhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh"
        }
    }
}