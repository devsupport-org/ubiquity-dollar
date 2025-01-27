import { OptionDefinition } from "command-line-args";

import { DeployFuncParam } from "../../shared";
import { create } from "../create"
import { constants } from "ethers"


export const optionDefinitions: OptionDefinition[] = [
    { name: 'task', defaultOption: true },
    { name: 'manager', alias: 'm', type: String },
    { name: "sablier", alias: 's', type: String },
    { name: "network", alias: 'n', type: String },
]

const func = async (params: DeployFuncParam) => {
    const contractInstance = "src/dollar/Bonding.sol:Bonding";
    const { env, args } = params;
    const manager = args.manager;
    const sablier = args.sablier ?? constants.AddressZero;

    const { stderr } = await create({ ...env, name: args.task, network: args.network, contractInstance, constructorArguments: [manager, sablier] });
    return !stderr ? "succeeded" : "failed"
}
export default func;