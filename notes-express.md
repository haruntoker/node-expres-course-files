<<express.js>>
* express is built on top of node.js and more specifically on top of http module.


<<note: >>
>> when you attach 'html' file, 
 - use "readFileSync" > "const {readFileSync} = require('fs')"


>> http & express methods<<

> app.get >> by default all browser perform get request.
> app.post
> app.put
> app.delete
> app.all >> works with all of them.
> app.use >> its middware.
> app.listen >> port.


>>> static assets in Express.js:
> example: at file '2b-express-app.js' >> 'app.use(express.static('../public'))' method is the static asset.
> express.js provides 'expres.static' middlware, that designeted to serve static files. such as, css, html, js files, and images part of you app.
>static asset means, it is file that server doesnt have too change it.


<<port setup>>

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})



<<Express.js API vs. SSR>>
1) Express API

- Purpose: Building back-end API's and handling HTTP request and responses.
- Use Cases: Building RESTful or GrapQL APIs for client appsto communicate with server.
- Rendering: Doesn't render HTML or templates for web pages, it focuses on data processing and, serving.

2) SSR(Server side rendering)

- Purpose: renders dynamic web pages on the server before sending them to client.
- Functionality: Generates HTML content on server, including data from databases or APIs and sends fully-rendered pages to client.
- Use Cases: Traditional web apps, e-commerces sites or content-driven websites.
- Rendering: Focuses on rendering HTML templates, often using front-end framework like React or Vue on the server.



>>>Route Params (Route Parameters) 
- It's a placeholders in URL pattern of a route that allow you to capture dynamic values from URL.
- It's defined by placing a colon (':') followed by parametername in the route pattern.
- For example, <users/:userId>, where <:userId> is a route parameter.
 * when client makes a request too URL like '/users/123', it will capture the value '123', and make available you route handling codes as 'req.params.userId'
- When you use this value in your code perform specific actions, such as fetching user data associated the ID '123'.


<<if-else condition>>
- when you set up condition use always 'return' to avoid errors.



<<middleware in expres.js>>
- its a function that execute during the request to server.
- and, has access to req and res object.
- when it comes to functionallity, 'sky' is the limit.
- Middleware literally eveywhere of the express.js
- Its the most important topic of express.js, so do not skip without understanding.
- >Every middleware has to has 'next()'

> way it is work<
* req => middleware => res

1) app.use() method to pass in middleware method file.
>  app.use(logger) >COMMON

2) app.use('/api',logger)
In this case midlleware function will work after the spicified path, this meand it's not gonna work on homepage.

>next() function:
- next() function used to pass control to next middleware function in the stack.
- it allows the request to continue processing and ensures subsequent middleware functions or route handlers are executed. 
- if you dont add next(), application not work and perform.

> executin multible middleware functins:
- keyword: array, middleware, 
- In your application folder, inside the app.use([middleware1, middleware2]), use array and place them.
- the middleware function you place in app.use([middleware1, middleware2]), they gonna execute according to their order.
Means; if you write 'middleware2' first, its gonna executede first.

>using only one place multible middleware:
app.get('/api/items',[logger, authorize], (req,res)=>{
    console.log(req.user);
    res.send('Items page..')
})


>options of middleware:
1) our own; we write our custome middleware code.
2) express; in expres mostly everything is middleware. 
   Like; app.use(express.static('./pathName)) 
   'static' here is a middleware.

3) thirt parth(optional): downloading "morgan" from "npm"



<<Postman>>
- It;s a tool for testing and automating API intterractions.
- It makes HTTP requests to API's including RESTful API's.
- It send various  types of HTTP request, (GET, POST, PUT, DELETE)
- It's used by developers and testers to ensure that APIs work as intended, by allowing then send request, receive request, receive responses, and analyse API's behaviour during development and testing phases.

* If you are working on the Back-end;
- You don't need to build a frond-end to test your back-end when you're using <postman>.