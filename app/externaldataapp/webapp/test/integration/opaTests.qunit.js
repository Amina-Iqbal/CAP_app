sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'my/cap/app/externaldataapp/test/integration/FirstJourney',
		'my/cap/app/externaldataapp/test/integration/pages/ExternalDataList',
		'my/cap/app/externaldataapp/test/integration/pages/ExternalDataObjectPage'
    ],
    function(JourneyRunner, opaJourney, ExternalDataList, ExternalDataObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('my/cap/app/externaldataapp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheExternalDataList: ExternalDataList,
					onTheExternalDataObjectPage: ExternalDataObjectPage
                }
            },
            opaJourney.run
        );
    }
);