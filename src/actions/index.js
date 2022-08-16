import { movies } from "../reducers"

//action types.
export const ADD_MOVIES="ADD_MOVIES"// imported in reducers
export const ADD_FAVOURITE="ADD_FAVOURITE"// imported in reducers
export const REMOVE_FAVOURITE="REMOVE_FAVOURITE" 
export const SHOW_FAVOURITE="SHOW_FAVOURITE" 
export const ADD_SEARCH_RESULT="ADD_SEARCH_RESULT" 

export function addMovies(movie){
    return {
        type:ADD_MOVIES,
        movies:movie//sending  array in App.js to be named as list
      }
}
export function addfavourite(movie){//here movie will be a object
    return {
        type:ADD_FAVOURITE,
        movies:movie
      }
}
export function removeMovies(movie){
   return{
      type:REMOVE_FAVOURITE,
      movies:movie
   }
}
export function showfavourite(val){
  // console.log(val)
    return {type:SHOW_FAVOURITE,
            value:val         
            }
}
//Figure it out

//as action creator returns a object but here it return another function,so we have to tell that when you get a action pass it like object but when you get a function like below then call it.This can be done by middlewares.
// this function will call API and dispatch the action(calling api) also.
export function handleMovieSearch(movie){
    const url=`http://www.omdbapi.com/?apikey=3ca5df7&t=${movie}`;
    // Redux Thunk is middleware that allows you to return functions, rather than just actions, within Redux
    return function (dispatch){
         fetch(url)//returns promise,asynchronous
         .then(response=>{
            return (response.json())})//as response is object so to get json
          .then(mov=> //this function take argument as past object so here past object would be json.
            dispatch(searching(mov))
            // console.log("mov-",mov)
            );
        }
}


export function searching(movie){
    return {  
      type:ADD_SEARCH_RESULT,
      movie:movie
    }
}