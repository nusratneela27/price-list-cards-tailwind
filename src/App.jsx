import './App.css'
import Navbar from './components/Navbar/Navbar'
import PriceList from './components/PriceList/PriceList'
import DashBoard from './components/DashBoard/DashBoard'
import PhoneBar from './components/PhoneBar/PhoneBar'

function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
      <h1 className='text-7xl text-purple-900'>Hello from tailwind</h1>
      <PriceList></PriceList>
      <DashBoard></DashBoard>
      <PhoneBar></PhoneBar>
    </div>
  )
}

export default App
