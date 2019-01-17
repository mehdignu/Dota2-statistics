import React, {Component} from 'react';
import Search from './containers/Search/Search';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './store/reducer';
import Result from "./containers/Result/Result";
import Details from "./containers/Details/Details";
import Layout from './hoc/Layout/Layout';


const store = createStore(reducer);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact component={Search}/>

                        <Layout>
                            <Route path="/analytics" component={Result}/>
                            <Route path="/#:uid" exact component={Details}/>
                        </Layout>
                    </Switch>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
