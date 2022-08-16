//this will modify the state and return a new state.

import {combineReducers} from 'redux'
import { ADD_FAVOURITE, ADD_MOVIES,REMOVE_FAVOURITE,SHOW_FAVOURITE,ADD_SEARCH_RESULT} from "../actions";

const initialState={
  list:[],
  favourite:[],
  showfav:false
}
//returning new state on basis of action type.
export  function movies(state=initialState,action){
  switch(action.type){
     case ADD_MOVIES:
          return {
            //...state helps us to copy the object.
            ...state,list:action.movies
          }

      case ADD_FAVOURITE:
        return {
          ...state,favourite:[action.movies,...state.favourite] // here action.movies is a array.
}                  // new movie ^ to be added||^previous movie added. 
       
       case REMOVE_FAVOURITE:
         const filteredarray=state.favourite.filter(
          (movies) =>  movies.title !== action.movies.title);//still figuring out how to do it/////////
         return {
          ...state,
          favourite:filteredarray//filterarray is new array
         };

        case SHOW_FAVOURITE: 
        return {
              ...state,showfav:action.value
             }
       default:
            return state;
        }
}
//Handling search
const initialSearchState={
  result:{},
  showSearchResults:false
};

export function search (state=initialSearchState,action){
  switch(action.type){
     case ADD_SEARCH_RESULT:
       return {
        ...state,
        result:action.movie,
        showSearchResults:true
       }

      default:
        return state;
  }
}
const initialrootstate={
  movies:initialState,
  search:initialSearchState
}
// export default function rootreducers(state=initialrootstate,action){
//     return{
//       movies:movies(state.movies,action),//movies should be managed by this reducers
//       search:search(state.search,action)//search should be managed by this reducers
//     }
// } 
// ^^^ same thing 
//is done by
// this
//--------\
//          \
//           \
//           |
export default function rootReducer(state=initialrootstate,action){
return {
  movies:movies(state.movies,action),
  search:search(state.search,action)
    }
  }


//we cannot have multiple default function.
//it need to be exported to be used by anyother file.