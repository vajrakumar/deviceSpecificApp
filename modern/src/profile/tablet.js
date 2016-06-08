Ext.define('deviceSpecificApp.profile.tablet', {
    extend: 'Ext.app.Profile',
    requires:['deviceSpecificApp.view.tablet.TabletMain'],
    //define any additional classes your Profile needs here
    config: {
        views: [],
        models: [],
        stores: [],
        controllers: []
    },
    mainView:'deviceSpecificApp.view.tablet.TabletMain',
    //this profile will be activated if we detect we're running on a tablet.tablet
    isActive: function(app) {
        return Ext.os.is.tablet;
    }
});