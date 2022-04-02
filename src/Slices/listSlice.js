import { createSlice } from '@reduxjs/toolkit'
import { itemsApi, storeApi } from './storeApi'


const initialState = {
  items: [],
  filter: '',
  category: '',
  offset: 0,
  status: 'idle'
}

const listSlice = createSlice({
  name: 'listSlice',
  initialState,
  reducers: {
    itemsLoading(state, action) {
      // Use a "state machine" approach for loading state instead of booleans
      if(state.status === 'idle') {
        state.status = 'pending'
      }
    },
    itemsReceived(state, action) {
      if(state.status === 'pending') {
        state.status = 'idle'
        state.items = action.payload
      }
    },
    setFilter(state, action){
      state.filter = action.payload
    }
  }
})

export const fetchItems = () => async dispatch => {
  dispatch(itemsLoading());
  const response = await itemsApi.get(`/items`)
  dispatch(itemsReceived(response.data));

}

export const { itemsLoading, itemsReceived, setFilter } = listSlice.actions;
export default listSlice.reducer;