import React from "react";
import { addfavourite, removeMovies } from "../actions";

class Moviecard extends React.Component{
handlingfavourite=()=>{  
    const {movie}=this.props;
    // console.log(movie);
    // if(this.favourited===false){
    this.props.dispatch(addfavourite(movie));
//    }
}
handlingUnfavourite=()=>{
   const {movie}=this.props;
   this.props.dispatch(removeMovies(movie));
}
     render(){
        const {movie}=this.props;
        return(
            <div>
                <div className="left"> <img src={movie.Poster} alt="Poster" /></div>
                <div className="right">
                    <div className="title">{movie.Title}</div>
                    <div className="plot">{movie.Plot}</div> 
                    <div className="footer">
                        <div className="runtime">Runtime:{movie.Runtime} minutes.</div>
                        {this.props.isfavourite?<button className="favourite-btn" onClick={this.handlingUnfavourite}>UnFavourite</button>:<button className="favourite-btn" onClick={this.handlingfavourite}>Favourite</button>}

                    </div>
                </div>
            </div>
        );
    }
}
export default Moviecard;