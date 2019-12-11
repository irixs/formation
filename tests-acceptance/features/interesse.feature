Feature: As a integrante do grupo
         I want to escolher os projetos que tenho interesse em participar
         So that a líder do grupo (ADM) poderá me alocar nas formações que tenho interesse

Scenario: Interesse positivo bem-sucedido
Given estou na página de home logado como “irixs” com o cpf “1234” 
Given eu estou na pagina de home
Given eu vejo em Musicas Disponiveis “Sweet Crazy Love”, de artista “LOONA” sem confirmação
When eu seleciono que tenho interesse em “Sweet Crazy Love”, de artista “LOONA”
Then eu vejo em Musicas Disponiveis “Sweet Crazy Love”, de artista “LOONA” com confirmação

Scenario: Interesse negativo bem-sucedido
Given estou na página de home logado como “irixs” com o cpf “1234” 
Given eu estou na pagina de home
Given eu vejo em Musicas Disponiveis “Hey Mama”, de artista “EXO-CBX” com confirmação
When eu seleciono que não tenho interesse em “Hey Mama”, de artista “EXO-CBX”
Then eu vejo em Musicas Disponiveis “Hey Mama”, de artista “EXO-CBX” sem confirmação