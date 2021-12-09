/* 
    Create an example of a JavaScript Singleton.
    After the first object is created, it will return additional
    References to itself
*/

let obj = (() => {
  let objInstance //private variable
  function create() { //private function to create methods and properties
    let _isRunning = false
    let start = function () {
      _isRunning = true
    }
    let stop = function () {
      _isRunning = false
    }
    let currentState = function () {
      return _isRunning
    }

    return {
      start: start,
      stop: stop,
      currentState: currentState,
    }
  }

  return {
    //private function to create methods and properties
    getInstance: function () {
      if (!objInstance) {
        objInstance = create()
      }
      return objInstance
    },
  }
})()

let obj1 = obj.getInstance()
let obj2 = obj.getInstance()
obj1.start()
console.log(obj1.currentState());
console.log(obj2.currentState());

//funkcija koja kreira object morra bit iffe(imidiately invoked function)
//napravimo varijablu object instance 
//napravimo funkciju create koja ce zapravo kreirat objekt u koji ce bit pohranjene funkcije koje smo napravili
//iffe funkciju vracamo sa returnom u kojem deklariramo funkciju s kojom provjerujemo ako objInstance postoji, ako ne postoji ga napravimo pomocu create funkcije, a ako postoji ga samo vratimo
//napravimo novu varijablu random = obj.getInstance() pomocu koje spremamo instance u nju ali ne radimo novi instance nego vec postojeci
