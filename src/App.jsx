import { Suspense } from 'react'
import './App.css'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'

import Navbar from './components/NavBar/Navbar'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers'

const promisePlayers = fetch('/players.json').then(res => res.json())

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className='mt-12 max-w-7xl mx-auto'>
        <div>

        </div>
        <div>
          <Suspense fallback={
            <div className="flex w-6xl flex-col gap-4 max-w-7xl mx-auto">
              <div className="skeleton h-96 w-full"></div>
              <div className="skeleton h-6 w-1/2"></div>
              <div className="skeleton h-6 w-full"></div>
              <div className="skeleton h-6 w-full"></div>
            </div>}>


            <AvailablePlayers promisePlayers={promisePlayers}></AvailablePlayers>
          </Suspense>
        </div>
      </div>


      {/* <SelectedPlayers></SelectedPlayers> */}
    </>
  )
}

export default App
