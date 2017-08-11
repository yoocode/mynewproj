# Colonial Care a Van Mobile

Description: a project that uses Ionic / Angular for a mobile application frontend and Spring framework with Tomcat as server and H2 as embeded database for the backend. Users will be able to locate the Care a Van on the map.

Currently, its status is to have laid out the building blocks of the frontend and backend, and to have verified the frontend communicates to the backend to request and receive the data and load it to the UI using http get, post, and delete.

I also tested getting formated, filtered json data from an outside source, Delaware.gov. The data is the location of schools in DE. For filtering, I used SQL scripts to select particular information. 

Because the backend uses the embeded H2 database, you must post new data each time. 

Frontend local host is 8100.
-http://localhost:8100/: display mobile app

Backend local host is 4040.

-http://localhost:4040/map/getAllMap : display all list of school information

-http://localhost:4040/map/post : use to post the school data

-http://localhost:4040/menu/getAllMenu : display all list of menu information

-http://localhost:4040/menu/post : use to post the menu data

-http://localhost:4040/menu/{{id}} : use to delete the menu data
