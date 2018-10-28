import { Deserializer } from 'jsonapi-serializer'
import Trip from '../models/Trip'

const tripDeserializer = new Deserializer({
  days: {
    valueForRelationship(relationship) {
      return {
        id: relationship.id,
      }
    }
  },
  users: {
    valueForRelationship(relationship) {
      return {
        id: relationship.id,
      }
    }
  }
});

class TripApi {
  constructor({ httpClient } = {}) {
    this.httpClient = httpClient;
  }

  getAll() {
    return this.httpClient.get('/trips')
      .then((rawTrips) => {
        return tripDeserializer.deserialize(rawTrips)
      })
      .then((trips) => {
        return trips.map((rawTrip) => {
          return new Trip(rawTrip)
        })
      });
  }

  get(id) {
    return this.httpClient.get(`/trips/${id}`)
      .then((rawTrip) => {
        return tripDeserializer.deserialize(rawTrip)
      })
      .then((data) => {
        return new Trip(data)
      });
  }
}

export default TripApi