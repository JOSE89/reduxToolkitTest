import UserList from "./components/UserList";
import { Provider } from "react-redux"
import store from './store'
import "bootstrap/dist/css/bootstrap.css";
function App() {
  return (
    <Provider store={store}>
      <UserList />
    </Provider>
  );
}

export default App;
