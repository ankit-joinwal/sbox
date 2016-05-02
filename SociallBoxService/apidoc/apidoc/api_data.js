define({ "api": [
  {
    "type": "get",
    "url": "/api/public/categories",
    "title": "Get All Categories",
    "name": "Get_Categories",
    "group": "Categories",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success - OK 200": [
          {
            "group": "Success - OK 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Response.</p>"
          },
          {
            "group": "Success - OK 200",
            "type": "String",
            "optional": false,
            "field": "response.status",
            "description": "<p>Eg.Success.</p>"
          },
          {
            "group": "Success - OK 200",
            "type": "Object",
            "optional": false,
            "field": "response.data",
            "description": "<p>Categories</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: ",
          "content": "\n {\n\t  \"status\": \"Success\",\n\t  \"data\": [\n\t    {\n\t      \"id\": 1,\n\t      \"name\": \"event\",\n\t      \"description\": \"Event-o-pedia\",\n\t      \"display_order\": 1,\n\t      \"sortOptions\": [],\n\t      \"sortOrderOptions\": []\n\t    },\n\t    {\n\t      \"id\": 2,\n\t      \"name\": \"restaurant\",\n\t      \"description\": \"Food Lust\",\n\t      \"display_order\": 2,\n\t      \"sortOptions\": [\n\t        {\n\t          \"code\": \"prominence\",\n\t          \"description\": \"Rating\"\n\t        },\n\t        {\n\t          \"code\": \"real_distance\",\n\t          \"description\": \"Distance\"\n\t        }\n\t      ],\n\t      \"sortOrderOptions\": []\n\t    },\n\t    {\n\t      \"id\": 5,\n\t      \"name\": \"bar\",\n\t      \"description\": \"Bar-O-Bar\",\n\t      \"display_order\": 3,\n\t      \"sortOptions\": [\n\t        {\n\t          \"code\": \"prominence\",\n\t          \"description\": \"Rating\"\n\t        },\n\t        {\n\t          \"code\": \"real_distance\",\n\t          \"description\": \"Distance\"\n\t        }\n\t      ],\n\t      \"sortOrderOptions\": []\n\t    },\n\t    {\n\t      \"id\": 3,\n\t      \"name\": \"cafe\",\n\t      \"description\": \"Coffee Love\",\n\t      \"display_order\": 4,\n\t      \"sortOptions\": [\n\t        {\n\t          \"code\": \"prominence\",\n\t          \"description\": \"Rating\"\n\t        },\n\t        {\n\t          \"code\": \"real_distance\",\n\t          \"description\": \"Distance\"\n\t        }\n\t      ],\n\t      \"sortOrderOptions\": []\n\t    },\n\t    {\n\t      \"id\": 4,\n\t      \"name\": \"night_club\",\n\t      \"description\": \"NightLife\",\n\t      \"display_order\": 5,\n\t      \"sortOptions\": [\n\t        {\n\t          \"code\": \"prominence\",\n\t          \"description\": \"Rating\"\n\t        },\n\t        {\n\t          \"code\": \"real_distance\",\n\t          \"description\": \"Distance\"\n\t        }\n\t      ],\n\t      \"sortOrderOptions\": []\n\t    }\n\t  ],\n\t  \"page\": 1,\n\t  \"nextPage\": null,\n\t  \"total_records\": 5\n\t}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../src/main/java/com/bitlogic/sociallbox/service/controller/CategoryPublicController.java",
    "groupTitle": "Categories"
  },
  {
    "type": "get",
    "url": "/api/public/events/types",
    "title": "Get All Event Types",
    "name": "Get_All_Event_Types",
    "group": "Events",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success - OK 200": [
          {
            "group": "Success - OK 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Response.</p>"
          },
          {
            "group": "Success - OK 200",
            "type": "String",
            "optional": false,
            "field": "response.status",
            "description": "<p>Eg.Success.</p>"
          },
          {
            "group": "Success - OK 200",
            "type": "Object",
            "optional": false,
            "field": "response.data",
            "description": "<p>Event Types</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: ",
          "content": "\n{\n  \"status\": \"Success\",\n  \"data\": [\n    {\n      \"id\": 2,\n      \"name\": \"music\",\n      \"description\": \"Music\",\n      \"displayOrder\": 2,\n      \"color\": \"#56bde8\"\n    },\n    {\n      \"id\": 3,\n      \"name\": \"nightlife\",\n      \"description\": \"NightLife\",\n      \"displayOrder\": 3,\n      \"color\": \"#7ed321\"\n    },\n    {\n      \"id\": 4,\n      \"name\": \"foodanddrink\",\n      \"description\": \"Food n Drinks\",\n      \"displayOrder\": 4,\n      \"color\": \"#f5a623\"\n    },\n    {\n      \"id\": 5,\n      \"name\": \"startup\",\n      \"description\": \"Startup\",\n      \"displayOrder\": 5,\n      \"color\": \"#3b5998\"\n    },\n    {\n      \"id\": 6,\n      \"name\": \"education\",\n      \"description\": \"Education\",\n      \"displayOrder\": 6,\n      \"color\": \"#f8e71c\"\n    },\n    {\n      \"id\": 7,\n      \"name\": \"travel\",\n      \"description\": \"Travel\",\n      \"displayOrder\": 7,\n      \"color\": \"#8b572a\"\n    },\n    {\n      \"id\": 8,\n      \"name\": \"exhibition\",\n      \"description\": \"Exhibition\",\n      \"displayOrder\": 9,\n      \"color\": \"#55acee\"\n    },\n    {\n      \"id\": 9,\n      \"name\": \"entertainment\",\n      \"description\": \"Entertainment\",\n      \"displayOrder\": 8,\n      \"color\": \"#9013fe\"\n    },\n    {\n      \"id\": 10,\n      \"name\": \"sports\",\n      \"description\": \"Sports\",\n      \"displayOrder\": 10,\n      \"color\": \"#429a0c\"\n    },\n    {\n      \"id\": 11,\n      \"name\": \"spiritual\",\n      \"description\": \"Spirituality\",\n      \"displayOrder\": 11,\n      \"color\": \"#d0021b\"\n    }\n  ],\n  \"page\": 1,\n  \"nextPage\": null,\n  \"total_records\": 10\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../src/main/java/com/bitlogic/sociallbox/service/controller/EventTypePublicController.java",
    "groupTitle": "Events"
  },
  {
    "type": "get",
    "url": "/api/public/events/:id?user=:userId",
    "title": "Get Event Details",
    "name": "Get_Event_Details",
    "group": "Events",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Mandatory Event id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>Optional User id</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success - OK 200": [
          {
            "group": "Success - OK 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Response.</p>"
          },
          {
            "group": "Success - OK 200",
            "type": "String",
            "optional": false,
            "field": "response.status",
            "description": "<p>Eg.Success.</p>"
          },
          {
            "group": "Success - OK 200",
            "type": "Object",
            "optional": false,
            "field": "response.data",
            "description": "<p>Event Details Information.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t\t    \"status\": \"Success\",\n\t\t    \"data\": {\n\t\t        \"title\": \"Adidas Clearance Sale\",\n\t\t        \"description\": \"<h5>End of Summer Season Sale - 1st Week of July<br/>End of Winter Season Sale - 1st Week of January<br/>Special Weekend Offers during End of Season Sale<br/></h5>\",\n\t\t        \"tags\": [\n\t\t            {\n\t\t                \"name\": \"shopping\",\n\t\t                \"description\": \"Shopping\"\n\t\t            },\n\t\t            {\n\t\t                \"name\": \"fashion\",\n\t\t                \"description\": \"Fashion\"\n\t\t            },\n\t\t            {\n\t\t                \"name\": \"sale\",\n\t\t                \"description\": \"Sale\"\n\t\t            }\n\t\t        ],\n\t\t        \"id\": \"4028918853e215f00153e21f31cb0000\",\n\t\t        \"distance_from_src\": null,\n\t\t        \"event_detail\": {\n\t\t            \"location\": {\n\t\t                \"lattitude\": 28.483705,\n\t\t                \"longitude\": 77.107372,\n\t\t                \"name\": \"Select Citywalk, New-Delhi, Delhi, India\",\n\t\t                \"locality\": \"Saket\"\n\t\t            },\n\t\t            \"organizer\": {\n\t\t                \"name\": \"Remix Entertainment\",\n\t\t                \"address\": {\n\t\t                    \"street\": \"Mandakini Enclave\",\n\t\t                    \"city\": \"New Delhi\",\n\t\t                    \"state\": \"Delhi\",\n\t\t                    \"country\": \"India\",\n\t\t                    \"zip_code\": \"110019\"\n\t\t                },\n\t\t                \"phone1\": \"+91 7838250407\",\n\t\t                \"phone2\": \"\",\n\t\t                \"phone3\": \"\",\n\t\t                \"id\": \"4028918b53adfe990153ae0134100000\",\n\t\t                \"email_id\": \"harsh.singh@remixentertainments.com\",\n\t\t                \"profile_pic\": null,\n\t\t                \"cover_pic\": null,\n\t\t                \"website\": \"http://www.remixentertainments.com\"\n\t\t            },\n\t\t            \"booking_url\": \"6\"\n\t\t        },\n\t\t        \"start_date\": \"Sun, 1 May 12:30 PM\",\n\t\t        \"end_date\": \"Sun, 2 Oct 08:30 PM\",\n\t\t        \"is_user_fav\": false,\n\t\t        \"is_user_going\": true,\n\t\t        \"display_image\": {\n\t\t            \"id\": 10,\n\t\t            \"name\": \"adidas.jpg\",\n\t\t            \"url\": \"https://sociallbox.s3-ap-southeast-1.amazonaws.com/public/events/4028918853e215f00153e21f31cb0000/adidas.jpg\",\n\t\t            \"displayOrder\": 1,\n\t\t            \"mimeType\": null\n\t\t        },\n\t\t        \"status\": \"LIVE\",\n\t\t        \"is_free\": false\n\t\t    }\n\t\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "NotFound 404": [
          {
            "group": "NotFound 404",
            "type": "String",
            "optional": false,
            "field": "messageType",
            "description": "<p>Eg.ERROR</p>"
          },
          {
            "group": "NotFound 404",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Eg. ERR_001</p>"
          },
          {
            "group": "NotFound 404",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Eg. Event Not Found</p>"
          },
          {
            "group": "NotFound 404",
            "type": "String",
            "optional": false,
            "field": "entityId",
            "description": "<p>Entity Id which was searched</p>"
          },
          {
            "group": "NotFound 404",
            "type": "Object",
            "optional": false,
            "field": "exception",
            "description": "<p>StackTrace</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../src/main/java/com/bitlogic/sociallbox/service/controller/EventPublicController.java",
    "groupTitle": "Events"
  },
  {
    "type": "get",
    "url": "/api/public/events/:id/images",
    "title": "Get Event Images",
    "name": "Get_Event_Images",
    "group": "Events",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Mandatory Event id</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success - OK 200": [
          {
            "group": "Success - OK 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Response.</p>"
          },
          {
            "group": "Success - OK 200",
            "type": "String",
            "optional": false,
            "field": "response.status",
            "description": "<p>Eg.Success.</p>"
          },
          {
            "group": "Success - OK 200",
            "type": "Object",
            "optional": false,
            "field": "response.data",
            "description": "<p>Event Images</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t\t\t\"status\": \"Success\",\n\t\t\t\"data\": [\n\t\t\t\t{\n\t\t\t\t\t\"id\": 9,\n\t\t\t\t\t\"name\": \"wow.jpg\",\n\t\t\t\t\t\"url\": \"https://sociallbox.s3-ap-southeast-1.amazonaws.com/public/events/2c9f8ff353bd8bf50153bd9ea0a10000/wow.jpg\",\n\t\t\t\t\t\"displayOrder\": 1,\n\t\t\t\t\t\"mimeType\": null\n\t\t\t\t}\n\t\t\t],\n\t\t\t\"page\": 1,\n\t\t\t\"nextPage\": null,\n\t\t\t\"total_records\": null\n\t\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "NotFound 404": [
          {
            "group": "NotFound 404",
            "type": "String",
            "optional": false,
            "field": "messageType",
            "description": "<p>Eg.ERROR</p>"
          },
          {
            "group": "NotFound 404",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Eg. ERR_001</p>"
          },
          {
            "group": "NotFound 404",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Eg. Event Not Found</p>"
          },
          {
            "group": "NotFound 404",
            "type": "String",
            "optional": false,
            "field": "entityId",
            "description": "<p>Entity Id which was searched</p>"
          },
          {
            "group": "NotFound 404",
            "type": "Object",
            "optional": false,
            "field": "exception",
            "description": "<p>StackTrace</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../src/main/java/com/bitlogic/sociallbox/service/controller/EventPublicController.java",
    "groupTitle": "Events"
  },
  {
    "type": "get",
    "url": "/api/public/events/types/:type?city=:city&country=:country&id=:userId&lat=:lat&lon=:lon&page=:page",
    "title": "Get Events By Event-Type",
    "name": "Get_Events_By_Event_Type",
    "group": "Events",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>Mandatory Event Type Name</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "city",
            "description": "<p>Mandatory User City(Obtained from location)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "country",
            "description": "<p>Mandatory User Country(Obtained from location)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>Mandatory For logged in user , otherwise optional</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lat",
            "description": "<p>Mandatory Lattitude of User</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lon",
            "description": "<p>Mandatory Longitude of User</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "page",
            "description": "<p>Optional Next Page Number To search[Will be blank in intial request, then pass previous search response's (page+1)]</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "order",
            "description": "<p>Optional Ignore this for now</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success - OK 200": [
          {
            "group": "Success - OK 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Response.</p>"
          },
          {
            "group": "Success - OK 200",
            "type": "String",
            "optional": false,
            "field": "response.status",
            "description": "<p>OK.</p>"
          },
          {
            "group": "Success - OK 200",
            "type": "String",
            "optional": false,
            "field": "response.page",
            "description": "<p>This is Current page number. Increment by 1 to get next 20 records.</p>"
          },
          {
            "group": "Success - OK 200",
            "type": "String",
            "optional": false,
            "field": "response.total_records",
            "description": "<p>Eg. 20</p>"
          },
          {
            "group": "Success - OK 200",
            "type": "Object",
            "optional": false,
            "field": "response.data",
            "description": "<p>Events list</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n    \"status\": \"Success\",\n    \"data\": [\n        {\n            \"title\": \"Adidas Clearance Sale\",\n            \"description\": \"<h5>End of Summer Season Sale - 1st Week of July<br/>End of Winter Season Sale - 1st Week of January<br/>Special Weekend Offers during End of Season Sale<br/></h5>\",\n            \"tags\": [\n                {\n                    \"name\": \"shopping\",\n                    \"description\": \"Shopping\"\n                },\n                {\n                    \"name\": \"fashion\",\n                    \"description\": \"Fashion\"\n                },\n                {\n                    \"name\": \"sale\",\n                    \"description\": \"Sale\"\n                }\n            ],\n            \"id\": \"4028918853e215f00153e21f31cb0000\",\n            \"distance_from_src\": \"14 Kms\",\n            \"event_detail\": {\n                \"location\": {\n                    \"lattitude\": 28.483705,\n                    \"longitude\": 77.107372,\n                    \"name\": \"Select Citywalk, New-Delhi, Delhi, India\",\n                    \"locality\": \"Saket\"\n                },\n                \"organizer\": {\n                    \"name\": \"Remix Entertainment\",\n                    \"address\": {\n                        \"street\": \"Mandakini Enclave\",\n                        \"city\": \"New Delhi\",\n                        \"state\": \"Delhi\",\n                        \"country\": \"India\",\n                        \"zip_code\": \"110019\"\n                    },\n                    \"phone1\": \"+91 7838250407\",\n                    \"phone2\": \"\",\n                    \"phone3\": \"\",\n                    \"id\": \"4028918b53adfe990153ae0134100000\",\n                    \"email_id\": \"harsh.singh@remixentertainments.com\",\n                    \"profile_pic\": null,\n                    \"cover_pic\": null,\n                    \"website\": \"http://www.remixentertainments.com\"\n                },\n                \"booking_url\": \"6\"\n            },\n            \"start_date\": \"Sun, 1 May 12:30 PM\",\n            \"end_date\": \"Sun, 2 Oct 08:30 PM\",\n            \"is_user_fav\": false,\n            \"is_user_going\": false,\n            \"display_image\": {\n                \"id\": 10,\n                \"name\": \"adidas.jpg\",\n                \"url\": \"https://sociallbox.s3-ap-southeast-1.amazonaws.com/public/events/4028918853e215f00153e21f31cb0000/adidas.jpg\",\n                \"displayOrder\": 1,\n                \"mimeType\": null\n            },\n            \"status\": \"LIVE\",\n            \"is_free\": false\n        }\n    ],\n    \"page\": 1,\n    \"nextPage\": null,\n    \"total_records\": 1\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../src/main/java/com/bitlogic/sociallbox/service/controller/EventPublicController.java",
    "groupTitle": "Events"
  },
  {
    "type": "get",
    "url": "/api/public/events/personalized?city=:city&country=:country&id=:userId&lat=:lat&lon=:lon&page=:page",
    "title": "Get Events For You",
    "name": "Get_Events_For_You",
    "group": "Events",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "city",
            "description": "<p>Mandatory User City(Obtained from location)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "country",
            "description": "<p>Mandatory User Country(Obtained from location)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>Mandatory For logged in user , otherwise optional</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lat",
            "description": "<p>Mandatory Lattitude of User</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lon",
            "description": "<p>Mandatory Longitude of User</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "page",
            "description": "<p>Optional Next Page Number To search[Will be blank in intial request, then pass previous search response's (page+1)]</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "order",
            "description": "<p>Optional Ignore this for now</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success - OK 200": [
          {
            "group": "Success - OK 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Response.</p>"
          },
          {
            "group": "Success - OK 200",
            "type": "String",
            "optional": false,
            "field": "response.status",
            "description": "<p>OK.</p>"
          },
          {
            "group": "Success - OK 200",
            "type": "String",
            "optional": false,
            "field": "response.page",
            "description": "<p>This is Current page number. Increment by 1 to get next 20 records.</p>"
          },
          {
            "group": "Success - OK 200",
            "type": "String",
            "optional": false,
            "field": "response.total_records",
            "description": "<p>Eg. 20</p>"
          },
          {
            "group": "Success - OK 200",
            "type": "Object",
            "optional": false,
            "field": "response.data",
            "description": "<p>Events list</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n\t{\n    \"status\": \"Success\",\n    \"data\": [\n        {\n            \"title\": \"Smaaash Cyberhub\",\n            \"description\": \"<p><b>General Offer: Play 9 Games at Smaaash Gurgaon @ Rs 555 AI (Monday to Thursday) and @ Rs 888 AI (Friday to Sunday)11am to 11pm</b><br/>- Finger Coaster<br/>- Super Keeper (5 shots)<br/>- Vulcan Force<br/>- Harley Simulator<br/>- King of Hammer<br/>- Speed of Light<br/>- Nitro Wheelie<br/>- Pacman Basket<br/>- Over the Top<br/><br/><b>College Student Offer: Rs. 699 per student</b><br/>Valid from Monday to Thursday<br/>Not Valid Without College Student ID card<br/>Valid between 11 AM and 5 PM<br/>Which gives Single Access to College Students to all Games at Smaaash Gurgaon along with Bowling and Cricket.<br/><br/><b>Rs. 399- All days, Games combo. Any 3 Simulation Games or Any 3 Virtual Reality Games. Any 3 Arcade Games. 5 Shots at SupeerKeeper</b><br/></p>\",\n            \"tags\": [\n                {\n                    \"name\": \"hhour\",\n                    \"description\": \"HappyHours\"\n                },\n                {\n                    \"name\": \"family\",\n                    \"description\": \"Family\"\n                }\n            ],\n            \"id\": \"2c9f8ff353bd8bf50153bd9ea0a10000\",\n            \"distance_from_src\": \"14 Kms\",\n            \"event_detail\": {\n                \"location\": {\n                    \"lattitude\": 28.483705,\n                    \"longitude\": 77.107372,\n                    \"name\": \"DLF Cyber City, Tower B, 8th Rd, DLF Phase 2, Sector 24, Gurgaon, DELHI 122 002, India\",\n                    \"locality\": \"Gurgaon\"\n                },\n                \"organizer\": {\n                    \"name\": \"XYZ Entertainment\",\n                    \"address\": {\n                        \"street\": \"Kalkaji\",\n                        \"city\": \"New Delhi\",\n                        \"state\": \"Delhi\",\n                        \"country\": \"India\",\n                        \"zip_code\": \"110019\"\n                    },\n                    \"phone1\": \"+91 7838250407\",\n                    \"phone2\": \"\",\n                    \"phone3\": \"\",\n                    \"id\": \"2c9f8ff353af06840153af0a742c0000\",\n                    \"email_id\": \"xyz@gmail.com\",\n                    \"profile_pic\": null,\n                    \"cover_pic\": null,\n                    \"website\": \"http://www.test.com\"\n                },\n                \"booking_url\": \"https://in.bookmyshow.com\"\n            },\n            \"start_date\": \"Tue, 1 Mar 12:30 PM\",\n            \"end_date\": \"Mon, 2 May 08:30 PM\",\n            \"is_user_fav\": false,\n            \"display_image\": {\n                \"id\": 1,\n                \"name\": \"smash.jpg\",\n                \"url\": \"https://sociallbox.s3-ap-southeast-1.amazonaws.com/public/events/2c9f8ff353bd8bf50153bd9ea0a10000/smash.jpg\",\n                \"displayOrder\": 1,\n                \"mimeType\": null\n            },\n            \"is_free\": false\n        },\n        {\n            \"title\": \"Arijit Singh Live in Concert\",\n            \"description\": \"<p>Carnival Media presents the nation's absolute heart-throb, Arijit Singh, with the Grand Symphony live in concert. <br/>The Grand Symphony Orchestra is a 45 -piece band of some of the most talented musicians from across the world. This large instrumental ensemblethat contains Drums, Violin, Grand Piano, Cello, Harp, Flute, French Horns, Trumpet, Viola and much more will be performing in sync with Arijit Singh.<br/>The scintillating and soulful voice behind the hits like Tum hi ho, Muskurane ki vajah and Sooraj Dooba Hai Yaaron will be singing his hits in ways like never before.<br/>This musical extravaganza will be held on four places, i.e. Singapore, Chandigarh, Indore and Srilanka. This will be a ticketed event and entry will be reserved only for Ticket holders.<br/></p>\",\n            \"tags\": [\n                {\n                    \"name\": \"rock\",\n                    \"description\": \"Rock\"\n                },\n                {\n                    \"name\": \"bollywood\",\n                    \"description\": \"Bollywood\"\n                },\n                {\n                    \"name\": \"family\",\n                    \"description\": \"Family\"\n                },\n                {\n                    \"name\": \"sufi\",\n                    \"description\": \"Sufi\"\n                }\n            ],\n            \"id\": \"2c9f8ff353bd8bf50153bdab6f440001\",\n            \"distance_from_src\": \"9 Kms\",\n            \"event_detail\": {\n                \"location\": {\n                    \"lattitude\": 28.5285479,\n                    \"longitude\": 77.2194538,\n                    \"name\": \"Select Citywalk, Neu-Delhi, Delhi, India\",\n                    \"locality\": \"Saket\"\n                },\n                \"organizer\": {\n                    \"name\": \"XYZ Entertainment\",\n                    \"address\": {\n                        \"street\": \"Kalkaji\",\n                        \"city\": \"New Delhi\",\n                        \"state\": \"Delhi\",\n                        \"country\": \"India\",\n                        \"zip_code\": \"110019\"\n                    },\n                    \"phone1\": \"+91 7838250407\",\n                    \"phone2\": \"\",\n                    \"phone3\": \"\",\n                    \"id\": \"2c9f8ff353af06840153af0a742c0000\",\n                    \"email_id\": \"xyz@gmail.com\",\n                    \"profile_pic\": null,\n                    \"cover_pic\": null,\n                    \"website\": \"http://www.test.com\"\n                },\n                \"booking_url\": \"https://in.bookmyshow.com\"\n            },\n            \"start_date\": \"Fri, 11 Mar 06:30 PM\",\n            \"end_date\": \"Fri, 11 Mar 10:30 PM\",\n            \"is_user_fav\": true,\n            \"display_image\": {\n                \"id\": 2,\n                \"name\": \"arjit.jpg\",\n                \"url\": \"https://sociallbox.s3-ap-southeast-1.amazonaws.com/public/events/2c9f8ff353bd8bf50153bdab6f440001/arjit.jpg\",\n                \"displayOrder\": 1,\n                \"mimeType\": null\n            },\n            \"is_free\": true\n        },\n        {\n            \"title\": \"Songdew Media Nights - Live Music\",\n            \"description\": \"Songdew invites you to a night of rock music with some of the most sought after bands in the country. The energy and enthusiasm of the music is sure to make your heart pump. Dont miss the opportunity to be a part of the excitement.\",\n            \"tags\": [\n                {\n                    \"name\": \"rock\",\n                    \"description\": \"Rock\"\n                },\n                {\n                    \"name\": \"bollywood\",\n                    \"description\": \"Bollywood\"\n                },\n                {\n                    \"name\": \"family\",\n                    \"description\": \"Family\"\n                },\n                {\n                    \"name\": \"sufi\",\n                    \"description\": \"Sufi\"\n                }\n            ],\n            \"id\": \"2c9f8ff353bd8bf50153bdaf23470002\",\n            \"distance_from_src\": \"9 Kms\",\n            \"event_detail\": {\n                \"location\": {\n                    \"lattitude\": 28.52721,\n                    \"longitude\": 77.2170872,\n                    \"name\": \"Hard Rock Cafe, Saket, Delhi, India\",\n                    \"locality\": \"Hard Rock Cafe\"\n                },\n                \"organizer\": {\n                    \"name\": \"XYZ Entertainment\",\n                    \"address\": {\n                        \"street\": \"Kalkaji\",\n                        \"city\": \"New Delhi\",\n                        \"state\": \"Delhi\",\n                        \"country\": \"India\",\n                        \"zip_code\": \"110019\"\n                    },\n                    \"phone1\": \"+91 7838250407\",\n                    \"phone2\": \"\",\n                    \"phone3\": \"\",\n                    \"id\": \"2c9f8ff353af06840153af0a742c0000\",\n                    \"email_id\": \"xyz@gmail.com\",\n                    \"profile_pic\": null,\n                    \"cover_pic\": null,\n                    \"website\": \"http://www.test.com\"\n                },\n                \"booking_url\": \"https://in.bookmyshow.com\"\n            },\n            \"start_date\": \"Tue, 12 Apr 06:30 PM\",\n            \"end_date\": \"Tue, 12 Apr 10:30 PM\",\n            \"is_user_fav\": false,\n            \"display_image\": {\n                \"id\": 3,\n                \"name\": \"songdew.jpg\",\n                \"url\": \"https://sociallbox.s3-ap-southeast-1.amazonaws.com/public/events/2c9f8ff353bd8bf50153bdaf23470002/songdew.jpg\",\n                \"displayOrder\": 1,\n                \"mimeType\": null\n            },\n            \"is_free\": true\n        },\n        {\n            \"title\": \"DISCOVERY One Month Weekend Theatre Workshop-Batch 1\",\n            \"description\": \"<p><b>Here is what they want you to know:</b><br/><br/>Essentially, through individual, team and cumulative exercises, activities and participation they intend to guide, mentor and extend a support mechanism to seekers and aspirants to know, realise and therefore, develop their acting potential and eventually hone their skills and talents in a valid direction. This means, in strict senses, 'how to go about it?' and of course, with 'where' and a little 'when'. The workshop, with months of perseverance and experience of people behind it, assures you a shred by shred detailing in improvisations, scenic studies and comprehension, actor's vision, blockages, characterization, the utility of observance and wait and myriad of inspiration which may provoke you to pull that 'string'..anywhere. This workshop, eclectic in method, like a beautiful bird flying in sky, is designed in a such a way that it becomes vast, enormous and gigantic as the 'greed for need' arises. And of course, aspirants are humbly expected to keep journals of their work. Plus, any experience or exposure in theatre, cinema or performing art or any related school is candidly acknowledged, however, it is not mandatory at all. This workshop is and shall always remain open for any/every/each one.<br/><br/></p>\",\n            \"tags\": [\n                {\n                    \"name\": \"rock\",\n                    \"description\": \"Rock\"\n                },\n                {\n                    \"name\": \"bollywood\",\n                    \"description\": \"Bollywood\"\n                },\n                {\n                    \"name\": \"family\",\n                    \"description\": \"Family\"\n                },\n                {\n                    \"name\": \"sufi\",\n                    \"description\": \"Sufi\"\n                }\n            ],\n            \"id\": \"2c9f8ff353bd8bf50153bdbcd0840003\",\n            \"distance_from_src\": \"9 Kms\",\n            \"event_detail\": {\n                \"location\": {\n                    \"lattitude\": 28.52721,\n                    \"longitude\": 77.2170872,\n                    \"name\": \"Hard Rock Cafe, Saket, Delhi, India\",\n                    \"locality\": \"Hard Rock Cafe\"\n                },\n                \"organizer\": {\n                    \"name\": \"XYZ Entertainment\",\n                    \"address\": {\n                        \"street\": \"Kalkaji\",\n                        \"city\": \"New Delhi\",\n                        \"state\": \"Delhi\",\n                        \"country\": \"India\",\n                        \"zip_code\": \"110019\"\n                    },\n                    \"phone1\": \"+91 7838250407\",\n                    \"phone2\": \"\",\n                    \"phone3\": \"\",\n                    \"id\": \"2c9f8ff353af06840153af0a742c0000\",\n                    \"email_id\": \"xyz@gmail.com\",\n                    \"profile_pic\": null,\n                    \"cover_pic\": null,\n                    \"website\": \"http://www.test.com\"\n                },\n                \"booking_url\": \"https://in.bookmyshow.com\"\n            },\n            \"start_date\": \"Tue, 12 Apr 06:30 PM\",\n            \"end_date\": \"Tue, 12 Apr 10:30 PM\",\n            \"is_user_fav\": false,\n            \"display_image\": {\n                \"id\": 4,\n                \"name\": \"disc.jpg\",\n                \"url\": \"https://sociallbox.s3-ap-southeast-1.amazonaws.com/public/events/2c9f8ff353bd8bf50153bdbcd0840003/disc.jpg\",\n                \"displayOrder\": 1,\n                \"mimeType\": null\n            },\n            \"is_free\": false\n        },\n        {\n            \"title\": \"Worlds Of Wonder\",\n            \"description\": \"<p><span id=\"selectionBoundary_1459349793081_5889249769145433\" class=\"rangySelectionBoundary\">﻿</span>Spread over 20 acres, the WOW - Amusement park offers 20 world class attractions. It is segregated into the following entertainment zones:<br/>-The road show<br/>-The teen zone and la fiesta<br/>-The family zone<br/>The road show is meant for adventure lovers and consists of seven thrilling attractions. La Fiesta is a zone meant for family and kids. It comprises of 13 attractions. All rides at the WOW Amusement Park are certified for safety by Tuv Nord, a German certifying body. It also includes the largest man-made lake in the entire NCR.<br/>Come and have a memorable day with your loved ones filled with fun and adventure!<span id=\"selectionBoundary_1459349793081_02449337906340232\" class=\"rangySelectionBoundary\">﻿</span><br/></p>\",\n            \"tags\": [\n                {\n                    \"name\": \"hhour\",\n                    \"description\": \"HappyHours\"\n                },\n                {\n                    \"name\": \"family\",\n                    \"description\": \"Family\"\n                }\n            ],\n            \"id\": \"2c9f8ff353c815f60153c81a44e20000\",\n            \"distance_from_src\": \"14 Kms\",\n            \"event_detail\": {\n                \"location\": {\n                    \"lattitude\": 28.483705,\n                    \"longitude\": 77.107372,\n                    \"name\": \"No. 2, Behind TGIP Mall, Entertainment City, Delhi, NCR 201301, India\",\n                    \"locality\": \"Noida\"\n                },\n                \"organizer\": {\n                    \"name\": \"XYZ Entertainment\",\n                    \"address\": {\n                        \"street\": \"Kalkaji\",\n                        \"city\": \"New Delhi\",\n                        \"state\": \"Delhi\",\n                        \"country\": \"India\",\n                        \"zip_code\": \"110019\"\n                    },\n                    \"phone1\": \"+91 7838250407\",\n                    \"phone2\": \"\",\n                    \"phone3\": \"\",\n                    \"id\": \"2c9f8ff353af06840153af0a742c0000\",\n                    \"email_id\": \"xyz@gmail.com\",\n                    \"profile_pic\": null,\n                    \"cover_pic\": null,\n                    \"website\": \"http://www.test.com\"\n                },\n                \"booking_url\": \"https://in.bookmyshow.com/national-capital-region-ncr/events/wow-amusement-park/ET00035886\"\n            },\n            \"start_date\": \"Tue, 1 Mar 12:30 PM\",\n            \"end_date\": \"Tue, 2 May 08:30 PM\",\n            \"is_user_fav\": false,\n            \"display_image\": {\n                \"id\": 5,\n                \"name\": \"wow.jpg\",\n                \"url\": \"https://sociallbox.s3-ap-southeast-1.amazonaws.com/public/events/2c9f8ff353c815f60153c81a44e20000/wow.jpg\",\n                \"displayOrder\": 1,\n                \"mimeType\": null\n            },\n            \"is_free\": false\n        }\n    ],\n    \"page\": 1,\n    \"nextPage\": null,\n    \"total_records\": 5\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../src/main/java/com/bitlogic/sociallbox/service/controller/EventPublicController.java",
    "groupTitle": "Events"
  },
  {
    "type": "get",
    "url": "/api/public/events/types/retail?city=:city&country=:country&id=:userId&lat=:lat&lon=:lon&page=:page&filter=:tagsIds",
    "title": "Get Retail Events",
    "name": "Get_Retail_Events",
    "group": "Events",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "city",
            "description": "<p>Mandatory User City(Obtained from location)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "country",
            "description": "<p>Mandatory User Country(Obtained from location)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>Mandatory For logged in user , otherwise optional</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lat",
            "description": "<p>Mandatory Lattitude of User</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lon",
            "description": "<p>Mandatory Longitude of User</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "page",
            "description": "<p>Optional Next Page Number To search[Will be blank in intial request, then pass previous search response's (page+1)]</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "filter",
            "description": "<p>Comma separated tag ids selected as filter by user Eg. 2,3 Tag ids are returned in Get Retail Tags API</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "order",
            "description": "<p>Optional Ignore this for now</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success - OK 200": [
          {
            "group": "Success - OK 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Response.</p>"
          },
          {
            "group": "Success - OK 200",
            "type": "String",
            "optional": false,
            "field": "response.status",
            "description": "<p>OK.</p>"
          },
          {
            "group": "Success - OK 200",
            "type": "String",
            "optional": false,
            "field": "response.page",
            "description": "<p>This is Current page number. Increment by 1 to get next 20 records.</p>"
          },
          {
            "group": "Success - OK 200",
            "type": "String",
            "optional": false,
            "field": "response.total_records",
            "description": "<p>Eg. 20</p>"
          },
          {
            "group": "Success - OK 200",
            "type": "Object",
            "optional": false,
            "field": "response.data",
            "description": "<p>Events list</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n\t\"status\": \"Success\",\n\t\"data\": [\n\t\t{\n\t\t\t\"title\": \"Event2\",\n\t\t\t\"description\": \"<h2>Try me!</h2><p>textAngular is a super cool WYSIWYG Text Editor directive for AngularJS</p><p><b>Features:</b></p><ol><li>Automatic Seamless Two-Way-Binding</li><li style=\"color: blue;\">Super Easy <b>Theming</b> Options</li><li>Simple Editor Instance Creation</li><li>Safely Parses Html for Custom Toolbar Icons</li><li>Doesn't Use an iFrame</li><li>Works with Firefox, Chrome, and IE8+</li></ol><p><b>Code at GitHub:</b> <a href=\"https://github.com/fraywing/textAngular\">Here</a> </p>\",\n\t\t\t\"tags\": [\n\t\t\t\t{\n\t\t\t\t\t\"id\": 1,\n\t\t\t\t\t\"name\": \"shopping\",\n\t\t\t\t\t\"description\": \"Shopping\"\n\t\t\t\t}\n\t\t\t],\n\t\t\t\"id\": \"4028918853bd6ca10153bd738d100000\",\n\t\t\t\"distance_from_src\": \"16 Kms\",\n\t\t\t\"event_detail\": {\n\t\t\t\t\"location\": {\n\t\t\t\t\t\"lattitude\": 28.4682917,\n\t\t\t\t\t\"longitude\": 77.06347870000002,\n\t\t\t\t\t\"name\": \"kalkaji new delhi india\",\n\t\t\t\t\t\"locality\": \"Kalkaji\"\n\t\t\t\t},\n\t\t\t\t\"organizer\": {\n\t\t\t\t\t\"name\": \"Remix Entertainment\",\n\t\t\t\t\t\"address\": {\n\t\t\t\t\t\t\"street\": \"Mandakini Enclave\",\n\t\t\t\t\t\t\"city\": \"New Delhi\",\n\t\t\t\t\t\t\"state\": \"Delhi\",\n\t\t\t\t\t\t\"country\": \"India\",\n\t\t\t\t\t\t\"zip_code\": \"110019\"\n\t\t\t\t\t},\n\t\t\t\t\t\"phone1\": \"+91 7838250407\",\n\t\t\t\t\t\"phone2\": \"\",\n\t\t\t\t\t\"phone3\": \"\",\n\t\t\t\t\t\"id\": \"4028918b53adfe990153ae0134100000\",\n\t\t\t\t\t\"email_id\": \"harsh.singh@remixentertainments.com\",\n\t\t\t\t\t\"profile_pic\": null,\n\t\t\t\t\t\"cover_pic\": null,\n\t\t\t\t\t\"website\": \"http://www.remixentertainments.com\"\n\t\t\t\t},\n\t\t\t\t\"booking_url\": null\n\t\t\t},\n\t\t\t\"start_date\": \"Fri, 1 Jul 12:30 AM\",\n\t\t\t\"end_date\": \"Sat, 2 Jul 12:30 AM\",\n\t\t\t\"is_user_fav\": false,\n\t\t\t\"is_user_going\": false,\n\t\t\t\"display_image\": {\n\t\t\t\t\"id\": 8,\n\t\t\t\t\"name\": \"auto_expo2.jpg\",\n\t\t\t\t\"url\": \"https://sociallbox.s3-ap-southeast-1.amazonaws.com/public/events/4028918853bd6ca10153bd738d100000/auto_expo2.jpg\",\n\t\t\t\t\"displayOrder\": 1,\n\t\t\t\t\"mimeType\": null\n\t\t\t},\n\t\t\t\"status\": \"LIVE\",\n\t\t\t\"is_free\": false\n\t\t},\n\t\t{\n\t\t\t\"title\": \"Adidas Clearance Sale\",\n\t\t\t\"description\": \"<h5>End of Summer Season Sale - 1st Week of July<br/>End of Winter Season Sale - 1st Week of January<br/>Special Weekend Offers during End of Season Sale<br/></h5>\",\n\t\t\t\"tags\": [\n\t\t\t\t{\n\t\t\t\t\t\"id\": 1,\n\t\t\t\t\t\"name\": \"shopping\",\n\t\t\t\t\t\"description\": \"Shopping\"\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t\"id\": 3,\n\t\t\t\t\t\"name\": \"fashion\",\n\t\t\t\t\t\"description\": \"Fashion\"\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t\"id\": 2,\n\t\t\t\t\t\"name\": \"sale\",\n\t\t\t\t\t\"description\": \"Sale\"\n\t\t\t\t}\n\t\t\t],\n\t\t\t\"id\": \"4028918853e215f00153e21f31cb0000\",\n\t\t\t\"distance_from_src\": \"14 Kms\",\n\t\t\t\"event_detail\": {\n\t\t\t\t\"location\": {\n\t\t\t\t\t\"lattitude\": 28.483705,\n\t\t\t\t\t\"longitude\": 77.107372,\n\t\t\t\t\t\"name\": \"Select Citywalk, New-Delhi, Delhi, India\",\n\t\t\t\t\t\"locality\": \"Saket\"\n\t\t\t\t},\n\t\t\t\t\"organizer\": {\n\t\t\t\t\t\"name\": \"Remix Entertainment\",\n\t\t\t\t\t\"address\": {\n\t\t\t\t\t\t\"street\": \"Mandakini Enclave\",\n\t\t\t\t\t\t\"city\": \"New Delhi\",\n\t\t\t\t\t\t\"state\": \"Delhi\",\n\t\t\t\t\t\t\"country\": \"India\",\n\t\t\t\t\t\t\"zip_code\": \"110019\"\n\t\t\t\t\t},\n\t\t\t\t\t\"phone1\": \"+91 7838250407\",\n\t\t\t\t\t\"phone2\": \"\",\n\t\t\t\t\t\"phone3\": \"\",\n\t\t\t\t\t\"id\": \"4028918b53adfe990153ae0134100000\",\n\t\t\t\t\t\"email_id\": \"harsh.singh@remixentertainments.com\",\n\t\t\t\t\t\"profile_pic\": null,\n\t\t\t\t\t\"cover_pic\": null,\n\t\t\t\t\t\"website\": \"http://www.remixentertainments.com\"\n\t\t\t\t},\n\t\t\t\t\"booking_url\": \"6\"\n\t\t\t},\n\t\t\t\"start_date\": \"Sun, 1 May 12:30 PM\",\n\t\t\t\"end_date\": \"Sun, 2 Oct 08:30 PM\",\n\t\t\t\"is_user_fav\": false,\n\t\t\t\"is_user_going\": false,\n\t\t\t\"display_image\": {\n\t\t\t\t\"id\": 10,\n\t\t\t\t\"name\": \"adidas.jpg\",\n\t\t\t\t\"url\": \"https://sociallbox.s3-ap-southeast-1.amazonaws.com/public/events/4028918853e215f00153e21f31cb0000/adidas.jpg\",\n\t\t\t\t\"displayOrder\": 1,\n\t\t\t\t\"mimeType\": null\n\t\t\t},\n\t\t\t\"status\": \"LIVE\",\n\t\t\t\"is_free\": false\n\t\t},\n\t\t{\n\t\t\t\"title\": \"Puma Flat 40% Off\",\n\t\t\t\"description\": \"<p>Puma is a global athletic brand which has enabled one to catch the attention of fine folks. Its athletes have been setting world records, making game-winning goals and just plain dominating – all while looking good doing it. And, wherever you may be, they have you covered. From football and running, to golf and sailing - they bring the most innovative technology and stylish designs to the field, the track, the course, and the deck. And thats just the tip of the iceberg. PUMA starts in Sport and ends in the Fashion. Its Sport performance and Lifestyle labels include categories such as Football, Running, Motorsports, Golf, and Sailing.<br/>More at : <a href=\"http://in.puma.com/sale.html\" >http://in.puma.com/sale.html</a><br/></p><p><br/><br/></p>\",\n\t\t\t\"tags\": [\n\t\t\t\t{\n\t\t\t\t\t\"id\": 1,\n\t\t\t\t\t\"name\": \"shopping\",\n\t\t\t\t\t\"description\": \"Shopping\"\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t\"id\": 3,\n\t\t\t\t\t\"name\": \"fashion\",\n\t\t\t\t\t\"description\": \"Fashion\"\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t\"id\": 2,\n\t\t\t\t\t\"name\": \"sale\",\n\t\t\t\t\t\"description\": \"Sale\"\n\t\t\t\t}\n\t\t\t],\n\t\t\t\"id\": \"4028918853e672830153e6aec4230000\",\n\t\t\t\"distance_from_src\": \"14 Kms\",\n\t\t\t\"event_detail\": {\n\t\t\t\t\"location\": {\n\t\t\t\t\t\"lattitude\": 28.483705,\n\t\t\t\t\t\"longitude\": 77.107372,\n\t\t\t\t\t\"name\": \"Select Citywalk, New-Delhi, Delhi, India\",\n\t\t\t\t\t\"locality\": \"Saket\"\n\t\t\t\t},\n\t\t\t\t\"organizer\": {\n\t\t\t\t\t\"name\": \"Remix Entertainment\",\n\t\t\t\t\t\"address\": {\n\t\t\t\t\t\t\"street\": \"Mandakini Enclave\",\n\t\t\t\t\t\t\"city\": \"New Delhi\",\n\t\t\t\t\t\t\"state\": \"Delhi\",\n\t\t\t\t\t\t\"country\": \"India\",\n\t\t\t\t\t\t\"zip_code\": \"110019\"\n\t\t\t\t\t},\n\t\t\t\t\t\"phone1\": \"+91 7838250407\",\n\t\t\t\t\t\"phone2\": \"\",\n\t\t\t\t\t\"phone3\": \"\",\n\t\t\t\t\t\"id\": \"4028918b53adfe990153ae0134100000\",\n\t\t\t\t\t\"email_id\": \"harsh.singh@remixentertainments.com\",\n\t\t\t\t\t\"profile_pic\": null,\n\t\t\t\t\t\"cover_pic\": null,\n\t\t\t\t\t\"website\": \"http://www.remixentertainments.com\"\n\t\t\t\t},\n\t\t\t\t\"booking_url\": null\n\t\t\t},\n\t\t\t\"start_date\": \"Sun, 1 May 12:30 PM\",\n\t\t\t\"end_date\": \"Sun, 2 Oct 08:30 PM\",\n\t\t\t\"is_user_fav\": true,\n\t\t\t\"is_user_going\": false,\n\t\t\t\"display_image\": {\n\t\t\t\t\"id\": 11,\n\t\t\t\t\"name\": \"puma.jpg\",\n\t\t\t\t\"url\": \"https://sociallbox.s3-ap-southeast-1.amazonaws.com/public/events/4028918853e672830153e6aec4230000/puma.jpg\",\n\t\t\t\t\"displayOrder\": 1,\n\t\t\t\t\"mimeType\": null\n\t\t\t},\n\t\t\t\"status\": \"LIVE\",\n\t\t\t\"is_free\": false\n\t\t},\n\t\t{\n\t\t\t\"title\": \"LG Sale\",\n\t\t\t\"description\": \"<p>Save on the new home appliances, home entertainment technology and cell phones you want most. Whether you're preparing for the holidays and need a new refrigerator, want to buy a TV before the big game, or it's time to upgrade your mobile device so you can do even more on the go, our seasonal promotions and special offers can help you get the things you need for less. Of course, LG promotions change frequently and are only available for a limited time -- so check back often and shop early.</p>\",\n\t\t\t\"tags\": [\n\t\t\t\t{\n\t\t\t\t\t\"id\": 4,\n\t\t\t\t\t\"name\": \"electronics\",\n\t\t\t\t\t\"description\": \"Electronics\"\n\t\t\t\t}\n\t\t\t],\n\t\t\t\"id\": \"4028918853e672830153e6b44d480001\",\n\t\t\t\"distance_from_src\": \"14 Kms\",\n\t\t\t\"event_detail\": {\n\t\t\t\t\"location\": {\n\t\t\t\t\t\"lattitude\": 28.483705,\n\t\t\t\t\t\"longitude\": 77.107372,\n\t\t\t\t\t\"name\": \"Select Citywalk, New-Delhi, Delhi, India\",\n\t\t\t\t\t\"locality\": \"Saket\"\n\t\t\t\t},\n\t\t\t\t\"organizer\": {\n\t\t\t\t\t\"name\": \"Remix Entertainment\",\n\t\t\t\t\t\"address\": {\n\t\t\t\t\t\t\"street\": \"Mandakini Enclave\",\n\t\t\t\t\t\t\"city\": \"New Delhi\",\n\t\t\t\t\t\t\"state\": \"Delhi\",\n\t\t\t\t\t\t\"country\": \"India\",\n\t\t\t\t\t\t\"zip_code\": \"110019\"\n\t\t\t\t\t},\n\t\t\t\t\t\"phone1\": \"+91 7838250407\",\n\t\t\t\t\t\"phone2\": \"\",\n\t\t\t\t\t\"phone3\": \"\",\n\t\t\t\t\t\"id\": \"4028918b53adfe990153ae0134100000\",\n\t\t\t\t\t\"email_id\": \"harsh.singh@remixentertainments.com\",\n\t\t\t\t\t\"profile_pic\": null,\n\t\t\t\t\t\"cover_pic\": null,\n\t\t\t\t\t\"website\": \"http://www.remixentertainments.com\"\n\t\t\t\t},\n\t\t\t\t\"booking_url\": null\n\t\t\t},\n\t\t\t\"start_date\": \"Sun, 1 May 12:30 PM\",\n\t\t\t\"end_date\": \"Sun, 2 Oct 08:30 PM\",\n\t\t\t\"is_user_fav\": false,\n\t\t\t\"is_user_going\": false,\n\t\t\t\"display_image\": {\n\t\t\t\t\"id\": 12,\n\t\t\t\t\"name\": \"LG.jpg\",\n\t\t\t\t\"url\": \"https://sociallbox.s3-ap-southeast-1.amazonaws.com/public/events/4028918853e672830153e6b44d480001/LG.jpg\",\n\t\t\t\t\"displayOrder\": 1,\n\t\t\t\t\"mimeType\": null\n\t\t\t},\n\t\t\t\"status\": \"LIVE\",\n\t\t\t\"is_free\": false\n\t\t}\n\t],\n\t\"page\": 1,\n\t\"nextPage\": null,\n\t\"total_records\": 4\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../src/main/java/com/bitlogic/sociallbox/service/controller/EventPublicController.java",
    "groupTitle": "Events"
  },
  {
    "type": "get",
    "url": "/api/public/events/type/retail/filters",
    "title": "Get Retail Tags",
    "name": "Get_Retail_Tags",
    "group": "Events",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success - OK 200": [
          {
            "group": "Success - OK 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Response.</p>"
          },
          {
            "group": "Success - OK 200",
            "type": "String",
            "optional": false,
            "field": "response.status",
            "description": "<p>OK.</p>"
          },
          {
            "group": "Success - OK 200",
            "type": "Object",
            "optional": false,
            "field": "response.data",
            "description": "<p>Retail Tags</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t\t\t\"status\": \"Success\",\n\t\t\t\"data\": [\n\t\t\t\t{\n\t\t\t\t\t\"id\": 1,\n\t\t\t\t\t\"name\": \"shopping\",\n\t\t\t\t\t\"description\": \"Shopping\"\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t\"id\": 2,\n\t\t\t\t\t\"name\": \"sale\",\n\t\t\t\t\t\"description\": \"Sale\"\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t\"id\": 3,\n\t\t\t\t\t\"name\": \"fashion\",\n\t\t\t\t\t\"description\": \"Fashion\"\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t\"id\": 4,\n\t\t\t\t\t\"name\": \"electronics\",\n\t\t\t\t\t\"description\": \"Electronics\"\n\t\t\t\t}\n\t\t\t],\n\t\t\t\"page\": 1,\n\t\t\t\"nextPage\": null,\n\t\t\t\"total_records\": 4\n\t\t}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../src/main/java/com/bitlogic/sociallbox/service/controller/EventPublicController.java",
    "groupTitle": "Events"
  },
  {
    "type": "get",
    "url": "/api/public/events/upcoming/organizer/:organizerId?id=:userId&&lat=:userLatitude&lon=:userLongitude&filter=:eventIdToFilter",
    "title": "Get Upcoming Events by Organizer",
    "name": "Get_Upcoming_events_by_organizer",
    "group": "Events",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "organizerId",
            "description": "<p>Mandatory Organizer id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Optional User Id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userLatitude",
            "description": "<p>Mandatory userLatitude</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userLongitude",
            "description": "<p>Mandatory userLongitude</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "eventIdToFilter",
            "description": "<p>Optional Event id which should not be included in response</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success - OK 200": [
          {
            "group": "Success - OK 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Response.</p>"
          },
          {
            "group": "Success - OK 200",
            "type": "String",
            "optional": false,
            "field": "response.status",
            "description": "<p>Eg.Success.</p>"
          },
          {
            "group": "Success - OK 200",
            "type": "Object",
            "optional": false,
            "field": "response.data",
            "description": "<p>Events list</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t\t\t\"status\": \"Success\",\n\t\t\t\"data\": [\n\t\t\t\t{\n\t\t\t\t\t\"title\": \"Songdew Media Nights - Live Music\",\n\t\t\t\t\t\"description\": \"Songdew invites you to a night of rock music with some of the most sought after bands in the country. The energy and enthusiasm of the music is sure to make your heart pump. Dont miss the opportunity to be a part of the excitement.\",\n\t\t\t\t\t\"tags\": [\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\"name\": \"rock\",\n\t\t\t\t\t\t\t\"description\": \"Rock\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\"name\": \"sufi\",\n\t\t\t\t\t\t\t\"description\": \"Sufi\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\"name\": \"bollywood\",\n\t\t\t\t\t\t\t\"description\": \"Bollywood\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\"name\": \"family\",\n\t\t\t\t\t\t\t\"description\": \"Family\"\n\t\t\t\t\t\t}\n\t\t\t\t\t],\n\t\t\t\t\t\"id\": \"2c9f8ff353bd8bf50153bdaf23470002\",\n\t\t\t\t\t\"distance_from_src\": null,\n\t\t\t\t\t\"event_detail\": {\n\t\t\t\t\t\t\"location\": {\n\t\t\t\t\t\t\t\"lattitude\": 28.52721,\n\t\t\t\t\t\t\t\"longitude\": 77.2170872,\n\t\t\t\t\t\t\t\"name\": \"Hard Rock Cafe, Saket, Delhi, India\",\n\t\t\t\t\t\t\t\"locality\": \"Hard Rock Cafe\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"organizer\": {\n\t\t\t\t\t\t\t\"name\": \"Remix Entertainment\",\n\t\t\t\t\t\t\t\"address\": {\n\t\t\t\t\t\t\t\t\"street\": \"Mandakini Enclave\",\n\t\t\t\t\t\t\t\t\"city\": \"New Delhi\",\n\t\t\t\t\t\t\t\t\"state\": \"Delhi\",\n\t\t\t\t\t\t\t\t\"country\": \"India\",\n\t\t\t\t\t\t\t\t\"zip_code\": \"110019\"\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\"phone1\": \"+91 7838250407\",\n\t\t\t\t\t\t\t\"phone2\": \"\",\n\t\t\t\t\t\t\t\"phone3\": \"\",\n\t\t\t\t\t\t\t\"id\": \"4028918b53adfe990153ae0134100000\",\n\t\t\t\t\t\t\t\"email_id\": \"harsh.singh@remixentertainments.com\",\n\t\t\t\t\t\t\t\"profile_pic\": null,\n\t\t\t\t\t\t\t\"cover_pic\": null,\n\t\t\t\t\t\t\t\"website\": \"http://www.remixentertainments.com\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"booking_url\": null\n\t\t\t\t\t},\n\t\t\t\t\t\"start_date\": \"Tue, 12 Apr 06:30 PM\",\n\t\t\t\t\t\"end_date\": \"Tue, 12 Apr 10:30 PM\",\n\t\t\t\t\t\"is_user_fav\": false,\n\t\t\t\t\t\"display_image\": {\n\t\t\t\t\t\t\"id\": 3,\n\t\t\t\t\t\t\"name\": \"songdew.jpg\",\n\t\t\t\t\t\t\"url\": \"https://sociallbox.s3-ap-southeast-1.amazonaws.com/public/events/2c9f8ff353bd8bf50153bdaf23470002/songdew.jpg\",\n\t\t\t\t\t\t\"displayOrder\": 1,\n\t\t\t\t\t\t\"mimeType\": null\n\t\t\t\t\t},\n\t\t\t\t\t\"status\": \"LIVE\",\n\t\t\t\t\t\"is_free\": false\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t\"title\": \"DISCOVERY One Month Weekend Theatre Workshop-Batch 1\",\n\t\t\t\t\t\"description\": \"<p><b>Here is what they want you to know:</b><br/><br/>Essentially, through individual, team and cumulative exercises, activities and participation they intend to guide, mentor and extend a support mechanism to seekers and aspirants to know, realise and therefore, develop their acting potential and eventually hone their skills and talents in a valid direction. This means, in strict senses, 'how to go about it?' and of course, with 'where' and a little 'when'. The workshop, with months of perseverance and experience of people behind it, assures you a shred by shred detailing in improvisations, scenic studies and comprehension, actor's vision, blockages, characterization, the utility of observance and wait and myriad of inspiration which may provoke you to pull that 'string'..anywhere. This workshop, eclectic in method, like a beautiful bird flying in sky, is designed in a such a way that it becomes vast, enormous and gigantic as the 'greed for need' arises. And of course, aspirants are humbly expected to keep journals of their work. Plus, any experience or exposure in theatre, cinema or performing art or any related school is candidly acknowledged, however, it is not mandatory at all. This workshop is and shall always remain open for any/every/each one.<br/><br/></p>\",\n\t\t\t\t\t\"tags\": [\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\"name\": \"rock\",\n\t\t\t\t\t\t\t\"description\": \"Rock\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\"name\": \"sufi\",\n\t\t\t\t\t\t\t\"description\": \"Sufi\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\"name\": \"bollywood\",\n\t\t\t\t\t\t\t\"description\": \"Bollywood\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\"name\": \"family\",\n\t\t\t\t\t\t\t\"description\": \"Family\"\n\t\t\t\t\t\t}\n\t\t\t\t\t],\n\t\t\t\t\t\"id\": \"2c9f8ff353bd8bf50153bdbcd0840003\",\n\t\t\t\t\t\"distance_from_src\": null,\n\t\t\t\t\t\"event_detail\": {\n\t\t\t\t\t\t\"location\": {\n\t\t\t\t\t\t\t\"lattitude\": 28.52721,\n\t\t\t\t\t\t\t\"longitude\": 77.2170872,\n\t\t\t\t\t\t\t\"name\": \"Hard Rock Cafe, Saket, Delhi, India\",\n\t\t\t\t\t\t\t\"locality\": \"Hard Rock Cafe\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"organizer\": {\n\t\t\t\t\t\t\t\"name\": \"Remix Entertainment\",\n\t\t\t\t\t\t\t\"address\": {\n\t\t\t\t\t\t\t\t\"street\": \"Mandakini Enclave\",\n\t\t\t\t\t\t\t\t\"city\": \"New Delhi\",\n\t\t\t\t\t\t\t\t\"state\": \"Delhi\",\n\t\t\t\t\t\t\t\t\"country\": \"India\",\n\t\t\t\t\t\t\t\t\"zip_code\": \"110019\"\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\"phone1\": \"+91 7838250407\",\n\t\t\t\t\t\t\t\"phone2\": \"\",\n\t\t\t\t\t\t\t\"phone3\": \"\",\n\t\t\t\t\t\t\t\"id\": \"4028918b53adfe990153ae0134100000\",\n\t\t\t\t\t\t\t\"email_id\": \"harsh.singh@remixentertainments.com\",\n\t\t\t\t\t\t\t\"profile_pic\": null,\n\t\t\t\t\t\t\t\"cover_pic\": null,\n\t\t\t\t\t\t\t\"website\": \"http://www.remixentertainments.com\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"booking_url\": null\n\t\t\t\t\t},\n\t\t\t\t\t\"start_date\": \"Tue, 12 Apr 06:30 PM\",\n\t\t\t\t\t\"end_date\": \"Tue, 12 Apr 10:30 PM\",\n\t\t\t\t\t\"is_user_fav\": false,\n\t\t\t\t\t\"display_image\": {\n\t\t\t\t\t\t\"id\": 4,\n\t\t\t\t\t\t\"name\": \"disc.jpg\",\n\t\t\t\t\t\t\"url\": \"https://sociallbox.s3-ap-southeast-1.amazonaws.com/public/events/2c9f8ff353bd8bf50153bdbcd0840003/disc.jpg\",\n\t\t\t\t\t\t\"displayOrder\": 1,\n\t\t\t\t\t\t\"mimeType\": null\n\t\t\t\t\t},\n\t\t\t\t\t\"status\": \"LIVE\",\n\t\t\t\t\t\"is_free\": false\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t\"title\": \"Event2\",\n\t\t\t\t\t\"description\": \"<h2>Try me!</h2><p>textAngular is a super cool WYSIWYG Text Editor directive for AngularJS</p><p><b>Features:</b></p><ol><li>Automatic Seamless Two-Way-Binding</li><li style=\"color: blue;\">Super Easy <b>Theming</b> Options</li><li>Simple Editor Instance Creation</li><li>Safely Parses Html for Custom Toolbar Icons</li><li>Doesn't Use an iFrame</li><li>Works with Firefox, Chrome, and IE8+</li></ol><p><b>Code at GitHub:</b> <a href=\"https://github.com/fraywing/textAngular\">Here</a> </p>\",\n\t\t\t\t\t\"tags\": [\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\"name\": \"shopping\",\n\t\t\t\t\t\t\t\"description\": \"Shopping\"\n\t\t\t\t\t\t}\n\t\t\t\t\t],\n\t\t\t\t\t\"id\": \"4028918853bd6ca10153bd738d100000\",\n\t\t\t\t\t\"distance_from_src\": null,\n\t\t\t\t\t\"event_detail\": {\n\t\t\t\t\t\t\"location\": {\n\t\t\t\t\t\t\t\"lattitude\": 28.4682917,\n\t\t\t\t\t\t\t\"longitude\": 77.06347870000002,\n\t\t\t\t\t\t\t\"name\": \"kalkaji new delhi india\",\n\t\t\t\t\t\t\t\"locality\": \"Kalkaji\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"organizer\": {\n\t\t\t\t\t\t\t\"name\": \"Remix Entertainment\",\n\t\t\t\t\t\t\t\"address\": {\n\t\t\t\t\t\t\t\t\"street\": \"Mandakini Enclave\",\n\t\t\t\t\t\t\t\t\"city\": \"New Delhi\",\n\t\t\t\t\t\t\t\t\"state\": \"Delhi\",\n\t\t\t\t\t\t\t\t\"country\": \"India\",\n\t\t\t\t\t\t\t\t\"zip_code\": \"110019\"\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\"phone1\": \"+91 7838250407\",\n\t\t\t\t\t\t\t\"phone2\": \"\",\n\t\t\t\t\t\t\t\"phone3\": \"\",\n\t\t\t\t\t\t\t\"id\": \"4028918b53adfe990153ae0134100000\",\n\t\t\t\t\t\t\t\"email_id\": \"harsh.singh@remixentertainments.com\",\n\t\t\t\t\t\t\t\"profile_pic\": null,\n\t\t\t\t\t\t\t\"cover_pic\": null,\n\t\t\t\t\t\t\t\"website\": \"http://www.remixentertainments.com\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"booking_url\": null\n\t\t\t\t\t},\n\t\t\t\t\t\"start_date\": \"Fri, 1 Jul 12:30 AM\",\n\t\t\t\t\t\"end_date\": \"Sat, 2 Jul 12:30 AM\",\n\t\t\t\t\t\"is_user_fav\": false,\n\t\t\t\t\t\"display_image\": {\n\t\t\t\t\t\t\"id\": 8,\n\t\t\t\t\t\t\"name\": \"auto_expo2.jpg\",\n\t\t\t\t\t\t\"url\": \"https://sociallbox.s3-ap-southeast-1.amazonaws.com/public/events/4028918853bd6ca10153bd738d100000/auto_expo2.jpg\",\n\t\t\t\t\t\t\"displayOrder\": 1,\n\t\t\t\t\t\t\"mimeType\": null\n\t\t\t\t\t},\n\t\t\t\t\t\"status\": \"LIVE\",\n\t\t\t\t\t\"is_free\": false\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t\"title\": \"Adidas Clearance Sale\",\n\t\t\t\t\t\"description\": \"<h5>End of Summer Season Sale - 1st Week of July<br/>End of Winter Season Sale - 1st Week of January<br/>Special Weekend Offers during End of Season Sale<br/></h5>\",\n\t\t\t\t\t\"tags\": [\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\"name\": \"shopping\",\n\t\t\t\t\t\t\t\"description\": \"Shopping\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\"name\": \"fashion\",\n\t\t\t\t\t\t\t\"description\": \"Fashion\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\"name\": \"sale\",\n\t\t\t\t\t\t\t\"description\": \"Sale\"\n\t\t\t\t\t\t}\n\t\t\t\t\t],\n\t\t\t\t\t\"id\": \"4028918853e215f00153e21f31cb0000\",\n\t\t\t\t\t\"distance_from_src\": null,\n\t\t\t\t\t\"event_detail\": {\n\t\t\t\t\t\t\"location\": {\n\t\t\t\t\t\t\t\"lattitude\": 28.483705,\n\t\t\t\t\t\t\t\"longitude\": 77.107372,\n\t\t\t\t\t\t\t\"name\": \"Select Citywalk, New-Delhi, Delhi, India\",\n\t\t\t\t\t\t\t\"locality\": \"Saket\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"organizer\": {\n\t\t\t\t\t\t\t\"name\": \"Remix Entertainment\",\n\t\t\t\t\t\t\t\"address\": {\n\t\t\t\t\t\t\t\t\"street\": \"Mandakini Enclave\",\n\t\t\t\t\t\t\t\t\"city\": \"New Delhi\",\n\t\t\t\t\t\t\t\t\"state\": \"Delhi\",\n\t\t\t\t\t\t\t\t\"country\": \"India\",\n\t\t\t\t\t\t\t\t\"zip_code\": \"110019\"\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\"phone1\": \"+91 7838250407\",\n\t\t\t\t\t\t\t\"phone2\": \"\",\n\t\t\t\t\t\t\t\"phone3\": \"\",\n\t\t\t\t\t\t\t\"id\": \"4028918b53adfe990153ae0134100000\",\n\t\t\t\t\t\t\t\"email_id\": \"harsh.singh@remixentertainments.com\",\n\t\t\t\t\t\t\t\"profile_pic\": null,\n\t\t\t\t\t\t\t\"cover_pic\": null,\n\t\t\t\t\t\t\t\"website\": \"http://www.remixentertainments.com\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"booking_url\": \"6\"\n\t\t\t\t\t},\n\t\t\t\t\t\"start_date\": \"Sun, 1 May 12:30 PM\",\n\t\t\t\t\t\"end_date\": \"Sun, 2 Oct 08:30 PM\",\n\t\t\t\t\t\"is_user_fav\": false,\n\t\t\t\t\t\"display_image\": {\n\t\t\t\t\t\t\"id\": 10,\n\t\t\t\t\t\t\"name\": \"adidas.jpg\",\n\t\t\t\t\t\t\"url\": \"https://sociallbox.s3-ap-southeast-1.amazonaws.com/public/events/4028918853e215f00153e21f31cb0000/adidas.jpg\",\n\t\t\t\t\t\t\"displayOrder\": 1,\n\t\t\t\t\t\t\"mimeType\": null\n\t\t\t\t\t},\n\t\t\t\t\t\"status\": \"LIVE\",\n\t\t\t\t\t\"is_free\": false\n\t\t\t\t}\n\t\t\t],\n\t\t\t\"page\": 1,\n\t\t\t\"nextPage\": null,\n\t\t\t\"total_records\": 4\n\t\t}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../src/main/java/com/bitlogic/sociallbox/service/controller/EventPublicController.java",
    "groupTitle": "Events"
  },
  {
    "type": "get",
    "url": "/api/secured/users/:userId/preferences/interests",
    "title": "Get User Events Interests",
    "name": "Get_User_Events_Interests",
    "group": "Events",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>Mandatory User id</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "Number",
            "optional": false,
            "field": "X-Auth-Date",
            "description": "<p>Current Epoch Date</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authentication Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example Headers",
          "content": " accept: application/json\n\t\tContent-Type: application/json\n\t\tX-Auth-Date: 1455988523724\n\t\tAuthorization: Basic U0R+U01BUlRfREVWSUNFXzI6NCtPU3JRN0tKMzZ2TW9iRmoxbmJEZG5ydVVJVTlwTWFVWmN1V0xxaUFaRT0=",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success - OK 200": [
          {
            "group": "Success - OK 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Response.</p>"
          },
          {
            "group": "Success - OK 200",
            "type": "String",
            "optional": false,
            "field": "response.status",
            "description": "<p>Eg.Success.</p>"
          },
          {
            "group": "Success - OK 200",
            "type": "Object",
            "optional": false,
            "field": "response.data",
            "description": "<p>User Event Interests</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t\t  \"status\": \"Success\",\n\t\t  \"data\": [\n\t\t    {\n\t\t      \"type\": {\n\t\t        \"id\": 2,\n\t\t        \"name\": \"music\",\n\t\t        \"description\": \"Music\",\n\t\t        \"displayOrder\": 2,\n\t\t        \"color\": \"#56bde8\"\n\t\t      },\n\t\t      \"is_interest\": false\n\t\t    },\n\t\t    {\n\t\t      \"type\": {\n\t\t        \"id\": 3,\n\t\t        \"name\": \"nightlife\",\n\t\t        \"description\": \"NightLife\",\n\t\t        \"displayOrder\": 3,\n\t\t        \"color\": \"#7ed321\"\n\t\t      },\n\t\t      \"is_interest\": true\n\t\t    },\n\t\t    {\n\t\t      \"type\": {\n\t\t        \"id\": 4,\n\t\t        \"name\": \"foodanddrink\",\n\t\t        \"description\": \"Food n Drinks\",\n\t\t        \"displayOrder\": 4,\n\t\t        \"color\": \"#f5a623\"\n\t\t      },\n\t\t      \"is_interest\": false\n\t\t    },\n\t\t    {\n\t\t      \"type\": {\n\t\t        \"id\": 5,\n\t\t        \"name\": \"startup\",\n\t\t        \"description\": \"Startup\",\n\t\t        \"displayOrder\": 5,\n\t\t        \"color\": \"#3b5998\"\n\t\t      },\n\t\t      \"is_interest\": false\n\t\t    },\n\t\t    {\n\t\t      \"type\": {\n\t\t        \"id\": 6,\n\t\t        \"name\": \"education\",\n\t\t        \"description\": \"Education\",\n\t\t        \"displayOrder\": 6,\n\t\t        \"color\": \"#f8e71c\"\n\t\t      },\n\t\t      \"is_interest\": false\n\t\t    },\n\t\t    {\n\t\t      \"type\": {\n\t\t        \"id\": 7,\n\t\t        \"name\": \"travel\",\n\t\t        \"description\": \"Travel\",\n\t\t        \"displayOrder\": 7,\n\t\t        \"color\": \"#8b572a\"\n\t\t      },\n\t\t      \"is_interest\": false\n\t\t    },\n\t\t    {\n\t\t      \"type\": {\n\t\t        \"id\": 8,\n\t\t        \"name\": \"exhibition\",\n\t\t        \"description\": \"Exhibition\",\n\t\t        \"displayOrder\": 9,\n\t\t        \"color\": \"#55acee\"\n\t\t      },\n\t\t      \"is_interest\": true\n\t\t    },\n\t\t    {\n\t\t      \"type\": {\n\t\t        \"id\": 9,\n\t\t        \"name\": \"entertainment\",\n\t\t        \"description\": \"Entertainment\",\n\t\t        \"displayOrder\": 8,\n\t\t        \"color\": \"#9013fe\"\n\t\t      },\n\t\t      \"is_interest\": false\n\t\t    },\n\t\t    {\n\t\t      \"type\": {\n\t\t        \"id\": 10,\n\t\t        \"name\": \"sports\",\n\t\t        \"description\": \"Sports\",\n\t\t        \"displayOrder\": 10,\n\t\t        \"color\": \"#429a0c\"\n\t\t      },\n\t\t      \"is_interest\": true\n\t\t    },\n\t\t    {\n\t\t      \"type\": {\n\t\t        \"id\": 11,\n\t\t        \"name\": \"spiritual\",\n\t\t        \"description\": \"Spirituality\",\n\t\t        \"displayOrder\": 11,\n\t\t        \"color\": \"#d0021b\"\n\t\t      },\n\t\t      \"is_interest\": false\n\t\t    }\n\t\t  ],\n\t\t  \"page\": 1,\n\t\t  \"nextPage\": null,\n\t\t  \"total_records\": 10\n\t\t}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../src/main/java/com/bitlogic/sociallbox/service/controller/secured/UserSecuredController.java",
    "groupTitle": "Events"
  },
  {
    "type": "post",
    "url": "/api/secured/users/:userId/preferences/interests",
    "title": "Save User Event Interests",
    "name": "Save_User_Event_Interest",
    "group": "Events",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>Mandatory User Id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "  [\n\t\t    {\n\t\t      \"type\": {\n\t\t        \"id\": 2,\n\t\t        \"name\": \"music\",\n\t\t        \"description\": \"Music\",\n\t\t        \"displayOrder\": 2,\n\t\t        \"color\": \"#56bde8\"\n\t\t      },\n\t\t      \"is_interest\": false\n\t\t    },\n\t\t    {\n\t\t      \"type\": {\n\t\t        \"id\": 3,\n\t\t        \"name\": \"nightlife\",\n\t\t        \"description\": \"NightLife\",\n\t\t        \"displayOrder\": 3,\n\t\t        \"color\": \"#7ed321\"\n\t\t      },\n\t\t      \"is_interest\": true\n\t\t    },\n\t\t    {\n\t\t      \"type\": {\n\t\t        \"id\": 4,\n\t\t        \"name\": \"foodanddrink\",\n\t\t        \"description\": \"Food n Drinks\",\n\t\t        \"displayOrder\": 4,\n\t\t        \"color\": \"#f5a623\"\n\t\t      },\n\t\t      \"is_interest\": false\n\t\t    },\n\t\t    {\n\t\t      \"type\": {\n\t\t        \"id\": 5,\n\t\t        \"name\": \"startup\",\n\t\t        \"description\": \"Startup\",\n\t\t        \"displayOrder\": 5,\n\t\t        \"color\": \"#3b5998\"\n\t\t      },\n\t\t      \"is_interest\": false\n\t\t    },\n\t\t    {\n\t\t      \"type\": {\n\t\t        \"id\": 6,\n\t\t        \"name\": \"education\",\n\t\t        \"description\": \"Education\",\n\t\t        \"displayOrder\": 6,\n\t\t        \"color\": \"#f8e71c\"\n\t\t      },\n\t\t      \"is_interest\": false\n\t\t    },\n\t\t    {\n\t\t      \"type\": {\n\t\t        \"id\": 7,\n\t\t        \"name\": \"travel\",\n\t\t        \"description\": \"Travel\",\n\t\t        \"displayOrder\": 7,\n\t\t        \"color\": \"#8b572a\"\n\t\t      },\n\t\t      \"is_interest\": false\n\t\t    },\n\t\t    {\n\t\t      \"type\": {\n\t\t        \"id\": 8,\n\t\t        \"name\": \"exhibition\",\n\t\t        \"description\": \"Exhibition\",\n\t\t        \"displayOrder\": 9,\n\t\t        \"color\": \"#55acee\"\n\t\t      },\n\t\t      \"is_interest\": true\n\t\t    },\n\t\t    {\n\t\t      \"type\": {\n\t\t        \"id\": 9,\n\t\t        \"name\": \"entertainment\",\n\t\t        \"description\": \"Entertainment\",\n\t\t        \"displayOrder\": 8,\n\t\t        \"color\": \"#9013fe\"\n\t\t      },\n\t\t      \"is_interest\": false\n\t\t    },\n\t\t    {\n\t\t      \"type\": {\n\t\t        \"id\": 10,\n\t\t        \"name\": \"sports\",\n\t\t        \"description\": \"Sports\",\n\t\t        \"displayOrder\": 10,\n\t\t        \"color\": \"#429a0c\"\n\t\t      },\n\t\t      \"is_interest\": true\n\t\t    },\n\t\t    {\n\t\t      \"type\": {\n\t\t        \"id\": 11,\n\t\t        \"name\": \"spiritual\",\n\t\t        \"description\": \"Spirituality\",\n\t\t        \"displayOrder\": 11,\n\t\t        \"color\": \"#d0021b\"\n\t\t      },\n\t\t      \"is_interest\": false\n\t\t    }\n\t\t  ]",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "Number",
            "optional": false,
            "field": "X-Auth-Date",
            "description": "<p>Current Epoch Date</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authentication Token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success - OK 200": [
          {
            "group": "Success - OK 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Response.</p>"
          },
          {
            "group": "Success - OK 200",
            "type": "String",
            "optional": false,
            "field": "response.status",
            "description": "<p>Eg.Success.</p>"
          },
          {
            "group": "Success - OK 200",
            "type": "Object",
            "optional": false,
            "field": "response.data",
            "description": "<p>Message</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../src/main/java/com/bitlogic/sociallbox/service/controller/secured/UserSecuredController.java",
    "groupTitle": "Events"
  },
  {
    "type": "delete",
    "url": "/api/secured/meetups/:meetupId",
    "title": "Cancel Meetup",
    "name": "Cancel_Meetup",
    "group": "Meetups",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "meetupId",
            "description": "<p>Mandatory Meetup Id</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "Number",
            "optional": false,
            "field": "X-Auth-Date",
            "description": "<p>Current Epoch Date</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authentication Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example Headers",
          "content": " accept: application/json\n\t\tContent-Type: application/json\n\t\tX-Auth-Date: 1455988523724\n\t\tAuthorization: Basic U0R+U01BUlRfREVWSUNFXzI6NCtPU3JRN0tKMzZ2TW9iRmoxbmJEZG5ydVVJVTlwTWFVWmN1V0xxaUFaRT0=",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success - OK 200": [
          {
            "group": "Success - OK 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Response.</p>"
          },
          {
            "group": "Success - OK 200",
            "type": "String",
            "optional": false,
            "field": "response.status",
            "description": "<p>Eg.Success.</p>"
          },
          {
            "group": "Success - OK 200",
            "type": "Object",
            "optional": false,
            "field": "response.data",
            "description": "<p>Success Message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n  \"status\": \"Success\",\n  \"data\": \"Meetup is cancelled successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../src/main/java/com/bitlogic/sociallbox/service/controller/secured/MeetupSecuredController.java",
    "groupTitle": "Meetups"
  },
  {
    "type": "post",
    "url": "/api/secured/meetups",
    "title": "Create Meetup",
    "name": "Create_Meetup",
    "group": "Meetups",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "Number",
            "optional": false,
            "field": "X-Auth-Date",
            "description": "<p>Current Epoch Date</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authentication Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": " For Normal Meetup, below is the request format-\n\t{\n\t\t\t\"title\" : \"College Fest Meetup\",\n\t\t\t\"description\" : \"IP University Fest\",\n\t\t\t\"is_private\":\"true\",\n\t\t\t\"location\" : {\n\t\t\t\t\t\t\t\"name\": \"Kalkaji, New Delhi, Delhi, India\",\n\t\t\t\t\t\t\t\"longitude\": 28.4682917,\n\t\t\t\t\t\t\t\"lattitude\": 77.06347870000002,\n\t\t\t\t\t\t\t\"locality\" : \"Kalkaji\"\n\t\t\t\t\t\t},\n\t\t\t\n\t\t\t\"start_date\" : \"01/07/2016 12:30 AM\",\n\t\t\t\"end_date\" : \"01/08/2016 12:30 PM\"\n\t\t}\n\t\t\n\t\tFor meetup at event, below is the request format-\n\t\t{\n\t\t\t\"title\" : \"Meetup at event\",\n\t\t\t\"description\" : \"Meetup at event desc\",\n\t\t\t\"is_private\":\"true\",\n\t\t\t\"event_at_meetup\":\"2c9f8ff353bd8bf50153bd9ea0a10000\",\n\t\t\t\"location\" : {\n\t\t\t\t\t\t\t\"name\": \"Kalkaji, New Delhi, Delhi, India\",\n\t\t\t\t\t\t\t\"longitude\": 28.4682917,\n\t\t\t\t\t\t\t\"lattitude\": 77.06347870000002,\n\t\t\t\t\t\t\t\"locality\" : \"Kalkaji\"\n\t\t\t\t\t\t},\n\t\t\t\n\t\t\t\"start_date\" : \"01/07/2016 12:30 AM\",\n\t\t\t\"end_date\" : \"01/08/2016 12:30 PM\"\n\t\t}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success - OK 201": [
          {
            "group": "Success - OK 201",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Response.</p>"
          },
          {
            "group": "Success - OK 201",
            "type": "String",
            "optional": false,
            "field": "response.status",
            "description": "<p>Eg.Success.</p>"
          },
          {
            "group": "Success - OK 201",
            "type": "Object",
            "optional": false,
            "field": "response.data",
            "description": "<p>Meetup Details</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " \t*For normal meetup, the response is as below format-\n \t{\n\t\t  \"status\": \"Success\",\n\t\t  \"data\": {\n\t\t    \"description\": \"IP University Fest\",\n\t\t    \"id\": \"4028918a53f1e9590153f1ea1db30000\",\n\t\t    \"title\": \"College Fest Meetup\",\n\t\t    \"location\": {\n\t\t      \"lattitude\": 77.06347870000002,\n\t\t      \"longitude\": 28.4682917,\n\t\t      \"name\": \"Kalkaji, New Delhi, Delhi, India\",\n\t\t      \"locality\": \"Kalkaji\"\n\t\t    },\n\t\t    \"start_date\": \"Fri, 1 Jul 2016 12:30 AM\",\n\t\t    \"end_date\": \"Mon, 1 Aug 2016 12:30 PM\",\n\t\t    \"organizer\": {\n\t\t      \"id\": 17,\n\t\t      \"name\": \"Ankit Joinwal\",\n\t\t      \"social_details\": [\n\t\t        {\n\t\t          \"system\": \"FACEBOOK\",\n\t\t          \"detail\": \"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xla1/v/t1.0-1/p200x200/12316467_10206731945876364_3008257792416820623_n.jpg?oh=cece300cd2db2d885c81f2c00b6a7d84&oe=578A9FB4&__gda__=1465178287_36f0dafbe70beb7506ebd22f8f089edf\",\n\t\t          \"detailType\": \"USER_PROFILE_PIC\"\n\t\t        }\n\t\t      ]\n\t\t    },\n\t\t    \"status\": \"CREATED\",\n\t\t    \"meetup_access_url\": \"http://localhost:8080/SociallBox/api/secured/meetups/4028918a53f1e9590153f1ea1db30000\",\n\t\t    \"display_pic\": null,\n\t\t    \"event_at_meetup\": null,\n\t\t    \"user_actions\": [\n\t\t      {\n\t\t        \"value\": true,\n\t\t        \"action_type\": \"CAN_VIEW\"\n\t\t      },\n\t\t      {\n\t\t        \"value\": true,\n\t\t        \"action_type\": \"CAN_EDIT\"\n\t\t      },\n\t\t      {\n\t\t        \"value\": true,\n\t\t        \"action_type\": \"CAN_INVITE\"\n\t\t      },\n\t\t      {\n\t\t        \"value\": true,\n\t\t        \"action_type\": \"CAN_UPLOAD_IMAGE\"\n\t\t      },\n\t\t      {\n\t\t        \"value\": true,\n\t\t        \"action_type\": \"CAN_MESSAGE\"\n\t\t      },\n\t\t      {\n\t\t        \"value\": true,\n\t\t        \"action_type\": \"CAN_CANCEL\"\n\t\t      }\n\t\t    ]\n\t\t  }\n\t\t}\nFor meetup at an event, below is response format-\n\t\t{\n\t\t    \"status\": \"Success\",\n\t\t    \"data\": {\n\t\t        \"description\": \"Meetup at event desc\",\n\t\t        \"id\": \"4028918a53f604c50153f60a76830000\",\n\t\t        \"title\": \"Meetup at event\",\n\t\t        \"location\": {\n\t\t            \"lattitude\": 77.06347870000002,\n\t\t            \"longitude\": 28.4682917,\n\t\t            \"name\": \"Kalkaji, New Delhi, Delhi, India\",\n\t\t            \"locality\": \"Kalkaji\"\n\t\t        },\n\t\t        \"start_date\": \"Fri, 1 Jul 2016 12:30 AM\",\n\t\t        \"end_date\": \"Mon, 1 Aug 2016 12:30 PM\",\n\t\t        \"organizer\": {\n\t\t            \"id\": 17,\n\t\t            \"name\": \"Ankit Joinwal\",\n\t\t            \"social_details\": [\n\t\t                {\n\t\t                    \"system\": \"FACEBOOK\",\n\t\t                    \"detail\": \"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xla1/v/t1.0-1/p200x200/12316467_10206731945876364_3008257792416820623_n.jpg?oh=cece300cd2db2d885c81f2c00b6a7d84&oe=578A9FB4&__gda__=1465178287_36f0dafbe70beb7506ebd22f8f089edf\",\n\t\t                    \"detailType\": \"USER_PROFILE_PIC\"\n\t\t                }\n\t\t            ]\n\t\t        },\n\t\t        \"status\": \"CREATED\",\n\t\t        \"meetup_access_url\": \"http://localhost:8080/SociallBox/api/secured/meetups/4028918a53f604c50153f60a76830000\",\n\t\t        \"display_pic\": null,\n\t\t        \"event_at_meetup\": \"2c9f8ff353bd8bf50153bd9ea0a10000\",\n\t\t        \"user_actions\": [\n\t\t            {\n\t\t                \"value\": true,\n\t\t                \"action_type\": \"CAN_VIEW\"\n\t\t            },\n\t\t            {\n\t\t                \"value\": true,\n\t\t                \"action_type\": \"CAN_EDIT\"\n\t\t            },\n\t\t            {\n\t\t                \"value\": true,\n\t\t                \"action_type\": \"CAN_INVITE\"\n\t\t            },\n\t\t            {\n\t\t                \"value\": true,\n\t\t                \"action_type\": \"CAN_UPLOAD_IMAGE\"\n\t\t            },\n\t\t            {\n\t\t                \"value\": true,\n\t\t                \"action_type\": \"CAN_MESSAGE\"\n\t\t            },\n\t\t            {\n\t\t                \"value\": true,\n\t\t                \"action_type\": \"CAN_CANCEL\"\n\t\t            }\n\t\t        ]\n\t\t    }\n\t\t}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../src/main/java/com/bitlogic/sociallbox/service/controller/secured/MeetupSecuredController.java",
    "groupTitle": "Meetups"
  },
  {
    "type": "post",
    "url": "/api/secured/meetups/:meetupId",
    "title": "Edit Meetup",
    "name": "Edit_Meetup",
    "group": "Meetups",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "meetupId",
            "description": "<p>Mandatory Meetup Id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\t\t\"title\" : \"College Fest Meetup with friends\",\n\t\t\"description\" : \"IP University Fest\",\n\t\t\"is_private\":\"true\",\n\t\t\"location\" : {\n\t\t\t\t\t\t\"name\": \"Kalkaji, New Delhi, Delhi, India\",\n\t\t\t\t\t\t\"longitude\": 28.4682917,\n\t\t\t\t\t\t\"lattitude\": 77.06347870000002,\n\t\t\t\t\t\t\"locality\" : \"Kalkaji\"\n\t\t\t\t\t},\n\n\t\t\"start_date\" : \"01/07/2016 12:30 AM\",\n\t\t\"end_date\" : \"01/08/2016 12:30 PM\"\n\t}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "Number",
            "optional": false,
            "field": "X-Auth-Date",
            "description": "<p>Current Epoch Date</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authentication Token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success - OK 200": [
          {
            "group": "Success - OK 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Response.</p>"
          },
          {
            "group": "Success - OK 200",
            "type": "String",
            "optional": false,
            "field": "response.status",
            "description": "<p>Eg.Success.</p>"
          },
          {
            "group": "Success - OK 200",
            "type": "Object",
            "optional": false,
            "field": "response.data",
            "description": "<p>Meetup Details after updation</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " \t{\n\t\t\t\"status\": \"Success\",\n\t\t\t\"data\": {\n\t\t\t\t\"description\": \"IP University Fest\",\n\t\t\t\t\"id\": \"4028918a53f1e9590153f1ea1db30000\",\n\t\t\t\t\"title\": \"College Fest Meetup with friends\",\n\t\t\t\t\"location\": {\n\t\t\t\t\t\"lattitude\": 77.06347870000002,\n\t\t\t\t\t\"longitude\": 28.4682917,\n\t\t\t\t\t\"name\": \"Kalkaji, New Delhi, Delhi, India\",\n\t\t\t\t\t\"locality\": \"Kalkaji\"\n\t\t\t\t},\n\t\t\t\t\"start_date\": \"Fri, 1 Jul 2016 12:30 AM\",\n\t\t\t\t\"end_date\": \"Mon, 1 Aug 2016 12:30 PM\",\n\t\t\t\t\"organizer\": {\n\t\t\t\t\t\"id\": 17,\n\t\t\t\t\t\"name\": \"Ankit Joinwal\",\n\t\t\t\t\t\"social_details\": [\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\"system\": \"FACEBOOK\",\n\t\t\t\t\t\t\t\"detail\": \"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xla1/v/t1.0-1/p200x200/12316467_10206731945876364_3008257792416820623_n.jpg?oh=cece300cd2db2d885c81f2c00b6a7d84&oe=578A9FB4&__gda__=1465178287_36f0dafbe70beb7506ebd22f8f089edf\",\n\t\t\t\t\t\t\t\"detailType\": \"USER_PROFILE_PIC\"\n\t\t\t\t\t\t}\n\t\t\t\t\t]\n\t\t\t\t},\n\t\t\t\t\"status\": \"CREATED\",\n\t\t\t\t\"meetup_access_url\": \"http://localhost:8080/SociallBox/api/secured/meetups/4028918a53f1e9590153f1ea1db30000/4028918a53f1e9590153f1ea1db30000\",\n\t\t\t\t\"display_pic\": {\n\t\t\t\t\t\"id\": 6,\n\t\t\t\t\t\"name\": \"smash.jpg\",\n\t\t\t\t\t\"url\": \"https://sociallbox.s3-ap-southeast-1.amazonaws.com/public/meetups/4028918a53f1e9590153f1ea1db30000/smash.jpg\",\n\t\t\t\t\t\"mimeType\": null,\n\t\t\t\t\t\"isDisplayImage\": true,\n\t\t\t\t\t\"uploadDt\": 1460055659000\n\t\t\t\t},\n\t\t\t\t\"event_at_meetup\": null,\n\t\t\t\t\"user_actions\": []\n\t\t\t}\n\t\t}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../src/main/java/com/bitlogic/sociallbox/service/controller/secured/MeetupSecuredController.java",
    "groupTitle": "Meetups"
  },
  {
    "type": "get",
    "url": "/api/secured/meetups/:meetupId/friends",
    "title": "Get Friends To invite for meetup",
    "name": "Get_Friends_To_invite_for_meetup",
    "group": "Meetups",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "meetupId",
            "description": "<p>Mandatory Meetup id</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "Number",
            "optional": false,
            "field": "X-Auth-Date",
            "description": "<p>Current Epoch Date</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authentication Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example Headers",
          "content": " accept: application/json\n\t\tContent-Type: application/json\n\t\tX-Auth-Date: 1455988523724\n\t\tAuthorization: Basic U0R+U01BUlRfREVWSUNFXzI6NCtPU3JRN0tKMzZ2TW9iRmoxbmJEZG5ydVVJVTlwTWFVWmN1V0xxaUFaRT0=",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success - OK 200": [
          {
            "group": "Success - OK 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Response.</p>"
          },
          {
            "group": "Success - OK 200",
            "type": "String",
            "optional": false,
            "field": "response.status",
            "description": "<p>Eg.Success.</p>"
          },
          {
            "group": "Success - OK 200",
            "type": "Object",
            "optional": false,
            "field": "response.data",
            "description": "<p>Friends</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n  \"status\": \"Success\",\n  \"data\": [\n\t{\n\t  \"id\": 12,\n\t  \"profilePic\": \"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash2/v/t1.0-1/p200x200/10712837_690026594399086_7729501495888015257_n.jpg?oh=dae7953515b52383b6e092e32da504c0&oe=578FF310&__gda__=1465312979_b8b37b205e83a5f8a8a2bbb681e0c640\",\n\t  \"name\": \"Mayank Agarwal\",\n\t  \"emailId\": \"agarwalmayank30@gmail.com\"\n\t},\n\t{\n\t  \"id\": 16,\n\t  \"profilePic\": \"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpa1/v/t1.0-1/s200x200/11224309_10153200429036366_3899281527807886630_n.jpg?oh=fbb67c694bc2bc6c21b7b70d0d25f53a&oe=574D6AFC&__gda__=1468826733_a181d28d9b3f9ed4bc72fac9d0b4d08a\",\n\t  \"name\": \"Vardhan Singh\",\n\t  \"emailId\": \"vardhansingh@yahoo.com\"\n\t}\n  ],\n  \"page\": 1,\n  \"nextPage\": null,\n  \"total_records\": 2\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../src/main/java/com/bitlogic/sociallbox/service/controller/secured/MeetupSecuredController.java",
    "groupTitle": "Meetups"
  },
  {
    "type": "get",
    "url": "/api/secured/meetups/:meetupId/attendees",
    "title": "Get Meetup Attendees",
    "name": "Get_Meetup_Attendees",
    "group": "Meetups",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "meetupId",
            "description": "<p>Mandatory Meetup Id</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "Number",
            "optional": false,
            "field": "X-Auth-Date",
            "description": "<p>Current Epoch Date</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authentication Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example Headers",
          "content": " accept: application/json\n\t\tContent-Type: application/json\n\t\tX-Auth-Date: 1455988523724\n\t\tAuthorization: Basic U0R+U01BUlRfREVWSUNFXzI6NCtPU3JRN0tKMzZ2TW9iRmoxbmJEZG5ydVVJVTlwTWFVWmN1V0xxaUFaRT0=",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success - OK 200": [
          {
            "group": "Success - OK 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Response.</p>"
          },
          {
            "group": "Success - OK 200",
            "type": "String",
            "optional": false,
            "field": "response.status",
            "description": "<p>Eg.Success.</p>"
          },
          {
            "group": "Success - OK 200",
            "type": "Object",
            "optional": false,
            "field": "response.data",
            "description": "<p>Attendees</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n\t\"status\": \"Success\",\n\t\"data\": [\n\t\t{\n\t\t\t\"id\": 14,\n\t\t\t\"name\": \"Ankit Joinwal\",\n\t\t\t\"user_id\": 17,\n\t\t\t\"profile_pic\": \"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xla1/v/t1.0-1/p200x200/12316467_10206731945876364_3008257792416820623_n.jpg?oh=cece300cd2db2d885c81f2c00b6a7d84&oe=578A9FB4&__gda__=1465178287_36f0dafbe70beb7506ebd22f8f089edf\",\n\t\t\t\"response\": \"YES\",\n\t\t\t\"is_admin\": true\n\t\t},\n\t\t{\n\t\t\t\"id\": 15,\n\t\t\t\"name\": \"Soumya Ranjan Nayak\",\n\t\t\t\"user_id\": 15,\n\t\t\t\"profile_pic\": \"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-frc3/v/t1.0-1/s200x200/539741_10151593876161285_1932943812_n.jpg?oh=91e5fd9cb3e7c726746a735d0603d5b2&oe=575DA8D4&__gda__=1468788536_04b0219db6544b0831aa55d45c7c76d0\",\n\t\t\t\"response\": \"MAYBE\",\n\t\t\t\"is_admin\": false\n\t\t},\n\t\t{\n\t\t\t\"id\": 16,\n\t\t\t\"name\": \"Vardhan Singh\",\n\t\t\t\"user_id\": 16,\n\t\t\t\"profile_pic\": \"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpa1/v/t1.0-1/s200x200/11224309_10153200429036366_3899281527807886630_n.jpg?oh=fbb67c694bc2bc6c21b7b70d0d25f53a&oe=574D6AFC&__gda__=1468826733_a181d28d9b3f9ed4bc72fac9d0b4d08a\",\n\t\t\t\"response\": \"NO\",\n\t\t\t\"is_admin\": false\n\t\t}\n\t],\n\t\"page\": null,\n\t\"nextPage\": null,\n\t\"total_records\": 3\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../src/main/java/com/bitlogic/sociallbox/service/controller/secured/MeetupSecuredController.java",
    "groupTitle": "Meetups"
  },
  {
    "type": "get",
    "url": "/api/secured/meetups/:meetupId",
    "title": "Get Meetup Details",
    "name": "Get_Meetup_Details",
    "group": "Meetups",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "meetupId",
            "description": "<p>Mandatory Meetup Id</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "Number",
            "optional": false,
            "field": "X-Auth-Date",
            "description": "<p>Current Epoch Date</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authentication Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example Headers",
          "content": " accept: application/json\n\t\tContent-Type: application/json\n\t\tX-Auth-Date: 1455988523724\n\t\tAuthorization: Basic U0R+U01BUlRfREVWSUNFXzI6NCtPU3JRN0tKMzZ2TW9iRmoxbmJEZG5ydVVJVTlwTWFVWmN1V0xxaUFaRT0=",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success - OK 200": [
          {
            "group": "Success - OK 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Response.</p>"
          },
          {
            "group": "Success - OK 200",
            "type": "String",
            "optional": false,
            "field": "response.status",
            "description": "<p>Eg.Success.</p>"
          },
          {
            "group": "Success - OK 200",
            "type": "Object",
            "optional": false,
            "field": "response.data",
            "description": "<p>Meetup Details</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " Sample Response For Meetup Organizer :\n {\n\t\t\t\"status\": \"Success\",\n\t\t\t\"data\": {\n\t\t\t\t\"description\": \"IP University Fest\",\n\t\t\t\t\"id\": \"4028918a53f1e9590153f1ea1db30000\",\n\t\t\t\t\"title\": \"College Fest Meetup\",\n\t\t\t\t\"location\": {\n\t\t\t\t\t\"lattitude\": 77.06347870000002,\n\t\t\t\t\t\"longitude\": 28.4682917,\n\t\t\t\t\t\"name\": \"Kalkaji, New Delhi, Delhi, India\",\n\t\t\t\t\t\"locality\": \"Kalkaji\"\n\t\t\t\t},\n\t\t\t\t\"start_date\": \"Fri, 1 Jul 2016 12:30 AM\",\n\t\t\t\t\"end_date\": \"Mon, 1 Aug 2016 12:30 PM\",\n\t\t\t\t\"organizer\": {\n\t\t\t\t\t\"id\": 17,\n\t\t\t\t\t\"name\": \"Ankit Joinwal\",\n\t\t\t\t\t\"social_details\": [\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\"system\": \"FACEBOOK\",\n\t\t\t\t\t\t\t\"detail\": \"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xla1/v/t1.0-1/p200x200/12316467_10206731945876364_3008257792416820623_n.jpg?oh=cece300cd2db2d885c81f2c00b6a7d84&oe=578A9FB4&__gda__=1465178287_36f0dafbe70beb7506ebd22f8f089edf\",\n\t\t\t\t\t\t\t\"detailType\": \"USER_PROFILE_PIC\"\n\t\t\t\t\t\t}\n\t\t\t\t\t]\n\t\t\t\t},\n\t\t\t\t\"status\": \"CREATED\",\n\t\t\t\t\"meetup_access_url\": null,\n\t\t\t\t\"display_pic\": {\n\t\t\t\t\t\"id\": 6,\n\t\t\t\t\t\"name\": \"smash.jpg\",\n\t\t\t\t\t\"url\": \"https://sociallbox.s3-ap-southeast-1.amazonaws.com/public/meetups/4028918a53f1e9590153f1ea1db30000/smash.jpg\",\n\t\t\t\t\t\"mimeType\": null,\n\t\t\t\t\t\"isDisplayImage\": true,\n\t\t\t\t\t\"uploadDt\": 1460055659000\n\t\t\t\t},\n\t\t\t\t\"event_at_meetup\": null,\n\t\t\t\t\"user_actions\": [\n\t\t\t\t\t{\n\t\t\t\t\t\t\"value\": true,\n\t\t\t\t\t\t\"action_type\": \"CAN_VIEW\"\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\t\"value\": true,\n\t\t\t\t\t\t\"action_type\": \"CAN_EDIT\"\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\t\"value\": true,\n\t\t\t\t\t\t\"action_type\": \"CAN_INVITE\"\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\t\"value\": true,\n\t\t\t\t\t\t\"action_type\": \"CAN_UPLOAD_IMAGE\"\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\t\"value\": true,\n\t\t\t\t\t\t\"action_type\": \"CAN_MESSAGE\"\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\t\"value\": true,\n\t\t\t\t\t\t\"action_type\": \"CAN_CANCEL\"\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t}\n\t\t}\n\t Sample Response for Normal Attendees of Meetup:\n\t\t{\n\t\t    \"status\": \"Success\",\n\t\t    \"data\": {\n\t\t        \"description\": \"IP University Fest\",\n\t\t        \"id\": \"4028918a53f1e9590153f1ea1db30000\",\n\t\t        \"title\": \"College Fest Meetup\",\n\t\t        \"location\": {\n\t\t            \"lattitude\": 77.06347870000002,\n\t\t            \"longitude\": 28.4682917,\n\t\t            \"name\": \"Kalkaji, New Delhi, Delhi, India\",\n\t\t            \"locality\": \"Kalkaji\"\n\t\t        },\n\t\t        \"start_date\": \"Fri, 1 Jul 2016 12:30 AM\",\n\t\t        \"end_date\": \"Mon, 1 Aug 2016 12:30 PM\",\n\t\t        \"organizer\": {\n\t\t            \"id\": 17,\n\t\t            \"name\": \"Ankit Joinwal\",\n\t\t            \"social_details\": [\n\t\t                {\n\t\t                    \"system\": \"FACEBOOK\",\n\t\t                    \"detail\": \"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xla1/v/t1.0-1/p200x200/12316467_10206731945876364_3008257792416820623_n.jpg?oh=cece300cd2db2d885c81f2c00b6a7d84&oe=578A9FB4&__gda__=1465178287_36f0dafbe70beb7506ebd22f8f089edf\",\n\t\t                    \"detailType\": \"USER_PROFILE_PIC\"\n\t\t                }\n\t\t            ]\n\t\t        },\n\t\t        \"status\": \"CREATED\",\n\t\t        \"meetup_access_url\": null,\n\t\t        \"display_pic\": {\n\t\t            \"id\": 6,\n\t\t            \"name\": \"smash.jpg\",\n\t\t            \"url\": \"https://sociallbox.s3-ap-southeast-1.amazonaws.com/public/meetups/4028918a53f1e9590153f1ea1db30000/smash.jpg\",\n\t\t            \"mimeType\": null,\n\t\t            \"isDisplayImage\": true,\n\t\t            \"uploadDt\": 1460055659000\n\t\t        },\n\t\t        \"event_at_meetup\": null,\n\t\t        \"user_actions\": [\n\t\t            {\n\t\t                \"value\": true,\n\t\t                \"action_type\": \"CAN_VIEW\"\n\t\t            },\n\t\t            {\n\t\t                \"value\": false,\n\t\t                \"action_type\": \"CAN_EDIT\"\n\t\t            },\n\t\t            {\n\t\t                \"value\": false,\n\t\t                \"action_type\": \"CAN_INVITE\"\n\t\t            },\n\t\t            {\n\t\t                \"value\": true,\n\t\t                \"action_type\": \"CAN_UPLOAD_IMAGE\"\n\t\t            },\n\t\t            {\n\t\t                \"value\": true,\n\t\t                \"action_type\": \"CAN_MESSAGE\"\n\t\t            },\n\t\t            {\n\t\t                \"value\": false,\n\t\t                \"action_type\": \"CAN_CANCEL\"\n\t\t            }\n\t\t        ]\n\t\t    }\n\t\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "NotFound 404": [
          {
            "group": "NotFound 404",
            "type": "String",
            "optional": false,
            "field": "messageType",
            "description": "<p>Eg.ERROR</p>"
          },
          {
            "group": "NotFound 404",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Eg. ERR_001</p>"
          },
          {
            "group": "NotFound 404",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Eg. User Not Found</p>"
          },
          {
            "group": "NotFound 404",
            "type": "String",
            "optional": false,
            "field": "entityId",
            "description": "<p>Entity Id which was searched</p>"
          },
          {
            "group": "NotFound 404",
            "type": "Object",
            "optional": false,
            "field": "exception",
            "description": "<p>StackTrace</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../src/main/java/com/bitlogic/sociallbox/service/controller/secured/MeetupSecuredController.java",
    "groupTitle": "Meetups"
  },
  {
    "type": "get",
    "url": "/api/secured/meetups/:meetupId/images",
    "title": "Get Meetup Photos",
    "name": "Get_Meetup_Photos",
    "group": "Meetups",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "meetupId",
            "description": "<p>Mandatory Meetup Id</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "Number",
            "optional": false,
            "field": "X-Auth-Date",
            "description": "<p>Current Epoch Date</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authentication Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example Headers",
          "content": " accept: application/json\n\t\tContent-Type: application/json\n\t\tX-Auth-Date: 1455988523724\n\t\tAuthorization: Basic U0R+U01BUlRfREVWSUNFXzI6NCtPU3JRN0tKMzZ2TW9iRmoxbmJEZG5ydVVJVTlwTWFVWmN1V0xxaUFaRT0=",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success - OK 200": [
          {
            "group": "Success - OK 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Response.</p>"
          },
          {
            "group": "Success - OK 200",
            "type": "String",
            "optional": false,
            "field": "response.status",
            "description": "<p>Eg.Success.</p>"
          },
          {
            "group": "Success - OK 200",
            "type": "Object",
            "optional": false,
            "field": "response.data",
            "description": "<p>Meetup Photos</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n\t\"status\": \"Success\",\n\t\"data\": [\n\t\t{\n\t\t\t\"id\": 4,\n\t\t\t\"name\": \"wow.jpg\",\n\t\t\t\"url\": \"https://sociallbox.s3-ap-southeast-1.amazonaws.com/public/meetups/4028918a53f1b5390153f1b561240000/wow.jpg\",\n\t\t\t\"mimeType\": null,\n\t\t\t\"isDisplayImage\": true,\n\t\t\t\"uploadDt\": 1460050423000\n\t\t},\n\t\t{\n\t\t\t\"id\": 5,\n\t\t\t\"name\": \"smash.jpg\",\n\t\t\t\"url\": \"https://sociallbox.s3-ap-southeast-1.amazonaws.com/public/meetups/4028918a53f1b5390153f1b561240000/smash.jpg\",\n\t\t\t\"mimeType\": null,\n\t\t\t\"isDisplayImage\": true,\n\t\t\t\"uploadDt\": 1460051103000\n\t\t}\n\t],\n\t\"page\": 1,\n\t\"nextPage\": null,\n\t\"total_records\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../src/main/java/com/bitlogic/sociallbox/service/controller/secured/MeetupSecuredController.java",
    "groupTitle": "Meetups"
  },
  {
    "type": "get",
    "url": "/api/secured/meetups/:meetupId/messages",
    "title": "Get Meetup Messages",
    "name": "Get_Meetup_messages",
    "group": "Meetups",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "meetupId",
            "description": "<p>Mandatory Meetup Id</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "Number",
            "optional": false,
            "field": "X-Auth-Date",
            "description": "<p>Current Epoch Date</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authentication Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example Headers",
          "content": " accept: application/json\n\t\tContent-Type: application/json\n\t\tX-Auth-Date: 1455988523724\n\t\tAuthorization: Basic U0R+U01BUlRfREVWSUNFXzI6NCtPU3JRN0tKMzZ2TW9iRmoxbmJEZG5ydVVJVTlwTWFVWmN1V0xxaUFaRT0=",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success - OK 200": [
          {
            "group": "Success - OK 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Response.</p>"
          },
          {
            "group": "Success - OK 200",
            "type": "String",
            "optional": false,
            "field": "response.status",
            "description": "<p>Eg.Success.</p>"
          },
          {
            "group": "Success - OK 200",
            "type": "Object",
            "optional": false,
            "field": "response.data",
            "description": "<p>Messages</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n  \"status\": \"Success\",\n  \"data\": [\n\t{\n\t  \"id\": 1,\n\t  \"timeToDisplay\": \"1Hour ago\",\n\t  \"message\": \"Hey guys lets meetup\",\n\t  \"user_name\": \"Vardhan Singh\",\n\t  \"profile_pic\": \"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpa1/v/t1.0-1/s200x200/11224309_10153200429036366_3899281527807886630_n.jpg?oh=fbb67c694bc2bc6c21b7b70d0d25f53a&oe=574D6AFC&__gda__=1468826733_a181d28d9b3f9ed4bc72fac9d0b4d08a\"\n\t}\n  ],\n  \"page\": 1,\n  \"nextPage\": null,\n  \"total_records\": 1\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../src/main/java/com/bitlogic/sociallbox/service/controller/secured/MeetupSecuredController.java",
    "groupTitle": "Meetups"
  },
  {
    "type": "post",
    "url": "/api/secured/meetups/:meetupId/attendees",
    "title": "Invite Friends to meetup",
    "name": "Invite_Friends_to_meetup",
    "group": "Meetups",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "meetupId",
            "description": "<p>Mandatory Meetup Id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\t\t\"attendees\":[\n\t\t\t\t{\n\t\t\t\t\t\"user_id\":16,\n\t\t\t\t\t\"is_admin\":\"false\"\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t\"user_id\":15,\n\t\t\t\t\t\"is_admin\":\"false\"\n\t\t\t\t}\n\t\t\t]\n\t}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "Number",
            "optional": false,
            "field": "X-Auth-Date",
            "description": "<p>Current Epoch Date</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authentication Token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success - OK 201": [
          {
            "group": "Success - OK 201",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Response.</p>"
          },
          {
            "group": "Success - OK 201",
            "type": "String",
            "optional": false,
            "field": "response.status",
            "description": "<p>Eg.Success.</p>"
          },
          {
            "group": "Success - OK 201",
            "type": "Object",
            "optional": false,
            "field": "response.data",
            "description": "<p>Attendees</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " \t{\n\t\t\t\"status\": \"Success\",\n\t\t\t\"data\": [\n\t\t\t\t{\n\t\t\t\t\t\"id\": 10,\n\t\t\t\t\t\"name\": \"Soumya Ranjan Nayak\",\n\t\t\t\t\t\"user_id\": 15,\n\t\t\t\t\t\"profile_pic\": \"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-frc3/v/t1.0-1/s200x200/539741_10151593876161285_1932943812_n.jpg?oh=91e5fd9cb3e7c726746a735d0603d5b2&oe=575DA8D4&__gda__=1468788536_04b0219db6544b0831aa55d45c7c76d0\",\n\t\t\t\t\t\"response\": \"MAYBE\",\n\t\t\t\t\t\"is_admin\": false\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t\"id\": 11,\n\t\t\t\t\t\"name\": \"Vardhan Singh\",\n\t\t\t\t\t\"user_id\": 16,\n\t\t\t\t\t\"profile_pic\": \"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpa1/v/t1.0-1/s200x200/11224309_10153200429036366_3899281527807886630_n.jpg?oh=fbb67c694bc2bc6c21b7b70d0d25f53a&oe=574D6AFC&__gda__=1468826733_a181d28d9b3f9ed4bc72fac9d0b4d08a\",\n\t\t\t\t\t\"response\": \"MAYBE\",\n\t\t\t\t\t\"is_admin\": false\n\t\t\t\t}\n\t\t\t],\n\t\t\t\"page\": 1,\n\t\t\t\"nextPage\": null,\n\t\t\t\"total_records\": 2\n\t\t}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../src/main/java/com/bitlogic/sociallbox/service/controller/secured/MeetupSecuredController.java",
    "groupTitle": "Meetups"
  },
  {
    "type": "post",
    "url": "/api/secured/meetups/:meetupId/attendees/:userId/response",
    "title": "Save Attendee Response",
    "name": "Save_Attendee_Response",
    "group": "Meetups",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "meetupId",
            "description": "<p>Mandatory Meetup Id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>Mandatory User Id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\t\t\"response\" : \"YES\"\n\t}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "Number",
            "optional": false,
            "field": "X-Auth-Date",
            "description": "<p>Current Epoch Date</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authentication Token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success - OK 201": [
          {
            "group": "Success - OK 201",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Response.</p>"
          },
          {
            "group": "Success - OK 201",
            "type": "String",
            "optional": false,
            "field": "response.status",
            "description": "<p>Eg.Success.</p>"
          },
          {
            "group": "Success - OK 201",
            "type": "Object",
            "optional": false,
            "field": "response.data",
            "description": "<p>Response message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " \t{\n\t\t  \"status\": \"Success\",\n\t\t  \"data\": \"Response saved successfully\"\n\t\t}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../src/main/java/com/bitlogic/sociallbox/service/controller/secured/MeetupSecuredController.java",
    "groupTitle": "Meetups"
  },
  {
    "type": "post",
    "url": "/api/secured/meetups/:meetupId/attendees/:userId/message",
    "title": "Send Message To Meetup",
    "name": "Send_Message_to_meetup",
    "group": "Meetups",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "meetupId",
            "description": "<p>Mandatory Meetup Id</p>"
          },
          {
            "group": "Parameter",
            "type": "Long",
            "optional": false,
            "field": "userId",
            "description": "<p>Mandatory User Id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\t\t\"message\" : \"Hey guys lets meetup\"\n\t}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "Number",
            "optional": false,
            "field": "X-Auth-Date",
            "description": "<p>Current Epoch Date</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authentication Token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success - OK 201": [
          {
            "group": "Success - OK 201",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Response.</p>"
          },
          {
            "group": "Success - OK 201",
            "type": "String",
            "optional": false,
            "field": "response.status",
            "description": "<p>Eg.Success.</p>"
          },
          {
            "group": "Success - OK 201",
            "type": "Object",
            "optional": false,
            "field": "response.data",
            "description": "<p>Response message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " \t{\n\t\t\t\"message\" : \"Hey guys lets meetup\"\n\t\t}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../src/main/java/com/bitlogic/sociallbox/service/controller/secured/MeetupSecuredController.java",
    "groupTitle": "Meetups"
  },
  {
    "type": "post",
    "url": "/api/secured/meetups/:meetupId/images?dp=true/false",
    "title": "Upload image to meetup",
    "name": "Upload_image_to_meetup",
    "group": "Meetups",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "meetupId",
            "description": "<p>Mandatory Meetup Id</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "dp",
            "description": "<p>Optional Whether image being uploaded is Display pic or not</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "----WebKitFormBoundary7MA4YWxkTrZu0gW\n\tContent-Disposition: form-data; name=\"files\"; filename=\"\"\n\tContent-Type: \n\n\n\t----WebKitFormBoundary7MA4YWxkTrZu0gW",
          "type": "multipart/form-data"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW</p>"
          },
          {
            "group": "Header",
            "type": "Number",
            "optional": false,
            "field": "X-Auth-Date",
            "description": "<p>Current Epoch Date</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authentication Token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success - OK 201": [
          {
            "group": "Success - OK 201",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Response.</p>"
          },
          {
            "group": "Success - OK 201",
            "type": "String",
            "optional": false,
            "field": "response.status",
            "description": "<p>Eg.Success.</p>"
          },
          {
            "group": "Success - OK 201",
            "type": "Object",
            "optional": false,
            "field": "response.data",
            "description": "<p>Image Details</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " \t{\n\t\t  \"status\": \"Success\",\n\t\t  \"data\": [\n\t\t\t{\n\t\t\t  \"id\": 5,\n\t\t\t  \"name\": \"smash.jpg\",\n\t\t\t  \"url\": \"https://sociallbox.s3-ap-southeast-1.amazonaws.com/public/meetups/4028918a53f1b5390153f1b561240000/smash.jpg\",\n\t\t\t  \"mimeType\": null,\n\t\t\t  \"isDisplayImage\": true,\n\t\t\t  \"uploadDt\": 1460051103699\n\t\t\t}\n\t\t  ],\n\t\t  \"page\": null,\n\t\t  \"nextPage\": null,\n\t\t  \"total_records\": 1\n\t\t}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../src/main/java/com/bitlogic/sociallbox/service/controller/secured/MeetupSecuredController.java",
    "groupTitle": "Meetups"
  },
  {
    "type": "get",
    "url": "api/secured/users/:userId/meetups/invites/pending",
    "title": "Get My Pending Meetup Invites",
    "name": "Get_My_Pending_Meetup_Invites",
    "group": "MySociallBox",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>Mandatory User Id</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "Number",
            "optional": false,
            "field": "X-Auth-Date",
            "description": "<p>Current Epoch Date</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authentication Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example Headers",
          "content": " accept: application/json\n\t\tContent-Type: application/json\n\t\tX-Auth-Date: 1455988523724\n\t\tAuthorization: Basic U0R+U01BUlRfREVWSUNFXzI6NCtPU3JRN0tKMzZ2TW9iRmoxbmJEZG5ydVVJVTlwTWFVWmN1V0xxaUFaRT0=",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success - OK 200": [
          {
            "group": "Success - OK 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Response.</p>"
          },
          {
            "group": "Success - OK 200",
            "type": "String",
            "optional": false,
            "field": "response.status",
            "description": "<p>Eg.Success.</p>"
          },
          {
            "group": "Success - OK 200",
            "type": "Object",
            "optional": false,
            "field": "response.data",
            "description": "<p>Pending meetups</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n\t\"status\": \"Success\",\n\t\"data\": [\n\t\t{\n\t\t\t\"description\": \"Meetup at event desc\",\n\t\t\t\"id\": \"4028918a53f6b6c30153f6b705870000\",\n\t\t\t\"title\": \"Meetup at event\",\n\t\t\t\"location\": {\n\t\t\t\t\"lattitude\": 77.06347870000002,\n\t\t\t\t\"longitude\": 28.4682917,\n\t\t\t\t\"name\": \"Kalkaji, New Delhi, Delhi, India\",\n\t\t\t\t\"locality\": \"Kalkaji\"\n\t\t\t},\n\t\t\t\"start_date\": \"Fri, 1 Jul 2016 12:30 AM\",\n\t\t\t\"end_date\": \"Mon, 1 Aug 2016 12:30 PM\",\n\t\t\t\"organizer\": {\n\t\t\t\t\"id\": 17,\n\t\t\t\t\"name\": \"Ankit Joinwal\",\n\t\t\t\t\"social_details\": [\n\t\t\t\t\t{\n\t\t\t\t\t\t\"system\": \"FACEBOOK\",\n\t\t\t\t\t\t\"detail\": \"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xla1/v/t1.0-1/p200x200/12316467_10206731945876364_3008257792416820623_n.jpg?oh=cece300cd2db2d885c81f2c00b6a7d84&oe=578A9FB4&__gda__=1465178287_36f0dafbe70beb7506ebd22f8f089edf\",\n\t\t\t\t\t\t\"detailType\": \"USER_PROFILE_PIC\"\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t},\n\t\t\t\"status\": \"CREATED\",\n\t\t\t\"meetup_access_url\": null,\n\t\t\t\"display_pic\": {\n\t\t\t\t\"id\": 7,\n\t\t\t\t\"name\": \"disc.jpg\",\n\t\t\t\t\"url\": \"https://sociallbox.s3-ap-southeast-1.amazonaws.com/public/meetups/4028918a53f6b6c30153f6b705870000/disc.jpg\",\n\t\t\t\t\"mimeType\": null,\n\t\t\t\t\"isDisplayImage\": true,\n\t\t\t\t\"uploadDt\": 1460147708000\n\t\t\t},\n\t\t\t\"event_at_meetup\": \"2c9f8ff353bd8bf50153bd9ea0a10000\",\n\t\t\t\"user_actions\": []\n\t\t}\n\t],\n\t\"page\": 1,\n\t\"nextPage\": null,\n\t\"total_records\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../src/main/java/com/bitlogic/sociallbox/service/controller/secured/MySociallBoxController.java",
    "groupTitle": "MySociallBox"
  },
  {
    "type": "get",
    "url": "/SociallBox/api/secured/users/:userId/notifications?from=:fromId",
    "title": "Get Notifications for User",
    "name": "Get_Notifications_for_User",
    "group": "MySociallBox",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>Mandatory User Id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "fromId",
            "description": "<p>Optional Used for pagination. Send last notification id after which you want next 20 records</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "Number",
            "optional": false,
            "field": "X-Auth-Date",
            "description": "<p>Current Epoch Date</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authentication Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example Headers",
          "content": " accept: application/json\n\t\tContent-Type: application/json\n\t\tX-Auth-Date: 1455988523724\n\t\tAuthorization: Basic U0R+U01BUlRfREVWSUNFXzI6NCtPU3JRN0tKMzZ2TW9iRmoxbmJEZG5ydVVJVTlwTWFVWmN1V0xxaUFaRT0=",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success - OK 200": [
          {
            "group": "Success - OK 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Response.</p>"
          },
          {
            "group": "Success - OK 200",
            "type": "String",
            "optional": false,
            "field": "response.status",
            "description": "<p>Eg.Success.</p>"
          },
          {
            "group": "Success - OK 200",
            "type": "Object",
            "optional": false,
            "field": "response.data",
            "description": "<p>Notifications for user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n\t\"status\": \"Success\",\n\t\"data\": [\n\t\t{\n\t\t\t\"id\": 63,\n\t\t\t\"type\": \"MEETUP_CANCEL_NOTIFICATION\",\n\t\t\t\"reciever_ids\": null,\n\t\t\t\"message\": {\n\t\t\t\t\"notification\": {\n\t\t\t\t\t\"title\": \"New Meetup\",\n\t\t\t\t\t\"body\": \"Mayank Agarwal cancelled meetup\",\n\t\t\t\t\t\"icon\": \"icon\",\n\t\t\t\t\t\"click_action\": \"action\"\n\t\t\t\t},\n\t\t\t\t\"data\": {\n\t\t\t\t\t\"actor\": \"Mayank Agarwal\",\n\t\t\t\t\t\"verb\": \" cancelled meetup\",\n\t\t\t\t\t\"target\": \"New Meetup\",\n\t\t\t\t\t\"icon\": \"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash2/v/t1.0-1/p200x200/10712837_690026594399086_7729501495888015257_n.jpg?oh=dae7953515b52383b6e092e32da504c0&oe=578FF310&__gda__=1465312979_b8b37b205e83a5f8a8a2bbb681e0c640\",\n\t\t\t\t\t\"image\": null,\n\t\t\t\t\t\"type\": \"MEETUP_CANCEL_NOTIFICATION\",\n\t\t\t\t\t\"action_url\": \"http://localhost:8080/SociallBox/api/secured/meetups/40289186546c74fc01546c7811d10000\"\n\t\t\t\t}\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"id\": 62,\n\t\t\t\"type\": \"MEETUP_MESSAGE_NOTIFICATION\",\n\t\t\t\"reciever_ids\": null,\n\t\t\t\"message\": {\n\t\t\t\t\"notification\": {\n\t\t\t\t\t\"title\": \"New Meetup\",\n\t\t\t\t\t\"body\": \"New message from Mayank Agarwal\",\n\t\t\t\t\t\"icon\": \"icon\",\n\t\t\t\t\t\"click_action\": \"action\"\n\t\t\t\t},\n\t\t\t\t\"data\": {\n\t\t\t\t\t\"actor\": \"Mayank Agarwal\",\n\t\t\t\t\t\"verb\": \" posted message in meetup\",\n\t\t\t\t\t\"target\": \"New Meetup\",\n\t\t\t\t\t\"icon\": \"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash2/v/t1.0-1/p200x200/10712837_690026594399086_7729501495888015257_n.jpg?oh=dae7953515b52383b6e092e32da504c0&oe=578FF310&__gda__=1465312979_b8b37b205e83a5f8a8a2bbb681e0c640\",\n\t\t\t\t\t\"image\": null,\n\t\t\t\t\t\"type\": \"MEETUP_MESSAGE_NOTIFICATION\",\n\t\t\t\t\t\"action_url\": \"http://localhost:8080/SociallBox/api/secured/meetups/40289186546c74fc01546c7811d10000\"\n\t\t\t\t}\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"id\": 59,\n\t\t\t\"type\": \"MEETUP_PHOTO_NOTIFICATION\",\n\t\t\t\"reciever_ids\": null,\n\t\t\t\"message\": {\n\t\t\t\t\"notification\": {\n\t\t\t\t\t\"title\": \"New Meetup\",\n\t\t\t\t\t\"body\": \"Ankit Joinwal posted a photo to meetup\",\n\t\t\t\t\t\"icon\": \"icon\",\n\t\t\t\t\t\"click_action\": \"action\"\n\t\t\t\t},\n\t\t\t\t\"data\": {\n\t\t\t\t\t\"actor\": \"Ankit Joinwal\",\n\t\t\t\t\t\"verb\": \" posted photo in meetup\",\n\t\t\t\t\t\"target\": \"New Meetup\",\n\t\t\t\t\t\"icon\": \"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xla1/v/t1.0-1/p200x200/12316467_10206731945876364_3008257792416820623_n.jpg?oh=cece300cd2db2d885c81f2c00b6a7d84&oe=578A9FB4&__gda__=1465178287_36f0dafbe70beb7506ebd22f8f089edf\",\n\t\t\t\t\t\"image\": \"https://sociallbox.s3-ap-southeast-1.amazonaws.com/public/meetups/40289186546c74fc01546c7811d10000/business_people_meetings.png\",\n\t\t\t\t\t\"type\": \"MEETUP_PHOTO_NOTIFICATION\",\n\t\t\t\t\t\"action_url\": \"http://localhost:8080/SociallBox/api/secured/meetups/40289186546c74fc01546c7811d10000\"\n\t\t\t\t}\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"id\": 57,\n\t\t\t\"type\": \"NEW_MEETUP_NOTIFICATION\",\n\t\t\t\"reciever_ids\": null,\n\t\t\t\"message\": {\n\t\t\t\t\"notification\": {\n\t\t\t\t\t\"title\": \"Meetup Invite\",\n\t\t\t\t\t\"body\": \"Mayank Agarwal invited you to meetup New Meetup\",\n\t\t\t\t\t\"icon\": \"icon\",\n\t\t\t\t\t\"click_action\": \"action\"\n\t\t\t\t},\n\t\t\t\t\"data\": {\n\t\t\t\t\t\"actor\": \"Mayank Agarwal\",\n\t\t\t\t\t\"verb\": \" invited you to meetup\",\n\t\t\t\t\t\"target\": \"New Meetup\",\n\t\t\t\t\t\"icon\": \"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash2/v/t1.0-1/p200x200/10712837_690026594399086_7729501495888015257_n.jpg?oh=dae7953515b52383b6e092e32da504c0&oe=578FF310&__gda__=1465312979_b8b37b205e83a5f8a8a2bbb681e0c640\",\n\t\t\t\t\t\"image\": null,\n\t\t\t\t\t\"type\": \"NEW_MEETUP_NOTIFICATION\",\n\t\t\t\t\t\"action_url\": \"http://localhost:8080/SociallBox/api/secured/meetups/40289186546c74fc01546c7811d10000\"\n\t\t\t\t}\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"id\": 56,\n\t\t\t\"type\": \"NEW_FRIEND_NOTIFICATION\",\n\t\t\t\"reciever_ids\": null,\n\t\t\t\"message\": {\n\t\t\t\t\"notification\": {\n\t\t\t\t\t\"title\": \"Friend joined you\",\n\t\t\t\t\t\"body\": \"Ankit Joinwal is now on SociallBox\",\n\t\t\t\t\t\"icon\": \"icon\",\n\t\t\t\t\t\"click_action\": \"action\"\n\t\t\t\t},\n\t\t\t\t\"data\": {\n\t\t\t\t\t\"actor\": \"Ankit Joinwal\",\n\t\t\t\t\t\"verb\": \" joined\",\n\t\t\t\t\t\"target\": \"SociallBox\",\n\t\t\t\t\t\"icon\": \"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xla1/v/t1.0-1/p200x200/12316467_10206731945876364_3008257792416820623_n.jpg?oh=cece300cd2db2d885c81f2c00b6a7d84&oe=578A9FB4&__gda__=1465178287_36f0dafbe70beb7506ebd22f8f089edf\",\n\t\t\t\t\t\"image\": null,\n\t\t\t\t\t\"type\": \"NEW_FRIEND_NOTIFICATION\",\n\t\t\t\t\t\"action_url\": null\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t],\n\t\"page\": 1,\n\t\"nextPage\": null,\n\t\"total_records\": 5\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../src/main/java/com/bitlogic/sociallbox/service/controller/secured/MySociallBoxController.java",
    "groupTitle": "MySociallBox"
  },
  {
    "type": "get",
    "url": "/api/secured/users/:userId/mybox?lat=:lattitude&lon=:longitude&type=:timeline",
    "title": "Get User SociallBox Activities",
    "name": "Get_User_SociallBox_activities",
    "group": "MySociallBox",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>Mandatory User Id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "lattitude",
            "description": "<p>Mandatory User lattitude</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "longitude",
            "description": "<p>Mandatory User longitude</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "timeline",
            "description": "<p>Mandatory Possible Values [ upcoming or past ]</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "Number",
            "optional": false,
            "field": "X-Auth-Date",
            "description": "<p>Current Epoch Date</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authentication Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example Headers",
          "content": " accept: application/json\n\t\tContent-Type: application/json\n\t\tX-Auth-Date: 1455988523724\n\t\tAuthorization: Basic U0R+U01BUlRfREVWSUNFXzI6NCtPU3JRN0tKMzZ2TW9iRmoxbmJEZG5ydVVJVTlwTWFVWmN1V0xxaUFaRT0=",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success - OK 200": [
          {
            "group": "Success - OK 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Response.</p>"
          },
          {
            "group": "Success - OK 200",
            "type": "String",
            "optional": false,
            "field": "response.status",
            "description": "<p>Eg.Success.</p>"
          },
          {
            "group": "Success - OK 200",
            "type": "Object",
            "optional": false,
            "field": "response.data",
            "description": "<p>User SociallBox Activities</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\nSample Reponse for Upcoming Activities :\n{\n\t\"status\": \"Success\",\n\t\"data\": [\n\t\t{\n\t\t\t\"detail\": {\n\t\t\t\t\"event\": {\n\t\t\t\t\t\"title\": \"Puma Flat 40% Off\",\n\t\t\t\t\t\"description\": \"<p>Puma is a global athletic brand which has enabled one to catch the attention of fine folks. Its athletes have been setting world records, making game-winning goals and just plain dominating – all while looking good doing it. And, wherever you may be, they have you covered. From football and running, to golf and sailing - they bring the most innovative technology and stylish designs to the field, the track, the course, and the deck. And thats just the tip of the iceberg. PUMA starts in Sport and ends in the Fashion. Its Sport performance and Lifestyle labels include categories such as Football, Running, Motorsports, Golf, and Sailing.<br/>More at : <a href=\"http://in.puma.com/sale.html\" >http://in.puma.com/sale.html</a><br/></p><p><br/><br/></p>\",\n\t\t\t\t\t\"tags\": [\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\"id\": 3,\n\t\t\t\t\t\t\t\"name\": \"fashion\",\n\t\t\t\t\t\t\t\"description\": \"Fashion\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\"id\": 1,\n\t\t\t\t\t\t\t\"name\": \"shopping\",\n\t\t\t\t\t\t\t\"description\": \"Shopping\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\"id\": 2,\n\t\t\t\t\t\t\t\"name\": \"sale\",\n\t\t\t\t\t\t\t\"description\": \"Sale\"\n\t\t\t\t\t\t}\n\t\t\t\t\t],\n\t\t\t\t\t\"id\": \"4028918853e672830153e6aec4230000\",\n\t\t\t\t\t\"distance_from_src\": \"14 Kms\",\n\t\t\t\t\t\"event_detail\": {\n\t\t\t\t\t\t\"location\": {\n\t\t\t\t\t\t\t\"lattitude\": 28.483705,\n\t\t\t\t\t\t\t\"longitude\": 77.107372,\n\t\t\t\t\t\t\t\"name\": \"Select Citywalk, New-Delhi, Delhi, India\",\n\t\t\t\t\t\t\t\"locality\": \"Saket\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"organizer\": {\n\t\t\t\t\t\t\t\"name\": \"Remix Entertainment\",\n\t\t\t\t\t\t\t\"address\": {\n\t\t\t\t\t\t\t\t\"street\": \"Mandakini Enclave\",\n\t\t\t\t\t\t\t\t\"city\": \"New Delhi\",\n\t\t\t\t\t\t\t\t\"state\": \"Delhi\",\n\t\t\t\t\t\t\t\t\"country\": \"India\",\n\t\t\t\t\t\t\t\t\"zip_code\": \"110019\"\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\"phone1\": \"+91 7838250407\",\n\t\t\t\t\t\t\t\"phone2\": \"\",\n\t\t\t\t\t\t\t\"phone3\": \"\",\n\t\t\t\t\t\t\t\"id\": \"4028918b53adfe990153ae0134100000\",\n\t\t\t\t\t\t\t\"email_id\": \"harsh.singh@remixentertainments.com\",\n\t\t\t\t\t\t\t\"profile_pic\": null,\n\t\t\t\t\t\t\t\"cover_pic\": null,\n\t\t\t\t\t\t\t\"website\": \"http://www.remixentertainments.com\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"booking_url\": null\n\t\t\t\t\t},\n\t\t\t\t\t\"start_date\": \"Sun, 1 May 2016 12:30 PM\",\n\t\t\t\t\t\"end_date\": \"Sun, 2 Oct 2016 08:30 PM\",\n\t\t\t\t\t\"is_user_fav\": false,\n\t\t\t\t\t\"is_user_going\": false,\n\t\t\t\t\t\"display_image\": {\n\t\t\t\t\t\t\"id\": 11,\n\t\t\t\t\t\t\"name\": \"puma.jpg\",\n\t\t\t\t\t\t\"url\": \"https://sociallbox.s3-ap-southeast-1.amazonaws.com/public/events/4028918853e672830153e6aec4230000/puma.jpg\",\n\t\t\t\t\t\t\"displayOrder\": 1,\n\t\t\t\t\t\t\"mimeType\": null\n\t\t\t\t\t},\n\t\t\t\t\t\"status\": \"LIVE\",\n\t\t\t\t\t\"is_free\": false\n\t\t\t\t},\n\t\t\t\t\"type\": \"GOING\"\n\t\t\t},\n\t\t\t\"type\": \"EVENT\",\n\t\t\t\"time\": \"Sun, 1 May 2016 12:30 PM\"\n\t\t},\n\t\t{\n\t\t\t\"detail\": {\n\t\t\t\t\"event\": {\n\t\t\t\t\t\"title\": \"Songdew Media Nights - Live Music\",\n\t\t\t\t\t\"description\": \"Songdew invites you to a night of rock music with some of the most sought after bands in the country. The energy and enthusiasm of the music is sure to make your heart pump. Dont miss the opportunity to be a part of the excitement.\",\n\t\t\t\t\t\"tags\": [\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\"id\": 5,\n\t\t\t\t\t\t\t\"name\": \"rock\",\n\t\t\t\t\t\t\t\"description\": \"Rock\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\"id\": 16,\n\t\t\t\t\t\t\t\"name\": \"bollywood\",\n\t\t\t\t\t\t\t\"description\": \"Bollywood\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\"id\": 22,\n\t\t\t\t\t\t\t\"name\": \"family\",\n\t\t\t\t\t\t\t\"description\": \"Family\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\"id\": 8,\n\t\t\t\t\t\t\t\"name\": \"sufi\",\n\t\t\t\t\t\t\t\"description\": \"Sufi\"\n\t\t\t\t\t\t}\n\t\t\t\t\t],\n\t\t\t\t\t\"id\": \"2c9f8ff353bd8bf50153bdaf23470002\",\n\t\t\t\t\t\"distance_from_src\": \"9 Kms\",\n\t\t\t\t\t\"event_detail\": {\n\t\t\t\t\t\t\"location\": {\n\t\t\t\t\t\t\t\"lattitude\": 28.52721,\n\t\t\t\t\t\t\t\"longitude\": 77.2170872,\n\t\t\t\t\t\t\t\"name\": \"Hard Rock Cafe, Saket, Delhi, India\",\n\t\t\t\t\t\t\t\"locality\": \"Hard Rock Cafe\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"organizer\": {\n\t\t\t\t\t\t\t\"name\": \"Remix Entertainment\",\n\t\t\t\t\t\t\t\"address\": {\n\t\t\t\t\t\t\t\t\"street\": \"Mandakini Enclave\",\n\t\t\t\t\t\t\t\t\"city\": \"New Delhi\",\n\t\t\t\t\t\t\t\t\"state\": \"Delhi\",\n\t\t\t\t\t\t\t\t\"country\": \"India\",\n\t\t\t\t\t\t\t\t\"zip_code\": \"110019\"\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\"phone1\": \"+91 7838250407\",\n\t\t\t\t\t\t\t\"phone2\": \"\",\n\t\t\t\t\t\t\t\"phone3\": \"\",\n\t\t\t\t\t\t\t\"id\": \"4028918b53adfe990153ae0134100000\",\n\t\t\t\t\t\t\t\"email_id\": \"harsh.singh@remixentertainments.com\",\n\t\t\t\t\t\t\t\"profile_pic\": null,\n\t\t\t\t\t\t\t\"cover_pic\": null,\n\t\t\t\t\t\t\t\"website\": \"http://www.remixentertainments.com\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"booking_url\": null\n\t\t\t\t\t},\n\t\t\t\t\t\"start_date\": \"Tue, 12 Apr 2016 06:30 PM\",\n\t\t\t\t\t\"end_date\": \"Tue, 12 Apr 2016 10:30 PM\",\n\t\t\t\t\t\"is_user_fav\": false,\n\t\t\t\t\t\"is_user_going\": false,\n\t\t\t\t\t\"display_image\": {\n\t\t\t\t\t\t\"id\": 3,\n\t\t\t\t\t\t\"name\": \"songdew.jpg\",\n\t\t\t\t\t\t\"url\": \"https://sociallbox.s3-ap-southeast-1.amazonaws.com/public/events/2c9f8ff353bd8bf50153bdaf23470002/songdew.jpg\",\n\t\t\t\t\t\t\"displayOrder\": 1,\n\t\t\t\t\t\t\"mimeType\": null\n\t\t\t\t\t},\n\t\t\t\t\t\"status\": \"LIVE\",\n\t\t\t\t\t\"is_free\": false\n\t\t\t\t},\n\t\t\t\t\"type\": \"GOING\"\n\t\t\t},\n\t\t\t\"type\": \"EVENT\",\n\t\t\t\"time\": \"Tue, 12 Apr 2016 06:30 PM\"\n\t\t},\n\t\t{\n\t\t\t\"detail\": {\n\t\t\t\t\"isOrganizer\": true,\n\t\t\t\t\"meetup\": {\n\t\t\t\t\t\"description\": \"Meetup at event desc\",\n\t\t\t\t\t\"id\": \"4028918a53f6b6c30153f6b705870000\",\n\t\t\t\t\t\"title\": \"Meetup at event\",\n\t\t\t\t\t\"location\": {\n\t\t\t\t\t\t\"lattitude\": 77.06347870000002,\n\t\t\t\t\t\t\"longitude\": 28.4682917,\n\t\t\t\t\t\t\"name\": \"Kalkaji, New Delhi, Delhi, India\",\n\t\t\t\t\t\t\"locality\": \"Kalkaji\"\n\t\t\t\t\t},\n\t\t\t\t\t\"start_date\": \"Fri, 1 Jul 2016 12:30 AM\",\n\t\t\t\t\t\"end_date\": \"Mon, 1 Aug 2016 12:30 PM\",\n\t\t\t\t\t\"organizer\": {\n\t\t\t\t\t\t\"id\": 17,\n\t\t\t\t\t\t\"name\": \"Ankit Joinwal\",\n\t\t\t\t\t\t\"social_details\": [\n\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\"system\": \"FACEBOOK\",\n\t\t\t\t\t\t\t\t\"detail\": \"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xla1/v/t1.0-1/p200x200/12316467_10206731945876364_3008257792416820623_n.jpg?oh=cece300cd2db2d885c81f2c00b6a7d84&oe=578A9FB4&__gda__=1465178287_36f0dafbe70beb7506ebd22f8f089edf\",\n\t\t\t\t\t\t\t\t\"detailType\": \"USER_PROFILE_PIC\"\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t]\n\t\t\t\t\t},\n\t\t\t\t\t\"status\": \"CREATED\",\n\t\t\t\t\t\"meetup_access_url\": null,\n\t\t\t\t\t\"display_pic\": null,\n\t\t\t\t\t\"event_at_meetup\": \"2c9f8ff353bd8bf50153bd9ea0a10000\",\n\t\t\t\t\t\"user_actions\": []\n\t\t\t\t}\n\t\t\t},\n\t\t\t\"type\": \"MEETUP\",\n\t\t\t\"time\": \"Fri, 8 Apr 2016 10:01 PM\"\n\t\t},\n\t\t{\n\t\t\t\"detail\": {\n\t\t\t\t\"event\": {\n\t\t\t\t\t\"title\": \"Smaaash Cyberhub\",\n\t\t\t\t\t\"description\": \"<p><b>General Offer: Play 9 Games at Smaaash Gurgaon @ Rs 555 AI (Monday to Thursday) and @ Rs 888 AI (Friday to Sunday)11am to 11pm</b><br/>- Finger Coaster<br/>- Super Keeper (5 shots)<br/>- Vulcan Force<br/>- Harley Simulator<br/>- King of Hammer<br/>- Speed of Light<br/>- Nitro Wheelie<br/>- Pacman Basket<br/>- Over the Top<br/><br/><b>College Student Offer: Rs. 699 per student</b><br/>Valid from Monday to Thursday<br/>Not Valid Without College Student ID card<br/>Valid between 11 AM and 5 PM<br/>Which gives Single Access to College Students to all Games at Smaaash Gurgaon along with Bowling and Cricket.<br/><br/><b>Rs. 399- All days, Games combo. Any 3 Simulation Games or Any 3 Virtual Reality Games. Any 3 Arcade Games. 5 Shots at SupeerKeeper</b><br/></p>\",\n\t\t\t\t\t\"tags\": [\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\"id\": 10,\n\t\t\t\t\t\t\t\"name\": \"hhour\",\n\t\t\t\t\t\t\t\"description\": \"HappyHours\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\"id\": 22,\n\t\t\t\t\t\t\t\"name\": \"family\",\n\t\t\t\t\t\t\t\"description\": \"Family\"\n\t\t\t\t\t\t}\n\t\t\t\t\t],\n\t\t\t\t\t\"id\": \"2c9f8ff353bd8bf50153bd9ea0a10000\",\n\t\t\t\t\t\"distance_from_src\": \"14 Kms\",\n\t\t\t\t\t\"event_detail\": {\n\t\t\t\t\t\t\"location\": {\n\t\t\t\t\t\t\t\"lattitude\": 28.483705,\n\t\t\t\t\t\t\t\"longitude\": 77.107372,\n\t\t\t\t\t\t\t\"name\": \"DLF Cyber City, Tower B, 8th Rd, DLF Phase 2, Sector 24, Gurgaon, DELHI 122 002, India\",\n\t\t\t\t\t\t\t\"locality\": \"Gurgaon\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"organizer\": {\n\t\t\t\t\t\t\t\"name\": \"Remix Entertainment\",\n\t\t\t\t\t\t\t\"address\": {\n\t\t\t\t\t\t\t\t\"street\": \"Mandakini Enclave\",\n\t\t\t\t\t\t\t\t\"city\": \"New Delhi\",\n\t\t\t\t\t\t\t\t\"state\": \"Delhi\",\n\t\t\t\t\t\t\t\t\"country\": \"India\",\n\t\t\t\t\t\t\t\t\"zip_code\": \"110019\"\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\"phone1\": \"+91 7838250407\",\n\t\t\t\t\t\t\t\"phone2\": \"\",\n\t\t\t\t\t\t\t\"phone3\": \"\",\n\t\t\t\t\t\t\t\"id\": \"4028918b53adfe990153ae0134100000\",\n\t\t\t\t\t\t\t\"email_id\": \"harsh.singh@remixentertainments.com\",\n\t\t\t\t\t\t\t\"profile_pic\": null,\n\t\t\t\t\t\t\t\"cover_pic\": null,\n\t\t\t\t\t\t\t\"website\": \"http://www.remixentertainments.com\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"booking_url\": null\n\t\t\t\t\t},\n\t\t\t\t\t\"start_date\": \"Tue, 1 Mar 2016 12:30 PM\",\n\t\t\t\t\t\"end_date\": \"Mon, 2 May 2016 08:30 PM\",\n\t\t\t\t\t\"is_user_fav\": false,\n\t\t\t\t\t\"is_user_going\": false,\n\t\t\t\t\t\"display_image\": {\n\t\t\t\t\t\t\"id\": 1,\n\t\t\t\t\t\t\"name\": \"smash.jpg\",\n\t\t\t\t\t\t\"url\": \"https://sociallbox.s3-ap-southeast-1.amazonaws.com/public/events/2c9f8ff353bd8bf50153bd9ea0a10000/smash.jpg\",\n\t\t\t\t\t\t\"displayOrder\": 1,\n\t\t\t\t\t\t\"mimeType\": null\n\t\t\t\t\t},\n\t\t\t\t\t\"status\": \"LIVE\",\n\t\t\t\t\t\"is_free\": false\n\t\t\t\t},\n\t\t\t\t\"type\": \"GOING\"\n\t\t\t},\n\t\t\t\"type\": \"EVENT\",\n\t\t\t\"time\": \"Tue, 1 Mar 2016 12:30 PM\"\n\t\t}\n\t],\n\t\"page\": null,\n\t\"nextPage\": null,\n\t\"total_records\": null\n}\nSample Response for Past Activities -\n{\n\t\"status\": \"Success\",\n\t\"data\": [\n\t\t{\n\t\t\t\"detail\": {\n\t\t\t\t\"event\": {\n\t\t\t\t\t\"title\": \"Arijit Singh Live in Concert\",\n\t\t\t\t\t\"description\": \"<p>Carnival Media presents the nation's absolute heart-throb, Arijit Singh, with the Grand Symphony live in concert. <br/>The Grand Symphony Orchestra is a 45 -piece band of some of the most talented musicians from across the world. This large instrumental ensemblethat contains Drums, Violin, Grand Piano, Cello, Harp, Flute, French Horns, Trumpet, Viola and much more will be performing in sync with Arijit Singh.<br/>The scintillating and soulful voice behind the hits like Tum hi ho, Muskurane ki vajah and Sooraj Dooba Hai Yaaron will be singing his hits in ways like never before.<br/>This musical extravaganza will be held on four places, i.e. Singapore, Chandigarh, Indore and Srilanka. This will be a ticketed event and entry will be reserved only for Ticket holders.<br/></p>\",\n\t\t\t\t\t\"tags\": [\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\"id\": 5,\n\t\t\t\t\t\t\t\"name\": \"rock\",\n\t\t\t\t\t\t\t\"description\": \"Rock\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\"id\": 16,\n\t\t\t\t\t\t\t\"name\": \"bollywood\",\n\t\t\t\t\t\t\t\"description\": \"Bollywood\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\"id\": 22,\n\t\t\t\t\t\t\t\"name\": \"family\",\n\t\t\t\t\t\t\t\"description\": \"Family\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\"id\": 8,\n\t\t\t\t\t\t\t\"name\": \"sufi\",\n\t\t\t\t\t\t\t\"description\": \"Sufi\"\n\t\t\t\t\t\t}\n\t\t\t\t\t],\n\t\t\t\t\t\"id\": \"2c9f8ff353bd8bf50153bdab6f440001\",\n\t\t\t\t\t\"distance_from_src\": \"9 Kms\",\n\t\t\t\t\t\"event_detail\": {\n\t\t\t\t\t\t\"location\": {\n\t\t\t\t\t\t\t\"lattitude\": 28.5285479,\n\t\t\t\t\t\t\t\"longitude\": 77.2194538,\n\t\t\t\t\t\t\t\"name\": \"Select Citywalk, Neu-Delhi, Delhi, India\",\n\t\t\t\t\t\t\t\"locality\": \"Saket\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"organizer\": {\n\t\t\t\t\t\t\t\"name\": \"Remix Entertainment\",\n\t\t\t\t\t\t\t\"address\": {\n\t\t\t\t\t\t\t\t\"street\": \"Mandakini Enclave\",\n\t\t\t\t\t\t\t\t\"city\": \"New Delhi\",\n\t\t\t\t\t\t\t\t\"state\": \"Delhi\",\n\t\t\t\t\t\t\t\t\"country\": \"India\",\n\t\t\t\t\t\t\t\t\"zip_code\": \"110019\"\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\"phone1\": \"+91 7838250407\",\n\t\t\t\t\t\t\t\"phone2\": \"\",\n\t\t\t\t\t\t\t\"phone3\": \"\",\n\t\t\t\t\t\t\t\"id\": \"4028918b53adfe990153ae0134100000\",\n\t\t\t\t\t\t\t\"email_id\": \"harsh.singh@remixentertainments.com\",\n\t\t\t\t\t\t\t\"profile_pic\": null,\n\t\t\t\t\t\t\t\"cover_pic\": null,\n\t\t\t\t\t\t\t\"website\": \"http://www.remixentertainments.com\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"booking_url\": null\n\t\t\t\t\t},\n\t\t\t\t\t\"start_date\": \"Fri, 11 Mar 2016 06:30 PM\",\n\t\t\t\t\t\"end_date\": \"Fri, 11 Mar 2016 10:30 PM\",\n\t\t\t\t\t\"is_user_fav\": false,\n\t\t\t\t\t\"is_user_going\": false,\n\t\t\t\t\t\"display_image\": {\n\t\t\t\t\t\t\"id\": 2,\n\t\t\t\t\t\t\"name\": \"arjit.jpg\",\n\t\t\t\t\t\t\"url\": \"https://sociallbox.s3-ap-southeast-1.amazonaws.com/public/events/2c9f8ff353bd8bf50153bdab6f440001/arjit.jpg\",\n\t\t\t\t\t\t\"displayOrder\": 1,\n\t\t\t\t\t\t\"mimeType\": null\n\t\t\t\t\t},\n\t\t\t\t\t\"status\": \"LIVE\",\n\t\t\t\t\t\"is_free\": true\n\t\t\t\t},\n\t\t\t\t\"type\": \"INTERESTED\"\n\t\t\t},\n\t\t\t\"type\": \"EVENT\",\n\t\t\t\"time\": \"Fri, 11 Mar 2016 06:30 PM\"\n\t\t}\n\t],\n\t\"page\": null,\n\t\"nextPage\": null,\n\t\"total_records\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../src/main/java/com/bitlogic/sociallbox/service/controller/secured/MySociallBoxController.java",
    "groupTitle": "MySociallBox"
  },
  {
    "type": "get",
    "url": "/api/secured/places/place/:place_id/likes",
    "title": "Get Friends who like a place",
    "name": "Get_Friends_who_like_a_place",
    "group": "Places",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "Number",
            "optional": false,
            "field": "X-Auth-Date",
            "description": "<p>Current Epoch Date</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authentication Token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Response.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.status",
            "description": "<p>Eg.Success.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response.data",
            "description": "<p>User's Friends List Or Empty Array if no friends Found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\t\t  \"status\": \"Success\",\n\t\t  \"data\": [\n\t\t\t{\n\t\t\t  \"profilePic\": \"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xla1/v/t1.0-1/p200x200/12316467_10206731945876364_3008257792416820623_n.jpg?oh=cece300cd2db2d885c81f2c00b6a7d84&oe=578A9FB4&__gda__=1465178287_36f0dafbe70beb7506ebd22f8f089edf\",\n\t\t\t  \"name\": \"Ankit Joinwal\",\n\t\t\t  \"emailId\": \"anki_join@yahoo.in\"\n\t\t\t}\n\t\t  ],\n\t\t  \"page\": 1,\n\t\t  \"nextPage\": null,\n\t\t  \"total_records\": 1\n\t\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Unauthorizes 401": [
          {
            "group": "Unauthorizes 401",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Eg.error.login.invalid.credentials</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../src/main/java/com/bitlogic/sociallbox/service/controller/PlacesSecuredController.java",
    "groupTitle": "Places"
  },
  {
    "type": "get",
    "url": "/api/public/places/nearby?cid=:cid&radius=:radius&page=:page&lat=:lat&lon=:lon&sort=:sort&order=:order",
    "title": "Get Nearby Places",
    "name": "Get_Nearby_Places",
    "group": "Places",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "cid",
            "description": "<p>Mandatory Category Id to search for</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lat",
            "description": "<p>Mandatory Lattitude of User</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lon",
            "description": "<p>Mandatory Longitude of User</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "radius",
            "description": "<p>Optional Radius of search in metres (Default to 5000)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "page",
            "description": "<p>Optional Page Token To search[Will be blank in intial request, then pass previous search response's nextPage token]</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sort",
            "description": "<p>Optional Sort By [Values for Sort by are returned in Get Categories response for each category]</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "order",
            "description": "<p>Optional Ignore this for now</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success - OK 200": [
          {
            "group": "Success - OK 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Response.</p>"
          },
          {
            "group": "Success - OK 200",
            "type": "String",
            "optional": false,
            "field": "response.status",
            "description": "<p>OK.</p>"
          },
          {
            "group": "Success - OK 200",
            "type": "String",
            "optional": false,
            "field": "response.nextPage",
            "description": "<p>This is next page token. Pass this in next request to get next 20 records.</p>"
          },
          {
            "group": "Success - OK 200",
            "type": "String",
            "optional": false,
            "field": "response.total_records",
            "description": "<p>Eg. 20</p>"
          },
          {
            "group": "Success - OK 200",
            "type": "String",
            "optional": false,
            "field": "response.source",
            "description": "<p>Source of Data eg.GOOGLE</p>"
          },
          {
            "group": "Success - OK 200",
            "type": "Object",
            "optional": false,
            "field": "response.results",
            "description": "<p>Places Results</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n    \"status\": \"Success\",\n    \"data\": [\n        {\n            \"geometry\": {\n                \"location\": {\n                    \"lat\": 28.5834989,\n                    \"lng\": 77.22301709999999\n                }\n            },\n            \"icon\": \"https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png\",\n            \"id\": \"49223a21f97edf98b5b5f57ae1af6816b159988c\",\n            \"name\": \"Ploof\",\n            \"rating\": \"4.2\",\n            \"reference\": \"CmRZAAAAD1PzoERVskoSsnTWXQZ89yza_gtZt2W8u_yRnSyLWugn3ArifZqhJGFW0u5bu2wCoaQhi7u8xnBlRgvU6aIyS-Vxk-HoF1Vv3vghli4O0v36_nR_s509-kARUWJ7lIkyEhBevNNcu64KBVQo7McwytrSGhTroTznlFm-5-wLGRxnwZ6lv2qldA\",\n            \"scope\": \"GOOGLE\",\n            \"types\": [\n                \"restaurant\",\n                \"food\",\n                \"point_of_interest\",\n                \"establishment\"\n            ],\n            \"vicinity\": \"13, Lodhi Colony Market, Next to Khubsoorat Salon & Lodhi Sports, New Delhi\",\n            \"photos\": [\n                {\n                    \"height\": 814,\n                    \"width\": 545,\n                    \"url\": \"http://localhost:8080/SociallBox/api/public/places/photos/CmRdAAAA2RQBRKJpJLuG1HZsZLjB3Eh9gTyNRhyUzrNm8hVn-tfh-bzXzqmCO9p1NrKTuCCN7XHR15gV3HtSOgauWI1zccPnv2uvIxxELd-VagpYT9aBcIKIstFkMqe6qLAWWMa7EhC5-7C-GDqayi2gcv6acT49GhS3l9ogYS8uZfv8Yg9qarGtENTyTw\",\n                    \"photo_reference\": \"CmRdAAAA2RQBRKJpJLuG1HZsZLjB3Eh9gTyNRhyUzrNm8hVn-tfh-bzXzqmCO9p1NrKTuCCN7XHR15gV3HtSOgauWI1zccPnv2uvIxxELd-VagpYT9aBcIKIstFkMqe6qLAWWMa7EhC5-7C-GDqayi2gcv6acT49GhS3l9ogYS8uZfv8Yg9qarGtENTyTw\"\n                }\n            ],\n            \"place_id\": \"ChIJq11ZZh3jDDkR6wx3ISmietM\",\n            \"distance_from_you\": \"4 Kms\",\n            \"opening_hours\": {\n                \"open_now\": true\n            }\n        },\n        {\n            \"geometry\": {\n                \"location\": {\n                    \"lat\": 28.5557469,\n                    \"lng\": 77.1953958\n                }\n            },\n            \"icon\": \"https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png\",\n            \"id\": \"be03b7631af32b2dfdcaa35d707a06071f0e91c5\",\n            \"name\": \"The Project At Park Balluchi\",\n            \"rating\": \"3.9\",\n            \"reference\": \"CnRvAAAAyzkD_BZfJYMiwDX4MipsSiaH6iKmZ8KP12lG4Q5a4UtKNE02fackTqbnFsvNWI8KMTplY2NaTHgKLKb9DxPTuEUSCOArfxg1XDXZ89ckp8PZbnL4sBocSq9zwJ2E7UnlUjNis1wFVAPa635x5G0PsRIQFiy7gpcXQqZ93ZH18ZnIKxoUtm0QRuJKg_V5IQJ3rnUkBDIf2eA\",\n            \"scope\": \"GOOGLE\",\n            \"types\": [\n                \"restaurant\",\n                \"food\",\n                \"point_of_interest\",\n                \"establishment\"\n            ],\n            \"vicinity\": \"Inside Deer Park, Hauz Khas Village, New Delhi\",\n            \"photos\": [\n                {\n                    \"height\": 768,\n                    \"width\": 1024,\n                    \"url\": \"http://localhost:8080/SociallBox/api/public/places/photos/CmRdAAAAmz3tWmggfKgg7q-qH8_LHxvH1JimGi6ZOXhMa6zIG1483LV6RXEeB3Ypbz4Nk_AOkH-YPRNO5FkuaefkXNFLMBD_iQWYCNeagkleisfBP0-OT1h-7wacCc9uNuTsF9y3EhA2b2z8LOPgWliOhPXZB-uPGhQQOG5JqR7vUxixEBycyKlonSvECQ\",\n                    \"photo_reference\": \"CmRdAAAAmz3tWmggfKgg7q-qH8_LHxvH1JimGi6ZOXhMa6zIG1483LV6RXEeB3Ypbz4Nk_AOkH-YPRNO5FkuaefkXNFLMBD_iQWYCNeagkleisfBP0-OT1h-7wacCc9uNuTsF9y3EhA2b2z8LOPgWliOhPXZB-uPGhQQOG5JqR7vUxixEBycyKlonSvECQ\"\n                }\n            ],\n            \"place_id\": \"ChIJVVVVnoodDTkR_KNlS1XDIA4\",\n            \"distance_from_you\": \"1 Kms\",\n            \"opening_hours\": {\n                \"open_now\": true\n            }\n        },\n        {\n            \"geometry\": {\n                \"location\": {\n                    \"lat\": 28.5427287,\n                    \"lng\": 77.1563585\n                }\n            },\n            \"icon\": \"https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png\",\n            \"id\": \"ae74ce53f5d5491eb605e2ee7fad9ff0f6cabf34\",\n            \"name\": \"Smoke House Deli\",\n            \"rating\": \"3.7\",\n            \"reference\": \"CnRkAAAANZnVL2fQPeY-H-QJ-wfqGySlobs23XeTKy0D7-BQNDqmvmoafAFzVc7DCRzdIsWRPV_sgjoNXCl84tNKBwBXuDFOF04DkGSSgabGLLzlTAguXbOWbWFOPHp5vExjlPXf-uLQJAnrVdadZQy8SAFfdBIQFpnXRuz3q0x-FHHGLzRfYRoUxjQwN915OtZdimUZQH8DD0MBRAE\",\n            \"scope\": \"GOOGLE\",\n            \"types\": [\n                \"bar\",\n                \"restaurant\",\n                \"food\",\n                \"point_of_interest\",\n                \"establishment\"\n            ],\n            \"vicinity\": \"Shop No 125 GF DLF Promenade Mall, Vasant Kunj\",\n            \"photos\": [\n                {\n                    \"height\": 900,\n                    \"width\": 1600,\n                    \"url\": \"http://localhost:8080/SociallBox/api/public/places/photos/CmRdAAAAA0EuWhRvB-Ka8OD8bQw58MkGl8kK4M8OXEh_bRMQd_2kqjC7keTPECh1fReOAvay1S1PFp_oqYG5XcfcJd72uGCXCO-VQG6Q5GF7Luh2c-Hg7dUBYBGZuD1wlECLBBm4EhC6qz_dih8NgmgOkxYsK5atGhQnkj6E2lezEdXRSFRWrMJd7JzL4Q\",\n                    \"photo_reference\": \"CmRdAAAAA0EuWhRvB-Ka8OD8bQw58MkGl8kK4M8OXEh_bRMQd_2kqjC7keTPECh1fReOAvay1S1PFp_oqYG5XcfcJd72uGCXCO-VQG6Q5GF7Luh2c-Hg7dUBYBGZuD1wlECLBBm4EhC6qz_dih8NgmgOkxYsK5atGhQnkj6E2lezEdXRSFRWrMJd7JzL4Q\"\n                }\n            ],\n            \"place_id\": \"ChIJ9-ciyc4dDTkRK3M4GGPoeOc\",\n            \"distance_from_you\": \"0 Kms\",\n            \"opening_hours\": {\n                \"open_now\": true\n            }\n        },\n        {\n            \"geometry\": {\n                \"location\": {\n                    \"lat\": 28.536649,\n                    \"lng\": 77.1480311\n                }\n            },\n            \"icon\": \"https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png\",\n            \"id\": \"c2da9be40de99bcb7e6427938836296dca8a3ece\",\n            \"name\": \"NANKING\",\n            \"rating\": \"4.2\",\n            \"reference\": \"CmRbAAAA79cbeCna0kM1AVctayu-yPCpwQ0bzNxTz3UaYOtv5dwxfcb3e2BidTGDY05b9R1yPZA8IFqU-2Od6skIQghnoiDHtzAvc7CAGbQK9Kz-AJlVnj3tvF4fJCBMAjEoXRPEEhDzCuFfLxgXDJ-EeQxPU6sNGhTawGfQHYbnpDfCc49YeNGyiiiKjg\",\n            \"scope\": \"GOOGLE\",\n            \"types\": [\n                \"restaurant\",\n                \"food\",\n                \"point_of_interest\",\n                \"establishment\"\n            ],\n            \"vicinity\": \"Opp Delhi Public School, Sector- C, Vasant Kunj, New Delhi\",\n            \"photos\": [\n                {\n                    \"height\": 768,\n                    \"width\": 1024,\n                    \"url\": \"http://localhost:8080/SociallBox/api/public/places/photos/CmRdAAAADJYRUudeA6J5GygCdF1QWNP0kAd680xwKLj4RtZ-r3GH3AruAHHFxhjTMONmXSCf89PSOP6WCRm5ZL1DTLK9Uluzj-Uzau23HjWUOuU-G8z57QSRuJtW_lFequrjqjbAEhA3iXmk-OEQFwFXVp0MN2gGGhTWjaI-5IMJgLNXTyvHUm6j6KrrkQ\",\n                    \"photo_reference\": \"CmRdAAAADJYRUudeA6J5GygCdF1QWNP0kAd680xwKLj4RtZ-r3GH3AruAHHFxhjTMONmXSCf89PSOP6WCRm5ZL1DTLK9Uluzj-Uzau23HjWUOuU-G8z57QSRuJtW_lFequrjqjbAEhA3iXmk-OEQFwFXVp0MN2gGGhTWjaI-5IMJgLNXTyvHUm6j6KrrkQ\"\n                }\n            ],\n            \"place_id\": \"ChIJCdZIqTIcDTkRuojNsdjMkdA\",\n            \"distance_from_you\": \"0 Kms\",\n            \"opening_hours\": {\n                \"open_now\": true\n            }\n        },\n        {\n            \"geometry\": {\n                \"location\": {\n                    \"lat\": 28.5221749,\n                    \"lng\": 77.181641\n                }\n            },\n            \"icon\": \"https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png\",\n            \"id\": \"d0869bc142e6a7319be7305b353d66cecfedfe4f\",\n            \"name\": \"Thai High\",\n            \"rating\": \"3.8\",\n            \"reference\": \"CmRdAAAA_m-AZWg4M0y_rq73ILmS1t_MHpDre7KVO1nwR2hl8--x0g2Gw5_sWvrB4aF5AdliUv4Cph36V94X6nSMzAnh53XuBP9LAIB1PA2JyJm3tM0liB_RQm-hCLFoJv6_j_WcEhCvI4ECcG2EQBJ9jfLbGbOmGhTD0YDyLkEM7-JB1Bz6x64t8oAUig\",\n            \"scope\": \"GOOGLE\",\n            \"types\": [\n                \"bar\",\n                \"restaurant\",\n                \"food\",\n                \"point_of_interest\",\n                \"establishment\"\n            ],\n            \"vicinity\": \"1091/1, Ambawatta Complex, Kalka Das Marg, Mehrauli, New Delhi\",\n            \"photos\": [\n                {\n                    \"height\": 1190,\n                    \"width\": 2048,\n                    \"url\": \"http://localhost:8080/SociallBox/api/public/places/photos/CmRdAAAA1BBCIkesx6csIBC51Tbrigd-GAfnXvc63Amrd5WMV6xLrrkL8DKzxh4C2WfNvD6ssiYt8opri4fv3Yruen1l9wQ0QAR_mQ2QQ15kKYHlvMZCYTAch5RmAWQvTPbrjUccEhAZseGW0DhtoMyRWHmZEaDoGhS80BNT94BaZsqsPFB4QqKAvRgqwg\",\n                    \"photo_reference\": \"CmRdAAAA1BBCIkesx6csIBC51Tbrigd-GAfnXvc63Amrd5WMV6xLrrkL8DKzxh4C2WfNvD6ssiYt8opri4fv3Yruen1l9wQ0QAR_mQ2QQ15kKYHlvMZCYTAch5RmAWQvTPbrjUccEhAZseGW0DhtoMyRWHmZEaDoGhS80BNT94BaZsqsPFB4QqKAvRgqwg\"\n                }\n            ],\n            \"place_id\": \"ChIJJWjGrxEeDTkR5gOdf_tx2s4\",\n            \"distance_from_you\": \"2 Kms\",\n            \"opening_hours\": {\n                \"open_now\": true\n            }\n        },\n        {\n            \"geometry\": {\n                \"location\": {\n                    \"lat\": 28.558374,\n                    \"lng\": 77.16414\n                }\n            },\n            \"icon\": \"https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png\",\n            \"id\": \"3f7e72654c1955131fcfb5704ef5544c94907a01\",\n            \"name\": \"Punjabi By Nature\",\n            \"rating\": \"3.6\",\n            \"reference\": \"CnRlAAAAsXu64cXyd5a8iyWxdchKULmKRWnjE5ujNuXqxeVUrUl64-XU1imYPdZ9fqizcwXrpwlgYIrj-_0aYOdrDrJHqaxaMzm9aSRJ1u8FOsw3sPX2eNIKK892dCgFhXzmC501cG_HKvzwqoM_tMI0wAL8fRIQqulgqF15z4kk58RaVaWEShoUBRiNJ7VDqF_QfaoIHPVQMLEBaCI\",\n            \"scope\": \"GOOGLE\",\n            \"types\": [\n                \"restaurant\",\n                \"food\",\n                \"point_of_interest\",\n                \"establishment\"\n            ],\n            \"vicinity\": \"T-305, 3rd Floor, Ambience Mall, Nelson Mandela Marg, Vasant Kunj, New Delhi\",\n            \"photos\": [\n                {\n                    \"height\": 1034,\n                    \"width\": 1500,\n                    \"url\": \"http://localhost:8080/SociallBox/api/public/places/photos/CmRdAAAAnhX_rMUouXhwcVEbPVWDoY670HAcgP4Zycwbid8LAQOoqMBtKHbFjHgCyVdCIB-k7FjunnCho4Ka5vgUR9igSc4qojeN2WBJ27HjTkYv6uQ5IETb6dsIhwrNv3KL0Lg8EhDWsWEz3bM9y_eUCPVjOmUlGhTFSTaqv1RgtFzxi6SXdvT2KasPgQ\",\n                    \"photo_reference\": \"CmRdAAAAnhX_rMUouXhwcVEbPVWDoY670HAcgP4Zycwbid8LAQOoqMBtKHbFjHgCyVdCIB-k7FjunnCho4Ka5vgUR9igSc4qojeN2WBJ27HjTkYv6uQ5IETb6dsIhwrNv3KL0Lg8EhDWsWEz3bM9y_eUCPVjOmUlGhTFSTaqv1RgtFzxi6SXdvT2KasPgQ\"\n                }\n            ],\n            \"place_id\": \"ChIJfW7_oLsdDTkRFPEDVG7M5sY\",\n            \"distance_from_you\": \"2 Kms\",\n            \"opening_hours\": {\n                \"open_now\": true\n            }\n        },\n        {\n            \"geometry\": {\n                \"location\": {\n                    \"lat\": 28.5275923,\n                    \"lng\": 77.2191562\n                }\n            },\n            \"icon\": \"https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png\",\n            \"id\": \"c51fe251d9a7a55711a090cde437afec68ff8eda\",\n            \"name\": \"Gulati Spice Market\",\n            \"rating\": \"4.1\",\n            \"reference\": \"CnRnAAAAuhjd3drerqNRSoVYomDfpEMOKthSvxKIQt_bnW_ctoj3bWwlRPfaXWS5eB7g32FGC7MdDPcSHn8qTw3HSJavQOm0yM4nUlWqXVK6ZNitmG2_8TMZB79OUHCHC5zaTqVbnSeg9gJGcCp5cKdmeNJKyhIQW6NJ7IXelAyB5GicUR9xnBoUaPiWc4kmbWkGnMQQjE8bUDCbWE4\",\n            \"scope\": \"GOOGLE\",\n            \"types\": [\n                \"meal_takeaway\",\n                \"restaurant\",\n                \"food\",\n                \"point_of_interest\",\n                \"establishment\"\n            ],\n            \"vicinity\": \"Shop No. 18, Ground Floor, Plot No. D2, Southern Park Mall, Behind Select City Walk Mall, Saket, New Delhi\",\n            \"photos\": [\n                {\n                    \"height\": 1536,\n                    \"width\": 2048,\n                    \"url\": \"http://localhost:8080/SociallBox/api/public/places/photos/CmRdAAAA3SNBB43i9bSA86Po0En7CE8zNx5g1HoQvq_M7GfITuHeDnSiprCbs2T-okpCz7PqvYKz1UkIG4Ay9kOT-XbR3WL6kQstXajNBXQtNo5WP4nrbFx5-xB9ein4I6G3bnyZEhB9ABi-JGXm1FmfbAtFGcf4GhQBcE8tfF48zS6zvkWYZw_GVt528A\",\n                    \"photo_reference\": \"CmRdAAAA3SNBB43i9bSA86Po0En7CE8zNx5g1HoQvq_M7GfITuHeDnSiprCbs2T-okpCz7PqvYKz1UkIG4Ay9kOT-XbR3WL6kQstXajNBXQtNo5WP4nrbFx5-xB9ein4I6G3bnyZEhB9ABi-JGXm1FmfbAtFGcf4GhQBcE8tfF48zS6zvkWYZw_GVt528A\"\n                }\n            ],\n            \"place_id\": \"ChIJGSI1H4vhDDkRHbBTrkKE1eI\",\n            \"distance_from_you\": \"1 Kms\",\n            \"opening_hours\": {\n                \"open_now\": true\n            }\n        },\n        {\n            \"geometry\": {\n                \"location\": {\n                    \"lat\": 28.5567227,\n                    \"lng\": 77.2053088\n                }\n            },\n            \"icon\": \"https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png\",\n            \"id\": \"f1d106a425ae00796db32d9a888c338ddff29619\",\n            \"name\": \"Gung The Palace\",\n            \"rating\": \"4.2\",\n            \"reference\": \"CnRjAAAA4xZHY0jtghZv_XLx4czUdPD7iQMxctvkvSzJLv7bJxC5oW9OyHl0c5Lt6lecK4dEIqSI0y48hTFhe0nbtzlrNLHD-6vt-rlcN7huUZ9aY-2TNoREhfbfCL647VI9oGDZqXmjBlKfqYMwIIvXWJqkdBIQ4kH4v869EXDfbx9fl2__cxoUDfqoyVJK5U3YTFYVLpwFgvEZxHM\",\n            \"scope\": \"GOOGLE\",\n            \"types\": [\n                \"restaurant\",\n                \"food\",\n                \"point_of_interest\",\n                \"establishment\"\n            ],\n            \"vicinity\": \"D 1B, Near Ashirwad Complex, Block D, Green Park, New Delhi\",\n            \"photos\": [\n                {\n                    \"height\": 3120,\n                    \"width\": 4160,\n                    \"url\": \"http://localhost:8080/SociallBox/api/public/places/photos/CoQBcwAAAP1nryyZ37Z-X_PvSvE2bQXWTVd-B4VBi-H-wU2Myg5Q1U2cyBwvVIWjeK-NbWF9A5U__QmBOUcBpTe-bRs9ORqv825lYdtQCCrwJMl07UkfN1fs-OfWkefOx_9cQKYMUPexwwsMm_Z2Dli0j4YqVQxtanu211jFyAK33NaoF71lEhC1Lh-Tz7yJxTONkQzb4zAvGhSWaHdakDqCfqqUgomDzlHSELYdug\",\n                    \"photo_reference\": \"CoQBcwAAAP1nryyZ37Z-X_PvSvE2bQXWTVd-B4VBi-H-wU2Myg5Q1U2cyBwvVIWjeK-NbWF9A5U__QmBOUcBpTe-bRs9ORqv825lYdtQCCrwJMl07UkfN1fs-OfWkefOx_9cQKYMUPexwwsMm_Z2Dli0j4YqVQxtanu211jFyAK33NaoF71lEhC1Lh-Tz7yJxTONkQzb4zAvGhSWaHdakDqCfqqUgomDzlHSELYdug\"\n                }\n            ],\n            \"place_id\": \"ChIJC-xqj23iDDkRW01pk9HAc-A\",\n            \"distance_from_you\": \"1 Kms\",\n            \"opening_hours\": {\n                \"open_now\": true\n            }\n        },\n        {\n            \"geometry\": {\n                \"location\": {\n                    \"lat\": 28.5536047,\n                    \"lng\": 77.194194\n                }\n            },\n            \"icon\": \"https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png\",\n            \"id\": \"73ebd6bf93031ece4af57e76270ed7e64b5830df\",\n            \"name\": \"Yeti\",\n            \"rating\": \"4.1\",\n            \"reference\": \"CmRXAAAA4sAv4h8BIPvwKtTUDVPkmISKkruVXzJE9CzpUW0RuLJTIhzbuv2qBCJs54oV1NeHnhfY8RioSzuKSshGRnx_mxPNCZbAuIOu1bAMXSMqWjgnFUPOVt0fB64glPUBN_w_EhAW_tcAuwQ7_yPQd9WQ5vxwGhQpCCifN6yEbrKJWeHmu31sm8qr9Q\",\n            \"scope\": \"GOOGLE\",\n            \"types\": [\n                \"restaurant\",\n                \"food\",\n                \"point_of_interest\",\n                \"establishment\"\n            ],\n            \"vicinity\": \"50 A, 2nd Floor, Hauz Khas Village, New Delhi\",\n            \"photos\": [\n                {\n                    \"height\": 612,\n                    \"width\": 816,\n                    \"url\": \"http://localhost:8080/SociallBox/api/public/places/photos/CmRdAAAAGOCZfRkNuXpE2L4Y5yUBJS_QDCUZ_bwBdDKWJL8VakZIIAEp87I8wbgKJP63EJzBm3umJuWMq0bj0ui4yC0Nf_AvmehBkUy41I5IqxYA9Yga-OCgDZ3O__pwIeaUwfazEhCmfA7Xs73V1lS3h-lSqKT7GhRbBxoWpIB8MD1cYVQKD2z36TLATg\",\n                    \"photo_reference\": \"CmRdAAAAGOCZfRkNuXpE2L4Y5yUBJS_QDCUZ_bwBdDKWJL8VakZIIAEp87I8wbgKJP63EJzBm3umJuWMq0bj0ui4yC0Nf_AvmehBkUy41I5IqxYA9Yga-OCgDZ3O__pwIeaUwfazEhCmfA7Xs73V1lS3h-lSqKT7GhRbBxoWpIB8MD1cYVQKD2z36TLATg\"\n                }\n            ],\n            \"place_id\": \"ChIJYcd-oYodDTkRzfhWhXhDtiA\",\n            \"distance_from_you\": \"1 Kms\",\n            \"opening_hours\": {\n                \"open_now\": true\n            }\n        },\n        {\n            \"geometry\": {\n                \"location\": {\n                    \"lat\": 28.5411537,\n                    \"lng\": 77.15540519999999\n                }\n            },\n            \"icon\": \"https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png\",\n            \"id\": \"953f5482da70c3dcb33a85006d879c09e0287733\",\n            \"name\": \"Kylin Premier\",\n            \"rating\": \"3.8\",\n            \"reference\": \"CmRgAAAANZB09J9FMCbtV_FVyr4o7ulGAkSGTvQMmC1_R260pZj_EXEYtWuDNECqEe62av-nleB85W2LdFM2YkcNH325iAAlzmQoifa5CsXBKmGHYqIOMnZNRn79qGCmyJVJWWRiEhCEVas0llvc5OCrdNtqraybGhSWSDpcpeoLFAsLVDTxnUQE83X0vQ\",\n            \"scope\": \"GOOGLE\",\n            \"types\": [\n                \"restaurant\",\n                \"food\",\n                \"point_of_interest\",\n                \"establishment\"\n            ],\n            \"vicinity\": \"T-302, 3rd Floor, Ambience Mall, Vasant Kunj, Vasant Kunj II, Vasant Kunj, New Delhi\",\n            \"photos\": [\n                {\n                    \"height\": 2698,\n                    \"width\": 4888,\n                    \"url\": \"http://localhost:8080/SociallBox/api/public/places/photos/CmRdAAAAFDXcoaUO8m7Bh_5Hpsn1N6zAOSvQRbbLa0aXt3JziW7yv-Ha0y2iCjzU38jET29iT_XdAvfqY2ZzhXwDi7XLcibI6UO1pFLvZjUF0IrHxi6agfopzKlrFpiMAFG1o9xIEhB68RjlzcY9QTl3gC9Hdvp1GhRtoadsPbbs4Ooy7BFeRVnWCSO3Ng\",\n                    \"photo_reference\": \"CmRdAAAAFDXcoaUO8m7Bh_5Hpsn1N6zAOSvQRbbLa0aXt3JziW7yv-Ha0y2iCjzU38jET29iT_XdAvfqY2ZzhXwDi7XLcibI6UO1pFLvZjUF0IrHxi6agfopzKlrFpiMAFG1o9xIEhB68RjlzcY9QTl3gC9Hdvp1GhRtoadsPbbs4Ooy7BFeRVnWCSO3Ng\"\n                }\n            ],\n            \"place_id\": \"ChIJv8aUm84dDTkRlOs3CN8e3R8\",\n            \"distance_from_you\": \"0 Kms\",\n            \"opening_hours\": {\n                \"open_now\": true\n            }\n        },\n        {\n            \"geometry\": {\n                \"location\": {\n                    \"lat\": 28.5426173,\n                    \"lng\": 77.15677869999999\n                }\n            },\n            \"icon\": \"https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png\",\n            \"id\": \"98394ca2917f1e03167a9d6b2207cb1b90e865c7\",\n            \"name\": \"Kainoosh\",\n            \"rating\": \"3.6\",\n            \"reference\": \"CmRcAAAAOJfCz-UjaSjBqnRNr_plUIf_302lFQdyILdJ-xDRSquaWL9p-YRzJIAxzrcd7_qMI0yVRg3CCyRdn8a0mj9lvzcp46XlIA0Ak2_JSkxZgEMv_yUZdLQbOTQ_Q_BPN5o_EhDN5i1jNYX953Y4ZUE8-mmrGhS7cKW2qr2FWfuXLwK_njiQoBjU1w\",\n            \"scope\": \"GOOGLE\",\n            \"types\": [\n                \"restaurant\",\n                \"food\",\n                \"point_of_interest\",\n                \"establishment\"\n            ],\n            \"vicinity\": \"122-124, DLF Promenade, Nelson Mandela Marg, Vasant Kunj, New Delhi\",\n            \"photos\": [\n                {\n                    \"height\": 4160,\n                    \"width\": 3120,\n                    \"url\": \"http://localhost:8080/SociallBox/api/public/places/photos/CmRdAAAAgCG1VTjVLZEv-JEo-ti223KW0Sr0I3wA8akBHYj8PrBkHKOqHbn3-FWm0Ppk0pWSebGVF1xZtwOTczH2oaGvd9MBiagRKFQ2dV4f-W7bU1yluwMxMTA1ZVRzTK_gGnzpEhDInusy0QsVxIm5yecXLkLGGhSwLlMckIQRYenyLiHcHHdm2uQVXw\",\n                    \"photo_reference\": \"CmRdAAAAgCG1VTjVLZEv-JEo-ti223KW0Sr0I3wA8akBHYj8PrBkHKOqHbn3-FWm0Ppk0pWSebGVF1xZtwOTczH2oaGvd9MBiagRKFQ2dV4f-W7bU1yluwMxMTA1ZVRzTK_gGnzpEhDInusy0QsVxIm5yecXLkLGGhSwLlMckIQRYenyLiHcHHdm2uQVXw\"\n                }\n            ],\n            \"place_id\": \"ChIJ-Rpu1M4dDTkR5Po1wOFuN-Q\",\n            \"distance_from_you\": \"0 Kms\",\n            \"opening_hours\": {\n                \"open_now\": true\n            }\n        },\n        {\n            \"geometry\": {\n                \"location\": {\n                    \"lat\": 28.5236697,\n                    \"lng\": 77.20645990000001\n                }\n            },\n            \"icon\": \"https://maps.gstatic.com/mapfiles/place_api/icons/bar-71.png\",\n            \"id\": \"eb81ac9ff4c47b4beba8e7b7112579066ca776f7\",\n            \"name\": \"Buzz\",\n            \"rating\": \"4.6\",\n            \"reference\": \"CmRYAAAAe8wxbizsfcIwHfIMxuOSAC29g-gmFE06ZSo6MVjWzu6XhU2IP11Nw2X7EPGBlO6gJZ_MT8SsI_OFtife2NmDV_Mdstbtu4jWIh51PMQ5RvZ2Ca_hoNf028uIJB12rA7FEhA8JMnhW3SGcOxyzu_SRFfhGhT8sjfo97j3_DTVJ2ncPbQ8UjvjCA\",\n            \"scope\": \"GOOGLE\",\n            \"types\": [\n                \"bar\",\n                \"restaurant\",\n                \"food\",\n                \"point_of_interest\",\n                \"establishment\"\n            ],\n            \"vicinity\": \"17, Commercial Centre, Ist Floor, PVR Complex, Saket, New Delhi\",\n            \"photos\": null,\n            \"place_id\": \"ChIJAQBAk_DhDDkRya0EzOMHEOE\",\n            \"distance_from_you\": \"1 Kms\",\n            \"opening_hours\": null\n        },\n        {\n            \"geometry\": {\n                \"location\": {\n                    \"lat\": 28.52721,\n                    \"lng\": 77.2170872\n                }\n            },\n            \"icon\": \"https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png\",\n            \"id\": \"5a44fed12849cc3077e218cc32484a8b9afc07a1\",\n            \"name\": \"Hard Rock Cafe\",\n            \"rating\": \"4.3\",\n            \"reference\": \"CnRiAAAASoQUxOGFaD9RybyfrB2-SOMJqTnQVdidXkcoITgP9pglu1-ikcbtZU50I5qHV2Ypl2IKT4rUxJTPdf0i7bXQ7KZz4ylz-iOc98LkH5VGjFzhfvRIFkxei7f29pWti5EMfZzaGCR7brKelwKvxrk1vxIQorr7nuoWvuFxCzFDW4mALBoUZLH4sc05D9YcGThrcUV1TV_1NY4\",\n            \"scope\": \"GOOGLE\",\n            \"types\": [\n                \"cafe\",\n                \"bar\",\n                \"restaurant\",\n                \"food\",\n                \"point_of_interest\",\n                \"establishment\"\n            ],\n            \"vicinity\": \"M 110, 1st Floor, DLF Place, Saket, New Delhi\",\n            \"photos\": [\n                {\n                    \"height\": 2448,\n                    \"width\": 3264,\n                    \"url\": \"http://localhost:8080/SociallBox/api/public/places/photos/CmRdAAAAsindUXuxDZkSQug3d-OAN98bLoXeiFbZasmRsR5jTVlFc2c2yKtmk3wc-NeHYi2FhdAiEleTHvoYllR3g0ki0tiAwVC9zfU-p-KRYvZg3pAX6wcZ5ONZR_NBsf6PJXA2EhDHl_WWk0SImaBC1cQ0k0SPGhTyNyA3mhtKr35RzTevue2pqjBoMQ\",\n                    \"photo_reference\": \"CmRdAAAAsindUXuxDZkSQug3d-OAN98bLoXeiFbZasmRsR5jTVlFc2c2yKtmk3wc-NeHYi2FhdAiEleTHvoYllR3g0ki0tiAwVC9zfU-p-KRYvZg3pAX6wcZ5ONZR_NBsf6PJXA2EhDHl_WWk0SImaBC1cQ0k0SPGhTyNyA3mhtKr35RzTevue2pqjBoMQ\"\n                }\n            ],\n            \"place_id\": \"ChIJbQ3c0fThDDkRC7IAMdZhv4w\",\n            \"distance_from_you\": \"1 Kms\",\n            \"opening_hours\": {\n                \"open_now\": true\n            }\n        },\n        {\n            \"geometry\": {\n                \"location\": {\n                    \"lat\": 28.538261,\n                    \"lng\": 77.2148132\n                }\n            },\n            \"icon\": \"https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png\",\n            \"id\": \"47368a3289956d0dac7a18ce6bc3c9a966116b59\",\n            \"name\": \"Karim's Food Corner\",\n            \"rating\": \"4\",\n            \"reference\": \"CnRnAAAAc3NXGorltHGonE2AY5P_D5Ne6YkK5DLeSMKDsjUBKJMk2kerKHru47p62dDhTElmWN4PiDPnW9C-oa2NTTDoelIQ_rAMb3USOQflBgImnjl1qHRoRZoWGX1sNFVy7JLO6TAGnSRnEH1PoEb1hpKp-xIQOw2EpG49YehCeTSVu15zoBoUI-vN5BhPUT-2YbGv3lJNNugufm4\",\n            \"scope\": \"GOOGLE\",\n            \"types\": [\n                \"restaurant\",\n                \"food\",\n                \"point_of_interest\",\n                \"establishment\"\n            ],\n            \"vicinity\": \"# 40-B,Corner Maket,Malviya Nagar, New Delhi\",\n            \"photos\": [\n                {\n                    \"height\": 1280,\n                    \"width\": 960,\n                    \"url\": \"http://localhost:8080/SociallBox/api/public/places/photos/CmRdAAAAw6jmsKwGASeWIuJs89ClW_d0ogo-sevLucdMk4ZEa2-0grftoJ79J97RbqMjMT09VVY-z-IToxQMsMRuAbfj_eubqCN2T8E7AsT0nCtVpNlzOMAGfCtQtTZqjJc9sjQZEhDeB4xa97kl0tpnJy7exR-UGhStlgIAzb50w5ze7BtPkrMKSKBM8w\",\n                    \"photo_reference\": \"CmRdAAAAw6jmsKwGASeWIuJs89ClW_d0ogo-sevLucdMk4ZEa2-0grftoJ79J97RbqMjMT09VVY-z-IToxQMsMRuAbfj_eubqCN2T8E7AsT0nCtVpNlzOMAGfCtQtTZqjJc9sjQZEhDeB4xa97kl0tpnJy7exR-UGhStlgIAzb50w5ze7BtPkrMKSKBM8w\"\n                }\n            ],\n            \"place_id\": \"ChIJy9Yh3BjiDDkRbmP44cEYNcI\",\n            \"distance_from_you\": \"0 Kms\",\n            \"opening_hours\": {\n                \"open_now\": true\n            }\n        },\n        {\n            \"geometry\": {\n                \"location\": {\n                    \"lat\": 28.5574867,\n                    \"lng\": 77.1635656\n                }\n            },\n            \"icon\": \"https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png\",\n            \"id\": \"2b1da3d2c2c1dc5d0e2911469659b71369aee4a7\",\n            \"name\": \"McDonald's\",\n            \"rating\": \"4.1\",\n            \"reference\": \"CmRcAAAAixCheOUE_49EyEX9JB6AiUcCSJlpWRVdK78KIQjZNFztxZsQyOlZ2lcUxT9TTqwH4smeyR9fp2Xnyx3LjB6Dvq-iIPsJkjDDi53cufDXT1qLTD9iGIdeQ0P9OI8BRQIxEhDW2tm9G_FQLEQBMr1A73_SGhSq5-M_TNzgHEApgm2Y2UNdfOpE5w\",\n            \"scope\": \"GOOGLE\",\n            \"types\": [\n                \"restaurant\",\n                \"food\",\n                \"point_of_interest\",\n                \"establishment\"\n            ],\n            \"vicinity\": \"Shop No. 47, Basant Lok, Community Centre, Vasant Vihar, New Delhi\",\n            \"photos\": [\n                {\n                    \"height\": 683,\n                    \"width\": 1024,\n                    \"url\": \"http://localhost:8080/SociallBox/api/public/places/photos/CmRdAAAAHl-uYM1LzzuY98dKbXQpThjI26B7k4wwtHUa6Z_pQWKPeAjqplz7ZSv4T8f3b7JCRKnjbfRKN283EaO8jDiNejHiKlZhFXos_dygYbEzrsMMjJdrUmyoWzShlAE1FiZbEhB7Od0gmyF-0vqw4RqEwpqvGhROycdC3kZdTEe_W_yW0HdK9mUUEg\",\n                    \"photo_reference\": \"CmRdAAAAHl-uYM1LzzuY98dKbXQpThjI26B7k4wwtHUa6Z_pQWKPeAjqplz7ZSv4T8f3b7JCRKnjbfRKN283EaO8jDiNejHiKlZhFXos_dygYbEzrsMMjJdrUmyoWzShlAE1FiZbEhB7Od0gmyF-0vqw4RqEwpqvGhROycdC3kZdTEe_W_yW0HdK9mUUEg\"\n                }\n            ],\n            \"place_id\": \"ChIJjRJ0r7sdDTkRQguVsAVKNAA\",\n            \"distance_from_you\": \"1 Kms\",\n            \"opening_hours\": {\n                \"open_now\": true\n            }\n        },\n        {\n            \"geometry\": {\n                \"location\": {\n                    \"lat\": 28.5464051,\n                    \"lng\": 77.1968469\n                }\n            },\n            \"icon\": \"https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png\",\n            \"id\": \"5e46695256392d9b7899bcab55474f4ba4a3666d\",\n            \"name\": \"Pizza Square\",\n            \"rating\": \"3.6\",\n            \"reference\": \"CmRgAAAAdUwM4gcqM07h55HniMkAC07tj2Dn8nTxdshmhRaFy-EO67BaOV3qSa1e9Fz4EIUOGCQNhlE4BRZN4c4MF01KKpXUB2Vr92RDgvftU8QF-Hcul2AOS5LKlye3ELcPVuENEhDrK9JvY8uT68HH42uoBzelGhQKJ54yZuZLHEk394iOFdmBr15KzA\",\n            \"scope\": \"GOOGLE\",\n            \"types\": [\n                \"restaurant\",\n                \"food\",\n                \"point_of_interest\",\n                \"establishment\"\n            ],\n            \"vicinity\": \"C-14, Community Center, Opp IIT Main Gate, Safdarjung Development Area, New Delhi\",\n            \"photos\": [\n                {\n                    \"height\": 3264,\n                    \"width\": 2448,\n                    \"url\": \"http://localhost:8080/SociallBox/api/public/places/photos/CmRdAAAAnNHMpgfZX_carQHm89FnM-4m-cFVNRvgSyHoFcQcJZwVwv2RJXrx_4shKreqHpezKO2NM96hY4jrxThhuILO1_BxTADsasyXD4qhv8RztJWH6uR503SsN3cpCia1MiMpEhDFHU7WkffZ0QbPZWrGq-gwGhSD03oht5KlMivXFFB0UElrVU9q1g\",\n                    \"photo_reference\": \"CmRdAAAAnNHMpgfZX_carQHm89FnM-4m-cFVNRvgSyHoFcQcJZwVwv2RJXrx_4shKreqHpezKO2NM96hY4jrxThhuILO1_BxTADsasyXD4qhv8RztJWH6uR503SsN3cpCia1MiMpEhDFHU7WkffZ0QbPZWrGq-gwGhSD03oht5KlMivXFFB0UElrVU9q1g\"\n                }\n            ],\n            \"place_id\": \"ChIJ1YB9hgniDDkRRyunEy2RX4k\",\n            \"distance_from_you\": \"0 Kms\",\n            \"opening_hours\": {\n                \"open_now\": true\n            }\n        },\n        {\n            \"geometry\": {\n                \"location\": {\n                    \"lat\": 28.514074,\n                    \"lng\": 77.19710110000001\n                }\n            },\n            \"icon\": \"https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png\",\n            \"id\": \"72c2a3756d9eb0d2bc956bb1160f357330b4ee76\",\n            \"name\": \"Fio\",\n            \"rating\": \"3.9\",\n            \"reference\": \"CmRXAAAAw_TN5_3yI-pZqTszmWejCCyOMrG-xJ6BQrMEUQsT6D3zvkPB0Ocseylc_1ZL7nTu9czIitaAC9cu1Atv8QBEVPDQePKLjZAsLDD3GtLF_XsyQWCCD_uFiwSMGSKl9rJ2EhCm33Zam0L4sFt99_F2hRDXGhTXkutouqTelb4KVrLC6SfyJ6a0Iw\",\n            \"scope\": \"GOOGLE\",\n            \"types\": [\n                \"restaurant\",\n                \"food\",\n                \"point_of_interest\",\n                \"establishment\"\n            ],\n            \"vicinity\": \"Gate Number 1, Garden of 5 Senses, Near Saket Metro Station, Saidulajab, Mehrauli, New Delhi\",\n            \"photos\": [\n                {\n                    \"height\": 798,\n                    \"width\": 1200,\n                    \"url\": \"http://localhost:8080/SociallBox/api/public/places/photos/CmRdAAAAB18cdxOgcc4d_WyPQRCIkYmVNEBjqJ2B2V1Drm92WD0U22dWuVQRJrg8Rsh-Q1-tZycOZuaKLCygEK19YUTEHktCiiiQbJ_56AKhIEGjWye5Z8o8ww919x30LvM_3TxwEhBL1SnK4OjEBkTt9kTxKHzAGhQg8MwOC8huEsAyfRV7isUFFhRLgQ\",\n                    \"photo_reference\": \"CmRdAAAAB18cdxOgcc4d_WyPQRCIkYmVNEBjqJ2B2V1Drm92WD0U22dWuVQRJrg8Rsh-Q1-tZycOZuaKLCygEK19YUTEHktCiiiQbJ_56AKhIEGjWye5Z8o8ww919x30LvM_3TxwEhBL1SnK4OjEBkTt9kTxKHzAGhQg8MwOC8huEsAyfRV7isUFFhRLgQ\"\n                }\n            ],\n            \"place_id\": \"ChIJBe5iSeLhDDkR_J3vpw0dJ4U\",\n            \"distance_from_you\": \"2 Kms\",\n            \"opening_hours\": {\n                \"open_now\": true\n            }\n        },\n        {\n            \"geometry\": {\n                \"location\": {\n                    \"lat\": 28.5572835,\n                    \"lng\": 77.164221\n                }\n            },\n            \"icon\": \"https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png\",\n            \"id\": \"baeb57f93b1c7aa7f8663c28263e69f7501d790a\",\n            \"name\": \"Arabian Nites\",\n            \"rating\": \"4.6\",\n            \"reference\": \"CmRgAAAAIfMzUqcOB6Eesv5wicWzoAJMSaUdPD26EDSu8RCeOl4nsgh_f677ONW_uej_Vcnvyb1IHAhgAaQWXB5i8wbQsztAJQ0UTQSNMRC5WGB_JX0w7Mz_EzMmVD1MeEhADQmWEhCEBUq7sYBRoGqIfDRGKh5YGhQNIBZFmKGJcpxnCtz70Q679RP8OQ\",\n            \"scope\": \"GOOGLE\",\n            \"types\": [\n                \"restaurant\",\n                \"food\",\n                \"point_of_interest\",\n                \"establishment\"\n            ],\n            \"vicinity\": \"59, Pvr Priya Complex, Basant Lok, Vasant Vihar, New Delhi\",\n            \"photos\": null,\n            \"place_id\": \"ChIJ____CrAdDTkRrrGaFGFqWHQ\",\n            \"distance_from_you\": \"1 Kms\",\n            \"opening_hours\": {\n                \"open_now\": true\n            }\n        },\n        {\n            \"geometry\": {\n                \"location\": {\n                    \"lat\": 28.5248555,\n                    \"lng\": 77.1569016\n                }\n            },\n            \"icon\": \"https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png\",\n            \"id\": \"45d0a11c61a6da40b42d9c97719716e0d65e4528\",\n            \"name\": \"Sagar Ratna\",\n            \"rating\": \"4\",\n            \"reference\": \"CmRfAAAA18RbRGpoOtCQ7uIUVO-Qhizo2WQUrELQ6UOHuyvRv8FkkghXo4JQvdT90wJvSnhH5LP_UdMKJsYGGFFgmq3nzd2QEMG7CHNSgWuK2sC0xzTET-tJu_steLJ6Mmeo_3XpEhBCaD02D0E1i4IvR3GsrjuYGhT2Cc8zvLYimpNfo8V11l6qXs6TQA\",\n            \"scope\": \"GOOGLE\",\n            \"types\": [\n                \"restaurant\",\n                \"food\",\n                \"point_of_interest\",\n                \"establishment\"\n            ],\n            \"vicinity\": \"No. 5/5A, Central Market, Masoodpur, Vasant Kunj, New Delhi\",\n            \"photos\": [\n                {\n                    \"height\": 2988,\n                    \"width\": 5312,\n                    \"url\": \"http://localhost:8080/SociallBox/api/public/places/photos/CmRdAAAAvVAL8Mysa3hqmnJYqX7g6_ffHFgplhZYhYggR0_BZxt2nMROosaplBxnRsJnX_KvnCqgThI1qMD4dvy9oBnuC6nycJu90uvMfpdB5TsbWfegNVWwIWeEDTc7KM3vTK_tEhDo2EdbIbFTf3Tt-4VQin98GhSeUwxl0FNBp4zlFKNbBNWsbOk5og\",\n                    \"photo_reference\": \"CmRdAAAAvVAL8Mysa3hqmnJYqX7g6_ffHFgplhZYhYggR0_BZxt2nMROosaplBxnRsJnX_KvnCqgThI1qMD4dvy9oBnuC6nycJu90uvMfpdB5TsbWfegNVWwIWeEDTc7KM3vTK_tEhDo2EdbIbFTf3Tt-4VQin98GhSeUwxl0FNBp4zlFKNbBNWsbOk5og\"\n                }\n            ],\n            \"place_id\": \"ChIJ____v9cdDTkRBN-M7xfVPo0\",\n            \"distance_from_you\": \"1 Kms\",\n            \"opening_hours\": {\n                \"open_now\": true\n            }\n        },\n        {\n            \"geometry\": {\n                \"location\": {\n                    \"lat\": 28.5684387,\n                    \"lng\": 77.21921909999999\n                }\n            },\n            \"icon\": \"https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png\",\n            \"id\": \"ae2d55a26752672fc3a9c4ae97f6d440a4114e99\",\n            \"name\": \"McDonald's\",\n            \"rating\": \"3.4\",\n            \"reference\": \"CmRdAAAAeqd-83PpC1DVHwytD9n0iedGXLz0IJx-9Tqu9rMtM5656SxL_a7BQoDhxLbEk3sJBJk69KSyyUCD8Z6Hxl9Sr__-p2sdkNwiCkmSuvNKVWoRj98psqhhEv6X1qa7b9OiEhB6Ot4iWLe8SHP3UAAiyN1yGhRH-hVyao3y3tcvTRa09qFTcoflfg\",\n            \"scope\": \"GOOGLE\",\n            \"types\": [\n                \"restaurant\",\n                \"food\",\n                \"point_of_interest\",\n                \"establishment\"\n            ],\n            \"vicinity\": \"E-31& 32, South Extension 2, New Delhi\",\n            \"photos\": [\n                {\n                    \"height\": 3264,\n                    \"width\": 2448,\n                    \"url\": \"http://localhost:8080/SociallBox/api/public/places/photos/CmRdAAAABXX27wV7ZuRS-euaENl0U1Y7-QbSY9R5yAfySCYXSBx78hBzgivxnb1M_rDZ4RHvZ56JvQ1m0GnbI2A493eIOEozOOae93aHzmFWbaAWuIyoVq0EIfZ8wHlkYmek5YNDEhBTFR4PYSwV0ks1fTFZDvcHGhQEq9Np6tRlTmdsxbLKhcsjm_Qzkg\",\n                    \"photo_reference\": \"CmRdAAAABXX27wV7ZuRS-euaENl0U1Y7-QbSY9R5yAfySCYXSBx78hBzgivxnb1M_rDZ4RHvZ56JvQ1m0GnbI2A493eIOEozOOae93aHzmFWbaAWuIyoVq0EIfZ8wHlkYmek5YNDEhBTFR4PYSwV0ks1fTFZDvcHGhQEq9Np6tRlTmdsxbLKhcsjm_Qzkg\"\n                }\n            ],\n            \"place_id\": \"ChIJaehoqF3iDDkRxpdWYyvP1yQ\",\n            \"distance_from_you\": \"3 Kms\",\n            \"opening_hours\": {\n                \"open_now\": true\n            }\n        }\n    ],\n    \"page\": null,\n    \"nextPage\": \"CpQCBgEAAOZ4CY-7BTh8cg2sSfCSarU7DO-BPO9HQ3A2_1vUhIyX2qXeKPEMp449qIKqiWdpzZyb4AXa0WgET8bab-u7gdr_Smbd5g9v0A3o2mreGE5c-cEsHcHy91NXpRosmLzZTTzU9odRuPjP_aFAvYa_FRvxKTkFFWS0R9OmoEIh8IbpGyKKH9QDNnHbLQPnkmNV013AeV5WuPKE-avGU6QCH5VZ8ucZoNgiVn5KysNTVlDPYO7lirXQ298MDVFVVr1892dA1rhxcBcsEKAWD68-2FyIjdgfvNwJ3gqDkq5JGSS2jwW0M1C3LMwWQymq9qNOOyDsfzuWLe9R1HufFLyfNUAV8JiNlB4ETRw2BTFXu_C_EhDTr_zwJKwcLcKQZpHe3DwIGhRxHP0dbbDz69eBslTihQ8BFKoSVA\",\n    \"total_records\": null,\n    \"source\": \"GOOGLE\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../src/main/java/com/bitlogic/sociallbox/service/controller/PlacesController.java",
    "groupTitle": "Places"
  },
  {
    "type": "get",
    "url": "/api/public/places/place/:place_id/detail?lat=:userLatitude&lon=:userLongitude&source=:source",
    "title": "Get Place Details",
    "name": "Get_Place_Details",
    "group": "Places",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "place_id",
            "description": "<p>Mandatory Place Id receieved from Nearby Places API</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userLatitude",
            "description": "<p>Mandatory Lattitude of User</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userLongitude",
            "description": "<p>Mandatory Longitude of User</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source",
            "description": "<p>Mandatory Source is recieved from Nearby Places API eg. GOOGLE</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success - OK 200": [
          {
            "group": "Success - OK 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Response.</p>"
          },
          {
            "group": "Success - OK 200",
            "type": "String",
            "optional": false,
            "field": "response.status",
            "description": "<p>OK.</p>"
          },
          {
            "group": "Success - OK 200",
            "type": "Object",
            "optional": false,
            "field": "response.data",
            "description": "<p>Place Details data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"status\": \"Success\",\n    \"data\": {\n        \"status\": \"OK\",\n        \"result\": {\n            \"icon\": \"https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png\",\n            \"id\": \"49223a21f97edf98b5b5f57ae1af6816b159988c\",\n            \"name\": \"Ploof\",\n            \"rating\": 4,\n            \"geometry\": {\n                \"location\": {\n                    \"lat\": 28.5834743,\n                    \"lng\": 77.22305209999999\n                }\n            },\n            \"photos\": [\n                {\n                    \"height\": 814,\n                    \"width\": 545,\n                    \"url\": \"http://localhost:8080/SociallBox/api/public/places/photos/CmRdAAAAgnIvblcI4B1IyLomw-yjgXrzWDqFyfk1ZBw7sqfZzr_FMIp2cp717ugRkE4w8n1E2ZtW3VIWdgdYfGj3qrQ97zUpC0l0LF-69inhob3x5g6S7HYHv7xYTE1NgW3kHJvMEhBPzO05NJBw0slYD9kZFHkEGhRwzYYk649U5QkmNnUFrqtJ1ZY0YQ\",\n                    \"photo_reference\": \"CmRdAAAAgnIvblcI4B1IyLomw-yjgXrzWDqFyfk1ZBw7sqfZzr_FMIp2cp717ugRkE4w8n1E2ZtW3VIWdgdYfGj3qrQ97zUpC0l0LF-69inhob3x5g6S7HYHv7xYTE1NgW3kHJvMEhBPzO05NJBw0slYD9kZFHkEGhRwzYYk649U5QkmNnUFrqtJ1ZY0YQ\"\n                },\n                {\n                    \"height\": 3024,\n                    \"width\": 4032,\n                    \"url\": \"http://localhost:8080/SociallBox/api/public/places/photos/CoQBcwAAAA3ir1GBZItVHp8LiUcQqPcQi00r2e47EPAo4UqBMw2wrHOm4_Bi7c1ynKdbiKnatL0W0qhNs4hI--dTFHkhjXNTSOBonVsizdjxDpC0KgCTOqqXo4P7_VIwMU06rXOkBgOh6mXaHEJrnPPWn0k7HYrYxJGAq-vG4Q3LkeCwJjtXEhClFFzpfsjrVUFxUf1T4d0aGhRMkvzqyBS5TiX7-KFj9Ss2pc74LQ\",\n                    \"photo_reference\": \"CoQBcwAAAA3ir1GBZItVHp8LiUcQqPcQi00r2e47EPAo4UqBMw2wrHOm4_Bi7c1ynKdbiKnatL0W0qhNs4hI--dTFHkhjXNTSOBonVsizdjxDpC0KgCTOqqXo4P7_VIwMU06rXOkBgOh6mXaHEJrnPPWn0k7HYrYxJGAq-vG4Q3LkeCwJjtXEhClFFzpfsjrVUFxUf1T4d0aGhRMkvzqyBS5TiX7-KFj9Ss2pc74LQ\"\n                },\n                {\n                    \"height\": 1000,\n                    \"width\": 1600,\n                    \"url\": \"http://localhost:8080/SociallBox/api/public/places/photos/CmRdAAAAaNyCfzhBuxClTrNGMyVUSz_fZTXV5caONHbqQG1-0G4jhbYGzXKqDwDoK6pNDF16qJOD8iW4MlbhBBELYboKJKvQt9W2fz8JWZIrm2JP5eV73CqBgJp1LvhRm7lKrOyNEhBeGDuMEyiwMZk1eXO2hhztGhTA2JpMpuKcvA2aY1bKKsPuVz6njQ\",\n                    \"photo_reference\": \"CmRdAAAAaNyCfzhBuxClTrNGMyVUSz_fZTXV5caONHbqQG1-0G4jhbYGzXKqDwDoK6pNDF16qJOD8iW4MlbhBBELYboKJKvQt9W2fz8JWZIrm2JP5eV73CqBgJp1LvhRm7lKrOyNEhBeGDuMEyiwMZk1eXO2hhztGhTA2JpMpuKcvA2aY1bKKsPuVz6njQ\"\n                },\n                {\n                    \"height\": 360,\n                    \"width\": 537,\n                    \"url\": \"http://localhost:8080/SociallBox/api/public/places/photos/CmRdAAAA_7xYJ8rzJc4HdeJwATlVG0yaQJofgFxYaq-atpf8APIG9R8l5bQ_cFuHW-9Df2M755eTyfKTgefobd9fA4xcJlnf8cvmabKo8AF1xPrtbWDIHiJxTA-2G1r1wq4LNFYFEhCHOAICXBavI9XVYiT5_cb3GhTt4WAasfybcxSQaqH6mmulsHEoNQ\",\n                    \"photo_reference\": \"CmRdAAAA_7xYJ8rzJc4HdeJwATlVG0yaQJofgFxYaq-atpf8APIG9R8l5bQ_cFuHW-9Df2M755eTyfKTgefobd9fA4xcJlnf8cvmabKo8AF1xPrtbWDIHiJxTA-2G1r1wq4LNFYFEhCHOAICXBavI9XVYiT5_cb3GhTt4WAasfybcxSQaqH6mmulsHEoNQ\"\n                },\n                {\n                    \"height\": 419,\n                    \"width\": 626,\n                    \"url\": \"http://localhost:8080/SociallBox/api/public/places/photos/CmRdAAAATO9jRjT7qM_ejRObjoOVGtV50F3N4j3rJejYEUzBKrbFk6Te82-UPCfTiMqe6vAfizz44b-LFH1dZpRtOYCvk3MC1kff0GQT4GQYE9qiBifnc-rmJxx3o1yEe3x0w5I6EhAF-FU6MUgpPPSiQBy2vekvGhTi8lsRJgwsTUWkswfMMLrF_d_iJw\",\n                    \"photo_reference\": \"CmRdAAAATO9jRjT7qM_ejRObjoOVGtV50F3N4j3rJejYEUzBKrbFk6Te82-UPCfTiMqe6vAfizz44b-LFH1dZpRtOYCvk3MC1kff0GQT4GQYE9qiBifnc-rmJxx3o1yEe3x0w5I6EhAF-FU6MUgpPPSiQBy2vekvGhTi8lsRJgwsTUWkswfMMLrF_d_iJw\"\n                },\n                {\n                    \"height\": 897,\n                    \"width\": 600,\n                    \"url\": \"http://localhost:8080/SociallBox/api/public/places/photos/CmRdAAAAO_sSEz-gTnNtgWMAlfTc1X_jBR9d4M5kJAeCV05teboHo7D_MBg5fEk3VpqrzKtveq_AE5ZWpU1OQUhmrzAJoYZ3yydDZ8Hb7tprCAqrGDNIPx1etKUpLv9f56E4hT2bEhBOKGvnm1TtP28lqhO6Fsu3GhTaTphizmD1kDm3ErUmhAP0DFWymQ\",\n                    \"photo_reference\": \"CmRdAAAAO_sSEz-gTnNtgWMAlfTc1X_jBR9d4M5kJAeCV05teboHo7D_MBg5fEk3VpqrzKtveq_AE5ZWpU1OQUhmrzAJoYZ3yydDZ8Hb7tprCAqrGDNIPx1etKUpLv9f56E4hT2bEhBOKGvnm1TtP28lqhO6Fsu3GhTaTphizmD1kDm3ErUmhAP0DFWymQ\"\n                }\n            ],\n            \"reviews\": [\n                {\n                    \"aspects\": [\n                        {\n                            \"type\": \"overall\",\n                            \"rating\": \"0\"\n                        }\n                    ],\n                    \"rating\": 1,\n                    \"text\": \"I visited this place with my friends from Europe after reading reviews. It took us 1 hr. After reaching I came to know from their neighbours that  this place is closed from last 2 months. \",\n                    \"author_name\": \"Dr. Vikram Chauhan\",\n                    \"author_url\": \"https://plus.google.com/109552730205780556949\",\n                    \"time\": 1459078323\n                },\n                {\n                    \"aspects\": [\n                        {\n                            \"type\": \"overall\",\n                            \"rating\": \"3\"\n                        }\n                    ],\n                    \"rating\": 5,\n                    \"text\": \"Ploof is known for its authentic European food with a relaxed ambiance. The place serves European, continental and seafood. The restaurant also has a unique variety of Sandwiches and Burgers with stuffing like salami, smoked turkey, ham, goat cheese, cheddar along with the regular ones. Good enough for friends and casual outings. The service is a little slow but the food is totally worth the wait. One of the must try places in Delhi NCR!\",\n                    \"author_name\": \"Sachin Bansal\",\n                    \"author_url\": \"https://plus.google.com/102201120739761227941\",\n                    \"time\": 1436613726\n                },\n                {\n                    \"aspects\": [\n                        {\n                            \"type\": \"overall\",\n                            \"rating\": \"3\"\n                        }\n                    ],\n                    \"rating\": 5,\n                    \"text\": \"Love the Salmon...  Enjoyed every bite. \",\n                    \"author_name\": \"N RI\",\n                    \"author_url\": \"https://plus.google.com/109356618527521626531\",\n                    \"time\": 1449758981\n                },\n                {\n                    \"aspects\": [\n                        {\n                            \"type\": \"overall\",\n                            \"rating\": \"3\"\n                        }\n                    ],\n                    \"rating\": 5,\n                    \"text\": \"Great Food and Ambiance\",\n                    \"author_name\": \"Aman Madan\",\n                    \"author_url\": \"https://plus.google.com/100212719815065204219\",\n                    \"time\": 1437639593\n                },\n                {\n                    \"aspects\": [\n                        {\n                            \"type\": \"overall\",\n                            \"rating\": \"2\"\n                        }\n                    ],\n                    \"rating\": 4,\n                    \"text\": \"Nice place and the overall ambiance is great. A must for those who want to spend quality time with friends and family. \",\n                    \"author_name\": \"Faisal Khan\",\n                    \"author_url\": \"https://plus.google.com/106187474153886831014\",\n                    \"time\": 1424173356\n                }\n            ],\n            \"types\": [\n                \"restaurant\",\n                \"food\",\n                \"point_of_interest\",\n                \"establishment\"\n            ],\n            \"url\": \"https://maps.google.com/?cid=15238670586700303595\",\n            \"vicinity\": \"13, Lodhi Colony Market, Next to Khubsoorat Salon & Lodhi Sports, New Delhi\",\n            \"website\": \"http://www.ploof.co/\",\n            \"formatted_address\": \"13, Lodhi Colony Market, Next to Khubsoorat Salon & Lodhi Sports, New Delhi, Delhi 110003, India\",\n            \"formatted_phone_number\": \"011 2463 4666\",\n            \"international_phone_number\": \"+91 11 2463 4666\",\n            \"place_id\": \"ChIJq11ZZh3jDDkR6wx3ISmietM\",\n            \"user_likes_place\": true,\n            \"distance_from_you\": \"4 Kms\",\n            \"address_components\": [\n                {\n                    \"short_name\": \"New Delhi\",\n                    \"long_name\": \"New Delhi\",\n                    \"types\": [\n                        \"locality\",\n                        \"political\"\n                    ]\n                },\n                {\n                    \"short_name\": \"DL\",\n                    \"long_name\": \"Delhi\",\n                    \"types\": [\n                        \"administrative_area_level_1\",\n                        \"political\"\n                    ]\n                },\n                {\n                    \"short_name\": \"IN\",\n                    \"long_name\": \"India\",\n                    \"types\": [\n                        \"country\",\n                        \"political\"\n                    ]\n                },\n                {\n                    \"short_name\": \"110003\",\n                    \"long_name\": \"110003\",\n                    \"types\": [\n                        \"postal_code\"\n                    ]\n                }\n            ],\n            \"opening_hours\": {\n                \"open_now\": true,\n                \"weekday_text\": [\n                    \"Monday: 11:00 AM – 12:45 AM\",\n                    \"Tuesday: 11:00 AM – 12:45 AM\",\n                    \"Wednesday: 11:00 AM – 12:45 AM\",\n                    \"Thursday: 11:00 AM – 12:45 AM\",\n                    \"Friday: 11:00 AM – 12:45 AM\",\n                    \"Saturday: 11:00 AM – 12:45 AM\",\n                    \"Sunday: 11:00 AM – 12:45 AM\"\n                ]\n            }\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../src/main/java/com/bitlogic/sociallbox/service/controller/PlacesController.java",
    "groupTitle": "Places"
  },
  {
    "type": "post",
    "url": "/api/secured/places/place/:place_id/like",
    "title": "Save Like Action for a Place",
    "name": "Save_Like_Action_for_a_Place",
    "group": "Places",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "place_id",
            "description": "<p>Place Id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": " {\n\t\t\t\"status\": \"Success\",\n\t\t\t\"data\": \"Use like saved successfully\"\n\t\t}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "Number",
            "optional": false,
            "field": "X-Auth-Date",
            "description": "<p>Current Epoch Date</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authentication Token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success - OK 200": [
          {
            "group": "Success - OK 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Response.</p>"
          },
          {
            "group": "Success - OK 200",
            "type": "String",
            "optional": false,
            "field": "response.status",
            "description": "<p>Eg.Success.</p>"
          },
          {
            "group": "Success - OK 200",
            "type": "Object",
            "optional": false,
            "field": "response.data",
            "description": "<p>Message</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../src/main/java/com/bitlogic/sociallbox/service/controller/PlacesSecuredController.java",
    "groupTitle": "Places"
  },
  {
    "type": "get",
    "url": "/api/secured/users/user/:id",
    "title": "Get User Info",
    "name": "Get_User_Info",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Mandatory User id</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "Number",
            "optional": false,
            "field": "X-Auth-Date",
            "description": "<p>Current Epoch Date</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authentication Token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example Headers",
          "content": " accept: application/json\n\t\tContent-Type: application/json\n\t\tX-Auth-Date: 1455988523724\n\t\tAuthorization: Basic U0R+U01BUlRfREVWSUNFXzI6NCtPU3JRN0tKMzZ2TW9iRmoxbmJEZG5ydVVJVTlwTWFVWmN1V0xxaUFaRT0=",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success - OK 200": [
          {
            "group": "Success - OK 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Response.</p>"
          },
          {
            "group": "Success - OK 200",
            "type": "String",
            "optional": false,
            "field": "response.status",
            "description": "<p>Eg.Success.</p>"
          },
          {
            "group": "Success - OK 200",
            "type": "Object",
            "optional": false,
            "field": "response.data",
            "description": "<p>User Profile Information.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t\t    \"status\": \"Success\",\n\t\t    \"data\": {\n\t\t        \"id\": 1,\n\t\t        \"name\": \"Ankit Joinwal\",\n\t\t        \"emailId\": \"ajoinwal@gmail.com\",\n\t\t        \"smartDevices\": [\n\t\t            {\n\t\t                \"uniqueId\": \"SMART_DEVICE_2\",\n\t\t                \"buildVersion\": \"1.00\",\n\t\t                \"osVersion\": \"4.0\",\n\t\t                \"deviceType\": \"ANDROID\",\n\t\t                \"privateKey\": \"2fc9d17b-a4b1-4b75-b3e3-9b75353a3286\"\n\t\t            }\n\t\t        ],\n\t\t        \"social_details\": [\n\t\t            {\n\t\t                \"system\": \"FACEBOOK\",\n\t\t                \"detail\": \"10204248372148573\",\n\t\t                \"detailType\": \"USER_EXTERNAL_ID\"\n\t\t            },\n\t\t\t\t    {\n\t\t\t\t      \"system\": \"FACEBOOK\",\n\t\t\t\t      \"detail\": \"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpf1/v/t1.0-1/p50x50/12316467_10206731945876364_3008257792416820623_n.jpg?oh=99ec98c9f38ab3ee4b05cad802c2e39e&oe=5725C669&__gda__=1466317967_b0131ab2472d9474fa9440cb7fe265bb\",\n\t\t\t\t      \"detailType\": \"USER_PROFILE_PIC\"\n\t\t\t\t    }\n\t\t        ]\n\t\t    }\n\t\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "NotFound 404": [
          {
            "group": "NotFound 404",
            "type": "String",
            "optional": false,
            "field": "messageType",
            "description": "<p>Eg.ERROR</p>"
          },
          {
            "group": "NotFound 404",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Eg. ERR_001</p>"
          },
          {
            "group": "NotFound 404",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Eg. User Not Found</p>"
          },
          {
            "group": "NotFound 404",
            "type": "String",
            "optional": false,
            "field": "entityId",
            "description": "<p>Entity Id which was searched</p>"
          },
          {
            "group": "NotFound 404",
            "type": "Object",
            "optional": false,
            "field": "exception",
            "description": "<p>StackTrace</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../src/main/java/com/bitlogic/sociallbox/service/controller/secured/UserSecuredController.java",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/api/secured/users/user/:id/settings",
    "title": "Get User Settings",
    "name": "Get_User_Settings",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Mandatory User id</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "Number",
            "optional": false,
            "field": "X-Auth-Date",
            "description": "<p>Current Epoch Date</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authentication Token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success - OK 200": [
          {
            "group": "Success - OK 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Response.</p>"
          },
          {
            "group": "Success - OK 200",
            "type": "String",
            "optional": false,
            "field": "response.status",
            "description": "<p>Eg.Success.</p>"
          },
          {
            "group": "Success - OK 200",
            "type": "Object",
            "optional": false,
            "field": "response.data",
            "description": "<p>User Profile Information.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t\t    \"status\": \"Success\",\n\t\t    \"data\": [\n\t\t        {\n\t\t            \"id\": 1,\n\t\t            \"settingType\": \"PUSH_NOTIFICATION\",\n\t\t            \"name\": \"newFriendNot\",\n\t\t            \"displayName\": \"Notify me when my friend joins SociallBox\",\n\t\t            \"value\": \"ON\"\n\t\t        },\n\t\t        {\n\t\t            \"id\": 2,\n\t\t            \"settingType\": \"PUSH_NOTIFICATION\",\n\t\t            \"name\": \"meetupInvite\",\n\t\t            \"displayName\": \"Notify me when I'm invited for meetup\",\n\t\t            \"value\": \"ON\"\n\t\t        }\n\t\t    ],\n\t\t    \"page\": 1,\n\t\t    \"nextPage\": null\n\t\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "NotFound 404": [
          {
            "group": "NotFound 404",
            "type": "String",
            "optional": false,
            "field": "messageType",
            "description": "<p>Eg.ERROR</p>"
          },
          {
            "group": "NotFound 404",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Eg. ERR_001</p>"
          },
          {
            "group": "NotFound 404",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Eg. User Not Found</p>"
          },
          {
            "group": "NotFound 404",
            "type": "String",
            "optional": false,
            "field": "entityId",
            "description": "<p>Entity Id which was searched</p>"
          },
          {
            "group": "NotFound 404",
            "type": "Object",
            "optional": false,
            "field": "exception",
            "description": "<p>StackTrace</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../src/main/java/com/bitlogic/sociallbox/service/controller/secured/UserSecuredController.java",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/api/secured/users/:id/friends",
    "title": "Get User friends",
    "name": "Get_User_friends",
    "group": "Users",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "Number",
            "optional": false,
            "field": "X-Auth-Date",
            "description": "<p>Current Epoch Date</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authentication Token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Response.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.status",
            "description": "<p>Eg.Success.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response.data",
            "description": "<p>User's Friends List Or Empty Array if no friends Found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t\t    \"status\": \"Success\",\n\t\t    \"data\": [\n\t\t        {\n\t\t            \"profilePic\": \"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpf1/v/t1.0-1/p50x50/12316467_10206731945876364_3008257792416820623_n.jpg?oh=99ec98c9f38ab3ee4b05cad802c2e39e&oe=5725C669&__gda__=1466317967_b0131ab2472d9474fa9440cb7fe265bb\",\n\t\t            \"name\": \"Vardhan Singh\",\n\t\t            \"emailId\": \"vsingh@gmail.com\"\n\t\t        }\n\t\t    ],\n\t\t    \"page\": 1,\n\t\t    \"nextPage\": null\n\t\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Unauthorizes 401": [
          {
            "group": "Unauthorizes 401",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Eg.error.login.invalid.credentials</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../src/main/java/com/bitlogic/sociallbox/service/controller/secured/UserSecuredController.java",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/api/secured/users/user/:id/settings",
    "title": "Save User Settings",
    "name": "Save_User_Settings",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Mandatory User id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": " {\n\t\t     [\n\t\t        {\n\t\t            \"id\": 1,\n\t\t            \"settingType\": \"PUSH_NOTIFICATION\",\n\t\t            \"name\": \"newFriendNot\",\n\t\t            \"displayName\": \"Notify me when my friend joins SociallBox\",\n\t\t            \"value\": \"OFF\"\n\t\t        },\n\t\t        {\n\t\t            \"id\": 2,\n\t\t            \"settingType\": \"PUSH_NOTIFICATION\",\n\t\t            \"name\": \"meetupInvite\",\n\t\t            \"displayName\": \"Notify me when I'm invited for meetup\",\n\t\t            \"value\": \"ON\"\n\t\t        }\n\t\t    ]",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "Number",
            "optional": false,
            "field": "X-Auth-Date",
            "description": "<p>Current Epoch Date</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authentication Token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success - OK 200": [
          {
            "group": "Success - OK 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Response.</p>"
          },
          {
            "group": "Success - OK 200",
            "type": "String",
            "optional": false,
            "field": "response.status",
            "description": "<p>Eg.Success.</p>"
          },
          {
            "group": "Success - OK 200",
            "type": "Object",
            "optional": false,
            "field": "response.data",
            "description": "<p>User Profile Information.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "NotFound 404": [
          {
            "group": "NotFound 404",
            "type": "String",
            "optional": false,
            "field": "messageType",
            "description": "<p>Eg.ERROR</p>"
          },
          {
            "group": "NotFound 404",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Eg. ERR_001</p>"
          },
          {
            "group": "NotFound 404",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Eg. User Not Found</p>"
          },
          {
            "group": "NotFound 404",
            "type": "String",
            "optional": false,
            "field": "entityId",
            "description": "<p>Entity Id which was searched</p>"
          },
          {
            "group": "NotFound 404",
            "type": "Object",
            "optional": false,
            "field": "exception",
            "description": "<p>StackTrace</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../src/main/java/com/bitlogic/sociallbox/service/controller/secured/UserSecuredController.java",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/api/secured/users/:id/friends",
    "title": "Setup User friends",
    "name": "Setup_User_friends",
    "group": "Users",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authentication Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "    JSON-Array of Friends Facebook IDs\n    [\n\t\t\t\"10204248372148573\",\n\t\t\t\"4567\"\n\t\t\t]",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Response.</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "response.status",
            "description": "<p>Eg.Success.</p>"
          },
          {
            "group": "Success 201",
            "type": "Object",
            "optional": false,
            "field": "response.data",
            "description": "<p>User's Friends List Or Empty Array if no friends Found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t\t    \"status\": \"Success\",\n\t\t    \"data\": [\n\t\t        {\n\t\t            \"profilePic\": \"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpf1/v/t1.0-1/p50x50/12316467_10206731945876364_3008257792416820623_n.jpg?oh=99ec98c9f38ab3ee4b05cad802c2e39e&oe=5725C669&__gda__=1466317967_b0131ab2472d9474fa9440cb7fe265bb\",\n\t\t            \"name\": \"Vardhan Singh\",\n\t\t            \"emailId\": \"vsingh@gmail.com\"\n\t\t        }\n\t\t    ],\n\t\t    \"page\": 1,\n\t\t    \"nextPage\": null\n\t\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Unauthorizes 401": [
          {
            "group": "Unauthorizes 401",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Eg.error.login.invalid.credentials</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../src/main/java/com/bitlogic/sociallbox/service/controller/secured/UserSecuredController.java",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/api/secured/users",
    "title": "Signup or Login User",
    "name": "Signup___Login_API",
    "group": "Users",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "accept",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>M</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "    {\n\t\t\t  \"name\": \"Vardhan Singh\",\n\t\t\t  \"emailId\": \"vsingh@gmail.com\",\n\t\t\t  \"password\":\"p@ssword\",\n\t\t\t  \"smartDevices\": [\n\t\t\t    {\n\t\t\t      \"uniqueId\": \"SMART_DEVICE_3\",\n\t\t\t      \"buildVersion\": \"1.00\",\n\t\t\t      \"osVersion\": \"4.0\",\n\t\t\t      \"deviceType\": \"ANDROID\",\n\t\t\t      \"gcmId\":\"GCM_ID2\"\n\t\t\t    }\n\t\t\t  ],\n\t\t\t  \"social_details\": [\n\t\t\t    {\n\t\t\t      \"system\": \"FACEBOOK\",\n\t\t\t      \"detail\": \"10204248372148573\",\n\t\t\t      \"detailType\": \"USER_EXTERNAL_ID\"\n\t\t\t    },\n\t\t\t    {\n\t\t\t      \"system\": \"FACEBOOK\",\n\t\t\t      \"detail\": \"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpf1/v/t1.0-1/p50x50/12316467_10206731945876364_3008257792416820623_n.jpg?oh=99ec98c9f38ab3ee4b05cad802c2e39e&oe=5725C669&__gda__=1466317967_b0131ab2472d9474fa9440cb7fe265bb\",\n\t\t\t      \"detailType\": \"USER_PROFILE_PIC\"\n\t\t\t    }\n\t\t\t  ]\n\t\t\t}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success - Created 201": [
          {
            "group": "Success - Created 201",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Response.</p>"
          },
          {
            "group": "Success - Created 201",
            "type": "String",
            "optional": false,
            "field": "response.status",
            "description": "<p>Eg.Success.</p>"
          },
          {
            "group": "Success - Created 201",
            "type": "Object",
            "optional": false,
            "field": "response.data",
            "description": "<p>User Profile Information.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t\t    \"status\": \"Success\",\n\t\t    \"data\": {\n\t\t        \"id\": 2,\n\t\t        \"name\": \"Vardhan Singh\",\n\t\t        \"emailId\": \"vsingh@gmail.com\",\n\t\t        \"smartDevices\": [\n\t\t            {\n\t\t                \"uniqueId\": \"SMART_DEVICE_3\",\n\t\t                \"buildVersion\": \"1.00\",\n\t\t                \"osVersion\": \"4.0\",\n\t\t                \"deviceType\": \"ANDROID\",\n\t\t                \"privateKey\": \"bbcd781d-5a7e-4023-97aa-0e9445e09789\"\n\t\t            }\n\t\t        ],\n\t\t        \"social_details\": [\n\t\t            {\n\t\t                \"system\": \"FACEBOOK\",\n\t\t                \"detail\": \"10204248372148573\",\n\t\t                \"detailType\": \"USER_EXTERNAL_ID\"\n\t\t            },\n\t\t\t\t    {\n\t\t\t\t      \"system\": \"FACEBOOK\",\n\t\t\t\t      \"detail\": \"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpf1/v/t1.0-1/p50x50/12316467_10206731945876364_3008257792416820623_n.jpg?oh=99ec98c9f38ab3ee4b05cad802c2e39e&oe=5725C669&__gda__=1466317967_b0131ab2472d9474fa9440cb7fe265bb\",\n\t\t\t\t      \"detailType\": \"USER_PROFILE_PIC\"\n\t\t\t\t    }\n\t\t        ]\n\t\t    }\n\t\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "PreconditionFailed 412": [
          {
            "group": "PreconditionFailed 412",
            "type": "String",
            "optional": false,
            "field": "messageType",
            "description": "<p>Eg.ERROR</p>"
          },
          {
            "group": "PreconditionFailed 412",
            "type": "String",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Eg. ERR_001</p>"
          },
          {
            "group": "PreconditionFailed 412",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Eg. Email Id is a required field</p>"
          },
          {
            "group": "PreconditionFailed 412",
            "type": "Object",
            "optional": false,
            "field": "exception",
            "description": "<p>StackTrace</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../src/main/java/com/bitlogic/sociallbox/service/controller/secured/UserSecuredController.java",
    "groupTitle": "Users"
  }
] });
