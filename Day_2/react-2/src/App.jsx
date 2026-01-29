import UserCard from "./components/UserCard"
import Maharana from './assets/Maharana.jpg'
import Chatar from './assets/Chatar.jpg'
import Pritvi from './assets/Pritvi.jpg'
import"./App.css"
function App() {
  return (
    <div className="container">
      <UserCard name="Maharana Partap" desc="Desc1" image={Maharana} />
      <UserCard name=" ChatarPati Shivaji" desc="Desc2" image={Chatar} />
      <UserCard name="PritviRaj chauan" desc="Desc3" image={Pritvi} />
    </div>
  )
}

export default App
