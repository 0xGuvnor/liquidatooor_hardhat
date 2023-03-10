/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { FlashSwap, FlashSwapInterface } from "../../contracts/FlashSwap";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenIn",
        type: "address",
      },
      {
        internalType: "address",
        name: "_tokenOut",
        type: "address",
      },
      {
        internalType: "uint24",
        name: "_fee",
        type: "uint24",
      },
      {
        internalType: "uint256",
        name: "_amountOut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amountInMaximum",
        type: "uint256",
      },
    ],
    name: "swap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506105bb806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80633bf237d514610030575b600080fd5b61004a60048036038101906100459190610322565b61004c565b005b6100598585858585610061565b505050505050565b60008573ffffffffffffffffffffffffffffffffffffffff1663095ea7b373e592427a0aece92de3edee1f18e0157c058615647fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6040518363ffffffff1660e01b81526004016100d29291906103bb565b6020604051808303816000875af11580156100f1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610115919061041c565b5060006040518061010001604052808873ffffffffffffffffffffffffffffffffffffffff1681526020018773ffffffffffffffffffffffffffffffffffffffff1681526020018662ffffff1681526020013073ffffffffffffffffffffffffffffffffffffffff168152602001428152602001858152602001848152602001600073ffffffffffffffffffffffffffffffffffffffff16815250905073e592427a0aece92de3edee1f18e0157c0586156473ffffffffffffffffffffffffffffffffffffffff1663db3e2198826040518263ffffffff1660e01b81526004016101ff9190610527565b6020604051808303816000875af115801561021e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102429190610558565b91505095945050505050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061027e82610253565b9050919050565b61028e81610273565b811461029957600080fd5b50565b6000813590506102ab81610285565b92915050565b600062ffffff82169050919050565b6102c9816102b1565b81146102d457600080fd5b50565b6000813590506102e6816102c0565b92915050565b6000819050919050565b6102ff816102ec565b811461030a57600080fd5b50565b60008135905061031c816102f6565b92915050565b600080600080600060a0868803121561033e5761033d61024e565b5b600061034c8882890161029c565b955050602061035d8882890161029c565b945050604061036e888289016102d7565b935050606061037f8882890161030d565b92505060806103908882890161030d565b9150509295509295909350565b6103a681610273565b82525050565b6103b5816102ec565b82525050565b60006040820190506103d0600083018561039d565b6103dd60208301846103ac565b9392505050565b60008115159050919050565b6103f9816103e4565b811461040457600080fd5b50565b600081519050610416816103f0565b92915050565b6000602082840312156104325761043161024e565b5b600061044084828501610407565b91505092915050565b61045281610273565b82525050565b610461816102b1565b82525050565b610470816102ec565b82525050565b61047f81610253565b82525050565b6101008201600082015161049c6000850182610449565b5060208201516104af6020850182610449565b5060408201516104c26040850182610458565b5060608201516104d56060850182610449565b5060808201516104e86080850182610467565b5060a08201516104fb60a0850182610467565b5060c082015161050e60c0850182610467565b5060e082015161052160e0850182610476565b50505050565b60006101008201905061053d6000830184610485565b92915050565b600081519050610552816102f6565b92915050565b60006020828403121561056e5761056d61024e565b5b600061057c84828501610543565b9150509291505056fea2646970667358221220aaab30a104d284bb97e7328b9583f66b9985950ac636889d8e4e37cbf6b436b864736f6c634300080a0033";

type FlashSwapConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FlashSwapConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FlashSwap__factory extends ContractFactory {
  constructor(...args: FlashSwapConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<FlashSwap> {
    return super.deploy(overrides || {}) as Promise<FlashSwap>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): FlashSwap {
    return super.attach(address) as FlashSwap;
  }
  override connect(signer: Signer): FlashSwap__factory {
    return super.connect(signer) as FlashSwap__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FlashSwapInterface {
    return new utils.Interface(_abi) as FlashSwapInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FlashSwap {
    return new Contract(address, _abi, signerOrProvider) as FlashSwap;
  }
}
