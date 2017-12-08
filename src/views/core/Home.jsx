import React, { Component } from 'react';
//import Header from '../views/header';
// import Footer from './ooter';
import Login from './Login'
import Header from './support/Header'
import Footer from './support/Footer'

class Home extends Component{

    render(){
        return(
            <div>
                <Header/>
                <Login/>
            </div>


        );
    }



    
}
export default Home;