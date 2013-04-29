'use strict';

saveINTEapp.controller('heroGridController',
    function heroGridController ($scope) {

        $scope.heroGrid = $('.hero-grid');
        $scope.heroGrid.masonry({
            itemSelector: '.hero-box',
            columnWidth: function( containerWidth ) {
                return containerWidth / 4;
            },
            isResizable: true
        });

        $(window).ready(function () {
            $scope.heroGrid.masonry('reload');
        });

        $scope.photoBoxes = [
            {
                title: 'Save The Future',
                caption: 'The IDL program is too awesome.',
                imageUrl: 'save-the-future.jpg',
                type: 'photo',
                priority: 2,
                template: 'hero-box-templates/photo.html'
            },
            {
                title: 'Back At The Lab',
                caption: 'A Weekend at the familiar AR209 to save the program that helped make us.',
                imageUrl: 'back-at-the-lab.jpg',
                type: 'photo',
                priority: 3,
                template: 'hero-box-templates/photo.html'
            }
        ];

        $scope.textBoxes = [
            {
                title: 'All The Channels',
                caption: 'We push every one of them.',
                type: 'text',
                priority: 3,
                template: 'hero-box-templates/text.html'
            },
            {
                title: 'Back to the lab!',
                caption: 'Saturday morning cartoons!',
                type: 'text',
                priority: 3,
                template: 'hero-box-templates/text.html'
            },
            {
                title: 'An Excess of Support',
                caption: 'Almost out of hand.',
                type: 'text',
                priority: 2,
                template: 'hero-box-templates/text.html'
            },
            {
                title: 'Top Dog',
                caption: 'High priority content.',
                type: 'text',
                priority: 2,
                template: 'hero-box-templates/text.html'
            }
        ];

        $scope.vineBoxes = [
            {
                title: 'Glitch Mob',
                embedUrl: 'http://vine.co/v/b55LOA1dgJU/embed/simple',
                type: 'video',
                priority: 5,
                template: 'hero-box-templates/vine.html'
            }
        ];

        $scope.youtubeBoxes = [
            {
                title: 'Ride Never Stop',
                embedUrl: 'http://www.youtube.com/embed/ydM2YqukXgo',
                type: 'video',
                priority: 1,
                template: 'hero-box-templates/youtube.html'
            }
        ];

        var heroBoxes = [].concat($scope.textBoxes).concat($scope.photoBoxes).concat($scope.vineBoxes).concat($scope.youtubeBoxes);
        $scope.heroBoxes = heroBoxes.sort(function(a,b) { return parseFloat(a.priority) - parseFloat(b.priority) } );

});

saveINTEapp.directive('addMasonry', function($timeout) {
  return {
    restrict: 'A',
    link: function($scope, element) {
        $scope.heroGrid.masonry('reload');
    }
  };
});