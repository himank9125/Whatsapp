import { Provider } from "react-redux";
import "./App.css";
import store from "./redux/Store";
import WhatsApp from "./WhatsApp";

function App() {
  return (
    <Provider store={store}>
      <WhatsApp />
    </Provider>
  );
}

export default App;
