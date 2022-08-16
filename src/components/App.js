import React from "react";
import {data} from "../data"
import Navbar from "./Navbar";
import Moviecard from "./Moviecard";
// import { toHaveDisplayValue } from "@testing-library/jest-dom/dist/matchers";
import {addMovies,showfavourite} from "../actions"
import { StoreContext } from "../index";
class  App extends React.Component{
  componentDidMount(){
    //this function helps in api calls,etc.
    this.props.store.dispatch(addMovies(data));//sending action to reducers take a object as argument which is returned by a function here.
    this.props.store.subscribe(()=>{this.forceUpdate()});//forceUpdate forcefully rerender the app.
  }
  isfavourite=(movie)=>{
        const index=this.props.store.getState().movies.favourite.indexOf(movie);
        if(index !==-1){
             return true;
        }
        return false;
  }
  showfavourite=(val)=>{
    // console.log(val)
    this.props.store.dispatch(showfavourite(val))
  }

render(){
     const {movies,search}=this.props.store.getState();
     const {list,favourite,showfav}=movies;
    // console.log(this.props.store.getState());
    const array=(showfav)?favourite:list   

    return (

      ///////////*****************ADDING SEARCH RESULT TO LIST is not working***************/////////
  
    <div className="App">
 
      <Navbar dispatch={this.props.store.dispatch} search={this.props.store.getState().search}/>
      {/* removed dispatch,search from here props of Navbar because now using StoreContext.consumer in Navbar */}

      <div className="main"> 
        <div className="tabs">
           <button className={`tab ${showfav ? '':'active-tabs'}`} onClick={()=>this.showfavourite(false)}>Movies</button>
           <button className={`tab ${showfav ?'active-tabs':''}`} onClick={()=>this.showfavourite(true)}>Favourites</button>
                              {/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^this is for CSS purpose only */}
        </div>           
        
       <div className="List">
        {console.log("array",array)}
         {array.map((movie,index)=>{
             return <Moviecard movie={movie} key={`movies-${index}`} dispatch={this.props.store.dispatch}
             isfavourite={this.isfavourite(movie)}/>
         })}
       </div>
  
      </div>
    </div>
  ); 
}
}

// class AppWrapper extends React.Component{
//   render(){
//     return <StoreContext.Consumer>
//         {(store) => <App store={store}/>}
//     </StoreContext.Consumer>
//   }
// }

export default App ;