import React, { useState, useEffect, useReducer } from 'react'
import logo from './logo.svg';
import './App.css';

function Header(props) {
  return (
    <header>
      <h1>{props.name}s sneaker store</h1>
    </header>
  );
}
function Main(props) {
  return (
    <section>
      <p>We have the {props.adj} collection entire india</p>
      <img src={'https://avatars.githubusercontent.com/u/38485799?s=400&u=908f6990b0ef98348294e2cd5adce1a17cc34639&v=4'} height={500} alt='this is sandy' />
    </section>
  )
}
function Footer(props) {
  return (
    <footer>
      <p>Copyright {props.date}</p>
    </footer>
  )
}
function Lists(props) {
  return (
    <ul style={{ textAlign: 'left' }}>
      {props.dishes.map((dish) => {
        return <li key={dish.id}>{dish.dish}</li>
      })}
    </ul>
  )
}
function ConditionalTrue() {
  return (
    <h1>AUTH TRUE : CHECK THIS INFORMATION KEY : 12323DSEQA</h1>
  )
}
function ConditionalFalse() {
  return (
    <h1>AUTH FALSE : NO INFORMATION TO DISPLAY</h1>
  )
}

//https://api.github.com/users/vikrantsandal0
function App(props) {
  /**comprehensive exercise to 
   * display loading... when its taking api time to fetch details (use settimeout)
   * display error if any, by setting error in catch using seterror and later handling it
   * check all the steps of setloading, seterror ,loading , error, !userdata thoroughly
   */
  const [userData , setUserData] = useState(null);
  const [loading , setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(()=>{
    if(!props.userName) return
    setLoading(true);
    console.log('rendering aftereffect');
   // setTimeout(()=>{
      fetch(`https://api.github.com/users/${props.userName}`)
      .then(data => data.json())
      .then(setUserData) //equivalent to setUserData(data);
      .then(()=> setLoading(false)) //because now that we have received data , we can set loading to false
      //.then(()=>{ throw 'custom error'})
      .catch(setError)
    //}, 3000);

  },[]) // we want to invoke it only once ie, when the component is mounted/or rendered very first time
  
  if(loading) return <h1>loading......</h1>
  if(error) return <pre>{JSON.stringify(error, null , 2)}</pre>
  if(!userData) return null
  // if(userData)
  // {
    return (<div>
      <h1>{userData.name}</h1>
      <p>{userData.id}</p>
      <img src = {userData.avatar_url} alt = {userData.login} />
    </div>)
  //}
  // return <div>no data found</div>
}

export default App;







/******************************************** MULTIPLE COMPONENTS AND PROPS */
// function App() {
//   let dishes = ['kulcha', 'paneer', 'nachos'];
//   let dishObj = dishes.map((dish, i) => ({ id: i, dish }))
//   return (
//     //this / inside component means self closing, open and close at the same time
//     <div className="App">
//       <Header name='sandy' />
//       <Main adj='amazing' />
//       <Footer date={new Date().getFullYear()} />
//       <Lists dishes={dishObj} />
//     </div>
//   );
// }




/******************************************* CONDITIONAL RENDERING */

// function App(props){
//   return (
//     <>
//     {props.auth ? <ConditionalTrue /> : <ConditionalFalse />}
//     </>
//   )
// }


/******************************************USE STATE */

// function App() {
//   /**
//    * useState returns a pair of
//    * current state variable and function to update current state variable
//    *  we can initialise the state by passing in the initial value in the useState method
//    * basically it allows us to use local state inside a stateless component
//    * https://medium.com/swlh/beginners-guide-to-using-usestate-useeffect-react-hooks-489dd4bc8663
//    */

//   let [emotion , setEmotion] = useState('happy');
//   console.log('check--->', emotion  , setEmotion);
//   return (
//     <>
//       <h1>hello , my current emotion is {emotion}. </h1>
//       <button onClick = {() => setEmotion('frustrated')}>FRUSTRATED</button>
//       <button onClick = {()=> setEmotion('tired')}>tired</button>
//     </>
//   )
// }




/************************************USE EFFECT */

// function App() {
//   /**
//    * The useEffect hook lets us implement lifecycle methods to tell the component to perform an “effect” after it is rendered.
//    * the useEffect hook allows us to use React’s lifecycle methods within a stateless component  
//    * it takes in a function and a dependency array that contains
//    *  list of state variables that rendering/re-rendering should watch out for. 
//    * If one of the items in the array changes, then the function that was written alongside it will be invoked.
//    * we can initialise the state by passing in the initial value in the useState method
//    */

//   let [emotion , setEmotion] = useState('happy');
//   let [trait , setTrait ] = useState('chill')
//   console.log('check--->', emotion  , setEmotion);
//   useEffect(()=>{
//     console.log('emotions right now ===>', emotion, 'traits right now---->', trait);
//     /** by passing empty array , we can mirror the effect of componentdidmount . the props and state
//      * inside the useeffect will always have the initial value, as nothing changes inside the array
//      */
//   }, []);

//   useEffect(()=>{
//     /** by passing dependency array , we can mirror the effect of componentdidupdate . 
//      */
//      console.log('here is the new emotion----->', emotion);
//   }, [emotion])

//   useEffect(()=>{
//     console.log('here is the new trait----->', trait);
//   }, [trait])
//   return (
//     <>
//       <h1>hello , my current emotion is {emotion} and trait is {trait} </h1>
//       <button onClick = {() => setEmotion('frustrated')}>MAKE FRUSTRATED</button>
//       <button onClick = {()=> setEmotion('tired')}>MAKE tired</button>
//       <button onClick = {()=> setTrait('bad-ill')}>MAKE bad ill</button>
//       <button onClick = {()=> setTrait('very bad-ill')}>MAKE bad ill</button>
//     </>
//   )
// }



/*********************************************USE REDUCER */
// function App() {
//   /**useReducer takes in 2 arguments, first is the reducer function and next is the initial state
//    * instead of useState , we use useReducer , where we have to keep track of the state
//    * Reducer function takes instance of the current state and returns updated state
//    * check how its being used in simpplr ui ---> const [intialState, dispatch] = useReducer(reducer,intialState)
//    */
//   const [checked, toggle] = useReducer(
//     (checked) => !checked,
//     false
//   )
//   return (
//     <>
//       <input type='checkbox' value = {checked} onChange = {toggle} />
//       <p>{checked ? 'checked---' : 'not checked'}</p>
//     </>
//   )
// }