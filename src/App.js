import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import UserDetails from './Components/UserDetails';
import UserList from './Components/UserList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path='/'>
      <UserList/>
      </Route>
      <Route exact path='/user/:id'>
            <UserDetails/>
      </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
