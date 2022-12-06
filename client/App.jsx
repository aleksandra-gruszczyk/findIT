import FavouritesCounter from '@components/FavouritesCounter'
import NavHeader from '@components/Header'
import ThemeToggler from '@components/utils/ThemeToggler'
import { Route, Routes } from 'react-router-dom'

import Pages from './pages'

function App() {
  return (
    <main>
      <NavHeader>
        <ThemeToggler />
        <FavouritesCounter />
      </NavHeader>
      <Routes>
        <Route path='/' element={<Pages.Home />} />
        <Route path='/saved' element={<Pages.SavedJobs />} />
        <Route path='/jobs/swipe' element={<Pages.Deck />} />
        <Route path='/add' element={<Pages.Employer />} />
      </Routes>
    </main>
  )
}

export default App
