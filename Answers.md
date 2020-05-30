# Answers

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.


React JS is a library created by Jordan Walke in 2011 while working at facebook.  React focused on making DOM updates less taxing through the use of a virtual DOM which is snapshotted at render.  
It then takes that DOM and through user input / data change runs a diffing(comparison) algorithm between the virtual and displayed DOM.  This allowed us to only rerender certain elements of the DOM improving performance.
React also has JSX(JavaScript XML) which is written very similar to html replacing things such as createElement.

1. Describe component state.

A component state is how we choose to render information to the screen.  Lets say for instance we are pulling in temperature from a database setting the state and passing it as props.  We could then choose to display the background
color as blue for lets say (props.temperature > 32 ? background: 'red' : background: 'blue').  State isnt affected by re-rendering unless the cause of the render is a change in state.

1. Describe props.

Props, short for properties, is a naming convention due to the fact that you are creating an object when passing data(properties) in your JSX to children components. 

1. What are side effects, and how do you sync effects in a React component to changes of certain state or props?

Side effects are when a function can modify or change anything outside of its own function body.  We can use useEffect with its second argument an array[updateOnChange].  By doing this the useEffect will run just after first render and not again
until the listed prop/state changes.  At that time the useEffect will fire and the information will change.
