// Evento de clique no botão para iniciar a funcionalidade
    document.getElementById('calculate').addEventListener('click', function() {

        const value = Number(document.getElementById('value').value);
        const fee = Number(document.getElementById('fee').value) / 100;
        const time = Number(document.getElementById('time').value);

        // Validação simples para não aceitar espaços em branco
        if (isNaN(value) || isNaN(fee) || isNaN(time) || value <= 0 || fee < 0 || time <= 0) {
            alert("Por favor, preencha todos os campos com valores válidos.");
            return;
        }

        // Fórmula dos juros compostos
        const total = value * (1 + fee) ** time;

        // Fórmula do rendimento
        const rendimento = total - value;

        // Formatação de moeda (Real brasileiro)
        const formatter = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });

        // Mostrar valor total 
        document.getElementById('total').innerHTML = formatter.format(total);

        // Mostrar rendimento 
        document.getElementById('profit').innerHTML = "Rendimento: " + formatter.format(rendimento);
    });