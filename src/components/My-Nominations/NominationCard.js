import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Leaderboard from '../Leaderboard'

export default class NominationCard extends React.Component{



	constructor(props) {
    super(props);
    this.state ={
		nominated: true,
	}
}


async NominationToggle()
{
 if(this.state.nominated===true)
	{
    toast.success("Removed successfully")
    this.setState({nominated:!(this.state.nominated)});
	}
	else
	{
    toast.success("Added to wishlist successfully")
    this.setState({nominated:!(this.state.nominated)});
	}
}

  
	render() {

    return (
      <Leaderboard.Container>
      <Leaderboard direction="row-reverse" >
        <Leaderboard.Pane>
          <Leaderboard.Title data-aos="fade-up">{this.props.title}</Leaderboard.Title>
          <Leaderboard.SubTitle data-aos="fade-up">{this.props.subtitle}</Leaderboard.SubTitle>
          <Leaderboard.Button onClick={this.NominationToggle.bind(this)}>{(this.state.nominated) ? "Remove" : "Add to wishlist"} </Leaderboard.Button>
        </Leaderboard.Pane> 
        <Leaderboard.Pane>
         <Leaderboard.Image data-aos="flip-up" src={this.props.image} alt={"Image is not available"} />
        </Leaderboard.Pane>
      </Leaderboard>
    </Leaderboard.Container>

    );
  }
}
