import queryString from "query-string";

/**
 * Updates the query parameters in the current URL.
 *
 * @param newParams - An object containing the new query parameters to be added or updated.
 * @returns Void
 */
export const updateQueryParams = (
  newParams: Record<string, string | number | boolean>
) => {
  const currentParams = queryString.parse(window.location.search);
  const updatedParams = { ...currentParams, ...newParams };
  const newSearch = queryString.stringify(updatedParams);
  window.history.pushState(null, "", `?${newSearch}`);
};

/**
 * Retrieves the current query string from the URL.
 *
 * @returns The current query string, or an empty string if not available.
 */
export const getQueryStrings = (): string | undefined => {
  if (typeof window !== "undefined") {
    return window.location.search;
  }
  return "";
};

/**
 * Retrieves the value of a specific query parameter from the current URL.
 *
 * @param key - The name of the query parameter to retrieve.
 * @returns The value of the specified query parameter, or an empty string if not found.
 */

export const getQueryStringValue = (key: string) => {
  const params = getQueryStrings();
  if (params) {
    const parsedParams = queryString.parse(params);
    return parsedParams[key]?.toString() || "";
  }
  return "";
};

/**
 * Filters an array of objects with 'value' and 'label' properties to remove duplicates.
 *
 * @param arr - The array of objects to filter.
 * @returns A new array with unique objects based on the 'value' property.
 */

export const filterDuplicateFilters = <
  T extends { value: string; label: string },
>(
  arr: T[]
) => {
  const uniqueItems = new Set(arr.map((item) => JSON.stringify(item)));
  return Array.from(uniqueItems).map((item) => JSON.parse(item));
};
