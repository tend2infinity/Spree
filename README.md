# Spree!

### A Real-world online movie streaming and sharing application! 



***
__Special Mention:__ [TMDB API](https://developers.themoviedb.org/3) for providing the amazing database of movies.


## Screenshots
![](https://github.com/tend2infinity/Spree/blob/master/public/screenshots/spree1.JPG)
<br>
![](https://github.com/tend2infinity/Spree/blob/master/public/screenshots/spree2.JPG)
<br>
![](https://github.com/tend2infinity/Spree/blob/master/public/screenshots/spree7.JPG)
<br>
![](https://github.com/tend2infinity/Spree/blob/master/public/screenshots/spree3.JPG)
<br>
![](https://github.com/tend2infinity/Spree/blob/master/public/screenshots/spree4.JPG)
<br>
![](https://github.com/tend2infinity/Spree/blob/master/public/screenshots/spree5.JPG)
<br>
![](https://github.com/tend2infinity/Spree/blob/master/public/screenshots/spree6.JPG)

## Main Features

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

* __Frontend:__ Reactjs, Javascript, MaterialUI, Slick-Slider, HTML, CSS, Styled-components
* __Backend:__ Firebase
* __Tools:__ Git

***

### Setting Up the Project 🔧


1. Clone the repo

   ```sh
   git clone https://github.com/tend2infinity/Spree.git
   ```
2. Install NPM packages

   ```sh
   npm install
   ```
3. Start the project by using 
 ```sh
   npm start
   ```


   



