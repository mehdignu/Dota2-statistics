import React, {Component} from 'react';
import Layout from '../../hoc/Layout/Layout';
import DotaStats from '../DotaStats/DotaStats';
import Profile from '../../components/Stats/Profile/Profile';
import * as actiontypes from "../../store/actions";
import {connect} from "react-redux";



class result extends Component {
    render() {
        return (
            <Layout>
                <Profile/>
            </Layout>
        );
    }
}

const mapStateToProps = state => {
    return {
        name: state.name
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onSearch: (name) => dispatch({type: actiontypes.SEARCH, name: name})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(result);
