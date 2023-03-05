function Dot_product(v1, v2) {
    let result = 0
    let res
    for (let i = 0; i < v1.length; i++) {
        let j = i
        res = v1[i] * v2[j]
        result += res
    } return (result)
}
console.log(Dot_product([5, 2, 3], [1, 8, 9])); 
