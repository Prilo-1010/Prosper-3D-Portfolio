import {BrowserRouter as Router} from "react-router-dom"
import {About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas} from "./components"

const App = () => {

  return (
    <>
    <Router>
        <div className="relative  bg-primary"> 
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar/>
          <Hero/>
        </div>
        <About/>
        <Experience/>

        {/* <Tech/> */}

        
        <Works/>
        {/* <Feedbacks/> */}

        <div className="relative "> 
           <Contact/>
           <StarsCanvas/>
        </div>
        
        </div>
    </Router>
    </>
  )
}

export default App