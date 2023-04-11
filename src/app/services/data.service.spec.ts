import {DataService} from "./data.service";
import {createServiceFactory, SpectatorService} from "@ngneat/spectator";

describe('DataService', () => {
  let spectator: SpectatorService<DataService>
  let service: DataService

  const createService = createServiceFactory({
    service: DataService
  })

  beforeEach(() => {
    spectator = createService()
    service = spectator.service
  })

  describe('getData', () => {
    it('returns the data', done => {
      const testData = [{country: 'TestCountry', leader: 'TestLeader'}]
      service.data = testData

      service.getData().subscribe(result => {
        expect(result).toEqual(testData)
      })
      done()
    })
  })
});
