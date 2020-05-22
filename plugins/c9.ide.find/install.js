define(function(require, exports, module) {
    
module.exports = function(session, options) {
    session.install({
        "name": "Nak",
        "description": "Fast file searches for Cloud9",
        "cwd": "~/.c9"
    }, {
        "npm": "https://github.com/cloud9ideopen/nak/tarball/c9"
    });

    // Show the installation screen
    session.start();
};

module.exports.version = 1;

});