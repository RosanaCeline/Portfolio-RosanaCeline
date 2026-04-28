import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import AboutMe from "./components/AboutMe/AboutMe"
import Projects from "./components/Projects/Projects"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <>
      <Header/>

      <main>
        <Home/>
        <AboutMe/>
        <Projects/>
        <Contact/>
      </main>
      <Footer/>
    </>
  )
}

export default App
