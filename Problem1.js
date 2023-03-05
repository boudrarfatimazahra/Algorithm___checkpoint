var set1 = [3, 1, 7, 9, 30]
var set2 = [2, 5, 4, 1, 9, 3]
var result = []
var i
var j
var sum = 0

for (i = 0; i < set1.length; i++) {
    var Distinct = true
    for (var j = 0; j < set2.length; j++) {
        if (set1[i] === set2[j]) {
            Distinct = false
            break
        }
    }
    if (Distinct === true) {
        result.push(set1[i])
    } console.log('--' + result)
}
for (j = 0; j < set2.length; j++) {
    for (i = 0; i < set1.length; i++) {
        var Distinct = true
        if (set2[j] === set1[i]) {
            Distinct = false
            break
        }
    }
    if (Distinct === true) {
        result.push(set2[j])
    }
}
//sum of distinct Arrays
console.log(result);
for (var y = 0; y < result.length; y++) {
    sum += result[y]
}
console.log(sum);
