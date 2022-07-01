import "./App.css";
import Navbar from "./components/Navbar";
import AllRoutes from "./routes/Routes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
    </div>
  );
}

export default App;
