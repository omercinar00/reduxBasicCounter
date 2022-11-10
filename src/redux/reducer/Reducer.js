import { ARTTIR, AZALT, SIFIRLA } from "../type/Type"

const initialState = {
    counter : 0
}

const counterReducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case ARTTIR:
    return { counter : state.counter + 1}
  case AZALT:
    return { counter : state.counter - 1}
  case SIFIRLA:
    return { counter : 0}
  default:
    return state
  }
}
export default counterReducer;
