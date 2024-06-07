/**
 * A custom React hook that fetches a list of devices from an API and returns the data, loading state, and error state.
 *
 * @returns An object with the following properties:
 * - `devices`: An array of device objects returned from the API.
 * - `isLoading`: A boolean indicating whether the data is currently being fetched.
 * - `isError`: An error object if there was a problem fetching the data.
 */
import axios from "axios";
import useSWR from "swr";
import { getEndpointUrls, apiUrl } from "~/constants/endpoints";

// Create a fetcher function
const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const useDevices = () => {
  const url = `${getEndpointUrls(apiUrl).devices}`;
  const { data, error } = useSWR(url, fetcher);

  return {
    devices: data?.results,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useDevices;
