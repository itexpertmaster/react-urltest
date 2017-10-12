import { AsyncStorage } from 'react-native'
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import devTools from 'remote-redux-devtools'
import { persistStore, autoRehydrate } from 'redux-persist'
import createFilter from 'redux-persist-transform-filter'

import { reducer as dataReducer } from './data/reducer'

const appReducer = combineReducers({
  data: dataReducer,
})

const enhancer = compose(
	applyMiddleware(
		thunk,
	),
	devTools()
)

const store = createStore(
	appReducer,
	enhancer,
	autoRehydrate(),
)

export default store
