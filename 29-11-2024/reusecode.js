function filter(cat,response){
    var filter_data=response.filter((val,ind)=>{
    return val.category== cat
    })
    return filter_data
  }
  
  module.exports={
    filter
  }