import {createComponentFactory, Spectator, SpyObject} from "@ngneat/spectator/jest";
import {GenericTableComponent} from "./generic-table.component";
import {DataService} from "../services/data.service";
import {of} from "rxjs";

describe('GenericTableComponent', () => {
  let spectator: Spectator<GenericTableComponent>
  let component: GenericTableComponent
  let mockDataService: SpyObject<DataService>

  const createComponent = createComponentFactory({
    component: GenericTableComponent,
    mocks: [DataService],
    detectChanges: false
  })

  beforeEach(() => {
    spectator = createComponent()
    component = spectator.component

    mockDataService = spectator.inject(DataService)
  })

  it('creates the component', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('gets the data from data service', () => {
      const testData = [{country: 'TestCountry', leader: 'TestLeader'}]
      mockDataService.getData.mockReturnValue(of(testData))

      component.ngOnInit()

      expect(component.data).toEqual(testData)
    })
  })
});
