/* global XMLHttpRequest */

import React, { Component, PropTypes } from 'react'
import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  Text,
  Image
} from 'react-native'

import PageControl from 'react-native-page-control'
import GridView from 'react-native-gridview'
import ReadMore from '@expo/react-native-read-more-text'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as userActionCreators from './data/user/actions'
import * as userSelectors from './data/user/selectors'



const width = Dimensions.get('window').width



const styles = StyleSheet.create({
  containter: {
    flex: 1
  },
  profileView: {
    flexDirection: 'row'
  },
  profileDetailView: {
    flex: 1,
    margin: 10
  },
  profileImage: {
    margin: 10,
    width: width / 3,
    height: width / 3,
    borderRadius: width / 6
  },
  userFeedView: {
    width: width - 20,
    height: width - 20,
    alignSelf: 'center'
  },
  userFeedImage: {
    width: width - 20,
    height: width - 20
  },
  gridImage: {
    width: width / 3 - 2,
    height: width / 3 - 2,
    marginBottom: 2
  },
  listView: {
    paddingTop: 20
  },
  divider: {
    height: 2,
    backgroundColor: 'gray',
    marginBottom: 10
  },
  userNameText: {
    fontSize: 22,
    fontWeight: 'bold'
  }
})



class Main extends Component {
  static propTypes = {
    data: PropTypes.shape({
      userProfile: PropTypes.object,
      userFeeds: PropTypes.array,
      publicFeeds: PropTypes.array
    }),
    actions: PropTypes.shape({
      user: PropTypes.object
    })
  };

  constructor(props) {
    super(props)

    this.state = {
      currentPage: 0
    }
  }

  componentDidMount() {
    this.props.actions.user.getUserProfile()
    this.props.actions.user.getUserFeed()
    this.props.actions.user.getPublicFeed()
  }

  onScroll(event) {
    const offsetX = event.nativeEvent.contentOffset.x
    const pageWidth = width - 20
    this.setState({
      currentPage: Math.floor(( offsetX - pageWidth / 2 ) / pageWidth ) + 1
    })
  }

  _renderTruncatedFooter = handlePress => {
    return (
      <Text
        style={{ position: 'absolute', color: '#0000ff', bottom: 0, right: 0 }}
        onPress={handlePress}
      >
        {''}
        ... read more
      </Text>
    )
  }

  _renderRevealedFooter = handlePress => {
    return (
      <Text
        style={{ position: 'absolute', color: '#0000ff', bottom: 0, right: 0 }}
        onPress={handlePress}
      >
        show less
      </Text>
    )
  }

  renderContent() {
    const userProfile = this.props.data.userProfile
    const userFeedPhotos = this.props.data.userFeeds
    const popularFeedPhotos = this.props.data.publicFeeds

    if (
      userProfile === undefined 
      ||
      userFeedPhotos === undefined 
      ||
      popularFeedPhotos === undefined
    ) {

      return (
        <View>
          <Text>Loading</Text>
        </View>
      )

    }

    let userFeedImageViews = []

    userFeedPhotos.forEach(function(element) {

      userFeedImageViews.push(

        <Image
          style={styles.userFeedImage}
          source={{ uri: element.thumbnail }}
          key={element.objectId}
        />

      )

    })

    return (
      <View>

        <View style={styles.profileView}>

          <Image
            style={styles.profileImage}
            source={{ uri: userProfile.profileImage }}
          />
          
          <View style={styles.profileDetailView}>
            <Text style={styles.userNameText}>{userProfile.name}</Text>
            <ReadMore
              numberOfLines={3}
              renderTruncatedFooter={this._renderTruncatedFooter}
              renderRevealedFooter={ this._renderRevealedFooter}
              totalSize={width - 20}
              onReady={this._handleTextReady}
            >
              <Text
                style={{
                  fontSize: 15,
                  padding: 20,
                  paddingTop: 0,
                  paddingBottom: 0
                }}
              >
                {userProfile.bio}
              </Text>
            </ReadMore>
          </View>
        </View>

        <View style={styles.divider} />

        <ScrollView
          style={styles.userFeedView}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={this.onScroll.bind(this)}
        >
          {userFeedImageViews}
        </ScrollView>

        <PageControl
          style={{ alignSelf: 'center', marginTop: 20 }}
          numberOfPages={userFeedPhotos.length}
          currentPage={this.state.currentPage}
          hidesForSinglePage={true}
          pageIndicatorTintColor='gray'
          currentPageIndicatorTintColor='black'
          indicatorStyle={{ borderRadius: 5 }}
          currentIndicatorStyle={{ borderRadius: 5 }}
          indicatorSize={{ width: 10, height: 10 }}
          onPageIndicatorPress={this.onItemTap}
        />

       <GridView
          itemsPerRow={3}
          style = {styles.listView}
          data = {popularFeedPhotos}
          renderItem = { item => <Image source={{ uri: item.thumbnail }} style={styles.gridImage}/>}
       /> 
      </View>
    )
  }

  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        {this.renderContent()}
      </ScrollView>
    )
  }
}



export default connect(
  state => ({
    data: {
      userProfile: userSelectors.getUserProfile(state),
      userFeeds: userSelectors.getUserFeeds(state),
      publicFeeds: userSelectors.getPublicFeeds(state)
    }
  }),
  dispatch => ({
    actions: {
      user: bindActionCreators(userActionCreators, dispatch)
    }
  })
)(Main)
