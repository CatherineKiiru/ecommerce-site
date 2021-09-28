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

Note: In React, to convert static data to dynamic data, use curly braces

1. Change the href to {`/product/${product._id}`} so as to enter dynamic 
   data (This is in the Product.js file). Here, you are setting the image URL to the product for the specific id.
2. Copy the href info and paste it for the product name (line 24) 
   because image and name should link to the same location. Failure to do this will result in your data not compiling in React
3. After the above, you should update the image source (src) to 
   `product.image` and alt to `product.name`

   In summary:
   - We created product component through Product.js
   - We created rating component through Rating.js

# Modular & component based code 
This is highly organized code that subdivides a computer program into seperate sub-programs. Known as modular programming/architecture,
it involves seperating a program's functions into independent pieces, each containing all the parts needed to execute a single aspect of the functionality.

# Creating a product screen and home screen
This part involves creating 2 screens i.e. home screen & product screen using React Router DOMS to create routes in React application.
1. Start by installing react-router-dom. To install react-router-dom, go 
   to your terminal, CD frontend folder and type npm install react-router-dom then press enter.   
2. Next, go to App.js and wrap the whole div in the `<BrowserRouter>
   <BrowserRouter>` tag
3. Proceed to define routes within the main tag (line 20-24 in App.js)

4. Once you create the home & product screens within the components 
   folder under src, create a functional component by typing rfc + tab. Do the same for the product screen.

5. From App.js, move the div contents inside the main tag to homescreen 
   and productscreen. This is because we are showing the list of products and should be within the homescreen

6. Since we're importing products, cut product and data import from App.
   js and paste it at the top of homescreen import routes, product and homescreen
   
Note: To go back one folder, use 2 dots before a dash.

# Building a product screen

1. The product screen should show specific product images, details and a box that indicates the action a user should execute on that page

2. To do this, go to the return div and set the class name to row, then create 3 columns (line 7) The row is the main container that will house the columns

3. Define the first column to 2 columns i.e. col-2. This will occupy twice the width of the screen

4. To display the image, set the image tag as product.image and source as product.image and alt text to product.name

4. Product image should be loaded from data.js.Ensure to import data from data.js by typing
    `'import data from '../data'; at the top of ProductScreen.js` 

5. To load products from data.js, use this function (line 5):
    `const product = data.products.find()`

6. The find function is an array function that finds elements based on the criteria that you define. See the example below:

   ```
   const product=data.products.find(x => x._id === props.match.params id)
    
   This criteria means you're searching for x._id
   x._id is for products inside the array above and you are comparing (===) the id with props.match.params.id.
    Pass props as a parameter for ProductScreen i.e ProductScreen(props)
   ```

7. What does props.match.params.id mean? This is the exact value under App.js that users enter in the first route. When a user clicks on a specific product, props.match.params.id is the value at the end of the product's url

8. If the product does not exist, use this function to return a 
   'Product not found' message:
      
      ```
        if(!product){
            return <div>Product Not Found</div>
        }
      ```
Otherwise, if the product exists, the browser will render the product information

9. In productscreen.js, add lists for product name,rating, price and product description to the first information column(col-1) 






Note: Always remeber to manually import from the desired file or link (Top of the product screen)

# Definitions
1. Routing - is the ability to move between different parts of an 
   application when a user enters a URL or clicks an element e.g. a link, button, icon, image. When you add routing capabilities, you are able to transition from one view to another. The React-router library is what give you this ability. 

2. Router - is a React package that give you the ability to move between 
   different parts of an application. It allows us to build single-page web apps with navigation without the page refreshing as the user navigates.

3. React-Router - this package includes 3 routers i.e. BrowserRouter 
   HashRouter and MemoryRouter. For browser based applications BrowserRouter & HashRouter are ideal.

4. BrowserRouter - Is used for applications which have a dynamic server 
   that can handle any type of URL.

5. HashRouter - Is used for static websites with a server that only
   responds to file requests that it knows about.

Note - Any router only expects one child.









May 12th - continuation

        (Line 14-21)
9. The second col-1 is the action column i.e. where users click on add to cart.
        Set the className of the div to card card-body. This class is so that you can add a border and padding (line 22-33)
        to the border, respectively.
10. Under the 1st list (li), set the class name to row because you'll put price label and price value next to each other. (Line 26-28)
        This requires you add another div for Price label and price value

11. Under the 2nd list (li), To render the stock status(Whether item is in stock or unavailable), use conditional rendering i.e. if product.countInStock is greater than zero, render the span 
        {product.countInStock>0? <span className="success"}></span>};
        To show no stock, put a colon after the span above and set another span to show unavailability i.e.
        <span className="error">Unavailable</span>
        Go to data.js and add the "CountInStock" property under price and specify the number of items for each product

12. Under the 3rd list, we'll have a button for users to click. Set the classname as primary block i.e.
        Primary class for gold color and block class for the button to occupy the full width (line 43-45)

May 17th - continuation
13. To stick the information items to the top, add a 'top' class to the row class name (line 10)
        Then go to index.css and add a row.top style to align items to the top i.e.
        .row.top{align-items:flex-start} (refer to index.css,line no. 83)

May 20th - continuation
14. To add "Back to result":
add this tag: "<Link to="/">back to result</Link>"" in line 12, just before row-top.When you get an error page,
        restart react by closing the current terminal (CTRL C) the typing in
        the new terminal "npm start"
15. To style the column information, got to index.css. Below row.top, type:
            .col-1{
                flex: 1 1 25rem *This is shorthand for flex: grow shrink basis. The second 1 makes the column shrinkable, 25rem sets the width of this column*
            }.
        Copy the style above for column 2 like this:
            .col-2{
                flex: 2 1 50rem;
            } 
16. To remove bullet points from the column information, use this style (line 56):
            ul{
                padding: 0;
                margin: 0;
                list-style-type: none;
            } 
17. For all list items, create a margin top to 1rem to create vertical space between items i.e. 
            li {
                margin-top: 1rem
            }
July 16th - 
18. Added CountinStock property to data.js. Details added in note no. 11

July 21
19. Changed the color of the 'add to cart button, refer to index.css button element
    Added a hover element to the button
    Also made the images to be responsive to screen size by adding the element below
    img.large{
    width: 100%;
    }


In summary:

1. This lesson focused on adding routing to the product page. We used react router to implement routing in our web application. 

2. We created a single page application to create multiple routes 
   that renders different components of our web application.

3. We added homescreen, productscreen and updated data.js

5. Added countinstock as a new property to the products 
   productscreen.js

6. In app.js, we imported browser routers & routes from 
   react-router-dom

7. We defined 2 route paths for homescreen.js and productscreen.js

8. We installed a new react-router-dom package in json


# Creating a Node.js server
1. Create a Node.js server (place in the root folder i.e. 
   ecommerce-site) 
2. Run npm init in root folder (type npm init and press enter on all 
   queries)
3. Create a backend folder within the root folder
4. Create server.js file. This file is the entry point for our backend
   application
5. Create an express server by typing "npm install express" command
   - Express is a node package that helps create easy servers
   - update package.json and set type to module
   - Add .js to imports
   - npm install express
6. Add start command as node backend/server.js
7. Require express
8. create route for / Server is ready
9. Move products.js from frontend to backend
10. create route for /api/products
11. return products
12. run npm start 

# Using your Node server in the React application
1. Copy and paste data.js (from src folder 
   into the backend folder.

2. Return products (from data.js) in the 
   server.js.  
   To do this, create another route i.e. app.get and add this path: ('/api/products'). This action will return an array of products. The function looks like:
      ```app.get('/api/products', (req, res)``` 

3. In the body of the function 
   above, return by using
      ```res.send(data.products)``` 
   Data.products is the data you'll send to the backend server

4. Import data from data.js by adding the import path below 
   to the top of your server.js file
      ```import data from './data.js'```

Note: in server side programming, you need to append the .js extension to your files to prevent errors

5. Once done, launch your server (node backend/server.js). Ad the end of the browser url add
   /api/products. You will now see the list of products. 

6. Add the JSON extension from chrome to get a better bvview of your products

7. As it is, you'd need to manually stop your node server and run it again when there's a code change. 
   To automatically rerun your node server whenever you change the code, by installing a development package 
   called nodemon. Nodemon is a package that automatically reruns your node application when you change code

8. Once installed you need to make it work. To do this, Go  
   to package.json and under scripts, delete the test script 
   and add a start script with the info below:

   ```"start": "nodemon --watch backend --exec node --experimental-modules backend/server.js"```
9. A break down of the script above:
      We 'asked' nodemon to watch changes in the backend folder (--watch backend).
      When there is a change, run this command -> node --experimental-modules backend/server.js
      The experimental module makes it possible for us to use ES6 modules in our node app
      So instead of starting your server with node backend/server.js, you now use npm start.

Note: installing development packages require two dashes i.e
--save-dev nodemon

# Loading products from backend and showing through frontend
1. Start by setting a proxy in package.json that points to 
   the backend port i.e. the proxy is an address that points to the backend. Use the IP address of the local host. When a user sends a request to the API, it redirects your request to the backend.

2. Install Axios. This is a library that sends ajax requests 
   to the server. Install in the frontend folder with this command "npm install axios'.

3. Next, edit your HomeScreen.js file. Instead of fetching 
   data from data.js in your frontend folder, fetch data from /api/products in your backend folder.

4. Start by defining a React hook by defining a use state. 
   The usage of a React hook to manage the state of your React component is demonstrated below:
    `const [products, SetProducts] = useState ([])` 
   
   - The default value of products is an empty array. When you want to change the value of products, use the setProducts function.

5. Import useState from React and paste it at the top of 
   your HomScreen.js file.

6. Once you define the hooks, fill in the products. To do 
   this, apply the useEffect function. 
   
   - useEffect is another hook that tells React that your component needs to do something after rendering. React remembers the fucntion you passed and calls it later.

7. In our case, this useEffect function runs after rendering 
   our component.  

8. UseEffect accepts two parameters; a function and an
   array. The array accepts the list of dependencies. By having the array after rendering your component, the function will run only once. 
9. In the function under the useEffect hook, we will send an ajax request to our backend and fetch our products.

10. To send an ajax request, define a function to fetch data i.e. an async function. (ajax is an async operation)

11. In the body of this function, fetch the data from axios 
    request; put await before axios and call the get method of axios and add the api address. The array in backend will be transferred to data in frontend.

12. Next, set the products to the data we're getting from
    backend.
13. Call fetchdata to activate the function.

14. Remove static data (delete import data). The function looks like this (HomeScreen.js):
   ```
   const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get ('/api/products');
            setProducts(data);
        };
        fetchData();
    }, [])
   ```
14. Always stop the backend and frontend, then run them
    again. This is because of the proxy we set in the package.json file. So always stop then first run your backend then frontend project. 

# Creating 2 components: "loading while fetching data from backend" and "show an error" when fetching data from backend

1. Start by setting another hook to show loading in 
   HomeScreen.js i.e.
      const[loading, setLoading] = useState(false); the default value for loading is false because by default we're not loading anything.

2. Next, use setLoading before sending an axios ajax request 
   i.e. place setLoading before the ajax command

3. Set another hook for error. Duplicate the setLoading hook 
   then rename it to [error, setError]. the use State will be false because there's no error at the moment

4. To catch the error, wrap the ajax request inside 
   "trycatch" statement sets apart a piece of code to try, then generates a response when an exception is presented. 
   So:
   Try_statements - specifies the code to be executed
   Catch_statements - code that executes if the try statement throws an exception.

   In this case, if there's an error fetching data from the backend, the catch statement throws out the setError message for error hook.

5. Loading the error inside the component section (the return section): 
   Start by rendering loading i.e. 
   
   ```
   If loading is true, render the LoadingBox component.
      {loading? <LoadingBox></LoadingBox>
      Otherwise(add a colon :)
   if there's an error, render the messageBox component and show the error message.
      error?<MessageBox>{error}</MessageBox>
      Otherwise(add a colon :)
   If there's no loading and no error, render the products.
   ```

6. Proceed to create the MessageBox and LoadingBox components. 
7. Go to index.css. Create an alert class and alert error 
   class. 
8. In the home screen, becasue the message box is an error message, set the variant to danger. 
   
   Then change the alert-error class to alert-danger class in index.css. Also change error to danger 
   in the ProductScreen "unavailable" span.

9. Import the messagebox and loading box code at the top of the  
   the file.
10. To display the error message, stop the backend (ctrl+c). 
    Frontend will show an error on you browser's screen.
11. In summary, we created 2 components:
    - to show loading while sending an ajax request to 
         backend server (LoadingBox.JS)
    - to show "error" if there's an error while fetching data 
         from the backend

## Step-by-Step flow of implementation:
1. In package.json in frontend, we set the proxy url to fetch 
   data from backend.

2. Installed axios library to send ajax requests to the backend.

3. Created 2 components: a loadingBox component to show loading  
   using font awesome's spinner icon and a MessageBox to show the message based on the message variant(if it's error, we show red message, if it's info, we show blue message.)

4. In the HomeScreen, we used React Hooks to manage the 
   component's state and useEffect to send ajax requests only once and after rendering the component. 

5. In index.css, we added 3 classes for alert, alert-info and 
   alert danger

# Installing ESlint
1. Helps in analyzing your code to finde problems and fix 
   code errors

2. Start by installing: npm install -D eslint. This tells   
   the engine to install the development dependencies so as not to ship to production. 

3. After installing eslint run it through it's containing folder 
   i.e. ./node_modules/.bin/eslint --init. The init parameter initilizes an eslint project. Accept all default questions but choose both node and browser for where to run your code

# What is Redux

1. Redux is a pattern and library for managing and updating 
   an application's state using events called "actions".

2. This library servers as a store for states that'll be 
   used across your application. This store contains rules that ensure the app's state is managed and updated in a predictable way. 
   
3. Often times, Redux manages the "global" state which are 
   states used across different parts of your app.

3.  The patterns, tools and rules in Redux simplifies app 
    updates and how the app's logic behaves when you imlement those changes. 

3. The redux store has 2 items; state and reducer. "State" 
   is the current state of our application and reducer is a function that takes the current state, makes a change and returns a new one.

4. Redux stores a history of states which allows for better 
   management and predictability of the state of our applications.

# Installing Redux
1. Install Redux into your frontend folder. Redux manages the 
   state of your React app and gives you an overview of your app's functions. run npm install redux react-redux

2. Redux will now fetch products from the backend instead of 
   using ajax request. Redux will also put the products in redux state instead of component state.


3. In our case, we will dispatch an action from react view then 
   send it to the redux store to make a change in the state of our application. 

4. So to request a state change, create an action and dispatch action to the Redux store.

## Working with redux
1. Create a simple store (store.js) that can be used in 
   React app. It simply returns a list of products (from data.js) in frontend. 

2. Use the redux store in index.js(frontend/src) and create 
   a <Provider> component. This component avails the Redux store to any nested code that needs to access the Redux store.

3. Proceed to add the Redux extension then check dev tools. 
   Redux will show but will idnicate there's "no store found".

4. Start by installing Redux-thunk. This makes it possible 
   to send ajax requests in redux actions. 

5. To add Redux thunk, add the parameter; compose
   (applyMiddleware(thunk)) then import this component (check store.js). In essence, we created a store.js and connected it to chrome developer tools.

6. To use Redux in a real world scenario, open HomeScreen.js. 
   Create an action to fetch data from the backend

7. Instead of running an ajax request in component, move it to an 
   action.

8. To create an action, create a constants folder then a 
   productConstants.js file. Inside this file, define 3 constants:
      
   ``` 
      export const PRODUCT_LIST_REQUEST = PRODUCT_LIST_REQUEST
      export const PRODUCT_LIST_SUCCESS = PRODUCT_LIST_SUCCESS
      export const PRODUCT_LIST_FAIL = PRODUCT_LIST_FAIL
   ```

9. We define three constants to fetch list of products from 
   backend because of the async nature of ajax requests.

10. Next, define actions to get list of products. Create a new 
    folder under actions and create a file called productActions.js

11. Actions is a function so export it the same ways as 
    constants. Note that this arrow function returns another async function that accepts dispatch as a parameter. 
    
12. Dispatch will be filled by Redux thunk. In the body of 
    the function below, dispatch a product list request. Dispatch accept an object. The object has a type as indicated below:

   ``` 
      export const listProducts = () => async (dispatch) => {
         dispatch({
            type: PRODUCT_LIST_REQUEST
         })
      }
   ```
13. Make sure to import PRODUCT_LIST_REQUEST from "../ 
    constants/productConstants

14. To fetch data from backend, use the try catch method. If 
    there's an error in getting backend data, dispatch PRODUCT_LIST_FAIL through the catch part

15. For the try part, set an ajax request by copy pasting   
    the code from HomeScreen.js to productActions.js. The ajax request gets the list of products. Auto import Axios or type to import manually.
    
    - After getting data from backend, dispatch another action to change the state of Redux then update HomeScreen.js to show products.

    - To dispatch an action, set the type of it an in this case, the type is PRODUCT_LIST_SUCCESS imported from productConstants.js. 
    
    - Also set a payload which contains data from backend i.e. payload: data

16. For the catch part, dispatch a fail scenario by adding 
    the action; {type:PRODUCT_LIST_FAIL, payload:error.message}

17. Next, create a reducer to respond to all three actions. 
    Do this by creating a reducer folder inside src, then create a file called productReducers.js

18. Inside product reducer, define product list reducer. 
    This is a function that accepts 2 parameters: state and action. In the body of the reducer, add a switch case with action.type. See the code below:

   ```
    const productListReducer = (state, action) =>{
      switch(action,type)
    }
   ```

19. Action.type is the values that you enter in 
    PRODUCT_LIST-REQUEST/FAIL/SUCCESS (in productActions.js)
    Action.type should have a list of cases

20. If the case is PRODUCT_LIST_REQUEST, it chould be 
    auto-imported from productConstants.

21. Next, return new state and set loading to true. This is 
    because when you dispatch request action, you're sending an ajax request to backend and waiting on a reponse.
      ` return {Loading: true }; `

22. Next, add default case by returning current state. This 
    means that you're not changing the state and are returning the previous state. 
      `  default: state; `

23. Add another case for PRODUCT_LIST_SUCCESS, return and 
    set loading to false. Then, set products to action.payload.
      
      ```
      case PRODUCT_LIST_SUCCESS:
         return { Loading: false, products: action.payload }
      ```
  -  The scenario above is modelled according to the productActions.js dispatch. When we dispatched THE PRODUCT_LIST_SUCCESS type, we set the payload by the data we get from backend. 

   Subsequently, in the productReducer.js, you fetched the products, which is a variable in Redux store by the data that we get from backend.

 24. Finally, create the last case for PRODUCT_LIST_FAIL
      
      ```
      case PRODUCT_LIST_FAIL:
            return{ loading: false, error: action.payload }
      ```  
25. Proceed to export productListReducer and set the default 
    state to an empty array. If you don't do this, you'll get an error. If you want to show products in the homescreen, it should be an empty array, not null.

26. Adding productReducer to store.js by updating reducer.  
    Instead of having static products from frontend, delete (state, action) =>{ return {products: data.products };}; from const reducer and add combineReducers

27. combineReducers can accept object parameters. This 
    objects introduce reducers to the Redux store. 
    
   - add the first reducer to the body of the function above.The first reducer is the productList and comes from productListReducer. Proceed to import the reducer from productReducers.js

28. Since you changed the static products to combineReducers 
    (no.26), delete the import data statement in store.js

29. Next get rid of all React Hooks from HomeScreen.js and 
    add a product list from Redux store. To get an object from Redux store, utilize the useSelector which is a function from React-Redux.

30. useSelector can accept a function that has a redux state 
    as a parameter. From this parameter, we just need to get 3 values from the product list (see homeScreen.js) i.e.
      ` const { loading, error, products } = productList; `

31. Now you don't need fetchdata anymore, so you can delete 
    that section and dispatch an action called listProducts. import it and make sure to put round brackets after listProducts since it's a function. 

    ```
      useEffect(() => {
          dispatch(listProducts());
      }, []);
   ```

32. Proceed to delete import 'Axios' and 'useState' from import React. (Don't delete useEffect). 

33. Lastly, import dispatch by defining the function:
      ` const dispatch = useDispatch(); `
  
  - useDispatch is a function in React-Redux so import it too. Remember to add round brackets since it's a function. 

34. By using the useDispatch Hook, we can dispatch any Redux 
    action inside React components. 
