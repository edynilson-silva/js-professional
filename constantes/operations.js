// Mathematical operations on values other than numbers return NaN.
"b" * 3
"cde" - "e"
[1, 2, 3] * 2

// An exception: Single-number arrays.
[2] * [3] // Returns 6

// Also, remember that the + operator concatenates strings.
"a" + "b" // Returns "ab"

// Dividing zero by zero returns NaN.
0 / 0 // NaN


// Math library

// Generally, Math functions that are given non-numeric arguments will return NaN.
Math.floor("a")

// The square root of a negative number returns NaN, because Math.sqrt does not support imaginary or complex numbers.
Math.sqrt(-1)