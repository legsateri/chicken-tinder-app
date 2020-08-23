/* COMPONENT/ROUTE STRUCTURE 

APP COMPONENT
|
|---NAVIGATION COMPONENT
|       |---HOMEPAGE ROUTE (link)
|       |---LOGIN PAGE ROUTE (link)
|               |---SIGNUP FORM COMPONENT 
|               |---LOGIN FORM COMPONENT
|       |---HAMBURGER COMPONENT
|               |---HOMEPAGE ROUTE (link)
|               |---START GROUP PAGE ROUTE (link)
|               |---CHEF MODE PAGE ROUTE (link)
|               |---ACCOUNT PAGE ROUTE (link)
|               |---LOGOUT (link)
|
|---HOMEPAGE ROUTE
|       |---ACCOUNT PAGE ROUTE (link) 
|               |---GROUPS PAGE ROUTE (link)
|                       |---RESTAURANT SEARCH PAGE ROUTE (link)
|                               |---RESTAURANT ZIP SEARCH BAR COMPONENT
|                               |---RESTAURANT PAGE ROUTE (link)
|                                       |---EW BUTTON COMPONENT
|                                               |---OUT OF YUM PAGE ROUTE
|                                               |---RESTAURANT PAGE ROUTE (link)
|                                       |---YUM BUTTON COMPONENT
|                                               |---OUT OF YUM PAGE ROUTE
|                                               |---RESTAURANT PAGE ROUTE (link)
|               |---START GROUP PAGE ROUTE (link)
|               |---CHEF MODE PAGE ROUTE (link)
|                       |---RECIPE ZIP SEARCH COMPONENT
|       |---START GROUP PAGE ROUTE (link) 
|               |---NEW GROUP FORM COMPONENT
|
|---NOT FOUND PAGE ROUTE
|

*/



/* API CALLS 

TODO: Rethik the way API calls are spread out throughout the app

*/



/* SERVICES LIST

AUTH API SERVICE
|
|---Post Login
|---Post User
|---Update User
|

GROUP API SERVICE
|
|---Get Groups
|---Post Group
|---Delete Group
|---Update Group
|---Get Group By ID
|---Get Group By User
|

TOKEN SERVICE
|
|---Save Auth Token
|---Get Auth Token
|---Clear Auth Token
|---Has Auth Token
|

*/



/* CONTEXT LIST 

RESTAURANT CONTEXT
|
|---Restaurants
|---Set Restaurants
|---Clear Restaurants
|---Next Page
|---Set Next Page
|---Clear Next Page
|---Groups
|---Set Group
|---Clear Group
|---Add Group
|---Delete Group
|---Update Group
|---Users
|---Set Users
|---Clear Users
|---Update User
|---Current User
|---Set Current User
|---Clear Current User
|---Error
|---Set Error
|---Clear Error
|

WEATHER CONTEXT
|
|---Weather
|---Error
|

*/



/* TEST LIST 

COMPONENT TESTS
|
|---App Test
|---Greeting Test
|---Hamburger Test
|---Login Form Test
|---Navigation Test
|---New Group Form Test
|---Recipe Zip Search Test
|---Restaurat Zip Search Test
|---Signup Form Test
|

ROUTE TESTS
|
|---Account Page Test
|---Chef Mode Page Test
|---Homepage Test
|---Login Page Test
|---Not Found Page Test
|---Start Group Page Test
|

*/