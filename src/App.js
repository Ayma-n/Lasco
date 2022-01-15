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
import { AuthProvider, useAuth } from "./contexts/AuthContext";

function App() {

  const user = "johnnyrose";
  const navBarPages = []

  const { currentUser } = useAuth();

  function RequireAuth({ children, redirectLink }) {
    return (currentUser ? children : <Navigate to={redirectLink}></Navigate>);
  }

  return (<>
    <AuthProvider>
      <div id="App">
        <Router>
          <body>

          </body>
          {/*comments out feedpost for testing purposes */}
          {/* <FeedPost></FeedPost> */}
          {/* comments out profile for testing purposes */}
          {/* <Profile></Profile> */}
          {/* <SearchBarPage></SearchBarPage> */}
          {/* <View></View> */}

          {/* https://stackoverflow.com/questions/70393557/react-routes-not-showing-when-using-routes */}
          <Routes>
            <Route path="/" element={<Landing />} />
            {/* <Route path="/feed" element={<Portal currentPage={FeedPost} />} /> */}
            <RequireAuth>
              <Route path="/feed" element={<Portal currentPage={FeedPost} />} />
              <Route path={`/profiles/${user}`} element={< Portal currentPage={Profile} />} />
              <Route path="/search" element={<Portal currentPage={SearchBarPage} />} />
            </RequireAuth>
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
