import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': 'dcfc62d4fbmsh9fddb1f43549654p18d99bjsn938db72d1053'
};

const baseUrl = 'https://coinranking1.p.rapidapi.com/coins';

const createRequest =(url) => ({ url,header: cryptoApiHeaders});

export const cryptoApi = createApi({
 reducerPath: 'cryptoApi',
 baseQuery: fetchBaseQuery({ baseUrl}),
 endpoints: (builder) => ({
     getCryptos: builder.query({
         query:() => createRequest('/coins')
     })
 })
});

export const {
    useGetCryptosQuery } = cryptoApi;