import {SYNC_UPDATE,REDUCENUM} from './const'

export default {
    transfer(store,obj){
		store.commit('transfer',obj)
	},
    initCar(store){
        let cars = getData()
        store.commit(SYNC_UPDATE,cars)
    },
    /* 减少 */
    reduceNum(store,reduceInfor){
        // 使用定时器操作；
       
            let reduceCars = getData() ;// 从locaStorage中获取数据
            let newArr = reduceCars.filter(item=>{
                if(item.CommodityId === reduceInfor.CommodityId){
                    item.num --
                    if(item.num<=0)
                    return false
                }
               return true
            })
             localStorage.setItem('cars',JSON.stringify(newArr))  // 通知模拟的后台去更改数据
             store.commit(SYNC_UPDATE,newArr)
       
    },
    /* 添加物品到购物车的方法 */
    addGoodsToCar(store,goodsInfor){
        console.log(localStorage.getItem('cars'))
         
         setTimeout(()=>{
            let cars = getData()
            let res =  cars.some(item=>{
                 if(item.CommodityId === goodsInfor.CommodityId){
                     item.num ++  // 如果相等说明已经存在了要添加的数据；把数量加1就可以了；
                     return true
                 }
                 return false 
             })
             if(!res){ // 如果res为false；说明没有要添加的数据；
                goodsInfor.num = 1
                cars.push(goodsInfor)
                
             }
             store.commit(SYNC_UPDATE,cars) // 通知mutations中的相关方法更改state中的数据
             localStorage.setItem('cars',JSON.stringify(cars))  // 通知模拟的后台去更改数据
         },1)

     },
     deleteGoodInCar(store,goodInfo){
		let cars =getData();
		cars = cars.filter(item=>{
			if(item._id == goodInfo._id){
				return false;
			}
			return true;
		})
		localStorage.cars = JSON.stringify(cars)
        store.commit(SYNC_UPDATE, cars)
	}
}

// 依靠localStorage模拟后台
function getData(){
    return JSON.parse(localStorage.getItem('cars')?localStorage.getItem('cars'):'[]')
}