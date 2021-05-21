//3. Hacer una función que reciba como parámetro tres números enteros y que lo ordene de
//mayor a menor.

function deMayorAMenor(_num1, _num2, _num3) {
    let mayor;
    let menor;
  
    if (_num1 > _num2) {
      if (_num1 > _num3) {
        mayor = _num1;
      } else {
        mayor = _num3;
      }
    } else if (_num2 > _num3) {
      mayor = _num2;
    } else {
      mayor = _num3;
    }
  
    if (_num1 < _num2) {
      if (_num1<_num3) {
        menor = _num1
      } else {
        menor = _num3
      }
      
    } else if(_num2 < _num3){
      menor = _num2
    }else{
      menor = _num3
    }
    let medio = _num1 + _num2 + _num3 - (mayor + menor)
    console.log(mayor, medio, menor);
    
  }
  
  deMayorAMenor(9, 3, 5);