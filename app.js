//Quick Question #1
// new Set([1,1,2,2,3,4])
// // {1,2,3,4}


//Quick Question #2
// [...new Set("referee")]
// //"ref"


//Quick Questions #3
// let m = new Map();
// m.set([1,2,3], true);
// m.set([1,2,3], false);
// // 0: {Array(3) => true}
// // 1: {Array(3) => false}


//hasDuplicate
// hasDuplicate([1,3,2,1]) // true
// hasDuplicate([1,5,-1,4]) // false
// const hasDuplicate = arr => new Set(arr).size !== arr.length


//vowelCount
// vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
// vowelCount('Colt') // Map { 'o' => 1 }

// function vowelC(char){
//     return 'aeiou'.includes(char);
// }

// function vowelCount(vow){
//     const vMap = new Map():
//     for(let char of vow){
//         let lowerCaseChar = char.toLowerCase()
//         if(iV(lowerCaseChar)){
//             if(vMap.has(lowerCaseChar)){
//               vMap.set(lowerCaseChar, vMap.get(lowerCaseChar) + 1);
//             }  else {
//                 vMap.set(lowerCaseChar, 1);
//             } 
            
//         }
//     }
//     return vMap;
// }