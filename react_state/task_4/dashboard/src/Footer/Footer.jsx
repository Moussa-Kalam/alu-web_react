/* eslint-disable jsx-a11y/anchor-is-valid */
import { useContext } from "react";
import { getFooterCopy, getFullYear } from "../utils/utils";
import './Footer.css';
import AppContext from "../App/AppContext";

export default function Footer() {
  const { user } = useContext(AppContext);
  return (
    <div className="App-footer" data-testid="App-footer">
      <p>Copyright {getFullYear()} - holberton School {user.isLoggedIn && <span>| <a href="#">contact us</a></span>}</p>
      <p>{getFooterCopy(false)}</p>
    </div>
  );
}
