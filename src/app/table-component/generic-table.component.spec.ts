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
      const mockResponse = [
        { id: 1, title: 'mock todo 1', completed: false },
        { id: 2, title: 'mock todo 2', completed: true },
        { id: 3, title: 'mock todo 3', completed: false },
      ];
      mockDataService.getTodos.mockReturnValue(of(mockResponse))

      component.ngOnInit()

      expect(component.todos).toEqual(mockResponse)
    })
  })
});
