import React from 'react';

class GoogleAuth extends React.Component {
    state = {
        isSignedIn: null
    };

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '1022581257072-9cdramq7gkm5kfgeerhj0ku2a7r1jhkf.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange();
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = () => {
        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
    }

    onSignin = () => {
        this.auth.signIn();
    };

    onSignOut = () => {
        this.auth.signOut();
    };
    renderSignin = () => {
        if (this.state.isSignedIn === null) {
            return null;
        }
        else if (this.state.isSignedIn) {
            return (
                <button
                    className="ui red google button"
                    onClick={this.onSignOut}
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
                    onClick={this.onSignin}
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

export default GoogleAuth;