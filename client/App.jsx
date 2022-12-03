import { Route, Routes } from 'react-router-dom'

import Pages from './pages'

function App() {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Pages.Home />} />
        <Route path='/saved/:id' element={<Pages.SavedJobs />} />
        <Route path='/job/:id' element={<Pages.JobDetails />} />
        <Route path='/jobs/swipe' element={<Pages.Deck />} />
      </Routes>
    </main>
  )
}

export default App
