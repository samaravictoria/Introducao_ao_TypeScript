//Criando um Type Alias para receber uma resposta podendo ser string ou bool
type RespostaServidor = string | boolean;

function processarResposta(resposta: RespostaServidor): void {
    //Laço condiciona que verifica o tipo de resposta e devolve um resultado baseado nela
    if (typeof resposta === "string") {
        console.log(`Resposta: ${resposta}`);
    } else if (typeof resposta === "boolean") {
        console.log(`Resposta: ${resposta? "Positivo" : "Negativo"}`);
    } else {
        console.log("Resposta inválida");
    }
};

//Testando a função
processarResposta(false);