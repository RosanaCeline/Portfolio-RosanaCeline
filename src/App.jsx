import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import AboutMe from "./components/AboutMe/AboutMe"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <>
      <Header/>

      <main>
        <Home/>
        <AboutMe/>
        <Contact/>
      </main>
      <Footer/>
    </>
  )
}

export default App
