var React = require('react');

require('../styles/main.scss');

require('./stores/QuestStore');

var router = require('./core/router');

// Run the app
router.run(function (Handler, state) {
    React.render(React.createElement(Handler), document.body);
});