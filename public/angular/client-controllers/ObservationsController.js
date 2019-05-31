(function () {
    'use strict';

    angular
        .module('app')
        .controller('ObservationListController', ObservationListController)
        .controller('ObservationsController', ObservationsController)
        .controller('ObservationsCategorizedController', ObservationsCategorizedController)
        .controller('ObservationsActionController', ObservationsActionController)
        .controller('ObservationsVerifyController', ObservationsVerifyController)
        .controller('ObservationsSummaryController', ObservationsSummaryController);

    function ObservationListController(
        ObservationService
    ) {
        let obs = this;

        obs.getAssignments = getAssignments;
        obs.getList = getList;
        obs.action = action;

        obs.tab = 1;
        obs.pagination = {};

        init();

        function init()
        {
            obs.getAssignments();
            console.log('ObservationListController');
        }

        function getAssignments()
        {
            /* assignments */
            ObservationService.assignments().then(function(res) {
                obs.tab = 1;
            });
        }

        function getList()
        {
            /* observation list */
            ObservationService.list().then(function(res) {
                obs.tab = 2;
            });
        }

        function action(id)
        {

        }
    }

    function ObservationsController(
        ObservationService,
        $state
    ) {
        var observation = this;
        observation.start = start;
        observation.new = {};

        init();

        function init() {
            console.log('ObservationsController');
        }

        function start() {

            var formData = new FormData();
            var file = document.getElementById('idObservationPhoto').files[0];
            if(typeof file != 'undefined') {
                formData.append('observation_photo', file);
            }
            for(var i in observation.new) {
                if(observation.new[i] != null) {
                    formData.append(i, observation.new[i]);
                }
            }

            ObservationService.start(formData).then(function(res)
            {
                var newObservationId = res.data.new_observation_id.data;
                $state.go('main.observations.categorized', {id: newObservationId});
            });
            console.log(observation.new);
        }
    }

    function ObservationsCategorizedController(
        $state,
        $stateParams,
        ObservationService
    ) {

        var observation = this;
        observation.categories = {};
        observation.view = {};
        observation.tab = {};
        observation.runTab = runTab;
        observation.action = action;
        observation.getGeoLocation = getGeoLocation;
        observation.hasGPS = false;
        observation.gps_promise = false;
        init();

        function init()
        {
            console.log('ObservationsCategorizedController');
            ObservationService.getObservation($stateParams.id).then(function(res)
            {
                console.log(res);
                observation.categories = res.data.observation_categories.data.categories;
                observation.view = res.data.observation.data;
                setTimeout(function(){
                    $("#id_" + 'safety').trigger("click");
                }, 700);
            });
        }

        function runTab(type) {
            console.log('run tab: ' + type);
            observation.tab = observation.categories[type];
            observation.tab.selected_category = type;
        }

        function action() {
            observation.tab.location = $('#lat-long').text();

            ObservationService.action(
                observation.view.id,
                observation.tab
            ).then(function(res) {
                $state.go('main.observations.action', {id: observation.view.id});
            });
        }

        function getGeoLocation() {
            var x = document.getElementById("lat-long");
            var y = document.getElementById("addr");

            //$("#observationLoader").css("display","block");
            getLocation();

            function getLocation() {
                if (navigator.geolocation) {
                    //navigator.geolocation.getCurrentPosition(showPosition);
                    x.innerHTML = '-27.3812533, 152.7130149';
                    y.innerHTML = 'Brisbane, Queensland, Australia';
                } else {
                    x.innerHTML = "Geolocation is not supported by this browser.";
                    console.log('no gps');
                }
            }

            function showPosition(position) {

                var geocoder = new google.maps.Geocoder();
                //$("#observationLoader").css("display","none");
                geocoder.geocode({ 'latLng': new google.maps.LatLng(position.coords.latitude, position.coords.longitude) }, function(results, status) {

                    // x.innerHTML = position.coords.latitude + ", " + position.coords.longitude;
                    x.innerHTML = '-27.3812533, 152.7130149';
                    y.innerHTML = results[0].formatted_address;
                });
            }

        }
    }

    function ObservationsActionController(
        ObservationService,
        $state,
        $stateParams
    ) {
        var observation = this;
        observation.view = {};
        observation.summarized = summarized;
        init();

        function init() {
            console.log('ObservationsActionController');
            ObservationService.getObservation($stateParams.id).then(function(res)
            {
                console.log(res.data.observation);
                observation.view = res.data.observation.data;
            });
        }

        function summarized() {
            var formData = new FormData();
            var file = document.getElementById('idObservationPhoto').files[0];
            if(typeof file != 'undefined') {
                formData.append('observation_photo', file);
            }

            for(var i in observation.view) {
                if(observation.view[i] != null) {
                    formData.append(i, observation.view[i]);
                }
            }

            ObservationService.summary(observation.view.id, formData).then(function() {
                $state.go('main.observations.summary', {id:observation.view.id})
            });
        }
    }

    function ObservationsSummaryController(
        ObservationService,
        $state,
        $stateParams
    ) {
        var observation = this;
        observation.view = {};

        init();

        function init() {
            console.log('ObservationsSummaryController');
            ObservationService.getObservation($stateParams.id).then(function(res)
            {
                observation.view = res.data.observation.data;

                setTimeout(function(){
                    var map = new google.maps.Map(document.getElementById('map'), {
                        zoom: 12,
                        center: {lat: 40.731, lng: -73.997}
                    });
                    var geocoder = new google.maps.Geocoder;
                    var infowindow = new google.maps.InfoWindow;
                    geocodeLatLng(geocoder, map, infowindow, observation.view.location);
                }, 1000);
            });
        }

        function geocodeLatLng(geocoder, map, infowindow, latLng) {
            var latlngStr = latLng.split(',', 2);
            var latlng = {lat: parseFloat(latlngStr[0]), lng: parseFloat(latlngStr[1])};
            geocoder.geocode({'location': latlng}, function(results, status) {
                if (status === 'OK') {
                    if (results[1]) {
                        console.log(results);
                        setTimeout(function(){
                            $(".classObservationAddress").text(results[1].formatted_address);
                        }, 200);
                        map.setZoom(11);
                        var marker = new google.maps.Marker({
                            position: latlng,
                            map: map
                        });
                        infowindow.setContent(results[1].formatted_address);
                        infowindow.open(map, marker);
                    } else {
                        window.alert('No results found');
                    }
                } else {
                    window.alert('Geocoder failed due to: ' + status);
                }
            });
        }
    }

    function ObservationsVerifyController(
        ObservationService,
        $stateParams,
        $state
    ) {
        var observation = this;
        observation.view = {};
        observation.closeOut = closeOut;

        init();

        function init()
        {
            ObservationService.getObservation(
                $stateParams.id
            ).then(function(res) {
                observation.view = res.data.observation.data;

                setTimeout(function(){
                    var map = new google.maps.Map(document.getElementById('map'), {
                        zoom: 12,
                        center: {lat: 40.731, lng: -73.997}
                    });
                    var geocoder = new google.maps.Geocoder;
                    var infowindow = new google.maps.InfoWindow;
                    geocodeLatLng(geocoder, map, infowindow, observation.view.location);
                }, 1000);

            });
        }

        function geocodeLatLng(geocoder, map, infowindow, latLng) {
            var latlngStr = latLng.split(',', 2);
            var latlng = {lat: parseFloat(latlngStr[0]), lng: parseFloat(latlngStr[1])};
            geocoder.geocode({'location': latlng}, function(results, status) {
                if (status === 'OK') {
                    if (results[1]) {
                        console.log(results);
                        setTimeout(function(){
                            $(".classObservationAddress").text(results[1].formatted_address);
                        }, 200);
                        map.setZoom(11);
                        var marker = new google.maps.Marker({
                            position: latlng,
                            map: map
                        });
                        infowindow.setContent(results[1].formatted_address);
                        infowindow.open(map, marker);
                    } else {
                        window.alert('No results found');
                    }
                } else {
                    window.alert('Geocoder failed due to: ' + status);
                }
            });
        }

        function closeOut()
        {

            var formData = new FormData();
            var file = document.getElementById('idObservationPhoto').files[0];

            if(typeof file === 'undefined')
            {
                alert('Close out image required.');
                return 0;
            }

            if(typeof file != 'undefined') {
                formData.append('observation_photo', file);
            }

            for(var i in observation.view) {
                if(observation.view[i] != null) {
                    formData.append(i, observation.view[i]);
                }
            }

            ObservationService.verify(
                $stateParams.id,
                formData
            ).then(function(res) {
                $state.go('main.home');
            });
        }
    }
})();
