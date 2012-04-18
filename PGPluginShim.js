/**
 * Needed to keep old PhoneGap plugin valid for Cordova 2.0+
 */

if (!PhoneGap) {
  PhoneGap = cordova || Cordova;
}

/**
 * Cordova 1.5 -> 1.6+ issue:
 */
if (!Cordova) {
  Cordova = cordova;
}

if(!window.plugins)
{
  window.plugins = {};
}
