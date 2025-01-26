"use client"
import { useState,useEffect, useContext } from "react";
import Link from "next/link";
import { ethers } from "ethers";
import ViewStudentList from "./components/ViewStudentsList/page";
import ContractAddress from '@/contracts/contract-address.json';
import StudentContract from '@/contracts/Student.json';
import { StudentProvider, StudentContext} from '@/app/context/StudentContext';

interface StateType {
  provider: ethers.BrowserProvider | null;
  signer: any | null;
  contract: ethers.Contract | null;
}
const studentContractAddress= ContractAddress.Calculator;
const contractAbi = StudentContract.abi; 
const HARDHAT_NETWORK_ID = "31337";
 function Content() {

  const {theme} = useContext(StudentContext);
  const [currentState, setCurrentState] = useState<StateType>({
    provider: null,
    signer: null,
    contract: null,
  });

  const [userAddress, setUserAddress] = useState<string | null>(null);
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
        console.log(signer)

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

  <div className="h-[80vh]">
{theme}
  <Link href={"/admitStudent"}>Click Here To Admit Student</Link>

  <ViewStudentList/>
  </div>


  );
}

export default function Home(){
  return(
    <StudentProvider>
<Content/>
</StudentProvider>

  )
}
