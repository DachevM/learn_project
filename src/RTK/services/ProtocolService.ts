import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const protocolAPI= createApi({
    reducerPath:"protocolAPI",
    baseQuery:fetchBaseQuery({baseUrl:"http://localhost:5005"}),
    endpoints:(build)=>({
        fetchProtocols:build.query({
            query:()=> ({
                url:"/protocols"
            }),
        })
    })
})

export const protocolCategoryAPI= createApi({
    reducerPath:"protocolCategoryAPI",
    baseQuery:fetchBaseQuery({baseUrl:"http://localhost:5005"}),
    endpoints:(build)=>({
        fetchProtocolCategories:build.query({
            query:()=> ({
                url:"/protocolcategories"
            }),
        })
    })
})