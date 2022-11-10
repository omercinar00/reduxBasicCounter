import { Provider } from "react-redux";
import "./App.css";
import Counter from "./components/counter/Counter";
import { store } from "./redux";

function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <Counter />
      </Provider>
      
    </div>
  );
}

export default App;
