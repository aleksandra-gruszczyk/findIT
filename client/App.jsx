import FavouritesCounter from '@components/FavouritesCounter'
import NavHeader from '@components/Header'
import ThemeToggler from '@components/utils/ThemeToggler'
import { AppShell } from '@mantine/core'
import { Route, Routes } from 'react-router-dom'

import Pages from './pages'

function App() {
  return (
    <AppShell
      header={<NavBar />}
      styles={(theme) => ({
        main: {
          minHeight: 'max(800px, 100vh)',
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[7]
              : theme.colors.customLight[4],
        },
      })}
    >
      <Routes>
        <Route path='/' element={<Pages.Home />} />
        <Route path='/saved' element={<Pages.SavedJobs />} />
        <Route path='/jobs/swipe' element={<Pages.Deck />} />
        <Route path='/add' element={<Pages.Employer />} />
      </Routes>
    </AppShell>
  )
}
function NavBar() {
  return (
    <NavHeader>
      <ThemeToggler />
      <FavouritesCounter />
    </NavHeader>
  )
}
export default App
