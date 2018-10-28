import DayApi from '../../services/DayApi'
import Day from '../../models/Day'
import Paragraph from '../../models/Paragraph'
import Image from '../../models/Image'

describe('Services | API | Days', () => {

  let dayAPI;
  let httpClientMock;

  describe('.get()', () => {
    beforeEach(() => {
      httpClientMock = {
        get: jest.fn().mockImplementation(() => Promise.resolve({
          "included": [
            {
              "type": "paragraph",
              "id": "5b5f82c0633153d09309d81d",
              "attributes": {
                "content": [
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vestibulum eros et mattis efficitur.",
                  "uris feugiat magna nisl, non tempus mi feugiat non. Nulla vulputate turpis massa, nec vulputate est rhoncus at."
                ]
              }
            },
            {
              "type": "image",
              "id": "53d09309d81d5b5f82c06331",
              "attributes": {
                "caption": "Ma légende de titre",
                "path": "554f67f2753f7a8bd31423b609fdd5ed.png",
                "gps": {
                  "_id": "5b6c39fbe2d49b52b95ed2b2"
                }
              }
            },
            {
              "type": "paragraph",
              "id": "5b5f82d1633153d09309d81e",
              "attributes": {
                "content": [
                  "Mauris id metus nunc. Morbi vel ligula blandit, gravida magna sit amet, malesuada orci. In hac habitasse platea dictumst. Suspendisse potenti.",
                  "enean in dolor sed libero volutpat elementum a non enim. Vivamus et condimentum justo, ac gravida mi."
                ]
              }
            }
          ],
          "data": {
            "type": "day",
            "id": "5b5f81ad633153d09309d81b",
            "attributes": {},
            "relationships": {
              "content": {
                "data": [
                  {
                    "type": "paragraph",
                    "id": "5b5f82c0633153d09309d81d"
                  },
                  {
                    "type": "paragraph",
                    "id": "5b5f82d1633153d09309d81e"
                  }
                ]
              }
            }
          }
        }))
      }

      dayAPI = new DayApi({
        httpClient: httpClientMock
      });
    })


    test('should have a property get()', () => {
      expect(dayAPI.get).toBeDefined();
    })

    test('should contact the API', () => {
      // when
      const promise = dayAPI.get('5b5f81ad633153d09309d81b')

      // then
      return promise.then(() => {
        expect(httpClientMock.get).toHaveBeenCalledWith('/days/5b5f81ad633153d09309d81b');
      })
    })

    test.only('should return a Day', () => {
      // when
      const promise = dayAPI.get('5b5f81ad633153d09309d81b')

      // then
      return promise.then((day) => {
        expect(day).toBeInstanceOf(Day);
        expect(day).toEqual(new Day({
          "id": "5b5f81ad633153d09309d81b",
          "content": [
            new Paragraph({
              "id": "5b5f82c0633153d09309d81d",
              "content": [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vestibulum eros et mattis efficitur.",
                "uris feugiat magna nisl, non tempus mi feugiat non. Nulla vulputate turpis massa, nec vulputate est rhoncus at."
              ]
            }),
            // new Image({
            //   "id": "5b5f82d1633153d09309d81e",
            //   "caption": 'Ma légende de titre'
            // }),
            new Paragraph({
              "id": "5b5f82d1633153d09309d81e",
              "content": [
                "Mauris id metus nunc. Morbi vel ligula blandit, gravida magna sit amet, malesuada orci. In hac habitasse platea dictumst. Suspendisse potenti.",
                "enean in dolor sed libero volutpat elementum a non enim. Vivamus et condimentum justo, ac gravida mi."
              ]
            }),
          ]
        }))
        expect(day.content[0]).toBeInstanceOf(Paragraph)
      })
    })
  })
})
