
import Inicio from "./components/header/Inicio"
import NavBar from "./components/Nav/NavBar"
import Foro from "./components/form/Formulario"
import Footer from "./components/footer/Footer"
import Soporte from "./components/Soporte/Soporte"
import Hospitales from "./components/hospitales/Hospitales"
import MarcoLegal from "./components/marcoLegal/marcolegal"


function App() {
 
  return (
 <>
 <NavBar />
 <Inicio />
 <MarcoLegal />
 <Hospitales />
 <Foro />
 <Soporte />
 <Footer />
 </>
  )
}

export default App
