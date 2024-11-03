import './App.css'
import CreateUser from './CreateUser'
import WeatherAPI from './WeatherAPI'
import { UserProvider } from './UserContext';
import User from './User'

function Home() {
  return (
    <>
      <UserProvider>
        <User />
        <CreateUser />
        <WeatherAPI />
      </UserProvider>

    </>
  )
}

export default Home
