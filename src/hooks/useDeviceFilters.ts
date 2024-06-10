/**
 * A React hook that manages device filters and provides related functionality.
 *
 * This hook is responsible for:
 * - Initializing filter values from the URL query parameters
 * - Updating filter values and updating the URL query parameters
 * - Filtering the list of devices based on the filter values
 * - Providing a list of unique device models for the filter dropdown
 *
 * The hook returns an object with the following properties:
 * - `deviceModels`: An array of unique device models
 * - `onChangeCallback`: A callback function to update the URL query parameters
 * - `filterValues`: An object containing the current filter values
 * - `setFilterValues`: A function to update the filter values
 * - `updateFilterValues`: A function to update the filter values and the URL query parameters
 * - `filteredDeviceTable`: An array of devices that match the current filter values
 */
import { useCallback, useEffect, useMemo, useState } from "react";
import { Device } from "~/types/Devices";
import {
  getQueryStringValue,
  updateQueryParams,
  filterDuplicateFilters,
} from "~/util/Filters";
import useDevices from "./useDevices";

const defaultFilterValues = {
  search: "",
  model: "",
};

const useDeviceFilters = () => {
  const { devices, isLoading, isError } = useDevices();

  const [filterValues, setFilterValues] = useState<{
    search?: string;
    model?: string;
  }>(defaultFilterValues);

  const [mappedDeviceTable, setMappedDeviceTable] = useState<Device[]>([]);

  const initialTextSearchParams = useMemo(() => {
    if (typeof window !== "undefined") {
      return {
        search: getQueryStringValue("search"),
        model: getQueryStringValue("model"),
      };
    }
    return defaultFilterValues;
  }, []);

  useEffect(() => {
    setFilterValues({
      search: initialTextSearchParams.search.toString() || "",
      model: initialTextSearchParams.model.toString() || "",
    });
  }, [initialTextSearchParams]);

  /**
   * A callback function that updates the URL query parameters with the provided value and tag.
   * This function is used when the filter values change.
   *
   * @param {string} value - The new value for the filter.
   * @param {string} tag - The name of the filter (e.g., 'search', 'model').
   */

  const onChangeCallback = useCallback((value: string, tag: string) => {
    updateQueryParams({
      [tag]: value,
    });
  }, []);
  /**
   * A memoized function that filters the list of devices based on the provided filter name and value.
   * It returns an array of unique devices that match the filter criteria.
   *
   * @param {string} filterName - The name of the filter (e.g., 'id', 'name').
   * @param {string} filterValue - The value to filter by.
   * @returns {Device[]} An array of unique devices that match the filter criteria.
   */
  const filterDevices = useCallback(
    (filterName: string, filterValue: string) => {
      if (isLoading || isError) return [];

      const mappedDevices = devices.filter((device: Device) => {
        const filterKey = filterName as keyof Device;
        return device[filterKey] === filterValue;
      });

      return filterDuplicateFilters(mappedDevices);
    },
    [devices, isLoading, isError]
  );

  /**
   * A memoized function that filters the list of devices based on the provided filter name and value.
   * It returns an array of unique devices that match the filter criteria.
   *
   * @param {string} filterName - The name of the filter (e.g., 'id', 'name').
   * @param {string} filterValue - The value to filter by.
   * @returns {Device[]} An array of unique devices that match the filter criteria.
   */
  const filterDevicesByModel = useCallback(
    (filterName: string, filterValue: string) => {
      if (isLoading || isError) return [];

      const mappedDevices = devices.filter((device: Device) => {
        const filterKey = filterName as keyof typeof device.model;
        return device.model[filterKey] === filterValue;
      });

      return filterDuplicateFilters(mappedDevices);
    },
    [devices, isLoading, isError]
  );
  /**
   * A function that updates the filter values and the URL query parameters.
   *
   * @param {string} value - The new value for the filter.
   * @param {string} tag - The name of the filter (e.g., 'search', 'model').
   */
  const updateFilterValues = (value: string, tag: string) => {
    setFilterValues({
      ...filterValues,
      [tag]: value,
    });
    onChangeCallback(value, tag);
  };

  const deviceModels = useMemo(() => {
    if (isLoading || isError) return [];

    const mappedDevices = devices.map((device: Device) => {
      return {
        value: device.model.name || device.model.product,
        label: device.model.name || device.model.product,
      };
    });

    return filterDuplicateFilters(mappedDevices);
  }, [devices, isLoading, isError]);

  const filteredDeviceTable = useMemo(() => {
    if (isLoading || isError) return [];

    if (!filterValues.search && !filterValues.model) {
      return devices;
    }

    if (filterValues.model) {
      return [...filterDevicesByModel("name", filterValues.model)];
    }

    return devices;
  }, [filterValues, isLoading, isError, devices, filterDevicesByModel]);

  useEffect(() => {
    setMappedDeviceTable([...filteredDeviceTable]);
  }, [isLoading, isError, filteredDeviceTable, setMappedDeviceTable]);

  return {
    deviceModels,
    filterValues,
    setFilterValues,
    updateFilterValues,
    isLoading,
    filterDevices,
    isError,
    mappedDeviceTable,
    filteredDeviceTable,
  };
};

export default useDeviceFilters;
