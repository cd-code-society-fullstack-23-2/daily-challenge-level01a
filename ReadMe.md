## Problem: StartOz

## Instructions:
You are given a string. Your task is to write a JavaScript function called "startOz" that creates a new string using the first two characters of the original string, following certain conditions. Include the first character only if it is 'o', and include the second character only if it is 'z'.

To solve this challenge, you need to examine the string and extract the first two characters. If the first character is 'o', you should include it in the new string. If the second character is 'z', you should also include it. If either of these conditions is not met, you should exclude the character from the new string.

## Examples:

- If you call `startOz("ozymandias")`, it should return `"oz"` because the first character is 'o' and the second character is 'z', so both characters are included in the new string.

{Try It!}(node .guides/01/try-it-01.js)

- If you call `startOz("bzoo")`, it should return `"z"` because the first character is not 'o', but the second character is 'z', so only the second character is included in the new string.

{Try It!}(node .guides/01/try-it-02.js)

- If you call `startOz("oxx")`, it should return `"o"` because the first character is 'o', but the second character is not 'z', so only the first character is included in the new string.

{Try It!}(node .guides/01/try-it-03.js)

Write your code for the `startOz` function inside the function body. Use the `return` statement to return the new string that consists of the first two characters, following the given conditions.

## Submit

Additional Test Cases:
Test Case 1:
```javascript
booz // Expected output: ""
oz // Expected output: "oz"
zzz // Expected output: ""
ooz // Expected output: "o"
zo // Expected output: "z"
```

## Problem: IntMax

## Instructions:
You are given three integer values: a, b, and c. Your task is to write a JavaScript function called "intMax" that determines the largest value among the three.

To solve this challenge, you need to compare the three integers and find the maximum value. In other words, you need to find the number that is larger than both the other numbers.

## Examples:
- If you call `intMax(1, 2, 3)`, it should return `3` because 3 is the largest value among 1, 2, and 3.

{Try It!}(node .guides/02/try-it-01.js)

- If you call `intMax(1, 3, 2)`, it should return `3` because 3 is the largest value among 1, 3, and 2.

{Try It!}(node .guides/02/try-it-02.js)

- If you call `intMax(3, 2, 1)`, it should return `3` because 3 is the largest value among 3, 2, and 1.

{Try It!}(node .guides/02/try-it-03.js)

Write your code for the `intMax` function inside the function body. Use the `return` statement to return the largest value among the three integers.

## Submit


Additional Test Cases:
Test Case 1:
```javascript
5 10 7// Expected output: 10
-1 -5 -3 // Expected output: -1
0 0 0 // Expected output: 0
100 200 150 // Expected output: 200
-10 0 10 // Expected output: 10
```