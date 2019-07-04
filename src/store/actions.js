
import * as types from './mutation-type'

export const setInputValue = function ({commit, state}, {oneValue, twoValue}) {
  commit(types.SUBMITINPUT1, oneValue)
  commit(types.SUBMITINPUT2, twoValue)
}
