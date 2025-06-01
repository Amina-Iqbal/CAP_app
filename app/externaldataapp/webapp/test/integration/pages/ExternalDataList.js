sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'my.cap.app.externaldataapp',
            componentId: 'ExternalDataList',
            contextPath: '/ExternalData'
        },
        CustomPageDefinitions
    );
});