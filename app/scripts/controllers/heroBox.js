'use strict';

saveINTEapp.controller('heroBoxController',
    function heroBoxController ($scope) {

        $scope.playVideo = function (heroBox) {
            if (heroBox.type == 'video__with-quote' || heroBox.type == 'video') heroBox.state = 's-playing';
            var embed = $('#youtube--' + heroBox.embedCode)
            embed.attr('src', embed.attr('src')+'&autoplay=1');
        }

        // {{ hero.embedCode }}

        function onYouTubePlayerReady(playerId) {
            console.log(playerId);
        }

});







