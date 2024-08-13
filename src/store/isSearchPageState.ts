import { atom } from 'recoil';

export const isSearchPageState = atom<boolean>({
  key: 'isSearchPageState',
  default: false,
});
