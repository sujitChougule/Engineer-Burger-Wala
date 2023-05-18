import { createReducer } from "@reduxjs/toolkit";

export const adminReducer = createReducer(
  { users: [], orders: [] },
  {
    getAdminStatsRequest: (state) => {
      state.loading = true;
    },
    getAdminStatsSuccess: (state, action) => {
      state.loading = false;
      state.usersCount = action.payload.usersCount;
      state.ordersCount = [action.payload.ordersCount];
      state.totalIncome = action.payload.totalIncome;
    },
    getAdminStatsFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    //users
    getAdminUsersRequest: (state) => {
      state.loading = true;
    },
    getAdminUsersSuccess: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    getAdminUsersFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    //orders
    getAdminOrdersRequest: (state) => {
      state.loading = true;
    },
    getAdminOrdersSuccess: (state, action) => {
      state.loading = false;
      state.orders = action.payload;
    },
    getAdminOrdersFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  }
);
