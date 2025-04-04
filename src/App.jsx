import { useState } from 'react'
import './App.css'
import Tours from './components/Tours.jsx'
import data from './data.js'

function App() {
  const [tours, setToure] = useState(data)

  function removeHandler(id) {
    const newTours = tours.filter(tour => tour.id !== id);
    setToure(newTours);
  }

  if(tours.length === 0) {
    return (
      <div className='refresh'>

        <h2>No Tours Left</h2>
        
        <button className='btn-white' onClick={() => {setToure(data)}}>
          Refresh
        </button>
      </div>
    )
  }

  return (
    <>
      <div className='app'>
        <Tours tours={tours} removeHandler={removeHandler}></Tours>
      </div>
    </>
  )
}

export default App
