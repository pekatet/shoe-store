import { configureStore } from '@reduxjs/toolkit'
import listSlice from './listSlice'
import { storeApi } from './storeApi'

export default configureStore({
  reducer: {
    listSlice
  }
})