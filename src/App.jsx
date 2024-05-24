import './App.scss'
import Characters from './components/Characters/Characters'
import { GlobalProvider } from './context/GlobalState'

function App() {

  return (
    <>
      {/* <span className='span'>
        <p>Hola</p>
        <p>Hola2</p>
      </span>
      <span>
        <h1>yeey</h1>
      </span>
      <p>yee</p> */}
     <GlobalProvider>
      {/* componentes */}
      <Characters/>
     </GlobalProvider>
    </>
  )
}

export default App
