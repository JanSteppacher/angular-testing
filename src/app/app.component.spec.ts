import { AppComponent } from './app.component';
import {RouterTestingModule} from "@angular/router/testing";
import {createComponentFactory, Spectator} from "@ngneat/spectator";

describe('AppComponent', () => {
  let spectator: Spectator<AppComponent>
  let component: AppComponent

  const createComponent = createComponentFactory({
    component: AppComponent,
    imports: [RouterTestingModule]
  })

  beforeEach(() => {
    spectator = createComponent()
    component = spectator.component
  })

  it('creates the component', () => {
    expect(component).toBeTruthy();
  });

  it(`has as title 'testing-workshop'`, () => {
    expect(component.title).toEqual('testing-workshop');
  });
});
