# Cordova PGPluginShim

Run pre-Cordova/PhoneGap 1.5 iPhone plugins on Cordova 1.5+

## How

 - Include PGPlugin.h and PGPlugin.m in the Classes folder and be sure to include them as added files and not as softlinks
 - Include any PhoneGap plugins in the Plugins folder and add to Cordova.plist
 - Optional for pre-Cordova 2.0: include PGPluginShim.js before any old PhoneGap Javascript plugins
 - Build and run

## Status

 - First checkin: tested and working well for [phonegap-plugins / iPhone / Prompt](https://github.com/phonegap/phonegap-plugins/tree/master/iPhone/Prompt)

