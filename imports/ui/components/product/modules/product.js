import './actionHandlers';

// ------------------------------------
// Constants
// ------------------------------------
export const CREATE_PRODUCT = 'CREATE_PRODUCT'

// ------------------------------------
// Actions
// ------------------------------------
export function createProduct (product) {
  return {
    type    : CREATE_PRODUCT,
    payload : product
  }
}


export const actions = {
  createProduct
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [CREATE_PRODUCT]    : (state, action) => { handleCreateProduct(action.payload); return state }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {}
export default function productReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}