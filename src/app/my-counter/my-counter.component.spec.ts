import { Increment, Decrement, Reset } from '../store/counter.actions';
import { Store, StoreModule } from '@ngrx/store';
import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { MyCounterComponent } from './my-counter.component';
import { counterReducer } from '../store/counter.reducer';

describe('MyCounterComponent', () => {
  let store: Store<{ count: number }>
  let spectator: Spectator<MyCounterComponent>
  let component: MyCounterComponent

  const createComponent = createComponentFactory({
    component: MyCounterComponent,
    imports: [
      StoreModule.forRoot({ count: counterReducer }),
    ],
    providers: [
      {
        provide: Store,
        useValue: {
          dispatch: jest.fn(),
          select: jest.fn(),
        },
      },
    ],
  })

  beforeEach(() => {
    spectator = createComponent();
    component = spectator.component
    store = spectator.inject(Store);

    spectator.detectChanges();
  });

  it('should dispatch an Increment action when the increment button is clicked', () => {
    const incrementAction = new Increment();

    component.increment()

    expect(store.dispatch).toHaveBeenCalledWith(incrementAction);
  });

  it('should dispatch a Decrement action when the decrement button is clicked', () => {
    const decrementAction = new Decrement();

    component.decrement()

    expect(store.dispatch).toHaveBeenCalledWith(decrementAction);
  });

  it('should dispatch a Reset action when the reset button is clicked', () => {
    const resetAction = new Reset();

    component.reset()

    expect(store.dispatch).toHaveBeenCalledWith(resetAction);
  });
});
