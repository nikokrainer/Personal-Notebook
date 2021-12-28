function makeRequest(site){
    return new Promise((resolve, reject) => {
      console.log(`Making request to ${site}`)
      if (site === 'Google' || site === 'google'){
        resolve("Google says 'hi'")
      } else{
        reject('Sorry... We can only connect to google.')
      }
    })
  }
  
   function processRequest(response){
    return new Promise ((resolve) => {
      console.log('processing response...')
      resolve(`extra information ${response}`)
    })
  }
  
 /* makeRequest("google").then((message) => {
    console.log(message) 
    return processRequest('added')
  }).then((processedResponse) => {
    console.log(processedResponse)
  }).catch((error)=>console.log(error)) */


  async function doWork(){
    try {
      const response = await makeRequest('dreak') // wait to do this before making a next one
      console.log('Response Received')
      console.log(response);
      const processedResponse = await processRequest(response)
      console.log(processedResponse)
    } catch (error) {
      console.log(error)
    }
  }

  doWork()