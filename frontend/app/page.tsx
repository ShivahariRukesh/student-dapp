"use client"
import { useState,useEffect, useContext } from "react";
import Link from "next/link";
import { ethers } from "ethers";
import ViewStudentList from "./components/ViewStudentsList/page";
import ContractAddress from '@/contracts/contract-address.json';
import StudentContract from '@/contracts/Student.json';
import { StudentProvider, StudentContext} from '@/app/context/StudentContext';


const studentContractAddress= ContractAddress.Calculator;
const contractAbi = StudentContract.abi; 
const HARDHAT_NETWORK_ID = "31337";
 function Content() {

  const {theme,setUserAddress,setCurrentState} = useContext(StudentContext)!;


  const [accounts, setAccounts] = useState("None");

  useEffect(()=>{
    const connectWallet = async()=>{
const {ethereum} = window;

      if(ethereum){
        window.ethereum.on("chainChanged", () => window.location.reload());
       window.ethereum.on("accountsChanged", () => window.location.reload());
        const accounts = await ethereum.request({method:"eth_requestAccounts"});
        const provider = new ethers.BrowserProvider(ethereum);

        const signer = await provider.getSigner();
      

        const contract = new ethers.Contract(
          studentContractAddress,
          contractAbi,
          signer
        )

        setAccounts(accounts);
        setUserAddress(accounts[0]);
        setCurrentState({provider,signer,contract})
      }
    }
    connectWallet();
  }
  ,[])
  return (

  <div className="h-[80vh] text-white bg-black">
<button className="w-[20%] bg-gray-300 text-gray-700 ml-[40%] p-2 mt-4  border-red-200 rounded-t-xl  hover:bg-red-400 hover:text-white hover:p-3  transition-colors duration-[850ms]">

  <Link href={"/admitStudent"}>Click Here To Admit Student</Link>
</button>
  <ViewStudentList/>
  </div>


  );
}

export default function Home(){
  return(
 <Content/>

  )
}
