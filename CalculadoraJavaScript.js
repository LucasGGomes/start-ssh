
        function insert(num) {
            let numero = document.getElementById('resultado').innerHTML;
            document.getElementById('resultado').innerHTML = numero + num;
        }
        function clean() {
            document.getElementById('resultado').innerHTML = "";

        }
        function apagar() {
            let resultado = document.getElementById('resultado').innerHTML;
            document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);
        }
        function calcular() {
            let resultado = document.getElementById('resultado').innerHTML;
            if (resultado) {
                document.getElementById('resultado').innerHTML = eval(resultado);
            }
            else {
                document.getElementById('resultado').innerHTML = "Nada...";
            }

        }
        function descobrir() {
            let j = document.getElementById('um').value;
            let k = document.getElementById('dois').value;
            if (j > k) {
                document.getElementById('texto').innerHTML = j;
            }
            else if (j < k){
                document.getElementById('texto').innerHTML = k;
                
            }
            else {
                document.getElementById('texto').innerHTML = "Os números são iguais...";
            }
        }