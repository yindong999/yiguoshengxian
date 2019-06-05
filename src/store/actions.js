import { SYNC_UPDATE } from "./const"
export default {
	initCar(store){
		let cars = getCar();
		store.commit(SYNC_UPDATE,cars)
	},
	addGoodInCar(store,goodInfo){
		let cars = getCar();
		let isHas = cars.some(item=>{
			if (item._id === goodInfo._id){
				item.num++;
				return true;
			}
		});
		if(!isHas){
			goodInfo.num = 1;
			cars.push(goodInfo);
		};
		localStorage.cars = JSON.stringify(cars);
		store.commit(SYNC_UPDATE,cars)
	},
	reduceGoodIncar(store,goodInfo){
		let cars =getCar();
		cars = cars.filter(item=>{
			if(item._id == goodInfo._id){
				item.num--;
				if(item.num <= 0) return false;
			}
			return true;
		})
		localStorage.cars = JSON.stringify(cars)
        store.commit(SYNC_UPDATE, cars)
	},
	deleteGoodInCar(store,goodInfo){
		let cars =getCar();
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
function getCar(){
	return JSON.parse(localStorage.cars?localStorage.cars:"[]");
}