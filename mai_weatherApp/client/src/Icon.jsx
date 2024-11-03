import PropTypes from 'prop-types';

function Icon({ iconCode }) {
    const ICON_URL = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    return (
        <div className='Icon'>
            <img src={ICON_URL} alt="Weather Icon" />
        </div>
    );
}

Icon.propTypes = {
    iconCode: PropTypes.string.isRequired, 
};

export default Icon;