/**
 * @createdBy Narada 2022/04/26
 */

 import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
 import axios from "axios";
 axios.defaults.withCredentials = true;
 const initialState = {
     data: null,
     loading: false,
     error: null,
 };
 
 export const generateSlice = (name, url, auth) => {
     const getData = createAsyncThunk(`${name}/get${name}`, async (options, {rejectWithValue}) => {
         try {
             const {data} = await axios.get(process.env.url + url + (options?.id ? options?.id : ""), {
                 ...(auth
                     ? {
                           headers: {
                               authorization: `Bearer ${localStorage.user ? JSON.parse(localStorage.user).token : ""}`,
                           },
                       }
                     : {}),
                 ...(options?.params
                     ? {
                           params: {
                               ...options?.params,
                           },
                       }
                     : {}),
             });
             return data;
         } catch (err) {
             // if (!err.response) {
             //     console.log(err);
             // }
             return rejectWithValue(err.response.data);
         }
     });
     const postData = createAsyncThunk(`${name}/get${name}`, async (options, {rejectWithValue}) => {
         try {
             const {data} = await axios.post(process.env.url + url + (options?.id ? options?.id : ""), options?.body ? options?.body : {}, {
                 ...(auth
                     ? {
                           headers: {
                               authorization: `Bearer ${localStorage.user ? JSON.parse(localStorage.user).token : ""}`,
                           },
                       }
                     : {}),
                 ...(options?.params
                     ? {
                           params: {
                               ...options?.params,
                           },
                       }
                     : {}),
             });
             return data;
         } catch (err) {
             // if (!err.response) {
             //     throw err;
             // }
             return rejectWithValue(err.response.data);
         }
     });
     const deleteData = createAsyncThunk(`${name}/delete${name}`, async (options , {rejectWithValue}) => {
         try {
             const {data} = await axios.delete(process.env.url + url + (options?.id ? options?.id : ""), {
                 ...(auth
                     ? {
                           headers: {
                               authorization: `Bearer ${JSON.parse(localStorage.user).token}`,
                           },
                       }
                     : {}),
                 ...(options?.params
                     ? {
                           params: {
                               ...options?.params,
                           },
                       }
                     : {}),
             });
 
             return data;
         } catch (err) {
             return rejectWithValue(err.response.data);
         }
     });
 
     const slice = createSlice({
         name: name,
         initialState,
         extraReducers: {
             [(getData || postData || deleteData).pending]: (state) => {
                 if (!state.loading) {
                     state.loading = true;
                 }
             },
             [(getData || postData || deleteData).fulfilled]: (state, action) => {
                 if (state.loading) {
                     state.loading = false;
                     state.error = null;
                     state.data = action.payload;
                 }
             },
             [(getData || postData || deleteData).rejected]: (state, action) => {
                 // console.log(action)
                 if (state.loading) {
                     state.loading = false;
                     state.data = null;
                     state.error = action.payload;
                 }
             },
         },
     });
     return {slice, getData, postData, deleteData};
 };
 
 /**
  *
  * @generateSlice general sliceGenerator. Just create your own, if it's necessary
  *
  *
  * @param name url auth
  * @name slice type name
  * @url url to send http request
  * @auth boolean. Use where authentication is required.
  *
  *
  * @createAsyncThunk @callbackParams options
  * @options => id , params
  *
  */
 