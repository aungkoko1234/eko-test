function removeParenReverse(text) {
    testStr = text.split('(').join("")
    testStr = testStr.split(')').join("")
    console.log(text);
    let splitArray = testStr.split("");
    let reverseArray = splitArray.reverse();
    return reverseArray.join("");
}

console.log("test",removeParenReverse("foo(bar)"));
console.log(removeParenReverse("(bar)"));
console.log(removeParenReverse("foo(bar)blim"));
console.log(removeParenReverse("foo(foo(bar))blim"));