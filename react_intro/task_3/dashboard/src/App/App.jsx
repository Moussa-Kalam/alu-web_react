import "./App.css";
import Notifications from "../Notifications/Notifications";
import { getFooterCopy, getFullYear } from "../utils";

function App() {
  return (
    <div className="container">
      <div className="root-notifications">
        <Notifications />
      </div>

      <div className="App-body" data-testid="App-body">
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

      <div className="App-footer" data-testid="App-footer">
        <p>Copyright {getFullYear()} - holberton School</p>
        <p>{getFooterCopy(false)}</p>
      </div>
    </div>
  );
}

export default App;
