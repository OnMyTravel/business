class Trip {
  constructor({ 
    id,
    name,
    description,
    destination,
    user,
    days = []
   } = {}) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.destination = destination;
      this.user = user;
      this.days = days;
  }
}

module.exports = Trip;