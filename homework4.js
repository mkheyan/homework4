const triangleStars = function (height) {
    let maxNumberOfStars = 2*height - 1;
    let numberOfStars = maxNumberOfStars;
    while (0<numberOfStars) {
        let str = '';
        let numberOfSpaces = (maxNumberOfStars - numberOfStars)/2;
        let i = 0;
        while (i<numberOfSpaces) {
            str = str + ' ';
            i++;
        }

        i=0;
        while (i<numberOfStars){
            str = str + '*';
            i++;
        }
        console.log(str);
        numberOfStars = numberOfStars - 2;
    }
};

triangleStars(7);


const multiToSingle = function (arr) {
    let i=0;
    let count=0;
    let returnArray=[];
    while(i<arr.length) {
        let tmpArray=arr[i];
        let j=0;
        while (j<tmpArray.length) {
            returnArray[count] = tmpArray[j];
            count++;
            j++;
        }
        i++;
        
    }
    return returnArray;
}

console.log(multiToSingle([[1,2,3],[4,5,6]]));

const findMinMax = function (arr, bin) {
    if(bin){
        let i = 1;
        let max = arr[0];
        while(i<arr.length){
            if (max < arr[i]) {
                max = arr[i];
            } i++;
        } 
        return max;
    } else {
        let i = 1;
        let min = arr[0];
        while (i<arr.length) {
            if (min>arr[i]){
                min = arr[i];
            } i++;
        } return min;
    }
}

console.log(findMinMax([15,-8,-29, 104,78], true));


const forEach = function (arr, fn) {
    let a = 0
    while (a<arr.length) {
        fn(arr[a]);
        a++;
    }
}

forEach(['AUA', 'CS', '2022'], function(val) {

    console.log(val);
  });


  const sum = function (arr) {
    let s = 0  
    let i = 0;
      while (i<arr.length){
        s = s + arr[i];
        i++;
      } return s;
  }

  console.log(sum([5,6,10,14]));

  const reverse = function (str) {
    let revStr = '';
    let i=str.length-1;
    while (i>=0) {
        revStr=revStr+str[i];
        i--;
    }return revStr;
  }
console.log(reverse('hello'));


const checkerboard = function (n) {
     let i = 0;
     while (i<n) {
         let str = '';
         if (i%2 === 1) {
             str = ' ';
         }

         let j=0;
         while (j<n) {
            str=str+'* ';   
             j++;
         }
         console.log(str);
         i++;
     }
}

checkerboard(5);