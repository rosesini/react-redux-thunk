import { Route, Routes } from 'react-router-dom'
import SeasonPage from './pages/SeasonPage'
import Layout from './components/Layout'

import './index.css'
import './styles/type.css'

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
