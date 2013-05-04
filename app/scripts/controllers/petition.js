'use strict';

saveINTEapp.controller('petitionController',
    function petitionController ($scope) {

        $scope.signatures = 601;

        var changeApiKey    = '3183c8e44803aa6f8721e6990b1d94423ee6d35b0ca6927ec5f7a2d10fac5e97';

        var requestUrl = 'https://api.change.org/v1/petitions/1106511/signatures';
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
                $scope.$apply(function(){
                    $scope.signatures = data.signature_count;
                });

            }
        });

});







