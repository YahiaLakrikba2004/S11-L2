import { configureStore } from '@reduxjs/toolkit'
import favoritesReducer from '../reducers/favoriteReducer'
import searchReducer from '../reducers/RisultSearchReducers'

const store = configureStore({
  reducer: favoritesReducer,
  searches: searchReducer,
})

export default store
