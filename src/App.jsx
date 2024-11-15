
import Navbar from "./componants/Navbar"
import PasswordCard from "./componants/PasswordCard"



function App() {


  return (
    <div className="bg-[#111827] w-screen h-screen overflow-x-hidden pb-[10%]">
      <Navbar />
      <div className='mt-10 h-full pb-[100px]'>
        <PasswordCard/>
      </div>
    </div>
  )
}

export default App
