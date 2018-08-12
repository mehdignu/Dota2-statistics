import React, {Component} from 'react';
import Search from './containers/Search/Search';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import { createStore } from 'redux';
import reducer from './store/reducer';

const store = createStore(reducer);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Search/>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
