import "./App.css";
// import HomePage from "./components/HomePage";
import Navbar from "./components/UI Components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EncodeFile from "./components/EncodeFile";
import DecodeFile from "./components/DecodeFile";
import EncodePassword from "./components/EncodePassword";

function App() {
  return (
    <>
      <Navbar />

      <Switch>
        {/* <Route path="/" component={HomePage} /> */}
        <Route path="/enrypto" component={EncodeFile} />
        <Route path="/derypto" component={DecodeFile} />
        <Route path="/passencrypto" component={EncodePassword} />
        {/* <Route path="/crypto" component={HomePage} /> */}
      </Switch>
    </>
  );
}

export default App;
