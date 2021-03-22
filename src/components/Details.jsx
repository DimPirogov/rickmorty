import React, { Component } from 'react';

class Details extends Component {
    render() { 
        return (
            <center>
            <div className="visibleNameBio">
                <div className="nameTag">{this.props.sImages[this.props.sImage].name}</div>
                <img alt="singleimage"
                    className="singles"
                    src= {this.props.sImages[this.props.sImage].url}></img>
                    <p>{this.props.sImages[this.props.sImage].bio}</p>
            </div>
            </center>
        );
    }
}
 
export default Details;