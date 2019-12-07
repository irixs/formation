Feature: As a lider do grupo
         I want to adicionar musicas colocando seu titulo, artista, integrantes e ID
         So that a musica ira para a lista de “musicas disponiveis” ficando disponivel para montar formacao

Scenario: Cadastro de Musica bem-sucedido
Given eu estou na pagina “Cadastro de Musica”
And nao existe uma musica com titulo “No Air”, artista “The Boyz”, integrantes “Sangyeon, Q, Sunwoo, New, Kevin, Eric, Jacob, Hyunjae, Younghoon, Juyeon, Hwall, Haknyeon” e ID "1" na lista de “musicas disponiveis”
When eu cadastro uma musica com titulo “No Air”, artista “The Boyz”, integrantes “Sangyeon, Q, Sunwoo, New, Kevin, Eric, Jacob, Hyunjae, Younghoon, Juyeon, Hwall, Haknyeon” e ID "1"
Then eu posso ver a na lista “musicas disponiveis” a musica com titulo “No Air”, artista “The Boyz” e ID "1"


Scenario: Cadastro de Musica duplicada
Given eu estou na pagina “Cadastro de Musica”
And existe uma música com titulo “Sweet Chaos”, artista “DAY6”, integrantes “Sungjin, Young K, Jae, Wonpil, Dowoon” e ID "6" na lista de “musicas disponiveis”
When eu tento cadastrar uma musica com titulo “Sweet Chaos”, artista “DAY6”, integrantes “Sungjin, Young K, Jae, Wonpil, Dowoon” e ID "6"
Then a musica nao e cadastrada e nao aparece duplicada na lista de "musicas disponiveis"

Scenario: Cadastro de Musica com ID ja existente
Given eu estou na pagina “Cadastro de Musica”
And existe uma música com titulo “Umpah Umpah”, artista “Red Velvet” e ID "5" na lista de “musicas disponiveis”
When eu tento cadastrar uma musica com titulo “Follow”, artista “Monsta X” e ID "5"
Then a musica nao e cadastrada e nao aparece na lista de "musicas disponiveis"