# ES6 Crash Course 
    * Always use let over var as
        let - block scoped and does not allow redeclaration of variable in the scope
        var - function scoped and allow redeclaration 

    * const are blocked scoped 
        * we are not allowed to changes value of the object but we can change it's properties 

    * object - collection of properties associated with a varibale 

# React Intro
    * Compostional model - Everything is done with components. Complex components is combination of simple components 
    * Virtual DOM - comverts elements to Nodes 
        - components are made up of elements 
    * sudo npm install -g create-react-app my-app - for enabling facebook command for converting ES6 app to ES5 compatible code for browser. (babel : get browser-compatible javascript code ;; webpack )
    * npx create-react-app photoapp

## Element 
    * createElements can become pretty tedious and that's why we use JSX for this purpose 

## JSX
    * {} -  is used for javascript expression 
    
## Components 

# React- State Management 

## Class Components based photoapp 
    * https://github.com/gauravmahal/photoapp/tree/c0ee30cdb60e4eff01038f1f6a97f2b0bd5147ad

## Functional Components 
    * Convert class to function just by returning the value 

## State management 
    * Main component constructor is used for initialising the state of the applications
    * Updating state 
    
## Prop-Types
    * Require props must be passed in to the functions or abject or else it will throw error  

## [Lifecycle Methods](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
    * constructor - called even before components instatnce is even inserted into DOM
    * componentWillMount <deprecated> - called before components is inserted into the Dom 
    * componentDidMount - called after components is inserted into the Dom 
    * componentDidUpdate - called whenever a component is re-rendered