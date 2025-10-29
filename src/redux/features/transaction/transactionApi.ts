import { baseApi } from "@/redux/baseApi";


const transApi = baseApi.injectEndpoints({
    endpoints:(builders)=>({

        sendMoney: builders.mutation({
            query:(sendInfo)=>({
                url:"/transaction/send-money",
                method:"POST",
                data:sendInfo
            }),
            invalidatesTags:['Transaction']
        }),

        cashOut: builders.mutation({
            query:(sendInfo)=>({
                url:"/transaction/cash-out",
                method:"POST",
                data:sendInfo
            }),
            invalidatesTags:['Transaction']
        }),

        getIndividualTrans: builders.query({
            query:(id)=>({
                url:`/transaction/individual-transaction/${id}`,
                method:"GET",
            })
        }),

        getAllTrans: builders.query({
            query:()=>({
                url:"/transaction/all-transaction",
                method:"GET",
            })
        }),

        
    })
})

export const {useSendMoneyMutation,useCashOutMutation,useGetIndividualTransQuery,useGetAllTransQuery} = transApi