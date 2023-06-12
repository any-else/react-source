import {
  deleteUserV2GQL,
  sendOtpCodeGQL,
  updateUserV2GQL,
} from "./../../mutations/user";
import apollo from "../../../../client";

const apolloClient = apollo.getInstance();

export const sendOtpCode = async (phoneNotVerified: string) => {
  const res = await apolloClient.mutate({
    mutation: sendOtpCodeGQL,
    variables: { sendOtpCodeInput: { phoneNotVerified } },
  });

  return res.data.sendOtpCode;
};

export const updateUser = async (updateUserV2Input: any) => {
  const res = await apolloClient.mutate({
    mutation: updateUserV2GQL,
    variables: { updateUserV2Input },
  });

  return res.data.updateUserV2;
};

export const deleteUser = async () => {
  const res = await apolloClient.mutate({
    mutation: deleteUserV2GQL,
    variables: {},
  });

  return res.data.deleteUserV2;
};
