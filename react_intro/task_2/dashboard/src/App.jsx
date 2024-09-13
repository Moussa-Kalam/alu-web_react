import "./App.css";
import Notifications from "./Notifications";
import logo from "./assets/logo.jpeg";
import { getFooterCopy, getFullYear } from "./utils";

function App() {
  return (
    <div className="container">
      <div className="root-notifications">
        <Notifications />
      </div>
      <div className="App-header">
        <img src={logo} alt="logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <form action="">
          <label htmlFor="email">
            email:
            <input type="email" id="email" />
          </label>
          <label htmlFor="password">
            password:
            <input type="password" id="password" />
          </label>
          <button>ok</button>
        </form>
      </div>

      <div className="App-footer">
        <p>Copyright {getFullYear()} - holberton School</p>
        <p>{getFooterCopy(false)}</p>
      </div>
    </div>
  );
}

export default App;
