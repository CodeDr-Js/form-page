import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {setCredentials, logout} from '../features/authSlice';

const baseQuery = fetchBaseQuery({
    baseUrl:'http://localhost:8000/api/v1',
    credentials: 'include',
    prepareHeaders: (headers, {getState}) =>  {
        const token = getState().auth.token;
        if(token) {
            headers.set('authorization', `Bearer ${token}`);
        }
        return headers;
    }
});

const baseQueryWithHeaders = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);
    if(result?.error?.originalStatus === 403) {
        console.log('sending refresh token');

        const refreshResult = await baseQuery('/refresh', api, extraOptions);
        console.log(refreshResult);

        if(refreshResult?.data){
            const user = api.getState().auth.user;
            api.dispatch(setCredentials({...refreshResult.data, user}));
        }else {
            api.dispatch(logout());
        }
    } return result;


};

//export the api using the createApi
export const apiSlice = createApi({
    baseQuery: baseQueryWithHeaders,
    endpoints: (builder) => ({})
});