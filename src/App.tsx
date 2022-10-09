import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import './App.css';
import { Input } from './components/input';
import { Command } from './util/command';
import { interpretCommand } from './util/command_interpreter';

const AppContainer = styled.div`
  margin: 0;
  padding: 0;
  background-color: #272833;
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 100vh;
  height: fit-content;
  width: 100vw;

  overflow: hidden;
`

const TerminalContainer = styled.div`
  z-index: 1;
  position: relative;
  height: calc(100vh - 60px);
  width: calc(100vw - 60px);

  margin: 10px 10px;
  padding: 5px 10px;

  background-color: inherit;
  border: 3px solid #098b91;
  border-radius: 10px;

  overflow: auto;

  -ms-overflow-style: none;  /* Internet Explorer 10+ */
  scrollbar-width: none;

  ::-webkit-scrollbar { 
    display: none;  /* Safari and Chrome */
  }
`

const CommandDataContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: inherit;
  height: fit-content;
  width: 100%;
  min-width: 700px;
  word-wrap: break-word;
  overflow-wrap: break-word;
  margin: 5px 0px;
  padding: 0;

  .command {
    margin-top: 0;
    margin-bottom: 5px;
    color: #6e9e37;
    font-family: 'CascadiaCode', monospace;
    font-size: 18px;

    span {
      color: #c1c1c1;
    }
  }
`

function App() {
  const [commandData, setCommandData] = useState<Command[]>([])
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.scrollIntoView()
  }, [commandData])
  useEffect(() => {
    setCommandData((oldArray) => [...oldArray, {command: "banner", value: interpretCommand("banner")}]) 
  }, [])

  return (
    <AppContainer>
      <TerminalContainer>
        {
          commandData.map((command) => {
            return <CommandDataContainer>
              <h3 className='command'>
                guest@eriklungulescu:<span color="#c1c1c1">$ ~ {command.command}</span>
              </h3>
              {command.value}
            </CommandDataContainer>
          })
        }
        <Input setCommandData={setCommandData} innerRef={inputRef}/>
      </TerminalContainer>
    </AppContainer>
  )
}

export default App;
