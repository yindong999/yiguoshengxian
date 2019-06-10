import {SYNC_UPDATE,REDUCENUM} from './const'

export default{
     [SYNC_UPDATE](state,newCar){
         state.cars = newCar
     } ,
     transfer(state,obj){
        state.obj = obj
    }
}