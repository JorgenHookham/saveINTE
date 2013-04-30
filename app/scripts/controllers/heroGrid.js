'use strict';

saveINTEapp.controller('heroGridController',
    function heroGridController ($scope) {

        // Masonry

        $scope.heroGrid = $('.hero-grid--container');
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

        // Hero Grid Items (photos)

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
                priority: 2,
                template: 'hero-box-templates/photo.html'
            }
        ];

        // Hero Grid Items (quote)

        $scope.quoteBoxes = [
            {
                quote: 'All The Channels',
                author: 'We push every one of them.',
                credential: 'Huge Bigshot',
                type: 'quote',
                priority: 4,
                template: 'hero-box-templates/quote.html'
            },
            {
                quote: 'Back to the lab!',
                author: 'Saturday morning cartoons!',
                credential: 'Huge Bigshot',
                type: 'quote',
                priority: 4,
                template: 'hero-box-templates/quote.html'
            },
            {
                quote: 'An Excess of Support',
                author: 'Almost out of hand.',
                credential: 'Huge Bigshot',
                type: 'quote',
                priority: 1,
                template: 'hero-box-templates/quote.html'
            },
            {
                quote: 'Top Dog',
                author: 'High priority content.',
                credential: 'Huge Bigshot',
                type: 'quote',
                priority: 1,
                template: 'hero-box-templates/quote.html'
            }
        ];

        // Hero Grid Items (vine embeds)

        $scope.vineBoxes = [
            {
                title: 'Glitch Mob',
                embedUrl: 'http://vine.co/v/b55LOA1dgJU/embed/simple',
                type: 'video',
                priority: 5,
                template: 'hero-box-templates/vine.html'
            }
        ];

        // Hero Grid Items (youtube embeds)

        $scope.youtubeBoxes = [
            {
                title: 'Ride Never Stop',
                embedUrl: 'http://www.youtube.com/embed/ydM2YqukXgo',
                type: 'video',
                priority: 4,
                template: 'hero-box-templates/youtube.html'
            }
        ];

        // Concatenating hero box sources and sorting

        var heroBoxes = []
            .concat($scope.quoteBoxes)
            .concat($scope.photoBoxes)
            .concat($scope.vineBoxes)
            .concat($scope.youtubeBoxes);

        $scope.heroBoxes = heroBoxes.sort(function(a,b) { return parseFloat(a.priority) - parseFloat(b.priority) } );

});







