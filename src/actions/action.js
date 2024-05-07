export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES'
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE'
export const ARRAY_SEARCH = 'ARRAY_SEARCH'

export const arraySearch = data => ({
  type: ARRAY_SEARCH,
  payload: data,
})

export const addToFavorites = companyName => ({
  type: ADD_TO_FAVORITES,
  payload: companyName,
})

export const removeFavorite = companyName => ({
  type: REMOVE_FAVORITE,
  payload: companyName,
})
