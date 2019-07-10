// Export Constants
export const GET_MOVIES = 'GET_PRODUCTS';
export const SORT_ALPHABETICALLY = 'SORT_ALPHABETICALLY';
export const SORT_ALPHABETICALLY_REVERSED = 'SORT_ALPHABETICALLY_REVERSED';
export const SORT_BY_PRICE_ASCENDING = 'SORT_BY_PRICE_ASCENDING';
export const SORT_BY_PRICE_DESCENDING = 'SORT_BY_PRICE_DESCENDING';

// Export Actions
export function getProducts(products) {
  return {
    type: GET_MOVIES,
    products,
  };
}

export function sortOnLoad(sort_by) {
  return dispatch => {
    switch (sort_by) {
      case 'name_asc':
        return dispatch(sortAlphabetically());
      case 'name_desc':
        return dispatch(sortAlphabeticallyReversed());
      case 'price_asc':
        return dispatch(sortByPriceAscending());
      case 'price_desc':
        return dispatch(sortByPriceDescending());
      default:
        return dispatch(sortAlphabetically());
    }
  };
}

export function sortAlphabetically() {
  return {
    type: SORT_ALPHABETICALLY,
  };
}

export function sortAlphabeticallyReversed() {
  return {
    type: SORT_ALPHABETICALLY_REVERSED,
  };
}

export function sortByPriceAscending() {
  return {
    type: SORT_BY_PRICE_ASCENDING,
  };
}

export function sortByPriceDescending() {
  return {
    type: SORT_BY_PRICE_DESCENDING,
  };
}