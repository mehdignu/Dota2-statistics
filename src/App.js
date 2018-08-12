import React, {Component} from 'react';
import Search from './containers/Search/Search';
import Result from './containers/Result/Result';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './store/reducer';

const store = createStore(reducer);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route path="/analytics" component={Result}/>
                        <Route path="/" exact component={Search}/>
                    </Switch>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
