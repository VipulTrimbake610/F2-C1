/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
      //Write your code here , just console.log
      console.clear();
    arr.map(function(element, index, list){
        if(element.profession === "developer"){
            console.log(element);
        }
    })
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    console.clear();
    arr.forEach(function(element, index, list){
        if(element.profession === "developer"){
            console.log(element);
        }
    })
  }
  
  function addData() {
    //Write your code here, just console.log
    console.clear();
    const intern = {id:4,name:"susan",age:"20",profession:"intern"};
    arr.push(intern);
    console.log(intern);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    console.clear();
    const a =  arr.filter(function(element,index,list){
        return (element.profession!="admin")?true:false;
    })
    console.log(a)

  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    console.clear();
    let arr2 = [
        { id: 5, name: "manish", age: "20", profession: "developer" },
        { id: 6, name: "gaurav", age: "21", profession: "developer" },
        { id: 7, name: "aditya", age: "19", profession: "intern" },
      ];

    
    console.log(arr.concat(arr2));

  }