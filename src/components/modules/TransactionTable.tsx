import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import Loading from "@/pages/Loading"
import { useGetIndividualTransQuery } from "@/redux/features/transaction/transactionApi"
import { useUserQuery } from "@/redux/features/user/userApi"

  
 
  
  export function TransactionTable() {
    const {data:userData,isLoading} = useUserQuery(undefined)
    console.log(userData?.data?._id)
    const {data:transData} = useGetIndividualTransQuery(userData?.data?._id)
    console.log(transData?.data?.data)
    if(isLoading){
      return <Loading/>
    }
    if(!transData?.data){
       <p className="flex justify-center items-center text-5xl font-semibold"> No transaction history found!!! Make any transaction first </p>
    }
    return (
      <>
      <Table>
        <TableCaption>A list of your Transactions.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">User ID</TableHead>
            <TableHead>Wallet ID</TableHead>
            <TableHead>Created at</TableHead>
            <TableHead>Updated at</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {!isLoading && transData?.data?.data?.map((data:any) => (
            <TableRow key={data._id}>
              <TableCell className="font-medium">{data.user}</TableCell>
              <TableCell className="font-medium">{data.wallet}</TableCell>
              <TableCell>{new Date(data?.createdAt).toLocaleString("en-BD", {
              dateStyle: "medium",
              timeStyle: "short",
            })}</TableCell>
              <TableCell>{new Date(data?.updatedAt).toLocaleString("en-BD",{
                dateStyle:"medium",
                timeStyle:"short"
              })}</TableCell>
              <TableCell>{data.status}</TableCell>
              <TableCell className="text-right">{data?.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <p className="mt-5 text-red-400 font-extralight">Note: Here negative amount means cash deduct from your account</p>
      </>

      
    )
  }
  