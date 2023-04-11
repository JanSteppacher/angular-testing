import { HomeComponent } from './home.component';
import {createComponentFactory, Spectator} from "@ngneat/spectator";
import spyOn = jest.spyOn;

describe('HomeComponent', () => {
  let component: HomeComponent;
  let spectator: Spectator<HomeComponent>

  const createComponent = createComponentFactory({
    component: HomeComponent
  })

  beforeEach(() => {
    spectator = createComponent()
    component = spectator.component
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  describe('getAccessKey', () => {
    it('sets the access key', () => {
      const spy = spyOn(window, 'alert')

      component.getAccessKey()

      expect(localStorage.getItem('key')).toEqual('testing-workshop')
      expect(spy).toHaveBeenCalledWith('Getting Access Key was successful')
    })
  })

  describe('removeAccessKey', () => {
    it('removes the access key', () => {
      const spy = spyOn(window, 'alert')

      component.removeAccessKey()

      expect(localStorage.getItem('key')).toBeNull()
      expect(spy).toHaveBeenCalledWith('Removing Access Key was successful')
    })
  })
});
