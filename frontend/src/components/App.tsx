import { useState } from "react"
import Header from './res/components/header'
import Home from './res/components/home'
import About from './res/components/about'
import Projects from './res/components/projects'
import Contact from './res/components/contact'
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
