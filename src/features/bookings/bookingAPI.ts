import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";
import { APIDomain } from "../../utils/ApiDomain";
import type { RootState } from "../../app/store";







export type TBooking = {
    booking_id: number;
    user_id: number;
    hotel_id: number;
    room_id: number;
    check_in_date: string;
    check_out_date: string;
    total_amount: number;
    status: string;
    created_at?: string;
    updated_at?: string;
}

export type TPaginationInfo = {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
}
export type TBookingResponse = {
    bookings: TBooking[];
    pagination: TPaginationInfo;
}
export type TPaginationParams = {
    page?: number;
    limit?: number;
}

export const bookingApi = createApi({
    reducerPath: "bookingApi",
    baseQuery: fetchBaseQuery({
        baseUrl: APIDomain,
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).user.token; 
            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
            }
            return headers;
        },
    }),
    tagTypes: ["Bookings"],
    endpoints: (builder) => ({
        createBooking: builder.mutation<TBooking, Partial<TBooking>>({
            query: (newBooking) => ({
                url: "/bookings",
                method: "POST",
                body: newBooking,
            }),
            invalidatesTags: ["Bookings"],
        }),
        getBookings: builder.query<TBookingResponse, TPaginationParams>({
            query: ({page=1,limit=10}={}) => ({
                url: "/bookings",
                params: { page, limit }
            }),
            providesTags: ["Bookings"],
        }),
        getAllBookings: builder.query<TBooking[], void>({
            query: () => "/bookings/without-pagination",
            providesTags: ["Bookings"],
        }),
        updateBookingStatus: builder.mutation<TBooking, { booking_id: number; status: string }>({
            query: ({ booking_id, status }) => ({
                url: `/bookings/${booking_id}`,
                method: "PATCH",
                body: { status },
            }),
            invalidatesTags: ["Bookings"],
        }),
        deleteBooking: builder.mutation<{ success: boolean }, number>({
            query: (booking_id) => ({
                url: `/bookings/${booking_id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Bookings"],
        }),
        // Get user-specific bookings
        getUserBookings: builder.query<TBooking[], number>({
            query: (userId) => ({
                url: `/bookings?user_id=${userId}`,
                method: "GET"
            }),
            providesTags: ["Bookings"],
            transformResponse: (response: TBookingResponse) => response.bookings,
        }),
    }),
    
})

export const {
    useCreateBookingMutation,
    useGetBookingsQuery,
    useGetAllBookingsQuery,
    useGetUserBookingsQuery,
    useUpdateBookingStatusMutation,
    useDeleteBookingMutation
} = bookingApi;