import { combineSlices, configureStore } from '@reduxjs/toolkit';

import { rtkQueryApi } from '../api/rtk-query-api';

export const rootReducer = combineSlices(rtkQueryApi);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rtkQueryApi.middleware),
});

export const reduxStore = store;
