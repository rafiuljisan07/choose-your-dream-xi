import { Suspense, useState } from 'react'
import './App.css'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'

import Navbar from './components/NavBar/Navbar'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers'

const promisePlayers = fetch('/players.json').then(res => res.json())

function App() {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <Navbar></Navbar>
      <div className='mt-12 max-w-7xl mx-auto'>
        

        <div className='flex items-center justify-between py-8 px4'>
          <h1 className='font-bold text-2xl'>Available Players</h1>
          <div>
            <button onClick={() => setToggle(true)} className={`btn rounded-l-2xl rounded-r-none ${toggle === true ? 'bg-[#E7FE29] font-bold' : ''}`}>Available</button>
            <button onClick={() => setToggle(false)} className={`btn rounded-r-2xl rounded-l-none ${toggle === false ? 'bg-[#E7FE29] font-bold' : ''}`}>Selected <span>(0)</span></button>
          </div>
        </div>
        <div>

          {
            toggle === true ? <Suspense fallback={
              <div className="flex w-6xl flex-col gap-4 max-w-7xl mx-auto">
                <div className="skeleton h-96 w-full"></div>
                <div className="skeleton h-6 w-1/2"></div>
                <div className="skeleton h-6 w-full"></div>
                <div className="skeleton h-6 w-full"></div>
              </div>}>
              <AvailablePlayers promisePlayers={promisePlayers}></AvailablePlayers>
            </Suspense>
              :
              <SelectedPlayers></SelectedPlayers>

          }

        </div>
      </div>


    </>
  )
}

export default App
