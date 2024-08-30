import './App.css'; 

function Icon() {
    const ICON_URL = 'http://openweathermap.org/img/wn/';

  return (
    <div className='Icon'>
    <img src={ICON_URL} alt="Weather Icon" />
    </div>
  );
}

export default Icon;




