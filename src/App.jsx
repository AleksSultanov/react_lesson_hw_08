import reactLogo from './assets/react.svg'
import './App.css'

import { TitleBox, BottomBox} from './components/TitleBox/index.jsx';
import { AtributeForm} from './components/AtributeForm/index.jsx';

function App() {
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <TitleBox/>
        <AtributeForm/>
        <BottomBox/>
    </div>
    </>
  )
}

export default App
