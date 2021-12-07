class User {
    constructor(id, name) {
      this.id = id
      this.name = name
    }
  
    hasAcces() {
      return this.name === "Bob"
    }
  }
  
  class NullUser {
    constructor() {
      this.id = -1
      this.name = "Guest"
    }
  
    hasAccess() {
      return false
    }
  }
  
  const users = [new User(1, "Bob"), new User(2, "Martin")]
  
  function getUser(id) {
    const user = users.find((user) => user.id === id)
  
    if (user == null) {
      return new NullUser()
    } else {
      return user
    }
  }
  
  const printUserId = (id) => {
    const user = getUser(id)
  
    if (user.hasAcces()) {
      console.log("You have access")
    } else {
      console.log("You are not allowed here")
    }
  }
  