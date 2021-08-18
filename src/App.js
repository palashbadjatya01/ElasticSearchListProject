import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './component/common/Styles.css';
import {Layout} from './component/Layout.js';
import Home from './pages/Home';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Layout>
              <div className="LayoutStyles">
                <Route exact path='/' component={Home}/>
              </div>
            </Layout>
          </Switch>
        </Router> 
      </React.Fragment>
   )
  }
}
export default App;

