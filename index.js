export default class ObjectStorage {
  constructor(){
    console.log("Object storage object created");
  }

  get(key){
    if(typeof(key) == 'string' && key.length > 3){
      let data = localStorage.getItem(key);
      if(data){
        if(data[0] == "{" || data[0] == "["){
          return JSON.parse(data);
        }else{
          return data;
        }
      }else{
        //throws error of "xxx is not defined"
        return undefined;
      }
    }else{
      console.error("'key' should exist, should be string & must be longer than 3 letters");
    }
  }

  set(key, data){
    if(key && data){
      if(typeof(data) == "object" || typeof(data) == "array"){
        let stringToSet = JSON.stringify(data);
        localStorage.setItem(key, stringToSet);
        return true;
      }else{
        // save as normal string;
        localStorage.setItem(key, data);
      }
    }
  }
}
