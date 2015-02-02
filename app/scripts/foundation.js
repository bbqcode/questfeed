var $ = require('jquery');

require('imports?jQuery=jquery!exports?jQuery!zurb-foundation-5/js/foundation/foundation');
require('imports?jQuery=jquery!exports?jQuery!zurb-foundation-5/js/foundation/foundation.abide');
require('imports?jQuery=jquery!exports?jQuery!zurb-foundation-5/js/foundation/foundation.accordion');
require('imports?jQuery=jquery!exports?jQuery!zurb-foundation-5/js/foundation/foundation.alert');
require('imports?jQuery=jquery!exports?jQuery!zurb-foundation-5/js/foundation/foundation.clearing');
require('imports?jQuery=jquery!exports?jQuery!zurb-foundation-5/js/foundation/foundation.dropdown');
require('imports?jQuery=jquery!exports?jQuery!zurb-foundation-5/js/foundation/foundation.interchange');
require('imports?jQuery=jquery!exports?jQuery!zurb-foundation-5/js/foundation/foundation.joyride');
require('imports?jQuery=jquery!exports?jQuery!zurb-foundation-5/js/foundation/foundation.magellan');
require('imports?jQuery=jquery!exports?jQuery!zurb-foundation-5/js/foundation/foundation.offcanvas');
require('imports?jQuery=jquery!exports?jQuery!zurb-foundation-5/js/foundation/foundation.orbit');
require('imports?jQuery=jquery!exports?jQuery!zurb-foundation-5/js/foundation/foundation.reveal');
require('imports?jQuery=jquery!exports?jQuery!zurb-foundation-5/js/foundation/foundation.slider');
require('imports?jQuery=jquery!exports?jQuery!zurb-foundation-5/js/foundation/foundation.tab');
require('imports?jQuery=jquery!exports?jQuery!zurb-foundation-5/js/foundation/foundation.tooltip');
require('imports?jQuery=jquery!exports?jQuery!zurb-foundation-5/js/foundation/foundation.topbar');
require('imports?jQuery=jquery!exports?jQuery!zurb-foundation-5/js/foundation/foundation.equalizer');

var initialize = function() {
	console.log('Initialize foundation');
	return $(document).foundation();
}

module.exports.initialize = initialize;