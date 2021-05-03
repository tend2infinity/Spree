# Spree!

### A Real-world online movie streaming and sharing application! 



***
__Special Mention:__ [TMDB API](https://developers.themoviedb.org/3) for providing the amazing database of movies.
## Main Features

### Screenshots
![](https://github.com/tend2infinity/Spree/blob/master/public/screenshots/spree1.JPG)
<br>
![](https://github.com/tend2infinity/Spree/blob/master/public/screenshots/spree2.JPG)
<br>
![](https://github.com/tend2infinity/Spree/blob/master/public/screenshots/spree3.JPG)
<br>
![](https://github.com/tend2infinity/Spree/blob/master/public/screenshots/spree4.JPG)
<br>
![](https://github.com/tend2infinity/Spree/blob/master/public/screenshots/spree5.JPG)
<br>
![](https://github.com/tend2infinity/Spree/blob/master/public/screenshots/spree6.JPG)

### Landing Page
The landing page gives us a brief introduction about this app. Anyone can Signup if its a new user or login if its an old one. The syling of all the pages inside the app is done using "styled-components". AOS library (animate on scroll) is used to animate the content while scrolling!
<br>
### Authentication
Firebase authentication service is used for signin and signup features using email, username and password .
<br>


### Top Navbar
Once you are logged in, the top navbar will contain your username and three different buttons for navigation namely "Wishlist", "Leaderboard" and "Logout".
<br>


### Movie-List
All the logged in users are directed to the movie list page where you can browse different movies from different categories . The movie name, a short description and the release date is also visible in that card. All these results are fetched from "TMDB API". You can obviously add any movie to wishlist using the "Add to wishlist" button and if its already in it, you can remove it from your wishlist. 
<br>


### Movie Tralier
Every movie card has a "Watch Traler" button using that you can view the trailer of that movie which is available on youtube . This feature is implemented using "movie-trailer" package.
<br>



### Wishlist
Every user is allowed to add movies to their wishlist and those movies can be viewed in the "Wishlist" Tab. A toast appears every time you add or remove a movie .
<br>


### Leaderboard
The leaderboard contains the top voted movies by our community which is sorted in descending order of votes.
<br>


### Footer
The footer of every page contains developer contact, so that for any bug anyone can reach us immediately!
<br>



***
### Tech Stack and Concepts used:

<p align="left"> <a href="https://expressjs.com" target="_blank"> <img src="https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.svg" alt="express" height="40"/> </a> <a href="https://git-scm.com/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a> <a href="https://heroku.com" target="_blank"> <img src="https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg" alt="heroku" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank"> <img src="https://img.icons8.com/color/48/000000/html-5.png"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://img.icons8.com/color/48/000000/javascript.png"/> </a> <a href="https://www.mongodb.com/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg" alt="mongodb" width="50" height="50"/> </a> <a href="https://nodejs.org" target="_blank"> <img src="https://img.icons8.com/color/48/000000/nodejs.png"/> </a> <a href="https://postman.com" target="_blank"> <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40" height="40"/> </a> <a href="https://www.netlify.com" target="_blank"> <img src="https://www.netlify.com/img/press/logos/logomark.png" alt="Netlify" width="40" height="40"/> </a> <a href="https://reactjs.org/" target="_blank"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" alt="React" width="60" height="40"/> </a> <a href="https://firebase.google.com/" target="_blank"> <img src="https://firebase.google.com/downloads/brand-guidelines/PNG/logo-logomark.png" alt="Firebase" width="30" height="40"/> </a> <a href="https://material-ui.com" target="_blank"> <img src="https://material-ui.com/static/logo.png" alt="Material UI" width="50" height="60"/> </a></p>
<br>

* __Frontend:__ Reactjs, Javascript, MaterialUI, Slick-Slider, HTML, CSS, Styled-components
* __Backend:__ Firebase
* __Tools:__ Git

***

### Setting Up the Project 🔧


1. Clone the repo

   ```sh
   git clone https://github.com/tend2infinity/Rate-It-Project
   ```
2. Install NPM packages

   ```sh
   npm install
   ```
3. Start the project by using 
 ```sh
   npm start
   ```


   



