import { getFooterCopy, getFullYear } from "../utils/utils";
import './Footer.css';

export default function Footer() {
  return (
    <div className="App-footer" data-testid="App-footer">
      <p>Copyright {getFullYear()} - holberton School</p>
      <p>{getFooterCopy(false)}</p>
    </div>
  );
}
