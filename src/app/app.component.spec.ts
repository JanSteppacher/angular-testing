import { AppComponent } from './app.component';
import {createComponentFactory, Spectator} from "@ngneat/spectator";

describe('AppComponent', () => {
  let spectator: Spectator<AppComponent>
  let component: AppComponent

  const createComponent = createComponentFactory({
    component: AppComponent
  })

  beforeEach(() => {
    spectator = createComponent()
    component = spectator.component
  })

  it('creates the component', () => {
    expect(component).toBeTruthy();
  });
});
