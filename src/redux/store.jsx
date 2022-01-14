import {configureStore} from '@reduxjs/toolkit'
import authReducer from './slice/authSlices';

export default configureStore({
  reducer: {
    auth: authReducer
  }
})