import React, { Component } from 'react';

class Login extends Component{

    constructor(props){

        super(props);

        this.state = {
            username: '',
            password: '',
            nameError: '',
            passError: ''
        }
    }

    //saves the change in username to state
    stateUsername(e){

        this.setState({username:e.target.value});
        this.setState({nameError:''});
        console.log('log state username');

    }

    //save the password

    statePassword(e){

        this.setState({password:e.target.value});
        this.setState({passError:''});

    }

    //validate and handle login
    handleLogin(e){
        e.preventDefault();

        //check if username and pass is empty
        let user = this.state.username
        let pass = this.state.password;

        if(pass==='' || user===''){

            if(pass==='' || pass==='')
            {this.setState({passError:'Please provide a password'});}
            if(user==='' || user === null)
            {this.setState({nameError:'Please provide a username'});}


        }
        else{
            console.log('not blank');
        }


    }

    render(){
        return(
            <div><br/>

            <div className="row">
            <div className="col s12 m8 l5 card push-l3 push-m2">

                <h2 className="center-align sans">Login </h2>
                <form onSubmit={ this.handleLogin.bind(this) }>
                <div className="row">
                        <div className="input-field col s12">
                        <input id="user" type="text" className="validate" onChange={ this.stateUsername.bind(this) } />
                        <label htmlFor="user">Username</label>
                        <span className="red-text" >{ this.state.nameError } </span>
                         </div>
                       
                    </div>
                   

                    <div className="row">
                        <div className="input-field col s12">
                        <input id="password" type="password" className="validate" onChange={ this.statePassword.bind(this) }/>
                        <label htmlFor="password">Password</label>
                        <span className="red-text" >{ this.state.passError } </span>
                        </div>
                       
                    </div>
                  

                    <div className="row">
                        <input type="submit" className="btn grey right" value="Login" name="login"/>
                    </div>
                </form>
            </div>
            </div>

            </div>

        );
    }
}
export default Login;