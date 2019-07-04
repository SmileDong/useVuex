
import * as types from './mutation-type'

const mutations = {
  [types.SUBMITINPUT] (state, firstInputValue) {
    state.firstInputValue = firstInputValue
  },
  [types.SUBMITINPUT1] (state, secondInputValue) {
    state.secondInputValue = secondInputValue
  },
  [types.SUBMITINPUT2] (state, thirdInputValue) {
    state.thirdInputValue = thirdInputValue
  }
}

export default mutations
