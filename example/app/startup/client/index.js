import { Meteor } from 'meteor/meteor'
import WebPush, { CordovaPush } from 'meteor/activitree:push'

Meteor.startup(() => {
  if (Meteor.isCordova) {
    // Check cordova-push-plugin for all options supported.
    // The configuration object is used to initialize Cordova Push on the device.
    CordovaPush.Configure({
      appName: 'YourAppName',
      android: {
        alert: true,
        badge: true,
        sound: true,
        vibrate: true,
        clearNotifications: true,
        icon: 'statusbaricon',
        iconColor: '#337FAE',
        forceShow: true
        // clearBadge: false,
        // topics: ['messages', 'notifications'],
        // messageKey: 'message',
        // titleKey: 'title'
        // topics: ['messages', 'notifications']
      },
      ios: {
        alert: true,
        badge: true,
        sound: true,
        clearBadge: true,
        topic: 'com.your_app_id' // your IOS app id.
      }
    })
  } else {
    // Perhaps it is best to get this configuration data via Meteor Settings or Environment Variables.
    WebPush.Configure({
      appName: 'Activitree', // required
      firebase: {
        apiKey: '________',
        authDomain: '_______',
        databaseURL: '________________',
        projectId: '________________',
        storageBucket: '______________',
        messagingSenderId: '_________________',
        appId: '_______________',
      },
      publicVapidKey: '____________'
    })
  }
})