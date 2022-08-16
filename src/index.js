import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { legacy_createStore as createStore,applyMiddleware, } from 'redux';
import thunk from 'redux-thunk'
// import { createStore } from 'redux';
import rootreducers from "./reducers"
// const logger=function({dispatch,getState}){
//   return function(next){
//     return function(action){
//       console.log("action-type",action.type);
//       next(action);
//     }
//   }
// }

//this helps when action returns function not object.
const logger=({dispatch,getState})=> (next)=>(action)=>{
   if(typeof action !=='function'){
      console.log("action-type",action.type);
   }   
        next(action);}

// const thunk= ({dispatch,getState})=>(next)=>(action)=>{
//     if(typeof action==='function'){
//       action(dispatch);
//       return
//     }
//     next(action)
// }

//instead of using this thunk middleware we have imported it from redux-thunk
        
const store=createStore(rootreducers,applyMiddleware(logger,thunk));
//newcase:rootreducers(undefined,action)
//previouscase:movie(undefined,action) 
// const show=true;
// export const StoreContext=createContext();

// class Provider extends React.Component{
//   render(){
//     const {store}=this.props;
//     return (
//       <StoreContext.Provider value={store}>{this.props.Children}</StoreContext.Provider>
//     )
//   }
// }

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(
      // <Provider store={store}>
      // <App/>
      // </Provider>
        <div>
        <App store={store}/>
        </div>
);
