
Ext.define('deviceSpecificApp.view.tablet.TabletMain',{
    extend: 'Ext.panel.Panel',

    requires: [
        'deviceSpecificApp.view.tablet.TabletMainController',
        'deviceSpecificApp.view.tablet.TabletMainModel'
    ],

    controller: 'tablet-tabletmain',
    viewModel: {
        type: 'tablet-tabletmain'
    },

    html: 'Hello, World from modern folder!!'
});
