const initialState = {
     dataStore: {},
     playplay :"Wetin you wan see sef"
}

const myReducer = (state=initialState, action) => {

     switch(action.type) {
          case "SET_DATASTORE" :
          return {...state, dataStore:action.payload }

          default :
          return state 
          }
       }

export default myReducer ;