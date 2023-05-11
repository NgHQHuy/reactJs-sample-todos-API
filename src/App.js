import "./App.scss";
import Home from "./views/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router basename="/reactJs-sample-todos-API">
      <div className="App">
        <header className="App-header">
          <div className="top-nav">
            <span style={{ "--i": "1", color: "red" }}>T</span>
            <span style={{ "--i": "2" }}>O</span>
            <span style={{ "--i": "3", color: "#00A36C" }}>D</span>
            <span style={{ "--i": "4" }}>O</span>
            <span style={{ "--i": "5" }}>S</span>
          </div>
        </header>
        <main className="App-main">
          <Home />
        </main>
        <ToastContainer
          position="top-right"
          style={{
            textAlign: "left",
            fontWeight: "bold",
          }}
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    </Router>
  );
}

export default App;
