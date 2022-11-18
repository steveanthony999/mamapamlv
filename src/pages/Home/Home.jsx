import { useCallback, useState } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { useMediaQuery } from 'react-responsive';

import TempLogo from '../../assets/temp-logo.png';

import './Home.css';

const Home = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 760px)' });

  const containerStyle = {
    width: isMobile ? '100%' : '60%',
    height: '800px',
  };

  const center = {
    lat: 36.0740484,
    lng: -115.082902,
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  return (
    <div className='Home'>
      <div className='header'>
        <h1>Website coming soon!</h1>
        <img src={TempLogo} alt='logo' width='300px' />
        <div className='anouncement'>
          <h1>But we are OPEN!</h1>
          <h2>11:00am - 9:00pm</h2>
          <h2>7 DAYS A WEEK</h2>
        </div>
        <div className='address'>
          <p>2895 N Green Valley PKWY</p>
          <p>Suite E</p>
          <p>Henderson, NV 89014</p>
          <a href="tel:702-268-8538">702-268-8538</a>
          <a href="tel:702-665-4043">702-665-4043</a>
        </div>
        {isLoaded && (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={15}
            onLoad={onLoad}
            onUnmount={onUnmount}
          >
            {/* Child components, such as markers, info windows, etc. */}
            <></>
          </GoogleMap>
        )}
      </div>
    </div>
  );
};

export default Home;
