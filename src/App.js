import './App.css';
import FeedPost from './FeedPost';
import Profile from './Profile';
import Login from './Login';
import Signup from './Signup';
import SearchBarPage from './SearchBarPage';
import ViewPage from './ViewPage';
import Landing from './Landing';
import About from './About';
import PortalNav from './PortalNav';
import Portal from './Portal';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// We will import AuthContext.Provider which will provide us with the value object,
// i.e., the email, the signup method, etc.
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from './PrivateRoute';

function App() {

  const user = "johnnyrose";
  const navBarPages = []

  return (<>
    <AuthProvider>
      <div id="App">
        <Router>

          {/* https://stackoverflow.com/questions/70393557/react-routes-not-showing-when-using-routes */}
          <Routes>
            <Route path="/" element={<Landing />} />

            {/* Paths that require a PrivateRoute (i.e., are only accessible via auth) */}

            <Route path="/feed" element={<PrivateRoute redirectLink="/login">
              <Portal currentPage={FeedPost} />
            </PrivateRoute>} />

            <Route path={`/profiles/${user}`} element={<PrivateRoute redirectLink="/login">
              <Portal currentPage={Profile} />
            </PrivateRoute>} />

            <Route path={`/search`} element={<PrivateRoute redirectLink="/login">
              <Portal currentPage={SearchBarPage} />
            </PrivateRoute>} />

            <Route path="/view" element={< ViewPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/about" element={<About />} />
            <Route path="/navbar" element={<PortalNav />} />
            {/* <Route path="/community" element={<Community />} />
          <Route path="/governance" element={<Governance />} /> */}
          </Routes>
        </Router>
      </div>
    </AuthProvider>
  </>);
}

export default App;
