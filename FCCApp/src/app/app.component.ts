import { MorePage } from './../pages/more/more';
import { TabsPage } from './../pages/tabs/tabs';
import { MinistriesPage } from './../pages/ministries/ministries';
import { NewsPage } from './../pages/news/news';
import { EventsPage } from './../pages/events/events';
import { SermonsPage } from './../pages/sermons/sermons';
import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';
import { ThreeDeeTouch, ThreeDeeTouchQuickAction, ThreeDeeTouchForceTouch } from '@ionic-native/three-dee-touch';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
  @ViewChild(Nav) nav: Nav;
  
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private threeDeeTouch: ThreeDeeTouch) {

    //Firebase Configuration
    firebase.initializeApp({
      apiKey: "AIzaSyCRJHKSftektrLrpDzxqjomHLQNQQjfGFQ",
      authDomain: "fccapp-56738.firebaseapp.com",
      databaseURL: "https://fccapp-56738.firebaseio.com",
      projectId: "fccapp-56738",
      storageBucket: "fccapp-56738.appspot.com",
      messagingSenderId: "294458733240"
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

    //OneSignal Configuration
    /*var notificationOpenedCallback = function(jsonData) {
      console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
      };
  
      window["plugins"].OneSignal
        .startInit("c4422df4-810e-4d20-87a9-18e66dd2a569", "294458733240")
        .handleNotificationOpened(notificationOpenedCallback)
        .endInit();*/

    //ThreeD Touch Configuration
    this.threeDeeTouch.isAvailable().then(isAvailable => console.log('3D Touch available? ' + isAvailable));
    
    this.threeDeeTouch.watchForceTouches()
      .subscribe(
        (data: ThreeDeeTouchForceTouch) => {
          console.log('Force touch %' + data.force);
          console.log('Force touch timestamp: ' + data.timestamp);
          console.log('Force touch x: ' + data.x);
          console.log('Force touch y: ' + data.y);
        }
      );
    
    let actions: Array<ThreeDeeTouchQuickAction> = [
      {
        type: 'sermons',
        title: 'View Sermons',
        subtitle: 'Catch-up on video!',
        iconType: 'play'
      },
      {
        type: 'events',
        title: 'myChurch Events',
        subtitle: 'Past & Upcoming',
        iconType: 'date'
      },
      {
        type: 'news',
        title: 'Church News',
        subtitle: 'Read the Latest News',
        iconType: 'message'
      },
      {
        type: 'more',
        title: 'More',
        subtitle: 'More about myChurch',
        iconType: 'add'
      }
    ];
    
    this.threeDeeTouch.configureQuickActions(actions);
    
    this.threeDeeTouch.onHomeIconPressed().subscribe(
     (payload) => {
       // returns an object that is the button you presed
       if (payload.type == 'sermons') {
          this.nav.setRoot(TabsPage, {index: "0"});
       } else if (payload.type =='events') {
          this.nav.setRoot(TabsPage, {index: "1"});
       } else if (payload.type =='news') {
          this.nav.setRoot(TabsPage, {index: "3"});
       } else if (payload.type =='more') {
        this.nav.setRoot(TabsPage, {index: "4"});
       };

       console.log('Pressed the ${payload.title} button')
       console.log(payload.type)

     }
    )

    });
  }
}
