import './styles.css';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from "../router/Routes";
import { Menu } from "../components/Menu";
import { GlobalContext } from "../contexts/Global"

function App() {

  return (
    <div className="App">
      <GlobalContext>
        <BrowserRouter>
          <Menu />
          <AppRoutes />
        </BrowserRouter>
      </GlobalContext>
    </div>
  );
}

export default App;
