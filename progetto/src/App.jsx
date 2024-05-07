import Home from './pages/Home'
import DarkModeProvider from './DarkMode'; // Importa il provider correttamente
import ChiSiamo from './pages/ChiSiamo'
import Faqs from './pages/Faqs'



function App() {
  return (
    <div>
      <DarkModeProvider>
        <Home/>
      </DarkModeProvider>
    </div>
  )
}

export default App