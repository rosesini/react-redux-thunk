import { Route, Routes } from 'react-router-dom'
import SeasonPage from './features/standings/SeasonPage'
import Layout from './components/Layout'

import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<SeasonPage />} />
      </Route>
    </Routes>
  )
}

export default App
