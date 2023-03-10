/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../../../common";
import type {
  MockAggregator,
  MockAggregatorInterface,
} from "../../../../../../../@aave/core-v3/contracts/mocks/oracle/CLAggregators/MockAggregator";

const _abi = [
  {
    inputs: [
      {
        internalType: "int256",
        name: "initialAnswer",
        type: "int256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "int256",
        name: "current",
        type: "int256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "roundId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "updatedAt",
        type: "uint256",
      },
    ],
    name: "AnswerUpdated",
    type: "event",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "getTokenType",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "latestAnswer",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516102b43803806102b4833981810160405281019061003291906100b4565b806000819055506000817f0559884fd3a460db3073b7fc896cc77986f16e378210ded43186175bf646fc5f4260405161006b91906100fa565b60405180910390a350610115565b600080fd5b6000819050919050565b6100918161007e565b811461009c57600080fd5b50565b6000815190506100ae81610088565b92915050565b6000602082840312156100ca576100c9610079565b5b60006100d88482850161009f565b91505092915050565b6000819050919050565b6100f4816100e1565b82525050565b600060208201905061010f60008301846100eb565b92915050565b610190806101246000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063313ce5671461004657806350d25bcd14610064578063fcab181914610082575b600080fd5b61004e6100a0565b60405161005b91906100d7565b60405180910390f35b61006c6100a9565b604051610079919061010b565b60405180910390f35b61008a6100b2565b604051610097919061013f565b60405180910390f35b60006008905090565b60008054905090565b60006001905090565b600060ff82169050919050565b6100d1816100bb565b82525050565b60006020820190506100ec60008301846100c8565b92915050565b6000819050919050565b610105816100f2565b82525050565b600060208201905061012060008301846100fc565b92915050565b6000819050919050565b61013981610126565b82525050565b60006020820190506101546000830184610130565b9291505056fea2646970667358221220a256cb1b0342fea31184f735f04994628dada3ee7745f91a88e9696c3f70e88a64736f6c634300080a0033";

type MockAggregatorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockAggregatorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockAggregator__factory extends ContractFactory {
  constructor(...args: MockAggregatorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    initialAnswer: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MockAggregator> {
    return super.deploy(
      initialAnswer,
      overrides || {}
    ) as Promise<MockAggregator>;
  }
  override getDeployTransaction(
    initialAnswer: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(initialAnswer, overrides || {});
  }
  override attach(address: string): MockAggregator {
    return super.attach(address) as MockAggregator;
  }
  override connect(signer: Signer): MockAggregator__factory {
    return super.connect(signer) as MockAggregator__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockAggregatorInterface {
    return new utils.Interface(_abi) as MockAggregatorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockAggregator {
    return new Contract(address, _abi, signerOrProvider) as MockAggregator;
  }
}
