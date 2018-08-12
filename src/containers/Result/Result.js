import React, {Component} from 'react';
import Layout from '../../hoc/Layout/Layout';
import DotaStats from '../DotaStats/DotaStats';

class result extends Component {
    render() {
        return (
            <Layout>
                <DotaStats/>
            </Layout>
        );
    }
}

export default result;
