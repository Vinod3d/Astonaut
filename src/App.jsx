import Achievement from "./components/Achievement"
import ContactForm from "./components/ContactForm"
import Header from "./components/Header"
import Hero from "./components/Hero"
import HowToJoin from "./components/HowToJoin"
import Services from "./components/Services"


function App() {

  return (
    <div className="bg-black">
      <Hero/>
      <Services/>
      <Achievement/>
      <HowToJoin/>
      <ContactForm/>
    </div>
  )
}

export default App
