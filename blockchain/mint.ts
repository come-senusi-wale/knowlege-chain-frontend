import { ethers, formatEther, parseUnits } from "ethers";
import { approve, mint } from "./contractFunction.instance";


export const approveContract = async(
    amount: number,
    signer: any
) =>{
    try {
        if (!amount) return{status: false, result: "amount is required"}

        const amountWei = parseUnits(amount.toString(), 18); // 10 tokens with 18 decimals
        
        const tx = await approve(amountWei, signer)

        if (!tx.status) {
            return{status: false, result: tx.message}
        }
        return{status: true, result: tx}
    } catch (error) {
        console.log('erorr unable to add liquidity', error) 
        return{status: false, result: "Unable to perform transaction"}
    }
}


export const mintNft = async(signer: any) =>{
    try {      
        const tx = await mint(signer)

        if (!tx.status) {
            return{status: false, result: tx}
        }
        return{status: true, result: tx}
    } catch (error) {
        console.log('erorr unable to add liquidity', error) 
        return{status: false, result: "Unable to perform transaction"}
    }
}