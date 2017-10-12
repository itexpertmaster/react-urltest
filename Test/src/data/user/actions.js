import * as api from './api'
import * as actionTypes from './actionTypes'



const updateUserProfile = data => ({
  type: actionTypes.UPDATEUSERPROFILE,
  data
})



const updateUserFeeds = data => ({
  type: actionTypes.UPDATEUSERFEEDS,
  data
})



const updatePublicFeeds = data => ({
  type: actionTypes.UPDATEPUBLICFEEDS,
  data
})



export const empty = () => ({
  type: actionTypes.EMPTY,
})



export const getUserProfile = () =>
	dispatch =>
		api.getUserProfile()
		.then(response => response.json())
		.then(response => {
  dispatch(updateUserProfile(response))
})

export const getUserFeed = () =>
	dispatch =>
		api.getUserFeed()
		.then(response => response.json())
		.then(response => {
  dispatch(updateUserFeeds(response.result.posts))}
)



export const getPublicFeed = () =>
	dispatch =>
		api.getPublicFeed()
		.then(response => response.json())
		.then(response => {
  dispatch(updatePublicFeeds(response.result.posts))
})
