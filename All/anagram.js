var input = ["eat", "tea", "tan" ,"bat" , "nat", "ate" ];
var arr = [];
// var output = [["eat" ," tea" ,"ate"],["tan", "nat"], ["bat"]]

for (let i = 0; i < input.length; i++) {
    let element = input[i];

    arr.push(element.split("").sort().join());

}

console.log(arr);

let map = {};

arr.forEach(el, idx => {
    map[el] = map[el] ? map[el]++ : 1;
});

console.log(map);