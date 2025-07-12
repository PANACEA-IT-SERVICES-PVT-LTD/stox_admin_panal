import navBarSlice from './slices/navBarSlice';
import notificationSlice from './slices/notificationSlice';
import modalSlice from './slices/modalSlice';


const rootReducer = {
  navBar: navBarSlice,
  notifications: notificationSlice,
  modal  : modalSlice,
 
 
 
};

export default rootReducer;
