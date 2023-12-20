class User {
  #password;
  constructor(username, password) {
    this.username = username;
    this.#password = password;
    this.notifications = [];
  }

  receiveNotification(notification) {
    this.notifications.push(notification);
  }
  requestToBeOrganizer() {
    // ...
  }
  requestToJoinEvent(event) {
    // ...
  }
}

class Organizer extends User {
  constructor(username, password) {
    super(username, password);
  }
  
  acceptRequest() {
    // ...
  }
  declineRequest() {
    // ...
  }
}

class Administrator extends Organizer {
  constructor(username, password) {
    super(username, password);
  }

  grantOrganizer(user) {
    // ...
  }
  grantAdministrator(user) {
    // ...
  }
  cancelEvent(event) {
    // ...
  }
}

class Event {
  constructor(name, organizer) {
    this.name = name;
    this.organizer = organizer;
    this.upvotes = 0;
    this.reviews = [];
    this.requests = [];
  }
}

class Notification {
  constructor(heading, body) {
    this.heading = heading;
    this.body = body;
  }
}

const user1 = new User("simonescano", "12345");