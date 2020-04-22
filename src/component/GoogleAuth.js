import React from 'react';

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '1022581257072 - 9cdramq7gkm5kfgeerhj0ku2a7r1jhkf.apps.googleusercontent.com',
                scope:'email'
            })
        });

    }
    render() {
        return (
            <div>
                GoogleAuth works
            </div>
        )
    }
}

export default GoogleAuth;