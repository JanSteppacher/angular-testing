
import {createComponentFactory, Spectator} from "@ngneat/spectator";
import {ReactiveFormsModule} from "@angular/forms";
import {FormComponent} from "./form.component";

describe('FormComponent', () => {
  let spectator: Spectator<FormComponent>
  let component: FormComponent

  const createComponent = createComponentFactory({
    component: FormComponent,
    imports: [ReactiveFormsModule]
  })

  beforeEach(() => {
    spectator = createComponent()
    component = spectator.component
  })

  it('creates the component', () => {
    expect(component).toBeTruthy();
  });

  describe('onSubmit', () => {
    it('sets submitted to true', () => {
      component.onSubmit()

      expect(component.submitted).toBeTruthy()
    })
  })
});
