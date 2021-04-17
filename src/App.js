import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Users from "./Users/index";
import Todos from "./Todos/index";
function App() {
  
  return (
    <Router>
      <MainLayout>
      
        </MainLayout>
        <Route path="/users" render={(props) => <Users {...props} />} />
      <Route path="/todos" render={(props) => <Todos {...props} />} />
      </Router>
  );
}

export default App;
