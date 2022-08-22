/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let rowAndColumn = []
        for(let i=0;i<matrix.length;i++) {
            for(let j=0;j<matrix[i].length;j++) {
                if(matrix[i][j]==0) {
                    rowAndColumn.push([i,j])
                }
            }
        }

        for(let [r,c] of rowAndColumn) {
            zerofy(matrix,r,c)
        }
        return matrix
};

const zerofy = (mat,r,c) => {
    mat[r].fill(0);
    
    for(let i=0;i<mat.length;i++) {
        mat[i][c] = 0
    }
}