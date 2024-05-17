sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/demo/managebooks/test/integration/FirstJourney',
		'com/demo/managebooks/test/integration/pages/BooksList',
		'com/demo/managebooks/test/integration/pages/BooksObjectPage'
    ],
    function(JourneyRunner, opaJourney, BooksList, BooksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/demo/managebooks') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheBooksList: BooksList,
					onTheBooksObjectPage: BooksObjectPage
                }
            },
            opaJourney.run
        );
    }
);