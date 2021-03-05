import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import savedJobsReducer from './savedJobsReducer';
import rootReducer from './reducers';

const persistConfig = {
  key: 'root',
  blacklist: ['root'],
  storage: AsyncStorage,
};

const combinedReducer = combineReducers({
  saved: savedJobsReducer,
  root: rootReducer,
});

const persistedReducer = persistReducer(persistConfig, combinedReducer);

let store = createStore(persistedReducer);
let persistor = persistStore(store);
export { store, persistor };
