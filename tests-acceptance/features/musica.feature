Feature: As a lider do grupo
         I want to adicionar musicas colocando seu titulo, artista, integrantes e ID
         So that a musica ira para a lista de “musicas disponiveis” ficando disponivel para montar formacao

Scenario: Cadastro de Musica bem-sucedido
Given eu estou na pagina de login
Given eu estou na pagina de cadastro de musica
Given nao existe uma musica com titulo “No Air”, artista “The Boyz” e ID "1" na lista de musicas disponiveis
When eu cadastro uma musica com titulo “No Air”, artista “The Boyz”, integrantes “Sangyeon,Q,Sunwoo,New,Kevin,Eric,Jacob,Hyunjae,Younghoon,Juyeon,Hwall,Haknyeon” e ID "1"
Then eu posso ver na lista musicas disponiveis a musica com titulo “No Air”, artista “The Boyz” e ID "1"

