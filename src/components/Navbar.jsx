import React from "react";
import { StoreContext } from "..";
import { handleMovieSearch,addMovies } from "../actions";
class Navbar extends React.Component{
   constructor(props){
     super(props);
     this.state={
        searchText:''
     } 
   }

handleAddToMovies=(movies)=>{
    console.log("moviesinfunc->",movies);
    // console.log("moviesinfunc->");
    this.props.dispatch(addMovies(movies));
    this.setState({
        showSearchResults:false
    });
}
handleSearch=()=>{
    const {searchText}=this.state;
    // console.log("searchtext",searchText);
    this.props.dispatch(handleMovieSearch(searchText));    //here we can call an API but we should not because this is component part of UI so we should keep fetch logic seperate from this logic,so now we will store in STORE.
}
handleChange=(e)=>{
    this.setState({searchText: e.target.value});
//handleMovieSearch is a action cretor which will call an api and further dispatch
};
    render(){
        // const {showSearchResults}=this.state
        const {result,showSearchResults}=this.props.search;
        console.log("result",result)
        console.log("showSearchResults",showSearchResults)
        return(
            <div className="nav">
                <div className="search-container"></div>
                <input onChange={this.handleChange}/>
                <button className="search-btn" onClick={this.handleSearch}>SEARCH </button>
                { showSearchResults &&
                    <div className="search-results">
                        <div className="searchresult">
                            <img src={result.Poster} alt="search-pic"/>
                            <div className="movie-info">
                                <span>{result.Title}</span>
                                <button onClick={()=>{
                                    this.handleAddToMovies(result)}}>Add To Movies</button>
                            </div>
                        </div>
                    </div>
                    } 
            </div>
        );
    }
}

// class NavWrapper extends React.Component{
//     render(){
//         return 
//         <StoreContext.Consumer>
//         {/* search also need to be passed as now we are exporting NavWrapper so search will be props of NavWrapper not Navbar in app. */}
//         {(store)=>{<Navbar dispatch={store.dispatch} search={this.props.search}/>}}
//         </StoreContext.Consumer>
//     }
// }

export default Navbar;