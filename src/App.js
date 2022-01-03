import logo from './logo.svg';
import './App.css';
import FeedPost from './FeedPost';
import Profile from './Profile';
import Login from './Login';
import Register from './Register';
import SearchBar from './SearchBar';
import View from './View';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {

  const user = "johnnyrose";

  return (<>
  <Router>
  <div className="App">
  
    

      <body>
        
      </body>
      {/*comments out feedpost for testing purposes */}
      {/* <FeedPost></FeedPost> */}
      {/* comments out profile for testing purposes */}
      {/* <Profile></Profile> */}
      {/* <SearchBar></SearchBar> */}
      {/* <View></View> */}

    <Routes>
      <Route path="/feedpost" component={FeedPost}/>
      <Route path={`/profiles/${user}`} component={Profile}/>
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
    </Routes>
    
    
    
    </div>
    </Router>
    </>);
}

export default App;
