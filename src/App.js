import React from 'react';
import PropTypes from "prop-types";

const foodList = [
  {
    id: 1,
    name: '김밥',
    url: 'https://recipe1.ezmember.co.kr/cache/recipe/2016/04/08/1d26c0444e724bca8ed271b24da0057a1.jpg',
    rating: 4.5,
  },
  {
    id: 2,
    name: '떡볶이',
    url: 'https://recipe1.ezmember.co.kr/cache/recipe/2016/10/07/f43063e718c49d85ddce4880e4a41fcd1.jpg',
    rating: 4.7,
  },
]

function Food({ favorite, picture, rating }){
  return (
    <div>
      <h1>I love { favorite }</h1>
      <h1>{rating}/5.0</h1>
      <img src={picture} alt={favorite} />
    </div>
  );
}

Food.propTypes = {
  favorite: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
}

function App() {
  return (
    <div>
      Hello!!!
      {
        foodList.map( obj=>(
          <Food key={obj.id} favorite={obj.name} picture={obj.url} rating={obj.rating}/>
        ))
      }
    </div>
  );
}

export default App;
