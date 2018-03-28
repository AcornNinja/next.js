import Link from 'next/link';
import Layout from './components/Layout';
import { bindActionCreators } from 'redux'
import React, { Component } from 'react';
import Head from 'next/head';
import withRedux from 'next-redux-wrapper';
//actions
import {loadSerial}  from '../actions/search-action';
//store
import { initStore } from '../reducers/search-reducer';
import {connect} from 'react-redux'
import { Provider } from 'react-redux'

class Index extends Component {
   static async getInitialProps({store}) {
      await store.dispatch(loadSerial());
        //const res = await axios.get(`http://api.tvmaze.com/search/shows?q=batman`)
        //return { data: res.data};
        //{this.props.data.map((d,i)=><li key={i}>{d.show.name}</li>)}
   }
    componentDidMount() {
        this.props.loadSerial();
    }
    render () {
        return (

            <Layout>
                <Head><title>Home</title></Head>
            </Layout>
        )
    }
}
const mapStateToProps = state => ({
    serials: state.serials.serials
});
const mapDispatchToProps = (dispatch) => {
    return{
        loadSerial:() => dispatch(loadSerial())
    }
};

export default withRedux(initStore,mapStateToProps,mapDispatchToProps)(Index);
