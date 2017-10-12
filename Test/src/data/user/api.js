const apiUrl = 'http://api.pumpup.com/'



const endPoints = {
  getUserProfile: '1/classes/User/318381',
  getUserFeed: '1/functions/feed/profile/load-batch',
  getPublicFeed: '1/functions/feed/popular/load-batch'
}



/**
 * Get User Profile Data from Server
 */
export const getUserProfile = () => {
  const body = {
    _method: 'GET',
    _version: '5.0.5',
    _SessionToken:
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOjI3MDc3OTgsImV4cCI6MTUzOTUzNTI1OTM2OH0.UK2qP1yk9QLk_Bkx1Ly0RPaitRYtec8ojZhzYRc0D-g'
  }

  return fetch(apiUrl + endPoints.getUserProfile, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
}



/**
 * Get User Feed Photos from Server
 */
export const getUserFeed = () => {
  const body = {
    isThumbnailsOnly: true,
    limit: 5,
    userId: 2707798,
    _method: 'POST',
    _version: '5.0.5',
    _SessionToken:
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOjI3MDc3OTgsImV4cCI6MTUzOTUzNTI1OTM2OH0.UK2qP1yk9QLk_Bkx1Ly0RPaitRYtec8ojZhzYRc0D-g'
  }

  return fetch(apiUrl + endPoints.getUserFeed, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
}



/**
 * Get Public Feed from server
 */
export const getPublicFeed = () => {
  const body = {
    isThumbnailsOnly: true,
    limit: 18,
    _method: 'POST',
    _version: '5.0.5',
    _SessionToken:
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOjI3MDc3OTgsImV4cCI6MTUzOTUzNTI1OTM2OH0.UK2qP1yk9QLk_Bkx1Ly0RPaitRYtec8ojZhzYRc0D-g'
  }

  return fetch(apiUrl + endPoints.getPublicFeed, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
}
