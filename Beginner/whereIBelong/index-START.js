/*
Return the lowest index at which a value (second argument) should be
inserted into an array (first argument) once it has been sorted. The
returned value should be a number. E.g

whereIBelong([1,2,3,4], 1.5) // should return 1 because it is greater
than 1(index 0), but less than 2(index 1).
*/


//sort and forloop method
function whereIBelong(arr, num) {
   // Code goes here
   function whereIBelong(arr, num) {
      arr.sort((a, b) => {
         return a - b
      })
      for (var i = 0; i < arr.length; i++) {
         if (arr[i] >= num) {
            return i
         }
      }
      return arr.length
   }
}

//for loop
function whereIBelong(arr, num) {
   var counter = 0
   for (i = 0; i < arr.length; i++) {
      if (num > arr++[++i]) {
         counter++;
      }
   }
   return counter
}

//while loop method
function whereIBelong(arr, num) {
   arr.sort((a, b) => {
      return a - b
   })
   let counter = 0;
   while (num > arr[counter]) {
      counter++
   }
   return counter
}

//index of
function whereIBelong(arr, num) {
   arr.push(num)
   arr.sort((a, b) => a - b)
   return arr.indexOf(num)
}

module.exports = whereIBelong