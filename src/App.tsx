import { useState } from 'react'
import './App.css'
import YoutubeForm from './components/YoutubeForm'
import { useForm } from 'react-hook-form'

function App() {
  const form = useForm();
  

  return (
    <div>
      <YoutubeForm />
    </div>
  )
}

export default App
