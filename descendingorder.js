const arr = [54,23,12,97,100];
function arrsort(arr) {
    arr.sort((a,b)=>b-a);
    return arr;
}
    console.log(arrsort(arr));