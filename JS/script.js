//function MyArray(a) {
//    let summ = 0;
//    for (let i = 0; i < a.length; i++) {
//        summ+=a[i];
//    }
//    let summ2 = summ / a.length;
//    console.log(summ2)
//}
//
//let b = MyArray([2, 4, 5, 7,12,23]);
//
//
//function Damn(a) {
//    let Full = 0;
//    let Semi = 0;
//    for (let i = 0; i < a.length; i++) {
//        if (a[i] % 2 == 0) {
//            Full += a[i]
//        } else {
//            Semi += a[i];
//        }
//    }
//    let finish = Full - Semi;
//    console.log(finish);
//}
//
//
//Damn([2, 5, 7, 9, 10]);

//1 2 3
//4 5 6
//7 8 9
let arr=[[1,2,3],[4,5,6],[7,8,9]];
//console.log(arr[1][2]);
for(let i = 0; i < arr.length; i++ ){
    for(let j=0;j<arr[i].length;j++){
        console.log(arr[i][j]);
    }
}