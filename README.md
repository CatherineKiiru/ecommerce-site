# Using map functions to condense multiple carts into one cart:
You don't have to have multiple static carts: 
You can have one cart by using map functions to convert JS product items (from data.js) to HTML elements.  So for each product, convert them to the div below the map function i.e.

```{data.products.map((product) => ( insert div elements );}```

# Adding Javascript code to React code
If you want to put Javascript code inside your react code, use curly braces (line no. 18)
React helps in creating large web apps that can change data without reloading the page
and affecting the user interface

# Importing data to App.js
Import your data by typing import data from './data'; at the top of App.JS file (line 2)
When you import from a file, you need to go to the file and export the data:

```Type 'export default App'; at the end of the App.js file.```

Your data will now be displayed in your React App. You will now see the arrays from your data file in the final result.

# Updating other fields in data.js
To update other fields in your data file, go to your App.JS file
and inside your map function, set key (within the div element) to key={product._id} (line 19)

# Map functions and keys
When you're using the map function in React, the first element after map should have a key attribute i.e. key={product._id} and the value of that key should be different because in the data.JS file, all IDs (_id:'1','2') are unique.

## Note: In React, to convert static data to dynamic data, use curly braces



Change the href to {`/product/${product._id}`} so as to enter dynamic data (line 20)
   Here, you are setting the image URL to the product for the specific id.
   Copy the href info and paste it for the product name (line 24) because
   image and name should link to the same location. Failure to do this will result in your 
   data not compiling in React
   
11.After the above, you should update the image source (src) to product.image and alt to 
   product.name

Lesson 1 review:
1. We created a react app using npx create react apt command
2. We set the name of the application to 'frontend' 
3. We moved the content of static HTML document that we created to App.JS inside
   React application and changed the static elements to dynamic ones.
4. To launch a React app use the command "npm start react app" - this will launch the development server

Lesson 2 notes:
   Modular & component based code - this is highly organized code that subdivides
   a computer program into seperate sub-programs. Known as modular programming/architecture,
   it involves seperating a program's functions into independent pieces, each containing all 
   the parts needed to execute a single aspect of the functionality.

Lesson 2 review:
1. We created product component through Product.js
2. We created rating component through Rating.js
3. In app.js we used product component and passed properties (props)
   to product component (line 21)
4. Finally, we set the last span in the rating component (Rating.js) to dark grey

Lesson 3 notes:
1. This part involves creating a product details screen. There will be 2 screens i.e. 
   home screen & product details screen using React Router DOMS to creat routes in React application.
2. Start by installing react-router-dom then go to App.js and wrap the whole div in the <BrowserRouter></BrowserRouter> tag
   To install the react router dom, go to your terminal, CD frontend folder and type npm install react-router-dom then press enter
3. Proceed to define routes in the main section (line 20)
4. Line 21 - set the attribute to exact which means that only if url is exactly equal to "/", the render the element in line 21
5. Line 20 - :id is a parameter and it contains the id of your product.So when a user enters this product id, you'll render the component indicated

Definitions:
Routing - is the ability to move between different parts of an application when a user enters a URL or clicks an 
         element e.g. a link, button, icon, image. When you add routing capabilities, you are able to transition from one 
         view to another. The React-router library is what give you this ability. 
Router - is a React package that give you the ability to move between different parts of an application. It allows us to 
         build single-page web apps with navigation without the page refreshing as the user navigates
React-Router - this package includes 3 routers i.e. BrowserRouter, HashRouter and MemoryRouter. For browser based applications,
         BrowserRouter & HashRouter are ideal.
BrowserRouter - Is used for applications which have a dynamic server that can handle any type of URL 
HashRouter - Is used for static websites with a server that only responds to file requests that it knows about
Note - Any router only expects one child.

April 21st - I successfully debugged my code. React was not compiling due to a bug

Lesson 4 notes - 21st April
1. Once you create the home & product screens within the components folder under src, create a 
   functional component by typing rfc + tab. Do the same for the product screen.
   from App.js, move the div contents inside main to homescreen and productscreen. This is because 
   we are showing the list of products and should be within the homescreen
   Since we're importing products, cut product and data import from App.js and paste it at the top of homescreen
   Import routes, product and homescreen
2. To go back one folder, use 2 dots before a dash.


--*/