console.log('Repeat:');
console.log('----------------');
function repeat(fn, n){
  for (let i=0; i<n; i++){
    console.log(fn());
  }
}

function hello(){
  return('Hello word');
}

function goodbye(){
  return('Goobye world')
}

console.log(repeat(hello, 5));
console.log(repeat(goodbye, 5));
console.log('----------------');

console.log('Filtered Names:');
// Return only names that begin with 'R'
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];



function filter(arr, fn) {  
  let newArray = [];
  // arr.forEach(el=>{
  //   // if (el[0]==='R'){
  //   //   newArray.push(el);
  //   // }
  // })
  for(let i=0; i<arr.length; i++){
    if(fn(arr[i])) {
      newArray.push(arr[i])
    }
  }
  return newArray;
}
// console.log(filter(myNames, ))

const filteredNames = filter(myNames, function(name) {
    // This is a "predicate function" - it's a function that only returns a boolean
    return name[0] === 'R';
});
console.log(filteredNames) // => ['Rich', 'Ray']
console.log('----------------');

console.log('Hazard Alert:');
console.log('----------------');
function hazardWarningCreator(typeOfWarning){
  let warningCounter = 0;
  
  return function(location){
    warningCounter+=1;
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
    console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);
  }
}

const rocksWarning=hazardWarningCreator('Rocks on the Road');
const mudSlideWarning=hazardWarningCreator('Active mudslide zone');
const wildFireWarning=hazardWarningCreator('Uncontrolled wildfire zone');

rocksWarning('Main St');
rocksWarning('Smith Ave');
wildFireWarning(`Smokey's House`);

console.log(rocksWarning);
console.log('----------------');