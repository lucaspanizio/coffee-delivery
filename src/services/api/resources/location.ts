import { LocationType } from '@/services/api/models/location';

export const getLocationFromCoordinates = async (
  latitude: number,
  longitude: number,
): Promise<LocationType> => {
  try {
    const response = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=pt`,
    );
    const data = await response.json();
    return {
      city: data.city || 'Desconhecida',
      state: data.principalSubdivision || 'Desconhecido',
    };
  } catch (error) {
    console.error('Erro ao obter a localização:', error);
    return { city: 'Desconhecida', state: 'Desconhecido' };
  }
};
