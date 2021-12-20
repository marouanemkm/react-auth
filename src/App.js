import Home from './Pages/Home/Home';
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateHome from './Pages/PrivateHome/PrivateHome';
import PrivateRoute from './Components/PrivateRoute';
 
function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <PrivateRoute exact path="/loggedhome" component={PrivateHome} />
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;