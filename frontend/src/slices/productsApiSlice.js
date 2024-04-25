import {PRODUCT_URL} from '../constants.js';
import {apiSlice}  from  './apiSlice.js';




export const productApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => ({
                url: PRODUCT_URL, 
            }),
        keepUnusedDataFor: 5    
            
        }),
        getProductDetails: builder.query({
            query: (productId) => ({
             url: `${PRODUCT_URL}/${productId}`,    

            }),
        keepUnusedDataFor: 5,    
        }),
        createProduct: builder.mutation({
            query: () => ({
              url: `${PRODUCT_URL}`,
              method: 'POST',
            }),
            invalidatesTags: ['Product'],
          }),
    }),
    
});


export const {useGetProductsQuery, useGetProductDetailsQuery,  useCreateProductMutation,} = productApiSlice;
