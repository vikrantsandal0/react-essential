import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import App from './routeApp';
import { BrowserRouter as Router } from 'react-router-dom';

function AppTwo() {
  return (
    <h1>This is the second app</h1>
  )
}
//this is where we are going to pass all of the information from router to nested components

ReactDOM.render(
  //wrap app component with router , so it gives app component access to all the properties of router
  <Router>
    <App auth={false} userName='vikrantsandal0' />
  </Router>,
  document.getElementById('root')
);










/********************************************************** FRAGMENTS */
//we cannot render two sibling components ,if they arent enclosed

// ReactDOM.render(
//   <React.Fragment> OR <>
//     <App />
//     <AppTwo />
//   </React.Fragment></>,
//   document.getElementById('root')
// );
/**IF WE WANT TO RENDER TWO SIBLING COMPONENTS TOGETHER, WE HAVE TO ENCLOSE IT, EITHER USING DIV,OR REACT.FRAGMENT
 * OR SIMPLY <></>
 * OTHERWISE WE WILL GET
 * SyntaxError: /Users/vikrantsandal/first-react-project/src/index.js: Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>? (16:4)

 */