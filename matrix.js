// create a square matrix of size 3x3
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// print the matrix
console.log(matrix);

// access an element of the matrix by its row and column indices
console.log(matrix[1][1]); // prints 5

// change the value of an element of the matrix
matrix[1][1] = 10;

// print the modified matrix
console.log(matrix);

// transpose the matrix
let matrix_transpose = matrix[0].map((col, i) => matrix.map(row => row[i]));
console.log(matrix_transpose);

// find the determinant of the matrix
let matrix_determinant = (matrix[0][0] * matrix[1][1] * matrix[2][2]) + (matrix[1][0] * matrix[2][1] * matrix[0][2]) + (matrix[2][0] * matrix[0][1] * matrix[1][2]) - (matrix[0][2] * matrix[1][1] * matrix[2][0]) - (matrix[0][1] *
