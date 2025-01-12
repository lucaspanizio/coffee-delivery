import { getLocationFromCoordinates } from '@/services/api/resources/location';
import { LocationType } from '@/services/api/models/location';
import { useState, useEffect } from 'react';

interface GeolocationState {
  location?: LocationType;
  loading: boolean;
}

const getGeolocation = (): Promise<GeolocationPosition> => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    } else {
      reject('Geolocalização não suportada');
    }
  });
};

export const useGeolocation = (): GeolocationState => {
  const [location, setLocation] = useState<LocationType | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        setLoading(true);
        const { latitude, longitude } = (await getGeolocation()).coords;
        const locationData = await getLocationFromCoordinates(latitude, longitude);
        setLocation(locationData);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchLocation();
  }, []);

  return { location, loading };
};
