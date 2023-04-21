import {createComponentFactory, Spectator} from "@ngneat/spectator";
import {FormComponent} from "./form.component";

describe('FormComponent', () => {
  let spectator: Spectator<FormComponent>
  let component: FormComponent

  const createComponent = createComponentFactory({
    component: FormComponent
  })

  beforeEach(() => {
    spectator = createComponent()
    component = spectator.component
  })

  it('creates the component', () => {
    expect(component).toBeTruthy();
  });
});
