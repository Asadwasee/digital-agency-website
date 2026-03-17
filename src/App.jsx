import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home         from './pages/Home'
import About        from './pages/About'
import ServicesPage from './pages/ServicesPage'
import Portfolio    from './pages/Portfolio'
import Contact      from './pages/Contact'

function App() {
  return (
    <Router>
      <div className="bg-dark min-h-screen selection:bg-primary/30 flex flex-col">
        <Navbar />
        <main className="flex-1 pt-16">
          <Routes>
            <Route path="/"          element={<Home />} />
            <Route path="/about"     element={<About />} />
            <Route path="/services"  element={<ServicesPage />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact"   element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
