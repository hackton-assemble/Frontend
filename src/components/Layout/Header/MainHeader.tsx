import React from 'react';
import {
  HeaderContainer,
  HeaderInner,
  SearchIcon,
  UserCircleIcon,
  SearchPrompt,
  Logo,
} from './MainHeader.style.ts';

const MainHeader = () => {
  return (
    <HeaderContainer>
      <HeaderInner>
        <SearchIcon src="src/assets/images/search.svg" alt="Search Icon" />
        <UserCircleIcon
          src="src/assets/images/user-circle.svg"
          alt="User Circle Icon"
        />
        <SearchPrompt>전통시장 시세를 검색하세요!</SearchPrompt>
      </HeaderInner>
      <Logo src="src/assets/images/logotype_howmuch.svg" alt="Logo" />{' '}
    </HeaderContainer>
  );
};

export default MainHeader;
