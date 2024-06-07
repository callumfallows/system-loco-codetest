/**
 * Fetches device data from an API endpoint and returns the device data, loading state, and error state.
 *
 * @returns An object with the following properties:
 *   - `device`: The device data fetched from the API, or `undefined` if the data is still loading or an error occurred.
 *   - `isLoading`: `true` if the data is still loading, `false` otherwise.
 *   - `isError`: `true` if an error occurred while fetching the data, `false` otherwise.
 */
import axios from "axios";
import useSWR from "swr";
import { useRouter } from "next/router";
import { getEndpointUrls, apiUrl } from "~/constants/endpoints";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const useDevice = () => {
  const { query } = useRouter();

  const url = `${getEndpointUrls(apiUrl).device}${query.deviceId || ""}`;
  const { data, error } = useSWR(url, fetcher);
  return {
    device: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useDevice;
