'use strict';
/**
 * uncss takes all html pages inside the .tmp folder generated by the html task into account.
 * Any styles not beeing used there will be dropped!
 */
module.exports = {
    dist: {
        options: {
            stylesheets: ['../.tmp/styles/main.css'],
            ignore: [
                /* ignore classes which are not present at dom load */<% if (useBootstrap) { %>
                /\.fade/,
                /\.collapse/,
                /\.collapsing/,
                /\.modal/,
                /\.alert/,
                /\.open/,
                /\.in/<% } else if (useFoundation) { %>
                /meta\..+/,
                /\.move-/,
                /\.fixed/,
                /\.modal/,
                /open/<% } else if (useUikit) { %>
                /\.uk-open/,
                /\.uk-notify/,
                /\.uk-nestable/,
                /\.uk-sortable/,
                /\.uk-active/<% } %>
            ]
        },
        files: {
            '.tmp/styles/main.css': ['.tmp/*.html']
        }
    }
};
