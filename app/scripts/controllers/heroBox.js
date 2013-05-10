'use strict';

saveINTEapp.controller('heroBoxController',
    function heroBoxController ($scope) {

        $scope.playVideo = function (heroBox) {
            if (heroBox.type == 'video__with-quote' || heroBox.type == 'video') heroBox.state = 's-playing';
        }

        // {{ hero.embedCode }}

        function onYouTubePlayerReady(playerId) {
            console.log(playerId);
        }

});

saveINTEapp.directive('youtubeEmbed', function () {
    return function(scope, element, attrs) {

        var tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';

        $(element).parent().append(tag);

        function onYouTubeIframeAPIReady() {
            console.log('youtubes');
            $scope.player = new YT.Player($(element).attr('id'), {
                videoId: attrs.$attr.embedCode,
                events: {
                    'onReady': onPlayerReady,
                    'onStateChange': onPlayerStateChange
                }
            });
            console.log($scope);
        }

    }
});







