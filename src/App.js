import logo from './logo.svg';
import './App.css';
import FeedPost from './FeedPost';
import Profile from './Profile';
import Login from './Login';
import Signup from './Signup';
import SearchBar from './SearchBar';
import ViewPage from './ViewPage';
import Landing from './Landing';
import About from './About';
import NavBar2 from './NavBar2';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {

  const user = "johnnyrose";

  return (<>
    <div className="App">
      <Router>
        <body>

        </body>
        {/*comments out feedpost for testing purposes */}
        {/* <FeedPost></FeedPost> */}
        {/* comments out profile for testing purposes */}
        {/* <Profile></Profile> */}
        {/* <SearchBar></SearchBar> */}
        {/* <View></View> */}

      {/* https://stackoverflow.com/questions/70393557/react-routes-not-showing-when-using-routes */}
        <Routes>
          <Route path="/" element= {<Landing />} />
          <Route path="/feed" element={<FeedPost />} />
          <Route path={`/profiles/${user}`} element={< Profile />} />
          <Route path="/view" element={< ViewPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/search" element={<SearchBar />} />
          <Route path="/about" element={<About />} />
          <Route path="/navbar" element={<NavBar2 />} />
          {/* <Route path="/community" element={<Community />} />
          <Route path="/governance" element={<Governance />} /> */}
        </Routes>
      </Router>
    </div>
  </>);
}

export default App;
