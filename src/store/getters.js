export default {
   computeTotal(state){
        let cars = state.cars;
        let total = { price: 0, num: 0 }
        cars.forEach(item=>{
            total.price += item.commoditysComponentList[0].commodityPrice * item.num;
            total.num += item.num
        })
        total.price = total.price.toFixed(2);//保留2位小数 3.45
        return total
   }
}