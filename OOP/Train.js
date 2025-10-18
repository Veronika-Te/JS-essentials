class Train{
  constructor(color, lightsOn){
    this.color=color;
    this.lightsOn=lightsOn;
  }
  toggleLights(){
    this.lightsOn=!this.lightsOn
  }

  lightStatus(){
    console.log('Lights on?', this.lightsOn);
  }
  getSelf(){
    console.log(this);
  }

  getPrototype(){
    var proto = Object.getPrototypeOf(this);
    console.log(proto);
  }

}

class HighSpeedTrain extends Train{
  constructor(passengers, highSpeedOn, color, lightsOn){
    super(color, lightsOn);
    this.passengers=passengers;
    this.highSpeedOn=highSpeedOn;
  }
  toggleHighSpeed(){
    this.highSpeedOn = !this.highSpeedOn;
    console.log('High speed status:', this.highSpeedOn);
  }
}


const myFirstTrain =new Train('red', false);
console.log(myFirstTrain);
const mySecondTrain = new Train('blue', false);
const train5= new Train('blue', false);
const highSpeed1 = new HighSpeedTrain(200, false, 'green', false);
train5.toggleLights(); 
train5.lightsStatus(); 
highSpeed1.toggleLights();
highSpeed1.getPrototype();