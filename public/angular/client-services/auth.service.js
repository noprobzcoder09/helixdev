(function () {
    'use strict';

    angular
        .module('app')
        .factory('AuthService', Service);

    function Service($http, $localStorage, baseUrl) {
        var service = {};

        service.Login = Login;
        service.Logout = Logout;

        return service;

        function Login(email, password, callback)
        {
            var credentials = {
                'email' : email,
                'password' : password
            };

            $http.post('api/v1/client/login', credentials)
                .success(function (response) {
                    /* login successful if there's a token in the response */
                    if (response.access_token) {
                        /* store username and token in local storage to keep user logged in between page refreshes */
                        $localStorage.currentUser = response;

                        /* add jwt token to auth header for all requests made by the $http service */
                        $http.defaults.headers.common.Authorization = 'Bearer ' + response.access_token;

                        /* execute callback with true to indicate successful login */
                        callback(true);
                    } else {
                        /* execute callback with false to indicate failed login */
                        callback(false);
                    }
                });

            return true;
        }

        function Logout() {
            /* remove user from local storage and clear http auth header */
            $http.post('api/v1/client/logout', {})
                .success(function (response) {

                });
            delete $localStorage.currentUser;
            $http.defaults.headers.common.Authorization = '';
        }
    }
})();