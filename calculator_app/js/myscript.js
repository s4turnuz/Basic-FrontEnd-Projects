function calcular(tipo, valor){
        if(tipo === 'acao') {
          if(valor === 'c'){
            //clear the values in screen
            document.getElementById('resultado').value = ''
          }
          if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.'){
            document.getElementById('resultado').value += valor
          }
          if(valor === '=') {
            var valor_campo = eval(document.getElementById('resultado').value) //eval for string=logical js
            document.getElementById('resultado').value = valor_campo
          }
        } else if (tipo === 'valor') {
          document.getElementById('resultado').value += valor
        }
      }