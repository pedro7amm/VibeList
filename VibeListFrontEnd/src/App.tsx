import { Button } from "primereact/button";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Welcome to VibeList!</h1>
      <p>Your ultimate destination for creating your lists</p>
      <Button label="Get Started" icon="pi pi-chevron-right" className="btn btn-primary">
        Get Started
      </Button>
    </div>
  );
}

export default App;
