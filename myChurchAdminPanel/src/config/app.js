
//FireBase
exports.firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_ID"
};


//App setup
exports.adminConfig={
  "appName": "myChurch",
  "slogan":"Admin Panel.",

  "design":{
    "sidebarBg":"sidebar-1.jpg", //sidebar-1, sidebar-2, sidebar-3
    "dataActiveColor":"red", //"purple | blue | green | orange | red | rose"
    "dataBackgroundColor":"black", // "white | black"
  },

  "codeversion": "1.0",
  "allowedUsers":null, //If null, allow all users, else it should be array of allowd users
  "fieldBoxName": "Fields",
  "maxNumberOfTableHeaders":5,
  "prefixForJoin":["-event"],
  "methodOfInsertingNewObjects":"timestamp", //timestamp (key+time) | push - use firebase keys
  "urlSeparator":"+",


  "fieldsTypes":{
    "photo":["photo","image","thumbnail","icon","shareImage"],
    "dateTime":["datetime","start"],
    "time":["time"],
    "maps":["map","latlng"],
    "textarea":["description"],
    "html":["content","description","info"],
    "radio":["radio"],
    "checkbox":["checkbox"],
    "dropdowns":["status","dropdowns"],
    "file":["video"],
    "rgbaColor":['rgba'],
    "hexColor":['color'],
    "relation":['type'],
  },
  "optionsForSelect":[
      {"key":"dropdowns","options":["new","processing","rejected","completed"]},
      {"key":"checkbox","options":["Skopje","Belgrade","New York"]},
      {"key":"status","options":["just_created","confirmed","canceled"]},
      {"key":"radio","options":["no","maybe","yes"]}
  ],
  "optionsForRelation":[
      {"key":"type","path":"/static/genres/items","value":"name","display":"name","isValuePath":false,"produceRelationKey":true,"relationKey":"type_eventid","relationJoiner":"-"},
  ],

  "paging":{
    "pageSize": 20,
    "finite": true,
    "retainLastPage": false
  }
}

//Navigation
exports.navigation=[
    {
      "link": "/",
      "name": "Dashboard",
      "schema":null,
      "icon":"home",
      isIndex:true,
      "path": "",
    },
    {
      "link": "fireadmin",
      "path": "sermons",
      "name": "Sermons",
      "icon":"record_voice_over",
      "tableFields":["title","photo","description"],
    },
    {
      "link": "fireadmin",
      "path": "events",
      "name": "Events",
      "icon":"today",
      "tableFields":["photo","title","day"],
    },
    {
      "link": "fireadmin",
      "path": "bible",
      "name": "Bible",
      "icon":"import_contacts",
      "tableFields":["BibleURL"],
    },
    {
      "link": "fireadmin",
      "path": "news",
      "name": "News",
      "icon":"content_copy",
      "tableFields":["title","photo","date"],
    },
    {
      "link": "fireadmin",
      "path": "more",
      "name": "More",
      "icon":"add",
      "tableFields":["name","description"],
        "subMenus": [{
          "link": "fireadmin",
          "path": "more/about",
          "name": "About",
          "icon":"insert_drive_file",
          "tableFields":["image","title","heading"]
        },{
          "link": "fireadmin",
          "path": "more/branches",
          "name": "Branches",
          "icon":"business",
          "tableFields":["image","title","heading"]
        },{
          "link": "fireadmin",
          "path": "more/leaders",
          "name": "Leaders",
          "icon":"people",
          "tableFields":["image","title"]
        },{
          "link": "fireadmin",
          "path": "more/ministries",
          "name": "Ministries",
          "icon":"call_split",
          "tableFields":["image","title"]
        },{
          "link": "fireadmin",
          "path": "more/connect",
          "name": "Connect",
          "icon":"transform",
          "tableFields":["image","title","heading"]
        },{
          "link": "fireadmin",
          "path": "more/tithing",
          "name": "Tithing",
          "icon":"local_florist",
          "tableFields":["image","title","heading"]
        },{
          "link": "fireadmin",
          "path": "more/music",
          "name": "Music",
          "icon":"playlist_play",
          "tableFields":["image","title"]
        },{
          "link": "fireadmin",
          "path": "more/social",
          "name": "Social",
          "icon":"forum",
          "tableFields":["image","title"]
        }]
    },
    {
      "link": "push",
      "path": "",
      "name": "Push Notifications",
      "icon":"notifications_active",
      "tableFields":[],
    }
  ];

exports.pushSettings={
  "pushType":"onesignal", //firebase or onesignal
  "Firebase_AuthorizationPushKey":"", //Firebase push authorization ket
  "pushTopic":"news", //Only for firebase push
  "oneSignal_REST_API_KEY":"your_APIkey_goes_in_here",
  "oneSignal_APP_KEY":"your_APPkey_goes_in_here",
  "included_segments":"Active Users", //Only for onesignal push
}

exports.userDetails={

}
