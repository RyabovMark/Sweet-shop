import {configureStore} from '@reduxjs/toolkit'
import {projectSliceReducer} from '../features/projectSlice'
import {cakeApi} from "../services/cakeApi";

export const store = configureStore({
  reducer: {
    projectSlice: projectSliceReducer,
    [cakeApi.reducerPath]: cakeApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cakeApi.middleware),
})
