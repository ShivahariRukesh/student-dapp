
// import React from 'react'

// const page = () => {
//   return (
//     <div>login</div>
//   )
// }

// export default page



// "use client";
// import { useEffect, useState } from "react";
// import { ethers } from "ethers";
// import ContractAddress from "@/contracts/contract-address.json";
// import abi from "@/contracts/Lottery.json";

// interface StateType {
//   provider: ethers.BrowserProvider | null;
//   signer: any | null;
//   contract: ethers.Contract | null;
// }

// const calculatorContractAddress = ContractAddress.Lottery;
// const contractABI = abi.abi;
// const HARDHAT_NETWORK_ID = "31337";

// export default function Home() {
//   const [state, setState] = useState<StateType>({
//     provider: null,
//     signer: null,
//     contract: null,
//   });
//   const [userAddress, setUserAddress] = useState<string | null>(null);
//   const [accounts, setAccounts] = useState("None");
//   const [input1, setInput1] = useState("");
//   const [result, setResult] = useState<string | null>(null);
//   const [participants, setParticipants] = useState<string[]>([]);
//   const [isManager, setIsManager] = useState<boolean>(false);
//   const [loading, setLoading] = useState<boolean>(false);

//   useEffect(() => {
//     const connectWallet = async () => {
//       try {
//         const { ethereum } = window;
//         console.log("Version",ethereum.networkVersion);
//         if (ethereum) {
//           window.ethereum.on("chainChanged", () => window.location.reload());
//           window.ethereum.on("accountsChanged", () => window.location.reload());
          
//           const accounts = await ethereum.request({ method: "eth_requestAccounts" });
//           console.log(accounts);
//           const provider = new ethers.BrowserProvider(ethereum);
//           const signer = await provider.getSigner();
//           const contract = new ethers.Contract(
//             calculatorContractAddress,
//             contractABI,
//             signer
//           );
//           const managerAddress = await contract.manager();
//           setAccounts(accounts);
//           setUserAddress(accounts[0]);
//           setIsManager(accounts[0].toLowerCase() === managerAddress.toLowerCase());
//   console.log(managerAddress);
          
//           setState({ provider, signer, contract });
//           fetchParticipants(contract);
//         } else {
//           alert("Please install metamask");
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     connectWallet();
//   }, []);
// console.log(result);
//   const fetchParticipants = async (contract: ethers.Contract) => {
//     const participantsList = await contract.getParticipants();
//     setParticipants(participantsList);
//   };

//   const handleOperation = async () => {
//     if (!input1) return alert("Please enter the participation fee (0.001 ether)");
//     if (!userAddress) return alert("You cannot perform operation");
//     try {
//       setLoading(true);
//       await state.contract!.enter({ value: ethers.formatEther(input1) });
//       // await state.contract!.enter({ value: parseInt(input1) });
//       fetchParticipants(state.contract!);
//       setLoading(false);
//     } catch (error) {
//       setLoading(false);
//       console.error("Error while participating:", error);
//     }
//   };

//   const handleGetResult = async () => {
//     if (!userAddress) return alert("You cannot perform operation");
//     if (!isManager) return alert("Only the manager can pick the winner");
//     try {
//       setLoading(true);
//        await state.contract!.pickWinner();
//       const response = await state.contract!.winner_address();

//       setResult(`Winner: ${response}`);
//       fetchParticipants(state.contract!); // Update participants after picking winner
//       setLoading(false);
//     } catch (error) {
//       setLoading(false);
//       console.error("Error while picking winner:", error);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
//       <div className="bg-black p-8 rounded shadow-md w-full max-w-lg">
//         <h1 className="text-2xl font-bold mb-6 text-center">Lottery System</h1>

//         <h3 className="text-sm font-bold text-center mb-4">
//           Your Address: {userAddress || "Not connected"}
//         </h3>

//         {/* Participation Input */}
//         <div className="mb-6">
//           <input
//             type="number"
//             className="w-full p-2 mb-4 border rounded"
//             placeholder="Enter your participation fee (0.001 ETH)"
//             value={input1}
//             onChange={(e) => setInput1(e.target.value)}
//             disabled={loading}
//           />
//           <button
//             onClick={handleOperation}
//             className="w-full bg-blue-500 text-black p-2 rounded disabled:opacity-50"
//             disabled={loading}
//           >
//             {loading ? "Participating..." : "Participate"}
//           </button>
//         </div>

//         {/* Manager Section */}
//         {isManager && (
//           <div className="mt-6">
//             <button
//               onClick={handleGetResult}
//               className="w-full bg-green-500 text-black p-2 rounded disabled:opacity-50"
//               disabled={loading}
//             >
//               {loading ? "Picking Winner..." : "Pick Winner"}
//             </button>
//           </div>
//         )}

//         {/* Display Result */}
//         {result && (
//           <div className="text-center mt-4 text-xl font-bold text-green-600">
//             {result}
//           </div>
//         )}

//         {/* Participants List */}
//         <div className="mt-4">
//           <h2 className="font-semibold mb-2">Participants:</h2>
//           <ul className="space-y-2">
//             {participants.length === 0 ? (
//               <li>No participants yet</li>
//             ) : (
//               participants.map((participant, index) => (
//                 <li key={index} className="text-white">{participant}</li>
//               ))
//             )}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }
