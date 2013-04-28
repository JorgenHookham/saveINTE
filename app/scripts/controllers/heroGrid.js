'use strict';

saveINTEapp.controller('heroGridController',
    function heroGridController ($scope) {

        $scope.heroBoxes = [
            {
                title: 'Save The Future',
                caption: 'The IDL program is too awesome.',
                imageUrl: 'save-the-future.jpg',
                type: 'photo'
            },
            {
                title: 'Back At The Lab',
                caption: 'A Weekend at the familiar AR209 to save the program that helped make us.',
                imageUrl: 'back-at-the-lab.jpg',
                type: 'photo'
            },
            {
                title: 'All The Channels',
                caption: 'We push every one of them.',
                type: 'text'
            }
        ];

});