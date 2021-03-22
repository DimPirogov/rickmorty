import React, { Component } from "react";

class SingleImage extends Component {
    render() {
        return (
        <div className="warper" >
            {this.props.sImages.map((singleImage) => (
            <img key={singleImage.id}
            className="singles"
            alt="SingleImage"
            src={this.props.sImages[singleImage.id].url}
            onClick={() => this.props.showBioP(singleImage.id)}
            ></img>))}
        </div>
        );
    }
}

export default SingleImage;
