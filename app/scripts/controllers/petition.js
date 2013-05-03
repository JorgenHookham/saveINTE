'use strict';

saveINTEapp.controller('petitionController',
    function petitionController ($scope) {

        $scope.signatures = 377;

        var changeApiKey    = 'e10d95d6a68b009a613ddcdc1eda7fbc83c639d1ca662a4003bd6f9972d47a88';

        var requestUrl = 'https://api.change.org/v1/petitions/get_id';
        var petitionUrl = 'https://www.change.org/en-CA/petitions/capilano-university-save-the-interactive-design-program';

        var requestParameters = {
            'api_key'       : changeApiKey,
            'petition_url'  : petitionUrl
        };

        $.ajax({
            url: requestUrl,
            dataType: 'jsonp',
            type: 'GET',
            data: requestParameters,
            success: function(data) {
                console.log(data);
                // $scope.$apply(function(){
                //     $scope.signatures = data.signatures.length;
                // });
            }
        });

});







