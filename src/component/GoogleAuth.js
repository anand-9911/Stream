import React from 'react';
import { connect } from 'react-redux';
import { SignIn, SignOut } from '../action';

class GoogleAuth extends React.Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '1022581257072-9cdramq7gkm5kfgeerhj0ku2a7r1jhkf.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.SignIn(this.auth.currentUser.get().getId());
        }
        else {
            this.props.SignOut();
        }

    }

    onSigninClick = () => {
        this.auth.signIn();
    };

    onSignOutClick = () => {
        this.auth.signOut();
    };
    renderSignin = () => {
        if (this.props.isSignedIn === null) {
            return null;
        }
        else if (this.props.isSignedIn) {
            return (
                <button
                    className="ui red google button"
                    onClick={this.onSignOutClick}
                >
                    <i className="google icon" />
                    SignOut
                </button>
            )
        }
        else {
            return (
                <button
                    className="ui red google button"
                    onClick={this.onSigninClick}
                >
                    <i className="google icon" />
                    Sign In With Google
                </button>
            )
        }
    }
    render() {
        return (
            <div>
                {this.renderSignin()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, {
    SignIn, SignOut
})(GoogleAuth);