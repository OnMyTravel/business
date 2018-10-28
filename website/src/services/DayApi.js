import { Deserializer } from 'jsonapi-serializer'
import Day from '../../../business/models/Day'
import Paragraph from '../../../business/models/Paragraph'
import Image from '../../../business/models/Image'

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
}

export default DayApi