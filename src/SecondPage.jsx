import React from 'react';
import ReactDOM from 'react-dom';
import {Toolbar, Page, Button, BackButton,Row,Col,Switch,Dialog} from 'react-onsenui';
import "./Style.css";

export default class SecondPage extends React.Component {

  constructor(props){
    super(props);

    this.intervalID = null;

    var f = this.fieldmake();
    
    this.state = {
      field: f,
      Bom: 0,
      Time: 0,
      operation: false,
      dialog: false,
     };

    this.pixel = this.pixel.bind(this);
    this.pixelname = this.pixelname.bind(this);
    this.fieldmake = this.fieldmake.bind(this);
    this.BomDeploy = this.BomDeploy.bind(this);
    this.numberpre = this.numberpre.bind(this);
    this.markset = this.markset.bind(this);
    this.aaa = this.aaa.bind(this);
    this.tonaripixel = this.tonaripixel.bind(this);
    this.gameover = this.gameover.bind(this);
    this.tick = this.tick.bind(this);
    this.gameclearJ = this.gameclearJ.bind(this);
    this.gameclear = this.gameclear.bind(this);
    

  }

fieldmake() {
  var  field =  [
        [{type: 9, state: 0},{type: 9, state: 0},{type: 9, state: 0},{type: 9, state: 0},{type: 9, state: 0},{type: 9, state: 0},{type: 9, state: 0},{type: 9, state: 0},{type: 9, state: 0},{type: 9, state: 0},{type: 9, state: 0}],
        [{type: 9, state: 0},{type: 0, state: 0},{type: 0, state: 0},{type: 0, state: 0},{type: 0, state: 0},{type: 0, state: 0},{type: 0, state: 0},{type: 0, state: 0},{type: 0, state: 0},{type: 0, state: 0},{type: 9, state: 0}],
        [{type: 9, state: 0},{type: 0, state: 0},{type: 0, state: 0},{type: 0, state: 0},{type: 0, state: 0},{type: 0, state: 0},{type: 0, state: 0},{type: 0, state: 0},{type: 0, state: 0},{type: 0, state: 0},{type: 9, state: 10}],
        [{type: 9, state: 0},{type: 0, state: 0},{type: 0, state: 0},{type: 0, state: 0},{type: 0, state: 0},{type: 0, state: 0},{type: 0, state: 0},{type: 0, state: 0},{type: 0, state: 0},{type: 0, state: 0},{type: 9, state: 0}],
        [{type: 9, state: 0},{type: 0, state: 0},{type: 0, state: 0},{type: 0, state: 0},{type: 0, state: 0},{type: 0, state: 0},{type: 0, state: 0},{type: 0, state: 0},{type: 0, state: 0},{type: 0, state: 0},{type: 9, state: 0}],
        [{type: 9, state: 0},{type: 0, state: 0},{type: 0, state: 0},{type: 0, state: 0},{type: 0, state: 0},{type: 0, state: 0},{type: 0, state: 0},{type: 0, state: 0},{type: 0, state: 0},{type: 0, state: 0},{type: 9, state: 0}],
        [{type: 9, state: 0},{type: 0, state: 0},{type: 0, state: 0},{type: 0, state: 0},{type: 0, state: 0},{type: 0, state: 0},{type: 0, state: 0},{type: 0, state: 0},{type: 0, state: 0},{type: 0, state: 0},{type: 9, state: 0}],
        [{type: 9, state: 0},{type: 0, state: 0},{type: 0, state: 0},{type: 0, state: 0},{type: 0, state: 0},{type: 0, state: 0},{type: 0, state: 0},{type: 0, state: 0},{type: 0, state: 0},{type: 0, state: 0},{type: 9, state: 0}],
        [{type: 9, state: 0},{type: 0, state: 0},{type: 0, state: 0},{type: 0, state: 0},{type: 0, state: 0},{type: 0, state: 0},{type: 0, state: 0},{type: 0, state: 0},{type: 0, state: 0},{type: 0, state: 0},{type: 9, state: 0}],
        [{type: 9, state: 0},{type: 0, state: 0},{type: 0, state: 0},{type: 0, state: 0},{type: 0, state: 0},{type: 0, state: 0},{type: 0, state: 0},{type: 0, state: 0},{type: 0, state: 0},{type: 0, state: 0},{type: 9, state: 0}],
        [{type: 9, state: 0},{type: 9, state: 0},{type: 9, state: 0},{type: 9, state: 0},{type: 9, state: 0},{type: 9, state: 0},{type: 9, state: 0},{type: 9, state: 0},{type: 9, state: 0},{type: 9, state: 0},{type: 9, state: 0}]];

       this.BomDeploy(field);
       this.numberpre(field);
        return field;

}


pixel(cell) {
  if(cell.state == 10){
    return "🚩";
  }

if(cell.state == 12)
{
   if(cell.type>=1 && cell.type<=8){
    return cell.type;
  }

  if(cell.type == 11){
    return "💣";
  }
  return "";
}
  return "";
}




pixelname(cell) {
  if(cell.state == 12){
    return "pixelopen";
  }
  
  return "pixelclose";
}



 BomDeploy(field) {

   var BomDeploynum =0;
   var x,y;

   while(BomDeploynum < 10)
   { 
     do{
         x = Math.floor(Math.random() * 9) + 1;
         y = Math.floor(Math.random() * 9) + 1;
     }while(field[y][x].type == 11);

     field[y][x].type = 11;
     BomDeploynum += 1;
   }
 }


 numberpre(field) {
   var a=0;

   for(var y=1;y<10; y++) 
   {
     for(var x=1;x<10; x++) 
     {

      if(field[y][x].type == 0) {
        a=0;
        
        if(field[y-1][x-1].type == 11){
          a += 1;
        }

        if(field[y-1][x].type == 11){
          a += 1;
        }

        if(field[y-1][x+1].type == 11){
          a += 1;
        }

        if(field[y][x-1].type == 11){
          a += 1;
        }

        if(field[y][x+1].type == 11){
          a += 1;
        }

        if(field[y+1][x-1].type == 11){
          a += 1;
        }

        if(field[y+1][x].type == 11){
          a += 1;
        }

        if(field[y+1][x+1].type == 11){
          a += 1;
        }

          field[y][x].type = a;
      }
    }
   }
 }



 markset(y,x) {
   

  if(this.intervalID == null)
  {
    this.intervalID = setInterval(this.tick, 1000);
  }

  var s =this.state;
  
  if(s.operation == true){

     if(s.field[y][x].state == 0){
      s.field[y][x].state = 10;
      s.Bom += 1;
     }

     else if(s.field[y][x].state == 10){
      s.field[y][x].state = 0;
      s.Bom -= 1;
     }
    }

    if(s.operation == false)
    {
      if(s.field[y][x].state == 0)
      {
        if(s.field[y][x].type == 11)
        {
          this.gameover();
        }

        if(0 < s.field[y][x].type && s.field[y][x].type < 9)
        {
          s.field[y][x].state = 12;
        }

        else if(s.field[y][x].type == 0)
        {
          this.tonaripixel(s.field,y,x);
        }
      }
    }
     this.setState(s);

     var result = this.gameclearJ(s.field);
  
     if(result == true){
       this.gameclear();
     }
  }


  gameover(){
    clearInterval(this.intervalID);
    this.intervalID = null;

    var s = this.state;
    s.dialog = true;
    s.Time = -1;
    this.setState(s);
  }

  gameclear(){
    clearInterval(this.intervalID);
    this.intervalID = null;
    
    var s = this.state;
    s.dialog = true;
    this.setState(s);
  }



  gameclearJ(field){

    for(var y=1;y<10;y++)
    {
      for(var x=1;x<10;x++)
      {
        if(field[y][x].type == 11)
        {
          if(field[y][x].state != 10)
          {
            return false;
          }
        }

        else
        {
          if(field[y][x].state == 0)
          {
            return false;
          }
        }
      }
    }
    return true;
  }


  tonaripixel(field,y,x)
  {
    if(field[y][x].state == 12)
    {
      return;
    }

    if(field[y][x].type == 9)
    {
      return;
    }

    field[y][x].state = 12;

    if(0 < field[y][x].type && field[y][x].type < 9)
    {
      return;
    }

     this.tonaripixel(field,y-1,x-1);
     this.tonaripixel(field,y-1,x);
     this.tonaripixel(field,y-1,x+1);
     this.tonaripixel(field,y,x-1);
     this.tonaripixel(field,y,x+1);
     this.tonaripixel(field,y+1,x-1);
     this.tonaripixel(field,y+1,x);
     this.tonaripixel(field,y+1,x+1);
    
  }


  componentWillUnmount() 
  {
    clearInterval(this.intervalID); 
  }



  tick() {
  var s = this.state;
  s.Time++; 
  this.setState(s);
}


  aaa() {
  
    var item = [];
    const f = [];
    
    for(let y=1;y<10;y++)
    {
      item = new Array();
    
      for(let x=1;x<10;x++)
      {
       item.push(<Col className={this.pixelname(this.state.field[y][x])} onClick={() => this.markset(y,x)}>{this.pixel(this.state.field[y][x])}</Col>);
      }
      f.push(<Row>{item.concat()}</Row>);
    }
    return (
       <div>{f}</div>
     );
  }
 


  BackPage1() {
    // this.props.ScoreUpdate();
    this.props.navigator.popPage();
  }

  BackPage2() {
    this.props.ScoreUpdate(this.state.Time);
    this.props.navigator.popPage();
  }



  render() {

    var message,score;

    if(this.state.Time < 0)
    {
      message="GAME OVER...";
      score="";
    }

    else{
      message="GAME CLEAR!!!";
      score="Time: " + this.state.Time + "秒";
    }

   
    return (
     <Page>
      <div className="haikei">
        <span className="Backbutton1" onClick={this.BackPage1.bind(this)}>BACK</span>
        <div className="box">
          <div className="Bomstyle">💣{this.state.Bom}/10</div>
          <div className="Timestyle">⌚️{this.state.Time}</div>
        </div>
        
          <div className="box2">
           <div className="switchs">
            <span>🔨</span>
            <Switch  onChange={(event) => {
                              var s = this.state; 
                              s.operation = event.value; 
                              this.setState(s);
                            }}
                    checked={this.state.operation}>
            </Switch>
            <span>🚩</span>
           </div>
         </div>
      <div>
        {this.aaa()}
      </div>

        <Dialog isOpen={this.state.dialog} onCancel={this.BackPage1.bind(this)}>
          <div>
            <p style={{textAlign: "center"}}>
              <div className="yohaku">
               {message}
                <div></div>
                {score}
              </div>
              <div></div>
              <span className="Backbutton2" onClick={this.BackPage2.bind(this)}>BACK</span>
            </p>
        </div>
      </Dialog>
      </div>
     </Page>
    );
  }
}