'use strict';

saveINTEapp.controller('heroGridController',
    function heroGridController ($scope) {

        $scope.heroBoxes;

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
            { "quote": "The goal is to put people in the work force and be employable, we look to these programs for our new stars.", "author": "Jason Bailey", "credential": "CEO, East Side Games", "imageUrl": "people/jason-bailey.jpg", "type": "photo", "priority": 8, "template": "hero-box-templates/photo.html"},
            {
                quote: 'We have one of the best programs in the university, if anything it should be looked at as one of it\'s crowned jewels.',
                author: 'Parker Busswood',
                credential: 'Front-End Engineer, East Side Games',
                imageUrl: 'people/parker-busswood.jpg',
                type: 'photo',
                priority: 2,
                template: 'hero-box-templates/photo.html'
            },
            {
                quote: 'People from the INTE program come ready to wear many hats. Cutting this program would leave a big gap.',
                author: 'Josh Nilson',
                credential: 'COO, East Side Games',
                imageUrl: 'people/josh-nilson.jpg',
                type: 'photo',
                priority: 8,
                template: 'hero-box-templates/photo.html'
            },
            {
                quote: 'As an alumnus I stand to lose my biggest network, fresh talent coming out of the program.',
                author: 'Jørgen Hookham',
                credential: 'Designer, Sokanu',
                imageUrl: 'people/jorgen-hookham.jpg',
                type: 'photo',
                priority: 5,
                template: 'hero-box-templates/photo.html'
            },
            {
                quote: 'The world is having an asymmetric education problem, and you actually have a program where 85% of students get a job.',
                author: 'Spencer Thompson',
                credential: 'CEO, Sokanu',
                imageUrl: 'people/spencer-thompson.jpg',
                type: 'photo',
                priority: 6,
                template: 'hero-box-templates/photo.html'
            }
        ];

        // Hero Grid Items (quote)

        $scope.quoteBoxes = [
            {
                quote: 'The vast majority of graduates of this program get jobs. Good, long term jobs.',
                author: 'Dave Rankin',
                type: 'quote',
                priority: 1,
                template: 'hero-box-templates/quote.html'
            },
            {
                quote: 'Coding is the new literacy.',
                author: 'Hank Leber',
                credential: 'CEO & Co-Founder GonnaBe',
                type: 'quote',
                priority: 1,
                template: 'hero-box-templates/quote.html'
            },
            {
                quote: 'For the foreseeable future, coding is one of the most important and desirable skills there is.',
                author: 'Asher Hunt',
                credential: 'Lead Mobile Designer, LivePerson',
                type: 'quote',
                priority: 3,
                template: 'hero-box-templates/quote.html'
            },
            {
                quote: 'It\'s the battle of the tech literate vs. the tech illiterate.',
                author: 'Hank Leber',
                credential: 'CEO & Co-Founder GonnaBe',
                type: 'quote',
                priority: 7,
                template: 'hero-box-templates/quote.html'
            },
            {
                quote: 'Learn to code. You won\'t regret it.',
                author: 'Hank Leber',
                credential: 'CEO & Co-Founder GonnaBe',
                type: 'quote',
                priority: 3,
                template: 'hero-box-templates/quote.html'
            }
        ];

        // Hero Grid Items (vine embeds)

        $scope.vineBoxes = [
            // {
            //     title: 'Glitch Mob',
            //     embedUrl: 'http://vine.co/v/b55LOA1dgJU/embed/simple',
            //     type: 'video',
            //     priority: 5,
            //     template: 'hero-box-templates/vine.html'
            // }
        ];

        // Hero Grid Items (youtube embeds)

        $scope.youtubeBoxes = [
            {
                embedUrl: 'http://www.youtube.com/embed/NvK1F_odamo',
                type: 'video',
                priority: 4,
                template: 'hero-box-templates/youtube.html'
            },
            {
                embedUrl: 'http://www.youtube.com/embed/kJcPCIAGfeY',
                type: 'video',
                priority: 6,
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

        $.ajax({
            url: 'http://api.saveinte.ca/hero-boxes',
            dataType: 'json',
            contentType: 'application/json',
            type: 'GET',
            success: function (data) {
                console.log('success', data);
                // $scope.$apply(function () {
                //     $scope.heroBoxes = data.sort(function(a,b) { return parseFloat(a.priority) - parseFloat(b.priority) } );
                // });
            },
            error: function (error, b, c) {
                console.log('failure', error, b, c);
            }
        });

});







