import { actionTypes } from '../actions'

/**
 * @function secretWordReducer
 * @param {object} state
 * @param {object} action
 * @returns {string} - New secret word payload form action
 */
export default (state=null, action) => {
    switch (action.type) {
        case actionTypes.SET_SECRET_WORD:
            return action.payload
        default:
            return state;
    }
}