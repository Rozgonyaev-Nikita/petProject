import { useState } from 'react'
import './App.css'
import { Layout } from './pages/Layout/Layout'
import { Route, Routes } from 'react-router-dom'
import { MainPages } from './pages/MainPages'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
        {/* <Route path='/registration' element={<Registration/>}/>
        <Route path='/avtorization' element ={<Avtorization/>}/> */}
        <Route path='/' element={<Layout/>}>
          <Route index element={<MainPages></MainPages>} />
          {/* <Route path='post' element={<Posts></Posts>} />
          <Route path='post/:id' element={<ProsmotrPage/>} />
          <Route path='about' element={<About />} />
          <Route path='contacts' element={<Contacts />} />
          <Route path='onas' element={<Onas />} />
          <Route path='*' element={<PageError />} /> */}
        </Route>
      </Routes>
  )
}

export default App
