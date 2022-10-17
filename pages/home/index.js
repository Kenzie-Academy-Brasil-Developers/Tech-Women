/* Desenvolva sua lógica aqui... */

const ulVagas = document.querySelector(".ul-vagas")

function renderCards(array){

    ulVagas.innerHTML =""
    array.forEach((element,) => {

        const liCard = document.createElement('li')
        const divCard = document.createElement('div')
        const tituloH2 = document.createElement('h2')
        const divInformacoes = document.createElement('div')
        const pEmpresa  = document.createElement('div')
        const pCidade  = document.createElement('div')
        const pDescricao  = document.createElement('p')
        const divBotoes  = document.createElement('div')
        const pModalidade  = document.createElement('p')
        const botaoCandidatura = document.createElement('button')

        liCard.classList = 'li-card'
        divCard.classList = 'div-card'
        tituloH2.classList = 'titulo-h2'
        divInformacoes.classList = 'div-informacoes'
        pEmpresa.classList = 'p-empresas'
        pCidade.classList = 'p-cidade'
        pDescricao.classList = 'p-descricao'
        divBotoes.classList = 'div-botoes'
        pModalidade.classList = 'p-modalidade'
        botaoCandidatura.classList = 'botao-candidatura'

        tituloH2.innerText = element.title
        pEmpresa.innerText = element.enterprise
        pCidade.innerText = element.location
        pDescricao.innerText = element.descrition
        pModalidade.innerText = element.modalities
        botaoCandidatura.innerText = "Candidatar"
        
        divBotoes.append(pCidade,botaoCandidatura)
        divInformacoes.append(pEmpresa,pCidade)
        divCard.append(tituloH2,divInformacoes,pDescricao,divBotoes)
        liCard.appendChild(divCard)
        ulVagas.appendChild(liCard)

        console.log("oi")
        
        
        
    });

    




}
renderCards(jobsData)