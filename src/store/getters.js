export default {
    computeTotal(state){
        let arr = state.cars
        var total = {price:0,num:0}
       
            arr.forEach(item=>{
                total.num += item.num
               
                total.price += Number(item.SellPrice) * item.num
            })
            total.price = total.price.toFixed(2)
            return total
    }
}