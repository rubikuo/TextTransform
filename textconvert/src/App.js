import Header from "./components/Header";
import Home from "./components/Home";
import FileContextProvider from "./contexts/FileContext";

function App() {
  return (
    <div className="App">
      <FileContextProvider>
        <Header />
        <Home />
      </FileContextProvider>
    </div>
  );
}

export default App;
