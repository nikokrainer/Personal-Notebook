const recordVideoOne = new Promise((resolve, reject) => {
    resolve("Video 1 Recorded")
  })
  
  const recordVideoTwo = new Promise((resolve, reject) => {
    resolve("Video 2 Recorded")
  })
  
  const recordVideoThree = new Promise((resolve, reject) => {
    resolve("Video 3 Recorded")
  })
  
  // if we want them to execute in paralel, when it's done running with all three of them, then it's gonna run .then() method
  Promise.all([
      recordVideoOne, 
      recordVideoTwo, 
      recordVideoThree])
      .then((messages) => { //it's gonna give array of all messages
      console.log(messages);
  })
  
  // if we want to do something as soon as one of the videos is completed
  Promise.race([
      recordVideoOne,
      recordVideoTwo,
      recordVideoThree
  ]).then((message)=>{
      console.log(message);
  })