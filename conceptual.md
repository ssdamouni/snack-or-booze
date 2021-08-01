### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
To render different parts of the website without rerendering everytime you switch pages. In addition, if allows users to use the back and forward button even thouhg they aren't actually changing pages.

- What is a single page application?
A single page application is an app that works inside the browser and doesn't have to make multiple requests to the server.

- What are some differences between client side and server side routing?
Server side makes a get request everything a new link is clicked. Client side tends to respond with much more hidden information the first time so that the page doesn't reload and the user click links to show hidden elements.

- What are two ways of handling redirects with React Router? When would you use each?
In react router you can use either history.push() where JavaScript is used to just add to the broswer history object. This is used if you want the user to be able to use the back arrow to get back to the page you just redirected from. The other option is the Redirect API which will redirect but in a way that the user can't navaigate the page it was redirected from. This would be used if you need to redirect from a broken page.

- What are two different ways to handle page-not-found user experiences using React Router? 
The first way is to put a route without page at the end of your switch routes. This way it acts a catch all after none of the other routes have worked.  The other option is to put a redirect at the end of the switch. So if not routes are matched it will take you to a specific page.

- How do you grab URL parameters from within a component using React Router?
In react router you can set up parameters the same way that you do it in express. so you just add a /:variable at the end of the url and the component will have accesss to that.

- What is context in React? When would you use it?
Context is  way to avoid prop drilling. So it is basically creating an object that is assecible in any part of an app. You typically use it if a value is need in a parent funciton and then a great-great grand child function and none of the pages in between have to use it.

- Describe some differences between class-based components and function
  components in React.
Function components are a new version of class components that make use of hooks. Class components can be used to the same thing they just require a lot more work up from to define the classes. 

- What are some of the problems that hooks were designed to solve?
React hooks simplify the logic involved in creating components and managing state. The prevent a lot of code form having to be repeated over and over again. 