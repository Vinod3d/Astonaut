import Achievement from "./components/Achievement"
import ContactForm from "./components/ContactForm"
import Hero from "./components/Hero"
import HowToJoin from "./components/HowToJoin"
import Services from "./components/Services"
import TrustFuture from "./components/TrustFuture"


function App() {

  return (
    <div className="bg-black">
      <Hero/>
      <Services/>
      <Achievement/>
      <HowToJoin/>
      <ContactForm/>
      <TrustFuture/>
    </div>
  )
}

export default App
