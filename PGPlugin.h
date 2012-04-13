//	MIT Licensed

#import <Foundation/Foundation.h>
#ifdef CORDOVA_FRAMEWORK
#import <Cordova/CDVPlugin.h>
#else
#import "CDVPlugin.h"
#endif

typedef CDVPluginResult PluginResult;

enum {
    PGCommandStatus_OK = CDVCommandStatus_OK,
    PGCommandStatus_ERROR = CDVCommandStatus_ERROR
};

@interface PGPlugin : CDVPlugin {

}

@end
