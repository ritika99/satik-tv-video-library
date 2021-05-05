import "./styles.css";
import {Navigation} from "./components/navigation/navigation"
import {Router} from "./components/router/router";

export default function App() {
  return (
    <div className="App">
      <Router />
      <Navigation />
    </div>
  );
}
