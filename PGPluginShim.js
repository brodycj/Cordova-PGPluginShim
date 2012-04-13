/**
 * Needed to keep old PhoneGap plugin valid for Cordova 2.0+
 */

if (!PhoneGap) {
  PhoneGap = cordova || Cordova;
}

if(!window.plugins)
{
  window.plugins = {};
}
