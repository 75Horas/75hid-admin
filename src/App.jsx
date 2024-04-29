import './App.css'
import { Container } from 'react-bootstrap'
import { PostUpdate } from './pages/Post'
import { GetUpdates } from './pages/Get'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<GetUpdates />} />
        <Route path="/post" element={<PostUpdate />} />
      </Routes>
    </Container>
  )
}

export default App
