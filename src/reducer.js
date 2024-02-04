export let initialState = {
    burger:false,
    windowSize:window.innerWidth,
    active:true,
}

export const reducer = (state=initialState,action)=>{
    switch(action.type){
        case 'BURGER':{
            return {...state,burger:action.payload}
        }
        case 'WINDOWSIZE':{
            return{...state,windowSize:action.payload}
        }
        default:{
            return state
        }
    }
}