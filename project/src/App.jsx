import Hero from './Components/Hero'
import Navbar from './Components/Navbar'


function App() {
  
  return (
    <>
    <div className=''>
      <Navbar/>
      <div className='px-6 mx-auto max-w-[1600px]'>
      <Hero/>
      </div>
      
    </div>
    </>
  )
}

export default App
