import React from 'react';
import NominationCard from './NominationCard.js';

export default class MyNominations extends React.Component{



	constructor(props) {
    super(props);
    }
    

  
	render() {
    // console.log(this.props)

    return (
        <>
      <h1 style={{textAlign: "center" }}>The movies you enjoyed a lot!</h1>
      <div style={{display:"flex", flexDirection:"row" , justifyContent:"center" , flexBasis: "30%" , flexWrap: "wrap"}}>
      {this.props.movie.map(item => (
            <NominationCard id = {item.id}  title={item.title} subtitle={item.subTitle} image={item.image}  />
        ))}
      </div>
    </>
    );
  }
}
