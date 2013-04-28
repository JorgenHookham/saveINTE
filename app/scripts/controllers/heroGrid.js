'use strict';

saveINTEapp.controller('heroGridController',
    function heroGridController ($scope) {

        $scope.photoBoxes = [
            {
                title: 'Save The Future',
                caption: 'The IDL program is too awesome.',
                imageUrl: 'save-the-future.jpg',
                type: 'photo',
                priority: 2
            },
            {
                title: 'Back At The Lab',
                caption: 'A Weekend at the familiar AR209 to save the program that helped make us.',
                imageUrl: 'back-at-the-lab.jpg',
                type: 'photo',
                priority: 1
            }
        ];

        $scope.textBoxes = [

            {
                title: 'All The Channels',
                caption: 'We push every one of them.',
                type: 'text',
                priority: 1
            }
        ];

        var heroBoxes = [].concat($scope.textBoxes).concat($scope.photoBoxes);
        $scope.heroBoxes = heroBoxes.sort(function(a,b) { return parseFloat(a.priority) - parseFloat(b.priority) } );

});