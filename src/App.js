import React, {Component} from 'react';
import Layout from './components/Layout/Layout';
import DotaStats from './containers/DotaStats/DotaStats';

class App extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <DotaStats />
                </Layout>
            </div>
        );
    }
}

export default App;
