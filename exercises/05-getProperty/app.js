var tortoise = {
    species: 'redfoot',
};
function getProperty(obj,key) {
  // your code here
  
  if (obj[key] != undefined){
      return obj[key]
  }else  { return undefined;
  }
};

console.log(getProperty(tortoise,'species'));
