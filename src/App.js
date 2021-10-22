import NavBar from './Components/Navbar/Navbar'
import Home from './Containers/Home/Home'
import Contact from './Containers/Contact/Contact'
import AddArticles from './Containers/AddArticles/AddArticles'
import Article from './Containers/Article/Article'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Router basename={process.env.PUBLIC_URL}>
      <NavBar />
        <Switch>
          <Route path ="/" exact component={Home} />
          <Route path ="/ecrire" exact component={AddArticles} />
          <Route path ="/contact" exact component={Contact} />
          <Route path ="/articles/:slug" exact component={Article} />
        </Switch>
    </Router>

    </>
  );
}

export default App;
