# p3



I.	Project Description:
MVP Features:
This is a movie database app that allows users to favorite their movies while also exploring a collection of movies from the OMDB API database. The main objective of the app is to allow users to browse through a collection of movies and add their favorites to their profile, allowing users to easily and simply share their favorite movies amongst one another. 

The app’s frontend is built on React and integrates Express as the backend and MongoDB as the database. Additionally, the app also features libraries such as Mongoose. The backend of the app is built to allow users to create accounts and sign in. Moreover, the backend also builds the CRUD functionality of the app which allows users to add, update, or delete their favorite movie list. The user’s login information as well as his/her favorite movies list will also be stored into a database through MongoDB.

Post-MVP Features:
After MVP goals, we aim to build a comment or review function to the app. The core functionality will allow users to comment on another user’s collection list, providing insight or feedback. Additionally, users will also be allowed to leave their own reviews such as a comment or rating on the movie. The comments as well as reviews is expected to be stored into the database as well. 

Additionally, there is opportunity to add an update password feature.

II.	Feature List:
A.	Login
B.	Save favorite movies
C.	List of movies
D.	Detail movie view


III.	API Endpoints Documentation:
The API being used for the app is the Open Movie Database (OMDB API). The OMDB API is a Representational State Transfer web service used to access movie information. The API endpoint plus key will allow the app to search for movie information including: title, year released, parental-rating, runtime, genre, director, writer, actors, plot, awards, critical ratings. An example endpoint to access this information would be:
	“http://www.omdbapi.com/?t=the+departed&plot=full&apikey=<key>”




IV.	Wireframes:
Working prototype can be found via the following link 

Desktop Prototype Link: https://xd.adobe.com/view/54ac27ba-5bad-4594-5827-c3d7b42a0573-229d/

Mobile Prototype Link:
https://xd.adobe.com/view/e17b02a0-12d3-4d8a-4d5a-a00dac2b1aa8-974a/

 		 
![Wireframe](/client/public/Wireframe1.png)		 
 		 
![Wireframe](/client/public/Wireframe2.png)	 
 		 

 		 












client/public/ComponentHierarchy.png
V.	Component Hierarchy 
A.	Link:https://docs.google.com/presentation/d/1hQWRuH2s5V_DqJYgiqYq4R2PO-2TYOs25I3fdK1KMcY/edit

![Component Hierarchy](/client/public/ComponentHierarchy.png)	



VI.	List of Dependencies:
	Our movie app will utilize multiple dependencies such as the React JS library, the Mongoose object data modeling library, the Express Web Framework, and the MongoDB database program. The app will also make use of the Surge and the Heroku deployment services.







