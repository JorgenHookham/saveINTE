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
                priority: 1
            },
            {
                title: 'Back At The Lab',
                caption: 'A Weekend at the familiar AR209 to save the program that helped make us.',
                imageUrl: 'back-at-the-lab.jpg',
                type: 'photo',
                priority: 2
            }
        ];

        $scope.textBoxes = [
            {
                title: 'All The Channels',
                caption: 'We push every one of them.',
                type: 'text',
                priority: 2
            },
            {
                title: 'Back to the lab!',
                caption: 'Saturday morning cartoons!',
                type: 'text',
                priority: 4
            },
            {
                title: 'An Excess of Support',
                caption: 'Almost out of hand.',
                type: 'text',
                priority: 3
            },
            {
                title: 'Top Dog',
                caption: 'High priority content.',
                type: 'text',
                priority: 2
            }
        ];

        var heroBoxes = [].concat($scope.textBoxes).concat($scope.photoBoxes);
        $scope.heroBoxes = heroBoxes.sort(function(a,b) { return parseFloat(a.priority) - parseFloat(b.priority) } );

});

saveINTEapp.directive('addMasonry', function($timeout) {
  return {
    restrict: 'A',
    link: function($scope, element) {
        console.log('reload masonry');
        $scope.heroGrid.masonry('reload');
    }
  };
});