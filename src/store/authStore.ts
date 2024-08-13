import { atom } from "recoil";

export const userInfoState = atom<{
  userNickname: string;
  uuid: string;
} | null>({
  key: 'userInfoState',
  default: null
});
