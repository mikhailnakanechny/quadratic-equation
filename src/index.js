module.exports = function solveEquation(equation) {
  // your implementation
    // const solutions = solveEquation('2 * x^2 - 10 * x + 12');
    //   console.log(solutions); // [2, 3]

    str=equation.replace(/[' *]/g, '');
    str=str.replace('^2','');

    var arrSplit = str.split('x');
    var arrOut =[];

    var a = +arrSplit[0];
    var b = +arrSplit[1];
    var c = +arrSplit[2];

  //  console.log(' a: ' + a + ' b: ' + b +' c: '+ c);

    arrOut[0] = Math.round((-b-Math.sqrt(b*b-4*a*c))/(2*a));
    arrOut[1] = Math.round((-b+Math.sqrt(b*b-4*a*c))/(2*a));

    arrOut=arrOut.sort(function(x,y){return x-y;});

    return arrOut;

 //   console.log(' x1: '+ arrOutput[0] + ' x2: ' + arrOutput[1]);
};
