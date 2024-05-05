
import './App.css'
import Servizi from './Servizi'
import DarkModeProvider from './DarkMode'; // Importa il provider correttamente


const App = () => {
  return (
    <div>
        <DarkModeProvider>
      <Servizi />
      </DarkModeProvider>,

    </div>
  )
}

export default App
