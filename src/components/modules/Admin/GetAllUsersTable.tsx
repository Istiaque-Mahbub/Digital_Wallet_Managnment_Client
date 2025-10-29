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
import { useGetAllUsersQuery } from "@/redux/features/user/userApi"



  
 
  
  export function GetAllUsersTable() {
  const {data:allUsers,isLoading} = useGetAllUsersQuery(undefined)
  console.log(allUsers)
    if(!allUsers?.data){
       <p className="flex justify-center items-center text-5xl font-semibold"> No User Register yet!! </p>
    }

    if(isLoading){
        <Loading/>
    }

    return (
      <>
      <Table>
        <TableCaption>{allUsers?.meta?.total} users details found</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>NID NO.</TableHead>
            <TableHead>Phone Number</TableHead>
            <TableHead>User Role</TableHead>
            <TableHead>Wallet ID</TableHead>
            
          </TableRow>
        </TableHeader>
        <TableBody>
          {allUsers?.data?.map((data:any) => (
            <TableRow key={data._id}>
              <TableCell className="font-medium">{data?.name}</TableCell>
              <TableCell className="font-medium">{data?.email}</TableCell>
              <TableCell>{data?.nidNumber}</TableCell>
              <TableCell>{data?.phone}</TableCell>
              <TableCell>{data?.role}</TableCell>
              <TableCell>{data?.wallet}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      </>

      
    )
  }
  