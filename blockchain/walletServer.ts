// import { ethers } from 'ethers';


// export const connectWallet = async (): Promise<{
//     provider: ethers.BrowserProvider; //goooo
//     // provider: ethers.JsonRpcProvider;
//     signer: ethers.Signer;
//     walletAddress: string | null
//   }> => {
//     if (typeof window.ethereum !== "undefined") {
//       try {
//         // Request MetaMask account access
//         await window.ethereum.request({ method: "eth_requestAccounts"});
  
//         // Create a provider and signer
//         // const provider = new ethers.BrowserProvider(window.ethereum);
//         // const provider = new ethers.JsonRpcProvider(rpc)
//         const provider =  new ethers.BrowserProvider(window.ethereum)//goo
//         // await provider.send('eth_requestAccounts', []);
//         const signer = await provider.getSigner();

//         const walletAddress = await signer.getAddress()
  
//         return { provider, signer, walletAddress };
//       } catch (err) {
//         console.error("MetaMask connection failed:", err);
//         throw new Error("User denied wallet connection");
//       }
//     } else {
//       throw new Error("MetaMask is not installed");
//     }
//   };




import { ethers } from 'ethers'

const HARDHAT_CHAIN_ID = '0x7A69' // 31337 in hex

export const connectWallet = async (): Promise<{
  provider: ethers.BrowserProvider
  signer: ethers.Signer
  walletAddress: string
}> => {
  if (!window.ethereum) {
    throw new Error('MetaMask is not installed')
  }

  try {
    // 1️⃣ Request wallet connection
    await window.ethereum.request({
      method: 'eth_requestAccounts',
    })

    // 2️⃣ Ensure Hardhat network
    const currentChainId = await window.ethereum.request({
      method: 'eth_chainId',
    })

    if (currentChainId !== HARDHAT_CHAIN_ID) {
      try {
        // Try switching network
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: HARDHAT_CHAIN_ID }],
        })
      } catch (switchError: any) {
        // 3️⃣ If network not added, add it
        if (switchError.code === 4902) {
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainId: HARDHAT_CHAIN_ID,
                chainName: 'Hardhat Local',
                rpcUrls: ['http://127.0.0.1:8545'],
                nativeCurrency: {
                  name: 'ETH',
                  symbol: 'ETH',
                  decimals: 18,
                },
              },
            ],
          })
        } else {
          throw switchError
        }
      }
    }

    // 4️⃣ Create provider & signer
    const provider = new ethers.BrowserProvider(window.ethereum)
    const signer = await provider.getSigner()
    const walletAddress = await signer.getAddress()

    return { provider, signer, walletAddress }
  } catch (err) {
    console.error('Wallet connection failed:', err)
    throw new Error('Wallet connection rejected')
  }
}
