/**
 *
 * @author Ben Zörb @bezoerb https://github.com/bezoerb
 * @copyright Copyright (c) 2015 Ben Zörb
 *
 * Licensed under the MIT license.
 * http://bezoerb.mit-license.org/
 * All rights reserved.
 */
define(function (require, exports) {
    'use strict';
    var $ = require('jquery');
    var debug = require('visionmedia-debug')('<%= safeProjectName %>:main');<% if (useUikit) { %>
    var UI = require('uikit');<% } else if (useFoundation) { %>
    var Foundation = require('foundation/core');<% } else if (useBootstrap) { %>
    require('bootstrap');
    <% } %>

    exports.init = function init() {
        debug('\'Allo \'Allo');
        debug('Running jQuery:', $().jquery);<% if (useBootstrap) { %>
        debug('Running Bootstrap:', !!$.fn.scrollspy ? '~3.3.0' : false);<% } else if (useUikit) { %>
        debug('Running UIkit:', UI.version);<% } else if (useFoundation) { %>
        debug('Running Foundation:', Foundation.version);<% } %>
    };
});
