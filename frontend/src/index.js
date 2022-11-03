import React from 'react';
import ReactDOM from 'react-dom';
import Keycloak from "keycloak-js";
import Todo from "./Component/Todo";

const initOptions = {
    url: 'http://localhost:8180/auth/',
    realm: 'react-realm',
    clientId: 'react-login-client',
    onLoad: 'login-required'
}

const keycloak = new Keycloak({
    url: "http://localhost:8080",
    realm: "todo-realm",
    clientId: "todo-frontend",
});

keycloak.init({onLoad: initOptions.onLoad}).success((auth) => {

    if (!auth) {
        window.location.reload();
    } else {
        console.info("Authenticated");
    }

    localStorage.setItem("bearer-token", keycloak.token);
    localStorage.setItem("refresh-token", keycloak.refreshToken);

    setTimeout(() => {
        keycloak.updateToken(70).success((refreshed) => {
            if (refreshed) {
                console.debug('Token refreshed' + refreshed);
            } else {
                console.warn('Token not refreshed, valid for '
                    + Math.round(keycloak.tokenParsed.exp + keycloak.timeSkew - new Date().getTime() / 1000) + ' seconds');
            }
        }).error(() => {
            console.error('Failed to refresh token');
        });


    }, 60000)

}).error(() => {
    console.error("Authenticated Failed");
});


function LogOut() {
    const logout = () => {
        keycloak.logout();
    };

    return (
        <>
            <button onClick={logout}>
                Logout
            </button>
        </>

    );
}

ReactDOM.render(<Todo/>, document.getElementById("root"));
ReactDOM.render(<LogOut/>, document.getElementById("logoutBtn"));
