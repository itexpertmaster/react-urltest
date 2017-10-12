import * as actionTypes from './actionTypes'



const initialState = {
  userProfile: undefined,
  userFeeds: undefined,
  publicFeeds: undefined
}



export const reducer = (state = initialState, action) => {
  switch (action.type) {
  case actionTypes.UPDATEUSERPROFILE:
    return {
      userProfile: action.data,
      userFeeds: state.userFeeds,
      publicFeeds: state.publicFeeds,
    }
  case actionTypes.UPDATEUSERFEEDS:
    return {
      userFeeds: action.data,
      userProfile: state.userProfile,
      publicFeeds: state.publicFeeds,
    }
  case actionTypes.UPDATEPUBLICFEEDS:
    return {
      publicFeeds: action.data,
      userProfile: state.userProfile,
      userFeeds: state.userFeeds,
    }
  case actionTypes.EMPTY:
    return initialState
  default:
    return state
  }
}
