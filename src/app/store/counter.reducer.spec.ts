import * as reducer from './counter.reducer'

describe('counterReducer', () => {
  describe('increment Action', () => {
    it('increments state', () => {
      const newState = reducer.counterReducer(1, {type: '[Counter Component] Increment'})

      expect(newState).toBe(2)
    })
  })

  describe('decrement Action', () => {
    it('decrements state', () => {
      const newState = reducer.counterReducer(0, {type: '[Counter Component] Decrement'})

      expect(newState).toBe(-1)
    })
  })

  describe('reset Action', () => {
    it('resets state', () => {
      const newState = reducer.counterReducer(42, {type: '[Counter Component] Reset'})

      expect(newState).toBe(0)
    })
  })

  describe('unknown Action', () => {
    it('returns state', () => {
      const newState = reducer.counterReducer(12, {type: '[Counter Component] Unknown'})

      expect(newState).toBe(12)
    })
  })
})
