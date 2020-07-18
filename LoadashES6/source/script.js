let floorNo=(no)=> Math.floor(no);


var number=floorNo(23.45);

let concat1=(number)=>console.log(`The rounded number is ${number}`);

concat1(number);

let sliceArray=(array,start,end)=>{
    var arr=[];
    for(let i=start;i<end;i++)
    {
        arr.push(array[i]);
    }
    console.log(arr);
}
var array=[1,2,3,4,5];
sliceArray(array,2,5);

let foreach1=(array)=>{
    array.forEach((item)=>{
      console.log(item);
    })
  }
  foreach1(array);

  let lowerCase=(str)=>{
      return str.toLowerCase();
}
let str=lowerCase("HELLO");
console.log(str);



var filterArray=(array)=>{
  var op=array.filter((item)=>item>2);
  console.log(op);
}

filterArray(array);