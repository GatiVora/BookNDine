import React, { useEffect ,useState} from 'react';

const LocationDetector = () => {
    const [location, setLocation] = useState(null);

    useEffect(() => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          // Use lat and lon to get the user's city name
          // You can use a geocoding API like geoapify, openstreetmap, etc.
          // Here's an example using geoapify API
          fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lon}&format=json&apiKey=YOUR_API_KEY`)
            .then(response => response.json())
            .then(data => {
              setLocation(data.features[0].properties.city);
            })
            .catch(error => console.error('Error:', error));
        },
        (error) => {
          console.error('Error getting user location:', error);
        }
      );
    }, []);
  
    return (
      <div>
        {location ? <p>Your city is: {location}</p> : <p>Loading...</p>}
      </div>
    );
};

export default LocationDetector;
