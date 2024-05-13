// Trabalho de Matematica - João Pedro, Nicolas, Gabriel Alves e Vinicius
function okbutton() {
  var txt1 = document.getElementById('poligno_name')
  var txt2 = document.getElementById('poligno_value')
  var txt3 = document.getElementById('medida_alt')
  var txtvalue = (txt1.value)
  var txtvalue2 = (txt2.value)
  var txtvalue3 = (txt3.value)
  var p_name = document.getElementById('n_p')
  var solid = document.getElementById('solid')
  var s_name = document.getElementById('n_s')
  var txtvalue2_2 = txtvalue2 * txtvalue2

  if (txtvalue == 1){
    var raio = txtvalue2 / 2;
    var circunferencia = raio ** 2
    var area = 3.14 * circunferencia
    var volume1 = (raio ** 3) * 3.14
    var volume2 = (3 / 4) * volume1
    p_name.innerHTML = `Circulo<hr><br>Area: ${area.toFixed(2)}</h3>`
    s_name.innerHTML = `Esfera<hr><br>Volume: ${volume2.toFixed(2)}</h3>`
  }
  else if (txtvalue == 3) {

    var area = (txtvalue2_2 * Math.sqrt(3)) / 4
    p_name.innerHTML = `Triângulo Equilátero<hr><br>Area: ${area.toFixed(2)}</h3>`
    s_name.innerHTML = `Esfera<hr><br>**FORMULA**</h3>`
    volume = (area * txtvalue3)
    solid.innerHTML = `Piramide de base triangular<hr><br>Volume: ${volume.toFixed(2)}`

  }
  else if (txtvalue == 4) {

    var area_quadrado = txtvalue2 ** 2
    var volume_cubo = area_quadrado * txtvalue3
    p_name.innerHTML = `Quadrado <hr><br>Area: ${area_quadrado.toFixed(2)} </h3>`
    solid.innerHTML = `Cubo<hr><br>Volume: ${volume_cubo.toFixed(2)}`
    s_name.innerHTML = `Esfera<hr><br>**FORMULA**</h3>`

  }

  else if (txtvalue == 5) {

    var area = (5 * txtvalue2_2 * Math.sqrt(3)) / 4
    p_name.innerHTML = `Pentágono <hr><br>Area: ${area.toFixed(2)}</h3>`
    solid.innerHTML = `Piramide de base pentagonal<hr><br>Volume:`
    s_name.innerHTML = `Esfera<hr><br>**FORMULA**</h3>`
    var volume = (area * txtvalue3)
    solid.innerHTML = `Piramide de base pentagonal<hr><br>Volume: ${volume.toFixed(2)}`

  }
  else if (txtvalue == 6) {

    var area = (6 * txtvalue2_2 * Math.sqrt(3)) / 4
    p_name.innerHTML = `Hexágono <hr><br>Area: ${area.toFixed(2)}</h3>`
    s_name.innerHTML = `Esfera<hr><br>**FORMULA**</h3>`
    var volume = (area * txtvalue3)
    solid.innerHTML = `Piramide de base hexagonal<hr><br>Volume: ${volume.toFixed(2)}`

  }

  else if (txtvalue == 7) {

    var area = (7 * txtvalue2_2 * Math.sqrt(3)) / 4
    p_name.innerHTML = `Heptágono <hr><br>Area: ${area.toFixed(2)}</h3>`
    s_name.innerHTML = `Esfera<hr><br>**FORMULA**</h3>`
    var volume = (area * txtvalue3)
    solid.innerHTML = `Piramide de base heptagonal<hr><br>Volume: ${volume.toFixed(2)}`
  }
  else if (txtvalue == 8) {

    var area = (8 * txtvalue2_2 * Math.sqrt(3)) / 4
    p_name.innerHTML = `Octógono <hr><br>Area: ${area.toFixed(2)}</h3>`
    s_name.innerHTML = `Esfera<hr><br>**FORMULA**</h3>`
    var volume = (area * txtvalue3)
    solid.innerHTML = `Piramide de base octogonal<hr><br>Volume: ${volume.toFixed(2)}`
  }

  else if (txtvalue == 9) {

    var area = (9 * txtvalue2_2 * Math.sqrt(3)) / 4
    p_name.innerHTML = `Eneágono <hr><br>Area: ${area.toFixed(2)}</h3>`
    s_name.innerHTML = `Esfera<hr><br>**FORMULA**</h3>`
    var volume = (area * txtvalue3)
    solid.innerHTML = `Piramide de base eneagonal<hr><br>Volume: ${volume.toFixed(2)}`

  }
  else if (txtvalue == 10) {

    var area = (10 * txtvalue2_2 * Math.sqrt(3)) / 4
    p_name.innerHTML = `Decágono <hr><br>Area: ${area.toFixed(2)}</h3>`
    s_name.innerHTML = `Esfera<hr><br>**FORMULA**</h3>`
    var volume = (area * txtvalue3)
    solid.innerHTML = `Piramide de base decagonal<hr><br>Volume: ${volume.toFixed(2)}`

  }

  else if (txtvalue == 11) {
    var area = (11 * txtvalue2_2 * Math.sqrt(3)) / 4
    p_name.innerHTML = `Undecagono <hr><br>Area: ${area.toFixed(2)}</h3>`
    s_name.innerHTML = `Esfera<hr><br>**FORMULA**</h3>`
    var volume = (area * txtvalue3)
    solid.innerHTML = `Piramide de base undecogonal<hr><br>Volume: ${volume.toFixed(2)}`

  }
  else if (txtvalue == 20) {

    var area = (20 * txtvalue2_2 * Math.sqrt(3)) / 4
    p_name.innerHTML = `Icoságono <hr><br>Area: ${area.toFixed(2)}</h3>`
    s_name.innerHTML = `Esfera<hr><br>**FORMULA**</h3>`
    var volume = (area * txtvalue3)
    solid.innerHTML = `Piramide de base icosagonal<hr><br>Volume: ${volume.toFixed(2)}`

  }

  else {

    p_name.innerText = '❌'
    s_name.innerText = '❌'
    solid.innerText = '❌'
    alert('Numero Invalido!')

  }
}

function heron_click() {
  var txta = document.getElementById('a')
  var txtb = document.getElementById('b')
  var txtc = document.getElementById('c')
  var a = parseFloat(txta.value)
  var b = parseFloat(txtb.value)
  var c = parseFloat(txtc.value)
  var txt_res = document.getElementById('res')
  if (a + b > c && a + c > b && b + c > a) {
    var l1 = (a + b + c) / 2
    var l2 = l1 * (l1 - a) * (l1 - b) * (l1 - c)
    var l3 = Math.sqrt(l2);
    txt_res.innerHTML = `O resultado é: ${l3.toFixed(2)}`
  } else {
    txt_res.innerHTML = "Os valores inseridos não formam um triângulo válido."
  }
}  