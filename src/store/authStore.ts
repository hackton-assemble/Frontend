import { atom } from "recoil";

export const userInfoState = atom<{
  userNickname: string;
  uuid: string;
  accessToken: string;
} | null>({
  key: 'userInfoState',
  default: null,
});
