angular.module('noFluffApp.service', []).
factory('offersService', function($q, $timeout) {

    var posting = [
        {
            title: 'Node.js Developer',
            company: 'Instapage',
            salaryMin: 9000,
            salaryMax: 12000,
            city: 'Warsaw',
            street: 'Zielona 19',
            postalCode: '48-980'
        },
        {
            title: 'Senior Java Developer',
            company: 'Sofomo',
            salaryMin: 10500,
            salaryMax: 15500,
            city: 'Cracow',
            street: 'Niebieska 8/6',
            postalCode: '30-840'
        },
        {
            title: 'Front-End Developer',
            company: 'NoFluff',
            salaryMin: 9500,
            salaryMax: 13500,
            city: 'Cracow',
            street: 'Fioletowa 56',
            postalCode: '33-124'
        },
        {
            title: '.Net Developer',
            company: 'Sun',
            salaryMin: 7500,
            salaryMax: 14000,
            city: 'Gdynia',
            street: 'Żółta 72',
            postalCode: '53-924'
        }
    ];

    if (!localStorage.noFluffPosting) {
        localStorage.noFluffPosting = JSON.stringify(posting);
    } else {
        posting = JSON.parse(localStorage.noFluffPosting);
    }

    return {
        getList: function() {
            var deferred = $q.defer();

            $timeout(function() {
                deferred.resolve(posting);
            }, 2000);

            return deferred.promise;
        },
        addOffer: function(offer) {
            var deferred = $q.defer();

            posting.push(offer);
            localStorage.noFluffPosting = JSON.stringify(posting);

            $timeout(function() {
                deferred.resolve(posting);
            }, 2000);

            return deferred.promise;
        }
    }

});