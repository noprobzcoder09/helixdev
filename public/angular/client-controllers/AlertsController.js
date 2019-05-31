(function () {
    'use strict';

    angular
        .module('app')
        .controller('AlertsController', Controller);

    function Controller(
        AlertService,
        $localStorage,
        $state,
        mFile
    ) {

        var alerts = this;
        alerts.viewMessage = viewMessage;
        alerts.openModal = openModal;
        alerts.backToMessage = backToMessage;
        alerts.isImageUrl = isImageUrl;
        alerts.view = false;

        init();

        function init()
        {
            AlertService.getUserAlerts($localStorage.currentUser.user.user_id).then(function(res) {
                alerts.data = res.data.alerts.data;
                console.log(res);
            });
        }

        function isImageUrl(url)
        {
            console.log(url);
            if(mFile.check.isImageUrl(url)) {;
                return true;
            }
            return false;
        }

        function openModal (link) {
          if( !link ) {
            return "modal";
          } else {
            return "";
          }
        }

        function viewMessage( message )
        {
            console.log(message);
            if( message.link ) {
              var link = JSON.parse(message.link);
              console.log(link.type);

              if(link.type)
              {
                switch(link.type)
                {
                    case 'observation' : {
                        $state.go('main.observations.verify', {id: link.observation_id});
                        } break;
                    case 'inspection' : {

                        } break;
                }
              } else {
                  var inspection_link = JSON.parse(message.link);
                  $state.go(
                      'main.inspections.action',
                      {id: inspection_link.id, itemId: inspection_link.item_id}
                  );
              }
            } else {
              message.modal = "modal";
            }

            message.read = 1;
            alerts.view = message;
        }

        function backToMessage()
        {
            alerts.view = false;
        }
    }
})();
