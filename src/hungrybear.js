export class HungryBear {

  // setInterval(function(){
  //   //check and display time every second!
  // }, 1000);

  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
  }

  setHunger() {
    setInterval(() => {
      this.foodLevel--;
    }, 1000);
  }

  didYouGetEaten() {
    if (this.foodLevel > 0) {
      return false;
    } else {
      return true;
    }
  }

  dead() {
   if (this.foodLevel > 0) {
    return false ;
  } else {
    return true;
  }
}

feed() {
    this.foodLevel = 10;

}

}
