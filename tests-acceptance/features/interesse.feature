Feature: As a integrante do grupo
         I want to escolher os projetos que tenho interesse em participar
         So that a líder do grupo (ADM) poderá me alocar nas formações que tenho interesse

Scenario: Interesse positivo bem-sucedido
Given estou na página de coleta de interesse logado como “irixs” com o cpf “1234” 
And eu vejo as Músicas Disponíveis “Fancy”, “I'm so sick” e “Obsession”
When eu seleciono que tenho interesse em “I'm so sick”
Then eu estou na página de coleta de interesse e vejo a mensagem “Interesse em I'm so sick confirmado com sucesso!”
And “Fancy” sem confirmação, “I'm so sick” confirmado e “Obsession” sem confirmação.

Scenario: Interesse negativo bem-sucedido
Given estou na página de coleta de interesse logado como “irixs” com o cpf “1234” 
And eu vejo as Músicas Disponíveis “Fancy”, “I'm so sick” e “Obsession”
When eu seleciono que não tenho interesse em “Fancy”
Then eu estou na página de coleta de interesse e vejo a mensagem “Interesse em Fancy negado com sucesso!”
And “Fancy” sem confirmação, “I'm so sick” sem confirmação e “Obsession” sem confirmação.
