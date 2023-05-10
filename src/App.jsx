import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard'
import bgimage from './assets/images/more/4.png'
import bgimage2 from './assets/images/more/5.png'

function App() {
  const coffees = useLoaderData()

  return (
    <div className='bg-[length:250px_250px]  bg-no-repeat mt-5' style={{ backgroundImage: `url(${bgimage})` }}>
      <h1 className='text-center'>--- Sip & Savor ---</h1>
      <h1 className='text-2xl text-center font-semibold'>Our Popular Products </h1>
      <div style={{backgroundImage: `url(${bgimage2})`}} className=' bg-[length:300px_1000px] grid bg-no-repeat bg-right-bottom grid-cols-2 mt-24 px-24 gap-8'>
        {
          coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
        }
      </div>
    </div >
  )
}

export default App
