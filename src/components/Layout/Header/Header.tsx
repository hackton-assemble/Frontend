import { useRecoilState } from "recoil";
import SearchHeader from "./SearchHeader";
import MainHeader from "./MainHeader";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { isSearchPageState } from "../../../store/isSearchPageState";

const Header = () => {
  const [isSearchPage, setIsSearchPage] = useRecoilState(isSearchPageState)
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/search') {
      setIsSearchPage(true)
    } else {
      setIsSearchPage(false)
    }
  }, [location, isSearchPage]);

  if (isSearchPage) return <SearchHeader />
  return <MainHeader />
}

export default Header;
