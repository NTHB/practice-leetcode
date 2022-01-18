/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let myFlowerBed = flowerbed
    myFlowerBed.unshift(0)
    myFlowerBed.push(0)
    
    for(let i = 1; i<=(myFlowerBed.length-2); i++){
        if(myFlowerBed[i-1]==0 && myFlowerBed[i]==0 && myFlowerBed[i+1]==0){
            myFlowerBed[i] = 1
            n--
        }
    }
    return n <= 0
};