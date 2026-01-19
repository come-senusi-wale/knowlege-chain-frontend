import { ethers, parseUnits, hexlify, isAddress, getAddress, BigNumberish, parseEther,  } from 'ethers';
import { nftContractAddress, usdcContractAddress } from "./constant";
import { usdcTokenAbi } from "./abi/usdcTokonAbi";
import { nftTokenAbi } from "./abi/tokenAbi";



export const approve = async (amount: any, signer: any) => {
    const validContractAddress = getAddress(usdcContractAddress);
    const usdcContract = new ethers.Contract(validContractAddress, usdcTokenAbi, signer);
  
    try {
        const validNftContractAddress = getAddress(nftContractAddress);
        const tx = await usdcContract.approve(validNftContractAddress, amount);
  
        console.log('tx', tx)
  
        console.log("Transaction sent:", tx.hash);
  
        await tx.wait(); // Wait for the transaction to be mined
        console.log("Transaction confirmed:", tx);
        return {
            status: true,
            tx
        }
    } catch (err: any) {
      console.error("Failed to write to contract:", err);

        // 👇 Handle user rejection properly
        if (err.code === 4001 || err.code === 'ACTION_REJECTED') {
            return {
            status: false,
            message: 'Transaction cancelled by user',
            }
        }

      return {
            status: false,
            message: "Unable to perform Transaction"
      }
    }
};

export const mint = async (signer: any) => {
    const validContractAddress = getAddress(nftContractAddress);
    const contract = new ethers.Contract(validContractAddress, nftTokenAbi, signer);
  
    try {
        const tx = await contract.mint();
  
        console.log('tx', tx)
  
        console.log("Transaction sent:", tx.hash);
  
        await tx.wait(); // Wait for the transaction to be mined
        console.log("Transaction confirmed:", tx);
        return {
            status: true,
            tx
        }
    } catch (err) {
      console.error("Failed to write to contract:", err);
      return {
        status: false,
        message: "Unable to perform Transaction"
     }
    }
};

