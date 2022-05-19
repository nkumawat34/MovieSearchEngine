import React from 'react'
import Carousel from 'react-elastic-carousel'
import Card from '../MoviePage/Card';
export default function Collection(props) {

  var items1=props.action;
  var items2=props.love;
  var items3=props.black;
  const breakPoints = [ 
    {width:1,itemsToShow:1},
    {width:500,itemsToShow:2},
    {width:768,itemsToShow:3},
    {width:1100,itemsToShow:4}
  ]
  return (
    <>
    <h3 className='mt-4'>Action Movies</h3>
    <Carousel breakPoints={breakPoints}>
      {items1.map((item)=><Card Poster={item.Poster} Year={item.Year} Title={item.Title} />)}
    </Carousel>
    <h3 className='mt-4'>The Love Hub</h3>
    <Carousel breakPoints={breakPoints}>
      {items2.map((item)=><Card Poster={item.Poster} Year={item.Year} Title={item.Title} />)}
    </Carousel>
    <h3 className='mt-4'>Black Stories</h3>
    <Carousel breakPoints={breakPoints}>
      {items3.map((item)=><Card Poster={item.Poster} Year={item.Year} Title={item.Title}/>)}
    </Carousel>
    </>
  );
}
