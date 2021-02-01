import React from 'react';
import ReactDOM from 'react-dom';
import {Toolbar, Page, Button} from 'react-onsenui';

import SecondPage from './SecondPage'
import "./Style.css";

export default class MainPage extends React.Component {

  constructor(props){
  
    super(props);
    this.ScoreUpdate = this.ScoreUpdate.bind(this);
    this.state = {
       HighScore: 9000
     };

  }


  StartPage() {
    this.props.navigator.pushPage({component: SecondPage, props: {ScoreUpdate: this.ScoreUpdate}});
  }

  ScoreUpdate(NewScore) {

    if(NewScore < 0)
    {
      return;
    }
    if(this.state.HighScore > NewScore)
    {
      var s = this.state;
      s.HighScore= NewScore;
      this.setState(s);
    }

  }

  

  render() {
    const color = {"background－color":"red",};
    return(
      <Page>
      
        <div className = "contena">
          <div className = "hako">
            <div className="Title">Mine
                sweeper</div>
              <p className="Score">HighScore:{this.state.HighScore}秒</p>
              <span className="Startbutton" onClick={this.StartPage.bind(this)}>START</span>
            </div>
        </div>
      </Page>
    );
  }
}