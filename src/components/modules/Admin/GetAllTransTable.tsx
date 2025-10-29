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
import { useGetAllTransQuery } from "@/redux/features/transaction/transactionApi"


  
 
  
  export function GetAllTransTable() {
    const {data,isLoading} = useGetAllTransQuery(undefined)
    console.log(data?.data)
    if(!data?.data){
       <p className="flex justify-center items-center text-5xl font-semibold"> No User Register yet!! </p>
    }

    if(isLoading){
        <Loading/>
    }

    return (
      <>
      <Table>
        <TableCaption>All transactions</TableCaption>
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
          {data?.data?.data?.map((data:any) => (
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

      </>

      
    )
  }
  