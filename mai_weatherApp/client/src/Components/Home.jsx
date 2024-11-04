import CreateUser from './CreateUser';
import WeatherAPI from './WeatherAPI';
import { UserProvider } from './UserContext';
import User from './User';
import '../CSS/Home.css'; 

function Home() {
  return (
    <UserProvider>
      <div className="rowOne">
        <User className="rowTwo"/>
        <CreateUser className="rowTwo"/>

      </div>
      <div className="WeatherAPI">
      <WeatherAPI />
      </div>
    </UserProvider>
  );
}

export default Home;
