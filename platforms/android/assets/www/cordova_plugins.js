cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "pluginId": "cordova-plugin-whitelist",
        "runs": true
    },
    {
        "file": "plugins/edu.uic.travelmidwest.cordova.udptransmit/www/udptransmit.js",
        "id": "edu.uic.travelmidwest.cordova.udptransmit.udptransmit",
        "pluginId": "edu.uic.travelmidwest.cordova.udptransmit",
        "merges": [
            "udptransmit"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.2.0",
    "edu.uic.travelmidwest.cordova.udptransmit": "1.0.8"
}
// BOTTOM OF METADATA
});