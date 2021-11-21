import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PageSeason from './pages/Season'
import Layout from './components/Layout'

import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PageSeason />} />
      </Route>
    </Routes>
  )
}

export default App
