require('../styles/main.less');

var React = require('react');
var injectTapEventPlugin = require('react-tap-event-plugin');
//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

var router = require('./core/router');

// Run the app
router.run(function (Handler, state) {
    React.render(React.createElement(Handler), document.body);
});