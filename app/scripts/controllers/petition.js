'use strict';

saveINTEapp.controller('petitionController',
    function petitionController ($scope) {

        $scope.signatures = 0;

        var changeApiKey    = 'eb4d16cccf1b537eb172cd1cbe60b396e5a8c3f15c7b1ef6630ebf39ba33b37f';
        var changeApiSecret = '45399b53c636021368c7612d55149f5931ccbc206bae6683ce58798e04881a95';

        var requestUrl = 'https://api.change.org/v1/petitions/1109576/signatures';

        var requestParameters = {
            'api_key'       : changeApiKey,
            'petition_id'   : 1109576
        };

        $.ajax({
            url: requestUrl,
            dataType: 'jsonp',
            type: 'GET',
            data: requestParameters,
            success: function(data) {
                $scope.$apply(function(){
                    $scope.signatures = data.signatures.length;
                });
            }
        });

});







