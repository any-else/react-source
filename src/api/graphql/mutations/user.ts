import gql from "graphql-tag";

export const updateUserMetadataGQL = gql`
  mutation UpdateUserMetadata(
    $updateUserMetadataInput: UpdateUserMetadataInput!
  ) {
    updateUserMetadata(updateUserMetadataInput: $updateUserMetadataInput) {
      status
    }
  }
`;

export const sendOtpCodeGQL = gql`
  mutation SendOtpCode($sendOtpCodeInput: sendOtpCodeInput!) {
    sendOtpCode(sendOtpCodeInput: $sendOtpCodeInput) {
      status
    }
  }
`;

export const updateUserV2GQL = gql`
  mutation UpdateUserV2($updateUserV2Input: UpdateUserV2Input!) {
    updateUserV2(updateUserV2Input: $updateUserV2Input) {
      status
    }
  }
`;

export const deleteUserV2GQL = gql`
  mutation DeleteUserV2 {
    deleteUserV2 {
      status
    }
  }
`;

export const createTransactionV2GQL = gql`
  mutation CreateTransactionV2(
    $createTransactionV2Input: CreateTransactionV2Input!
  ) {
    createTransactionV2(createTransactionV2Input: $createTransactionV2Input) {
      type
      currency
      balance
    }
  }
`;

export const createFeedbackGQL = gql`
  mutation CreateFeedback($createFeedbackInput: CreateFeedbackInput!) {
    createFeedback(createFeedbackInput: $createFeedbackInput) {
      status
    }
  }
`;

export const lockCurrencyGQL = gql`
  mutation LockCurrency($lockCurrencyInput: LockCurrencyInput!) {
    lockCurrency(lockCurrencyInput: $lockCurrencyInput) {
      status
    }
  }
`;

export const getFreeCoinsGQL = gql`
  mutation GetFreeCoins {
    getFreeCoins {
      nextAvailableTime
      status
    }
  }
`;

export const checkinUserGQL = gql`
  mutation CheckinUser($input: CheckinUserInput) {
    checkinUser(input: $input) {
      userId
      lastCheckin
      wallets {
        balance
        currency
        type
        sequence
      }
    }
  }
`;
