Feature: As a integrante do grupo
         I want to escolher os projetos que tenho interesse em participar
         So that a líder do grupo (ADM) poderá me alocar nas formações que tenho interesse

Scenario: Interesse positivo bem-sucedido
Given estou na página de coleta de interesse logado como “irixs” com a senha “1234” 
And eu vejo os projetos em aberto “Fancy”, “I'm so sick” e “Obsession”
When eu seleciono que tenho interesse em “I'm so sick”
Then eu estou na página de coleta de interesse e vejo a mensagem “Interesse em I'm so sick confirmado com sucesso!”
And “Sweet Crazy Love” sem confirmação, “I'm so sick” confirmado e “Obsession” sem confirmação.

Scenario: Interesse negativo bem-sucedido
Given estou na página de coleta de interesse logado como “irixs” com a senha “1234” 
And eu vejo os projetos em aberto “Fancy”, “Love Me Right” e “Blue Orangeade”
When eu seleciono que não tenho interesse em “Fancy”
Then eu estou na página de coleta de interesse e vejo a mensagem “Interesse em Fancy negado com sucesso!”
And “Fancy” negado, “Love Me Right” sem confirmação e “Blue Orangeade” sem confirmação.

Scenario: Interesse duplicado
Given estou na página de coleta de interesse logado como “irixs” com a senha “1234” 
And eu vejo os projetos em aberto “Fancy” com interesse confirmado, e “Obsession” com interesse negado.
When eu seleciono que não tenho interesse em “Obsession”
Then eu estou na página de coleta de interesse e vejo a mensagem “Interesse em Obsession já está negado!”
And “Fancy” confirmado e “Obsession” negado.

Scenario: Troca de interesse
Given estou na página de coleta de interesse logado como “irixs” com a senha “1234” 
And eu vejo os projetos em aberto “Eung Eung” com interesse confirmado, e “I’m so Sick” com interesse negado.
When eu seleciono que tenho interesse em “I’m so Sick”
Then eu estou na página de coleta de interesse e vejo a mensagem “Interesse em I’m so Sick alterado para confirmado!”
And “Eung Eung” confirmado e “I’m so Sick” confirmado.