import { DeployFuncParam, deployments } from "../utils";
import { create } from "../create"
import { ethers } from "ethers";

export const optionDefinitions = [
    { name: 'task', defaultOption: true },
    { name: 'manager', alias: 'm', type: String },
    { name: "network", alias: 'n', type: String },
]

const func = async (params: DeployFuncParam) => {
    const contractInstance = "src/dollar/UbiquityGovernance.sol:UbiquityGovernance";
    const { env, args } = params;
    const uad_manager_deployments = await deployments("UbiquityAlgorithmicDollarManager");
    const manager = args.manager ?? uad_manager_deployments.address;


    const { result, stderr } = await create({ ...env, name: args.task, network: args.network, contractInstance, constructorArguments: [manager] });

    const debtCoupon = result.deployedTo;

    const signer = new ethers.Wallet(env.privateKey, new ethers.providers.JsonRpcProvider(env.rpcUrl));
    console.log("Updating governance token address of UbiquityAlgorithmicDollarManager", { debtCoupon, uad_manager: manager })
    const uad_manager_contract = new ethers.Contract(manager, uad_manager_deployments.abi, signer)
    const tx = await uad_manager_contract.setGovernanceTokenAddress(debtCoupon);
    const receipt = await tx.wait();
    console.log("uGov address updated successfully!!! hash: ", receipt.transactionHash);

    return !stderr ? "succeeded" : "failed"
}
export default func;