import axios from "axios";
import { server } from "../store";

export const getAdminStats = () => async (dispatch) => {
  try {
    dispatch({
      type: "getAdminStatsRequest",
    });
    const { data } = await axios.get(`${server}/admin/stats`, {
      withCredentials: true,
    });
    dispatch({
      type: "getAdminStatsSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "getAdminStatsFail",
      payload: error.response.data.message,
    });
  }
};

//for admin users
export const getAdminUsers = () => async (dispatch) => {
  try {
    dispatch({
      type: "getAdminUsersRequest",
    });
    const { data } = await axios.get(`${server}/admin/users`, {
      withCredentials: true,
    });
    dispatch({
      type: "getAdminUsersSuccess",
      payload: data.users,
    });
  } catch (error) {
    dispatch({
      type: "getAdminUsersFail",
      payload: error.response.data.message,
    });
  }
};

//for admin orders
export const getAdminOrders = () => async (dispatch) => {
  try {
    dispatch({
      type: "getAdminOrdersRequest",
    });
    const { data } = await axios.get(`${server}/admin/orders`, {
      withCredentials: true,
    });
    dispatch({
      type: "getAdminOrdersSuccess",
      payload: data.orders,
    });
  } catch (error) {
    dispatch({
      type: "getAdminOrdersFail",
      payload: error.response.data.message,
    });
  }
};
