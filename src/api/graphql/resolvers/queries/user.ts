import { updateUserMetadataGQL } from "./../../mutations/user";
import { getUserMetadataGQL } from "./../../queries/user";
import apollo from "../../../../client";
import { QueryOptions } from "@apollo/client";
import { MutationOptions } from "react-query";

const apolloClient = apollo.getInstance();

export const getUserMetadata = async (
  options: Partial<QueryOptions> = {}
): Promise<{
  isOnboarded: boolean;
  hasSeenWelcomePopup: boolean;
  hasReceivedWelcomeCoins: boolean;
}> => {
  const res = await apolloClient.query({
    ...options,
    query: getUserMetadataGQL,
  });

  return res.data.getUserMetadata;
};

export const updateUserMetadata = async (
  metadata:
    | { isOnboarded: true }
    | { hasSeenWelcomePopup: true }
    | { hasReceivedWelcomeCoins: true },
  options: Partial<MutationOptions> = {}
): Promise<{ status: string }> => {
  const res = await apolloClient.mutate({
    ...options,
    mutation: updateUserMetadataGQL,
    variables: { updateUserMetadataInput: { ...metadata } },
  });

  return res.data;
};

// export const getUserProfile = async (
//   userId: string,
//   options: Partial<QueryOptions> = {}
// ) => {
//   const res = await apolloClient.query({
//     ...options,
//     query: getUserProfileGQL,
//     variables: { userProfileInput: { userId } },
//   });

//   return res.data;
// };

// export const getUserV2 = async (
//   isSubscription: boolean,
//   options: Partial<QueryOptions> = {}
// ) => {
//   const res = await apolloClient.query({
//     ...options,
//     query: getUserV2GQL,
//     variables: { isSubscription },
//   });

//   return res.data.getUserV2;
// };

// export const listUserActivities = async (
//   userId: string,
//   options: Partial<QueryOptions> = {}
// ) => {
//   const res = await apolloClient.query({
//     ...options,
//     query: listUserActivitiesGQL,
//     variables: { getUserActivitiesInput: { userId } },
//   });

//   return res.data.listUserActivities;
// };

// export const listUserTransactions = async (
//   params: IParamsListUserTransactions,
//   options: Partial<QueryOptions> = {}
// ) => {
//   const res = await apolloClient.query({
//     ...options,
//     query: listUserTransactionsGQL,
//     variables: { listTransactionsInput: params },
//   });

//   return res.data.listUserTransactions;
// };

// export const findUser = async (
//   username: string,
//   options: Partial<QueryOptions> = {}
// ) => {
//   const res = await apolloClient.query({
//     ...options,
//     query: findUserGQL,
//     variables: { findUserInput: { term: username } },
//   });

//   return res.data.findUser;
// };

// export const getCryptoDepositAddress = async (
//   options: Partial<QueryOptions> = {}
// ) => {
//   const res = await apolloClient.query({
//     ...options,
//     query: getCryptoDepositAddressGQL,
//   });

//   return res.data.getCryptoDepositAddress;
// };

// export const estimateCryptoTransactionFee = async (
//   options: Partial<QueryOptions> = {},
//   params: IParamsEstimateCryptoTransactionFee
// ) => {
//   const res = await apolloClient.query({
//     ...options,
//     query: estimateCryptoTransactionFeeGQL,
//     variables: {
//       estimateCryptoTransactionFeeInput: params,
//     },
//   });

//   return res.data.estimateCryptoTransactionFee;
// };

// export const getWithdrawal = async (
//   withdrawalId: string,
//   options: Partial<QueryOptions> = {}
// ) => {
//   const res = await apolloClient.query({
//     ...options,
//     query: getWithdrawalGQL,
//     variables: { getWithdrawalInput: { withdrawalId } },
//   });

//   return res.data.getWithdrawal;
// };

// export const getDeposit = async (
//   depositId: string,
//   options: Partial<QueryOptions> = {}
// ) => {
//   const res = await apolloClient.query({
//     ...options,
//     query: getDepositGQL,
//     variables: { getDepositInput: { depositId } },
//   });

//   return res.data.getDeposit;
// };

// export const getConfig = async (options: Partial<QueryOptions> = {}) => {
//   const res = await apolloClient.query({
//     ...options,
//     query: getConfigGQL,
//   });

//   return res.data.getConfig;
// };

// export const getUserFeed = async (options: Partial<QueryOptions> = {}) => {
//   const userFeed = await apolloClient.query({
//     ...options,
//     query: getUserFeedGQL,
//     variables: {
//       leaderboardsGetLeaderboardInput: { limit: 10 },
//     },
//   });

//   return userFeed.data.getUserFeed;
// };
