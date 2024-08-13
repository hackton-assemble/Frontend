import { atom } from 'recoil';

export const isSearchPageState = atom<boolean>({
  key: 'isSearchPageState',
  default: false,
});

export const isDetailPageState = atom<boolean>({
  key: 'isDetailPageState',
  default: false,
});
