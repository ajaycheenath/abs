import React, { Component } from 'react';
import Icon from "../uic/Icon";
import ratingStyle from "../css/rating.css";
class Rating extends Component {
  render() {
    const stars = [1, 2, 3, 4, 5];
    const {rating} = this.props;
    return (
      <div>
        {
           stars.map((doctor, key) => {
            let color = rating > key ? ratingStyle.star + " " + ratingStyle["rating"+rating] : ratingStyle.star ;
            return <Icon  key={key} styleClass={color} name="star" />;
          })
        }
      </div>
    );
}
}

export default Rating;
