import { StudentContext } from '@/app/context/StudentContext';
import { ethers } from 'ethers';
import React, { useContext, useEffect, useState } from 'react'


interface Student {
  name: string;
  id: number;
  rollno: number;
  isMale: boolean;
  class:number;
}

const ViewStudentList = () => {
  const {userAddress,currentState} = useContext(StudentContext)!;
  const [studentsList,setStudentsList] = useState<Student[]>([]);
useEffect(()=>{



  const new1=async()=>{
    try {
  
        // const res = await currentState.contract?.getName();
        const res =  await currentState.contract?.getAllStudent();
setStudentsList(res)
        console.log(res);

    
    } catch (error) {
      console.error("Error fetching students:", error);
    }
}
new1();
},[currentState])
   return (
    <>
    <div className='text-white'>ViewStudentList:
{String( userAddress)}

    </div>
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-4xl">
        <h1 className="text-3xl font-semibold text-center mb-6">Student List</h1>

  
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="px-4 py-2 text-left">ID</th>
                <th className="px-4 py-2 text-left">Roll No</th>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Gender</th>
                <th className="px-4 py-2 text-left">Class</th>
              </tr>
            </thead>
            <tbody>
              {studentsList?.length === 0 ? (
                <tr>
                  <td colSpan={5} className="text-center py-4">No students available</td>
                </tr>
              ) : (
                studentsList?.map((student,index) => (
                  <tr key={index} className="text-black hover:bg-gray-100 transition-colors">
                    <td className="px-4 py-2 border-b">{student.id}</td>
                    <td className="px-4 py-2 border-b">{student.rollno}</td>
                    <td className="px-4 py-2 border-b">{student.name}</td>
                    <td className="px-4 py-2 border-b">{student.isMale ? 'Male' : 'Female'}</td>
                    <td className="px-4 py-2 border-b">{student.class}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>


    </>
  )
}

export default ViewStudentList