const { ethers } = require('ethers');

const privatekey = " "; /*private key wallet*/
const rpc = 'https://api.roninchain.com/rpc'; 
const provider = new ethers.JsonRpcProvider(rpc, 2020, { batchMaxCount: 1 });
const Wallet = new ethers.Wallet(privatekey, provider);
const contractAbi = [
    {
        "inputs": [],
        "name": "activateStreak",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]

const contract = new ethers.Contract('0x9d3936dbd9a794ee31ef9f13814233d435bd806c',contractAbi,Wallet);

async function activateStreak(){
    try{
        const connectContract = await contract.activateStreak();
        await connectContract.wait();
        console.log("Activada: /n", connectContract);
    }catch(e){
        console.log("Error al activar:", e);
    }
}

activateStreak();
