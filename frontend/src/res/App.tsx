import { useState } from "react"
import Header from './components/header'
import Home from './components/home'
import About from './components/about'
import Projects from './components/projects'
import Contact from './components/contact'
import '../styles/App.css'

type Page = ('Home' | 'About' | 'Projects' | 'Contact')

function App() {
  const [page, setPage] = useState<Page>('Home');

  const selectPage = (page : Page) => {
    setPage(page);
  }

  return (
    <>
    <Header onNavigate={selectPage}/>
    <div className="contenido">
      {page === 'Home' && <Home onNavigate={selectPage}/>}
      {page === 'About' && <About/>}
      {page === 'Projects' && <Projects/>}
      {page === 'Contact' && <Contact/>}
    </div>
    </>
  )
}

export default App
