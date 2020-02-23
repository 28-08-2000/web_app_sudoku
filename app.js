var cel = document.querySelector("#btn");
var matrix;
cel.addEventListener("click", function() {

    // var num = window.prompt("enter a num", ' ');
    // cel.innerHTML = num;
    // var cc = document.querySelector("#ez").value;
    // alert(cc);
    // alert(cc % 10);
    alert("Solving.....");
    // alert(document.getElementById("table").rows[0].cells[1].input.value);
    // alert(val);
    var zz = document.querySelector("#zz").value;
    var zo = document.querySelector("#zo").value;
    var zt = document.querySelector("#zt").value;
    var zth = document.querySelector("#zth").value;
    var zf = document.querySelector("#zf").value;
    var zfi = document.querySelector("#zfi").value;
    var zs = document.querySelector("#zs").value;
    var zse = document.querySelector("#zse").value;
    var ze = document.querySelector("#ze").value;
    var oz = document.querySelector("#oz").value;
    var oo = document.querySelector("#oo").value;
    var ot = document.querySelector("#ot").value;
    var oth = document.querySelector("#oth").value;
    var off = document.querySelector("#of").value;
    var ofi = document.querySelector("#ofi").value;
    var os = document.querySelector("#os").value;
    var ose = document.querySelector("#ose").value;
    var oe = document.querySelector("#oe").value;
    var tz = document.querySelector("#tz").value;
    var to = document.querySelector("#to").value;
    var tt = document.querySelector("#tt").value;
    var tth = document.querySelector("#tth").value;
    var tf = document.querySelector("#tf").value;
    var tfi = document.querySelector("#tfi").value;
    var ts = document.querySelector("#ts").value;
    var tse = document.querySelector("#tse").value;
    var te = document.querySelector("#te").value;
    var thz = document.querySelector("#thz").value;
    var tho = document.querySelector("#tho").value;
    var tht = document.querySelector("#tht").value;
    var thth = document.querySelector("#thth").value;
    var thf = document.querySelector("#thf").value;
    var thfi = document.querySelector("#thfi").value;
    var ths = document.querySelector("#ths").value;
    var thse = document.querySelector("#thse").value;
    var the = document.querySelector("#the").value;
    var fz = document.querySelector("#fz").value;
    var fo = document.querySelector("#fo").value;
    var ft = document.querySelector("#ft").value;
    var fth = document.querySelector("#fth").value;
    var ff = document.querySelector("#ff").value;
    var ffi = document.querySelector("#ffi").value;
    var fs = document.querySelector("#fs").value;
    var fse = document.querySelector("#fse").value;
    var fe = document.querySelector("#fe").value;
    var fiz = document.querySelector("#fiz").value;
    var fio = document.querySelector("#fio").value;
    var fit = document.querySelector("#fit").value;
    var fith = document.querySelector("#fith").value;
    var fif = document.querySelector("#fif").value;
    var fifi = document.querySelector("#fifi").value;
    var fis = document.querySelector("#fis").value;
    var fise = document.querySelector("#fise").value;
    var fie = document.querySelector("#fie").value;
    var sz = document.querySelector("#sz").value;
    var so = document.querySelector("#so").value;
    var st = document.querySelector("#st").value;
    var sth = document.querySelector("#sth").value;
    var sf = document.querySelector("#sf").value;
    var sfi = document.querySelector("#sfi").value;
    var ss = document.querySelector("#ss").value;
    var sse = document.querySelector("#sse").value;
    var se = document.querySelector("#se").value;
    var sez = document.querySelector("#sez").value;
    var seo = document.querySelector("#seo").value;
    var set = document.querySelector("#set").value;
    var seth = document.querySelector("#seth").value;
    var sef = document.querySelector("#sef").value;
    var sefi = document.querySelector("#sefi").value;
    var ses = document.querySelector("#ses").value;
    var sese = document.querySelector("#sese").value;
    var see = document.querySelector("#see").value;
    var ez = document.querySelector("#ez").value;
    var eo = document.querySelector("#eo").value;
    var et = document.querySelector("#et").value;
    var eth = document.querySelector("#eth").value;
    var ef = document.querySelector("#ef").value;
    var efi = document.querySelector("#efi").value;
    var es = document.querySelector("#es").value;
    var ese = document.querySelector("#ese").value;
    var ee = document.querySelector("#ee").value;

    // if (zz == 0)
    //     document.getElementById("#zz").style.backgroundColor = "red";
    // else
    //     document.getElementById("#zz").style.backgroundColor = "green";
    matrix = [
        [zz, zo, zt, zth, zf, zfi, zs, zse, ze],
        [oz, oo, ot, oth, off, ofi, os, ose, oe],
        [tz, to, tt, tth, tf, tfi, ts, tse, te],
        [thz, tho, tht, thth, thf, thfi, ths, thse, the],
        [fz, fo, ft, fth, ff, ffi, fs, fse, fe],
        [fiz, fio, fit, fith, fif, fifi, fis, fise, fie],
        [sz, so, st, sth, sf, sfi, ss, sse, se],
        [sez, seo, set, seth, sef, sefi, ses, sese, see],
        [ez, eo, et, eth, ef, efi, es, ese, ee]
    ];
    var tempmatrix;
    tempmatrix = [
        [zz, zo, zt, zth, zf, zfi, zs, zse, ze],
        [oz, oo, ot, oth, off, ofi, os, ose, oe],
        [tz, to, tt, tth, tf, tfi, ts, tse, te],
        [thz, tho, tht, thth, thf, thfi, ths, thse, the],
        [fz, fo, ft, fth, ff, ffi, fs, fse, fe],
        [fiz, fio, fit, fith, fif, fifi, fis, fise, fie],
        [sz, so, st, sth, sf, sfi, ss, sse, se],
        [sez, seo, set, seth, sef, sefi, ses, sese, see],
        [ez, eo, et, eth, ef, efi, es, ese, ee]
    ];
    // var tempmatrix;
    // for (var i = 0; i < N; i++) {  //cannot allocate matrix with for loop
    //     for (var j = 0; j < N; j++) {
    //         tempmatrix[i][j] = matrix[i][j];
    //     }
    // }
    // for (var i = 0; i < N; i++) {//here overridden by the printin instructions
    //     for (var j = 0; j < N; j++) {
    //         if (matrix[i][j] == 0) {
    //             document.getElementById("table").rows[i].cells[j].style.backgroundColor = "red";
    //         } else {
    //             document.getElementById("table").rows[i].cells[j].style.backgroundColor = "green";
    //         }
    //     }
    // }
    // alert(matrix[0][3]);
    // alert(matrix[4][3]);
    // alert(matrix[6][2]);

    // backtracking algorithm

    var N = 9;

    function usedInrow(matrix, row, num) { //check if the no is present in this row
        for (var col = 0; col < N; col++) {
            if (matrix[row][col] == num)
                return true;
        }
        return false;
    }

    function usedIncol(matrix, col, num) { //check if the no is present in this col
        for (var row = 0; row < N; row++) {
            if (matrix[row][col] == num)
                return true;
        }
        return false;
    }

    function usedInbox(matrix, boxstartrow, boxstartcol, num) { //check if the no is present in that box
        for (var row = 0; row < 3; row++) {
            for (var col = 0; col < 3; col++) {
                if (matrix[row + boxstartrow][col + boxstartcol] == num)
                    return true;
            }
        }
        return false;
    }

    // function findunassignedlocation(matrix, row, col) {
    //     alert("i ma in find unassidngned");
    //     for (row = 0; row < N; row++)
    //         for (col = 0; col < N; col++)
    //             if (matrix[row][col] == 0)
    //                 return true;
    //     return false;
    // }

    function isSafe(matrix, row, col, num) {
        //  alert("i am in is safe");
        return !usedInrow(matrix, row, num) &&
            !usedIncol(matrix, col, num) &&
            !usedInbox(matrix, row - row % 3, col - col % 3, num) &&
            matrix[row][col] == 0;
    }

    function solveSudoku(matrix) {
        var row = 0,
            col = 0; //assign any garbage value to row and col 
        //  alert("i am in solvesudoku");
        //check for any empty i.e 0 cell
        // if (!findunassignedlocation(matrix, row, col)) //this will increment the row and col for a 0 or empty
        //     return true;
        var flag = 0; //find any empty cells
        for (row = 0; row < N; row++) {
            for (col = 0; col < N; col++) { //increment the row and col values
                if (matrix[row][col] == 0) {
                    flag = 1;
                    break;
                }
            }
            if (flag == 1)
                break;
        }
        if (flag == 0)
            return true;
        //    alert(row);
        //   alert(col);
        for (var num = 1; num <= 9; num++) {
            //check for each num is it safe
            if (isSafe(matrix, row, col, num)) { //is safe check all the conditions
                //  alert("i am after is safe");
                //  alert(num);
                matrix[row][col] = num; //assign num 

                if (solveSudoku(matrix)) //recursively call itself
                    return true;

                matrix[row][col] = 0;
            }
        }
        return false; //if nothing is safe return false
    }


    if (solveSudoku(matrix) == true) {
        alert("Get ready!!!!!!");

        for (var i = 0; i < N; i++) {
            for (var j = 0; j < N; j++) {
                document.getElementById("table").rows[i].cells[j].innerHTML = matrix[i][j];
                if (matrix[i][j] == tempmatrix[i][j]) //changing the bgcolor after writing innerhtml
                    document.getElementById("table").rows[i].cells[j].style.backgroundColor = "#ff7f50";
                else
                    document.getElementById("table").rows[i].cells[j].style.backgroundColor = "#2ed573";
            }
        }
    } else {
        alert("no solution exist");
    }

});



// var row_1 = document.getElementById("1strow");
// var row_2 = document.getElementById("2ndrow");
// var row_3 = document.getElementById("3rdrow");
// //var n = window.prompt("enter the size of your puzzle:");

// button.addEventListener("click", function() {
//     for (var i = 0; i < 3; i++) {
//         for (var j = 0; j < n; j++) {
//             smatrix[i][j] = row_1[j];
//         }
//     }
// });
// alert(smatrix[0][0]);

// function print() {
//     for (var i = 0; i < 3; i++) {
//         for (var j = 0; j < n; j++)
//             document.write(smatrix[i][j]);
//     }
//
// var rowno;
// var colno;
// var matrix;
// var el;


// for (var r = 0; r < rowno; r++) {
//     var x = document.getElementById('myTable').rows[r];
//     for (var c = 0; c < colno; c++) {
//         el = window.prompt("enter a no", 0);
//         x.Cells[c].innerHTML = el;
//     }
// }