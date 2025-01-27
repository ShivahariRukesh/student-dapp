'use client'
import React, { useContext, useState } from 'react'
import { StudentContext } from '../context/StudentContext';

const AdmitStudent = () => {
  const [name, setName] = useState('');
  const [rollNo, setRollNo] = useState<number>(0);
  const [gender, setGender] = useState('');
  const [classNo, setClassNo] = useState<number>(0);

  const {currentState} = useContext(StudentContext)!;
  const handleSubmit =async  (event: React.FormEvent) => {
      event.preventDefault();
 
const new1= await currentState.contract?.registerStudent(name,rollNo,gender==='male',classNo);
console.log(new1)

  };
  const   admitStudent=async()=>{

  }
  return (
    <div className='h-[80vh]'>
 
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-gray-400 shadow-md rounded-lg hover:bg-red-400 transition-colors duration-[450ms] mt-10">
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Roll No:</label>
                <input
                    type="number"
                    value={rollNo}
                    onChange={(e) => setRollNo(Number(e.target.value))}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Gender:</label>
                <label className="inline-flex items-center mr-4">
                    <input
                        type="checkbox"
                        checked={gender === 'male'}
                        onChange={(e) => setGender(e.target.checked ? 'male' : '')}
                        className="form-checkbox h-5 w-5 text-blue-600"
                    />
                    <span className="ml-2 text-gray-700">Male</span>
                </label>
                <label className="inline-flex items-center">
                    <input
                        type="checkbox"
                        checked={gender === 'female'}
                        onChange={(e) => setGender(e.target.checked ? 'female' : '')}
                        className="form-checkbox h-5 w-5 text-blue-600"
                    />
                    <span className="ml-2 text-gray-700">Female</span>
                </label>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Class:</label>
                <input
                    type="number"
                    value={classNo}
                    onChange={(e) => setClassNo(Number(e.target.value))}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600">
                Submit
            </button>
        </form>
    </div>
  )
}

export default AdmitStudent