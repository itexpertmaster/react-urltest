import { createSelector } from 'reselect'



const userProfile = state => state.data.user.userProfile
const userFeeds = state => state.data.user.userFeeds
const publicFeeds = state => state.data.user.publicFeeds



export const getUserProfile = createSelector(
  [ userProfile ],
  (data) => data
)



export const getUserFeeds = createSelector(
  [ userFeeds ],
  (data) => data
)



export const getPublicFeeds = createSelector(
  [ publicFeeds ],
  (data) => data
)