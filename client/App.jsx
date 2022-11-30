import PageHome from './pages/home'
import PageDetails from './pages/details'
import { Route, Routes, Link } from 'react-router-dom'

function App() {
  return (
    <main>
      <h1>
        <Link to="/">Who is the cutest!?</Link>
      </h1>
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="/the-cutest/:id" element={<PageDetails />} />
      </Routes>
    </main>
  )
}

export default App
