import { useRecoilState } from "recoil";
//import SearchHeader from "./SearchHeader";
import MainHeader from "./MainHeader";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { isSearchPageState } from "../../../store/pageStore";

const Header = () => {
  //const [isDetailPage, setIsDetailPage] = useRecoilState(isDetailPageState)
  const [isSearchPage, setIsSearchPage] = useRecoilState(isSearchPageState)
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/search' || location.pathname === '/mypage' || location.pathname === '/detail') {
      setIsSearchPage(true);
    } else {
      setIsSearchPage(false);
    }
  }, [location, isSearchPage]);

  /**
  useEffect(() => {
    if (location.pathname === '/detail') {
      setIsDetailPage(true)
    } else {
      setIsDetailPage(false)
    }
  }, [location, isDetailPage]);
  */

  //if (isDetailPage) return <SearchHeader />
  if (isSearchPage) return <></>
  else return <MainHeader />
}

export default Header;
