import { Link, Route, Routes } from 'react-router-dom'

import Pages from './pages'

function App() {
  return (
    <main>
      <h1>
        <Link to='/'>findIT - Jobs are just a swipe away!</Link>
      </h1>
      <Routes>
        <Route path='/' element={<Pages.Home />} />
        <Route path='/saved/:id' element={<Pages.SavedJobs />} />
        <Route path='/job/:id' element={<Pages.JobDetails />} />
      </Routes>
    </main>
  )
}

export default App
