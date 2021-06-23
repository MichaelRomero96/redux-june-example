import MyComponent from "./components/MyComponent";
//redux
import { Provider } from 'react-redux'
import store from "./redux/store";

function App() {
  return (
    <Provider
      store={store}
    >
      <MyComponent />
    </Provider>
  );
}

export default App;
