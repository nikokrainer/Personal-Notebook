//CALLBACK VERSION

const userLeft = false
const userWatchingCatMeme = false

// function watchTutorialCallback(callback, errorCallback){
//     if(userLeft) {
//         errorCallback({
//             name: 'User Left',
//             message: ':('
//         })
//     }  else if(userWatchingCatMeme){
//         errorCallback({
//             name: 'Use Watching Cat Meme',
//             message: 'NikoJeLud < Cat'
//         })
//     }   else{
//         callback('Thumbs up and Subscribe')
//     }
// }

// watchTutorialCallback((message) => {
//     console.log('Success: ' + message)
// }, (error) => {
//     console.log(error.name + ' ' + error.message);
// })

function watchTutorialPromise() {
  return new Promise((resolve, reject) => {
    if (userLeft) {
      reject({
        name: "User Left",
        message: ":(",
      })
    } else if (userWatchingCatMeme) {
      reject({
        name: "Use Watching Cat Meme",
        message: "NikoJeLud < Cat",
      })
    } else {
      resolve("Thumbs up and Subscribe")
    }
  })
}

watchTutorialPromise()
  .then((message) => {
    console.log("Success: " + message)
  })
  .catch((error) => {
    console.log(error.name + " " + error.message)
  })
