import './App.css';
import AuthUser from "./components/login/login"
// import UserProfile from "./components/userhome/userHome"

function App() {
  return (
    <div className="App">
      <h1>welcome to login page</h1>
      <AuthUser />
      {/* <UserProfile /> */}
    </div>
  );
}

export default App;
