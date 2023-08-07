// Objeto com informações de ofertas de emprego
var ofertasDeEmprego = {
    vagas: [
        {
            cargo: "Desenvolvedor Web",
            empresa: "Empresa XYZ",
            local: "Cidade Diamond",
            descricao: "Empresa XYZ está contratando um desenvolvedor web com experiência em HTML, CSS, e JavaScript. Conhecimento em frameworks como React é uma vantagem.",
            requisitos: [
                "Graduação em Ciência da Computação ou áreas relacionadas",
                "Experiência comprovada em desenvolvimento web",
                "Conhecimento em React ou outros frameworks similares",
                "Capacidade de trabalhar em equipe e resolver problemas",
            ],
            salario: "R$ 5.000,00 - R$ 7.000,00",
            contato: "contato@empresa.xyz"
        },
        {
            cargo: "Analista de Marketing",
            empresa: "Agência de Publicidade DEF",
            local: "Cidade Diamond",
            descricao: "Agência de Publicidade DEF está em busca de um analista de marketing criativo e dedicado para trabalhar em campanhas publicitárias de clientes diversos.",
            requisitos: [
                "Formação em Marketing, Publicidade ou áreas relacionadas",
                "Experiência prévia em marketing digital e gerenciamento de campanhas",
                "Conhecimento em SEO, mídias sociais e estratégias de marketing",
                "Excelentes habilidades de comunicação e redação",
            ],
            salario: "R$ 4.000,00 - R$ 6.000,00",
            contato: "rh@agencia.def"
        },
        {
            cargo: "Assistente Administrativo",
            empresa: "Empresa ABC",
            local: "Cidade Diamond",
            descricao: "Empresa ABC está à procura de um assistente administrativo para auxiliar em tarefas diárias de escritório, como atendimento telefônico e organização de documentos.",
            requisitos: [
                "Ensino Médio completo ou equivalente",
                "Experiência em funções administrativas será valorizada",
                "Boas habilidades de organização e atenção aos detalhes",
                "Capacidade de trabalhar em equipe e resolver tarefas com eficiência",
            ],
            salario: "R$ 2.000,00 - R$ 3.000,00",
            contato: "recrutamento@empresa.abc"
        }
    ]
};

// Função para exibir detalhes das ofertas de emprego
function exibirDetalhesOferta(vagaIndex) {
    var vaga = ofertasDeEmprego.vagas[vagaIndex];
    var requisitosFormatados = vaga.requisitos.join("<br>");

    var detalhes = `
        <h2>${vaga.cargo}</h2>
        <p><strong>Empresa:</strong> ${vaga.empresa}</p>
        <p><strong>Local:</strong> ${vaga.local}</p>
        <p><strong>Descrição:</strong> ${vaga.descricao}</p>
        <p><strong>Requisitos:</strong></p>
        <ul>${requisitosFormatados}</ul>
        <p><strong>Salário:</strong> ${vaga.salario}</p>
        <p><strong>Contato:</strong> ${vaga.contato}</p>
    `;

    document.getElementById("detalhes-oferta").innerHTML = detalhes;
}
