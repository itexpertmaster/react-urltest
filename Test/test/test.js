const should = require('should')


let assert = require('assert')
describe('<Main/>', function () {
  let userProfile = {
    thumbnail: 'http://test.com/testimage'
  }
  let userFeeds = [
    {
      thumbnail: 'http://test.com/testimage'
    },
    {
      thumbnail: 'http://test.com/testimage'
    }
  ]

  let publicFeeds = [
    {
      thumbnail: 'http://test.com/testimage'
    },
    {
      thumbnail: 'http://test.com/testimage'
    }
  ]

  let user = {
    userProfile,
    userFeeds,
    publicFeeds
  }

  user.should.have.properties(['userProfile', 'userFeeds', 'publicFeeds'])

  user.userProfile.should.have.property('thumbnail')
})