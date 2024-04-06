// define
//const arr = ["***"]
// add
//arr.push("*")
//arr.push(" ")
// remove last
//arr.pop()
//for (let j =0 ; j< size-1 ; j++){
//  arr.unshift(" ")
//}
// remove first
//arr.shift()
// print
//arr.join("")


function draw(size) {
  const arr = [" "]
  let place
  place = size
  for (place  = place ; place > 0; place--) {
    arr.push(" ")
  }
  for (let i = 0; i <= size; i++) {
    console.log(arr.join(""))
    arr.shift()
    arr.push(" *")
    
  }
}

draw(8)