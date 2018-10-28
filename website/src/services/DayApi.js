import { Deserializer } from 'jsonapi-serializer'
import Day from '../models/Day'
import Paragraph from '../models/Paragraph'
import Image from '../models/Image'

const dayDeserializer = new Deserializer({
  paragraph: {
    valueForRelationship: (paragraph, included) => {
      return new Paragraph(included)
    }
  },
  image: {
    valueForRelationship: (image, included) => {
      return new Image(included)
    }
  }
});

class DayApi {
  constructor({ httpClient } = {}) {
    this.httpClient = httpClient;
  }

  get(id) {
    return this.httpClient.get(`/days/${id}`)
      .then((jsonAPIDay) => {
        return dayDeserializer.deserialize(jsonAPIDay)
      })
    .then((day) => {
      return new Day(day);
    })
  }

  register(token) {
    return this.httpClient.post('/users/register/facebook', {"access_token": token})
  }
}

export default DayApi