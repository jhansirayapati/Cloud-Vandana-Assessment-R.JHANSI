const str = "I am Rayapati jhansi"
function reverseWords(str) {
    let reverseWordArr = str.split(" ").map(word => word.split("").reverse().join(""));
    return reverseWordArr.join(" ");
}
    console.log(reverseWords(str));