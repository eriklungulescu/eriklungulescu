import { useEffect, useState } from 'react';
import styled from 'styled-components';
import './App.css';
import { Input } from './components/input';
import { Command } from './util/command';

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
`

const TerminalContainer = styled.div`
  background-color: inherit;
  min-height: calc(100vh - 40px);
  height: calc(100% - 40px);
  width: calc(100vw - 40px);

  margin: 0;
  padding: 10px 10px;

  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: flex-start;

  border: 3px solid #098b91;
  border-radius: 10px;
 
`

const CommandDataContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: inherit;
  height: fit-content;
  width: 90%;
  word-wrap: break-word;
  overflow-wrap: break-word;
  margin: 5px 0px;
  padding: 0;
  transform: translateZ(-15px);
  

  h3 {
    margin-top: 0;
    margin-bottom: 5px;
    color: #6e9e37;
    font-family: 'Ubuntu', sans-serif;
    font-size: 18px;
  }

  p {
    width: 100%;
    margin: 0;
    word-wrap: break-word;
    color: #c1c1c1;
    font-family: 'Ubuntu', sans-serif;
    font-size: 18px;
  }
`

function App() {

  const [commandData, setCommandData] = useState<Command[]>([])

  useEffect(
    () => {console.log("HERE")},
  [commandData])

  return (
    <AppContainer>
      <TerminalContainer>
        {
          commandData.map((command) => {
            return <CommandDataContainer>
              <h3>
                guest@eriklungulescu:$ ~ {command.command}
              </h3>
              <p>
                {command.value}
              </p>
            </CommandDataContainer>
          })
        }
        <Input setCommandData={setCommandData} />
      </TerminalContainer>
    </AppContainer>
  )
}

export default App;
