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

/AUTH/LOGIN ENDPOINT
|
|---Post Login
|       |---LOGIN FORM COMPONENT
|

/USERS ENDPOINT
|
|---Get Users
|       |---APP COMPONENT
|               |---Update In Context
|---Post User
|       |---SIGNUP FORM COMPONENT
|---Update User
|       |---TODO: Need to update user every time YUM button is clicked.
|

/GROUPS ENDPOINT
|
|---Post Group
|       |---NEW GROUP FORM COMPONENT
|---Delete Group
|       |---ACCOUNT PAGE ROUTE
|---Update Group
|       |---TODO: Need to update every time group members match on a restaurant.
|---Get Group By ID
|       |---GROUP PAGE ROUTE
|---Get Group By User
|       |---APP COMPONENT
|

WEATHER ENDPOINTS
|
|---Get Weather
|       |---CHEF MODE PAGE ROUTE
|

EDAMAM ENDPOINTS
|
|---Get Recipes
|       |---CHEF MODE PAGE ROUTE
|

GOOGLE PLACES ENDPOINTS
|
|---Get Restaurants
|       |---RESTAURANT SEARCH PAGE ROUTE
|               |---Update In Context
|---Next Page of Results
|       |---RESTAURANT PAGE ROUTE
|               |---Update In Context
|---Get Restaurant Photo
|       |---RESTAURANT PAGE ROUTE
|

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