import logo from './logo.svg';
import './App.css';
import FeedPost from './FeedPost';
import Profile from './Profile';
import Login from './Login';
import Register from './Register';
import SearchBar from './SearchBar';
import View from './ViewPage';
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
          <Route path="/feedpost" element={<FeedPost />} />
          <Route path={`/profiles/${user}`} element={< Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  </>);
}

export default App;
