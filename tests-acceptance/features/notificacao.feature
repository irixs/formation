Feature: As um integrante do grupo
         I want to saber que fui confirmado numa formação
         So that eu possa começar a ensaiar

Scenario: Recebimento de confirmação
Given Estou logado como “Mag” na página de confirmação 
And Eu vejo uma mensagem de “confirmação de participação”
When Seleciono “visualizar mensagem”
Then Eu vou para a tela de confirmação de participação
And Vejo o título da música “Hip”
And Vejo o nome do artista “Mamamoo”
And Vejo links para vídeos
And Vejo opções de confirmação

Scenario: Confirmação de participação negativa
Given Eu estou na tela de confirmação de participação
And O meu número de participações é “11”
And Eu vejo a opção “não vou participar”
When Eu seleciono que não vou participar
Then O meu número de participações permanece “11”
And Eu vou para a tela de justificativa

Scenario: Confirmação de participação positiva
Given Eu estou na tela de confirmação de participação
And O meu número de participações é “11”
And Eu vejo a opção “vou participar”
When Eu seleciono que vou participar
Then O meu número de participações atualiza para “12”

Scenario: Justificativa de ausência
Given Eu estou na tela de justificativa de ausência
And Eu vejo a opção “porque estou doente”
And Eu vejo a opção “porque tenho trabalho da faculdade”
And Eu vejo a opção “porque não gostei da minha posição”
And Eu vejo a opção “porque vou viajar”
When Eu seleciono a opção “porque tenho trabalho da faculdade”
Then Recebo uma mensagem de confirmação indicando minha ausência porque “tenho trabalho da faculdade”