/**
 * Provides the base URL for the API endpoints.
 */
const apiUrl =
  "https://pzv500llz9.execute-api.eu-west-2.amazonaws.com/production/";

/**
 * Generates the full URL for the specified API endpoint.
 * @param url - The base URL for the API.
 * @returns An object with the URLs for the 'devices' and 'device' endpoints.
 */
const getEndpointUrls = (url: string) => {
  return {
    devices: `${url}/listDevices`,
    device: `${url}/device/`,
  };
};

export { apiUrl, getEndpointUrls };
