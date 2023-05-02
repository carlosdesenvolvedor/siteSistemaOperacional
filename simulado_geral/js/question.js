// uma matriz de objetos:
const quiz = [



    {
        q:'O que é um Hardware?',
        options:['parte física do computador. É tudo aquilo que pode ser tocado. Exemplo: teclado, mouse, monitor, gabinete, processador, memória entre outros.',
                 'parte virtual, tudo aquilo que não posso tocar como sonar, word, aplicativos etc.',
                 'Sistemas operacionais',
                'componentes fisicos',
                'O computador',
                ],
        answer: 0
    
    },
    
    {
        q:'O que é software?',
        options:['parte palpaver do computador. ',
                 'Parte palpável do computador, onde acessamos nossos arquivos.',
                 'O software é a linguagem de programação.',
                'parte física do computador. É tudo aquilo que pode ser tocado. Exemplo: teclado, mouse, monitor, gabinete, processador, memória entre outros.',
                'parte lógica do computador. Ao contrário do hardware, esta parte não pode ser tocada. Também chamado de programa ou aplicativo. Exemplo: sistemas operacionais, processadores de textos, arquivos salvos, planilhas eletrônicas entre outros.',
                ],
        answer: 4
    
    },
    {
        q:'Qual a função de um SO',
        options:['Ocultar recursos e atrapalhar o funcionamento do computador. ',
                 'Garantir a disponibilidade de recusos, consistência de dados do ponto de vista de quem utiliza esses recursos.',
                 'Criar camadas de abstração na linguagem de programação.',
                'embarcar o desenvolvimente de hardware',
                'Fornecer acesso a diversas tecnologias como usb, pci, sata ect. á que exigirá maior poder de processamento e controle do sistema operacional além da utilização de pessoas especializadas.',
                ],
        answer: 1
    
    },
    {
        q:'Uma função do SO é Garantir a disponibilidade de recusos, consistência de dados, uma segunda função seria: ',
        options:['Criar uma camada de operações que está relacionado ao shell.',
                 'Aumentar as dificuldades da maquina, deixando o sistema mais vulnerável.',
                 'Uma camada de abstração no desenvolvimento e também na utilização da maquina. ',
                'Criar animações para o usuario e para profissionais da área de TI',
                'Espera que o desenvlvedor reserve a memória necessaria para seu programa.',
                ],
        answer: 2
    
    },
    {
        q:'Quais são as camadas de um software?',
        options:['Modo front-end e modo núcleo ',
                 'Modo back-end e modo usuário',
                 'Modo de abstração e modo de hardware',
                'modo núcleo e modo central',
                'modo usuário e modo núcleo',
                ],
        answer: 4
    
    }, 
    {
        q:'Em qual camada o sistema operacional opera no software?',
        options:['Usuário',
                 'Front-end',
                 'Núcleo',
                'do programa de interface com usuario',
                'navegador web',
                ],
        answer: 2
    
    },
    {
        q:'O que o modo núcleo do software faz?',
        options:['Tem mais privilégios, tem maior autonomia para lidar com a camada inferior, que é a camada de hardware.',
                 'Tem menos privilégios, tem maior autonomia para lidar com a camada inferior, que é a camada de software.',
                 'Tem mais privilégios, tem maior autonomia para lidar com a camada inferior, que é a camada de software.',
                'Tem menos privilégios, tem maior autonomia para lidar com a camada inferior, que é a camada de hardware.',
                'Nenhuma das alternativas.',
                ],
        answer: 0
    
    },
    {
        q:'O que tem no modo usuário do software?',
        options:['Navegador web, leitor de e-mail, reprodutor de música',
                 'comandos básicos',
                 'código fonte ',
                'console.log()',
                'printf();',
                ],
        answer: 0
    
    },
    {
        q:'Como é conhecida a interface gráfica?',
        options:['shell',
                 'script',
                 'Java',
                'GUI',
                'nenhuma das alternativas',
                ],
        answer: 3
    
    },
    {
        q:'Fornecer uma interface de acesso para dispositivos com tecnologias distintas como USB e IDE. é uma função do:',
        options:['linux',
                 'windows',
                 'Computador',
                'Sistema operacional',
                'browser',
                ],
        answer: 3
    
    },

{
    q:'Sobre a primeira geração de computadores é correto afirmar: ',
    options:['Ela surgiu basicamente por causa da segunda guerra mundial, os computadores funcionavam com base em válvulas e eletromecânicos. A programação era feita por painéis de conectores. ',
             'Não dependia mais de painéis.',
             'Um grande marco foi o surgimento dos transistores.',
            'Os programas eram programados em C#',
            'A linguagem mais famosa era Java',
            ],
    answer: 0

},
{
    q:'Qual a maquina mais famosa da primeira geração, que uma única equipe projetou, construiu, programou, operava e fazia manutenção?',
    options:['Linux',
             'ENIAC',
             'IMB',
            'SPOOL',
            'UNIX',
            ],
    answer: 1

},
{
    q:'Os transistores queimam com menos facilidade que as válvulas, são menores, mais rápido e mais confiáveis. Em qual geração de computadores surgiram?',
    options:['Primeira',
             'Segunda',
             'Terceira',
            'Quarta',
            'Quinta',
            ],
    answer: 1

},
{
    q:'Na segunda geração, não dependiam mais de painéis nem cabos conectores, como era feito a programação desses computadores?',
    options:['Cartão perfurados',
             'Phyton',
             'Javascript',
            'C++',
            'Não existia programação',
            ],
    answer: 0

},
{
    q:'Qual era a característica da segunda geração?',
    options:['Além de trabalhar com transistores o processamento era feito sequencial, ou seja, apenas um job por vez. Entrada de dado por meio de cartão perfurado e um job executava do incio ao fim. No final, tinha uma saída por impressora. ',
             'Válvulas de segunda geração',
             'Ainda não existia programação',
            'A SPOOL',
            'Nenhuma das anteriores',
            ],
    answer: 0

},
{
    q:'O que é multiprogramação?',
    options:['programação em paralelismo.',
             'São múltiplos programas compartilhando os recursos',
             'particionamento de memória',
            'Entrada e saida de dados',
            'Escalonamento',
            ],
    answer: 1

},
{
    q:'Qual alternativa corresponde a um marco verdadeiro da quarta geração',
    options:['Válvulas cabos e plugs.',
             'Computadores menores,computadores pessoais, IBM PC, Apple.',
             'Grandes máquinas com muito mais potencia.',
            'O computador IBM 360',
            'Unix sendo usado no meio acadêmico',
            ],
    answer: 1

},
{
    q:'Hoje em dia os sintemas operacionais mais conhecido são:',
    options:['Windows, Android, Mac, Linux etc',
             'MS-DOS',
             'Word, excel',
            'Google',
            'Nenhuma das alternativas.',
            ],
    answer: 0

},
{
    q:'Sobre computadores de grande porte é correto afirmar:',
    options:['Mainframes, do tamanho de toda uma sala',
             'baixa capacidade de operações de E/S',
             'Tem apenas um disco no teminal',
            'Faz poucas tarefas exemplo: IBM OS/1000',

            ],
    answer: 0

},
{
    q:'Qual tipo de sistemas operacionais que fornece recursos de hardware e software, servem múltiplos usuários:',
    options:['SOs computadores de grande porte',
             'SOs de servidores',
             'Sos de multiprocessadores',
            'Sos de computadores pessoais',
            'Sos de computadores portátesi',
            ],
    answer: 1

},
{
    q:'Multiprogramação, interface gráfica amigável, com os principais app: Edição de texto, planilhas, internet, Sos mais comuns: Windows, Apple OS, Linux. Qual tipo de computadores se refere ao texto anterior:',
    options:['SOs computadores de grande porte',
                'SOs de servidores',
                'Sos de multiprocessadores',
                'Sos de computadores pessoais',
                'Sos de computadores portátesi',

    ],
    answer: 3

},
{
    q:'Tem mais de um processador interligado, multiplicou o poder computacional, coordena o processamento de memória etc. ',
    options:['SOs computadores de grande porte',
            'SOs de servidores',
            'Sos de multiprocessadores',
            'Sos de computadores pessoais',
            'Sos de computadores portátesi',
            ],
    answer: 2

},
{
    q:'Sobre computadores portáteis:',
    options:['Recursos computacionais aumentado',
             'Dispositivos maiores como mainframes.',
             'Exemplos: notebook e Pcs',
            'Recursos computacionais reduzidos ',
            ,
            ],
    answer: 1

},
{
    q:'O Sos embarcados tem restrições de recursos de memória, tamanho, energia e é produzido para produtos exclusivos como Smart TV’s, aparelhos de som, Mp3, computadores de bordo.',
    options:['falso',
             'verdadeiro',
            ],
    answer: 1

},
{
    q:'No tipo de SOs de nós sensores:',
    options:['cada nó sensor é um computador',
             'varios computadores é um nó sensor',
             'Não faz monitoramento agropecuário',
            'Não faz monitoramento de segurança',
        
            ],
    answer: 0

},
{
    q:'Foco no tempo, sistemas criticos, exigem resposta imediata, utilizado para controle de processos industriais como controle de caldeiras, saúde, militar etc.',
    options:['SOs computadores de grande porte',
    'SOs de servidores',
    'Sos de multiprocessadores',
    'Sos de computadores pessoais',
    'Sos de tempo real',
            ],
    answer: 4

},
{
    q:'Os cartões bancários utilizam um Sos , tem suporte pela linguagem Java. ',
    options:['SOs computadores de grande porte',
    'SOs de servidores',
    'Sos de multiprocessadores',
    'Sos de computadores pessoais',
    'Sos de tempo real',
    'Sos de cartõesinteligentes'
            ],
    answer: 5

},
{
    q:'Imagine que você possui uma fazenda com valiosas cabeças de gado e de alguma maneira você precisa proteger o perímetro da sua fazenda. Você pode adotar a estratégia de utilizar cercas elétricas e/ou contratar pessoas para vigiarem o seu patrimônio ou .. ',
    options:['SOs computadores de grande porte',
    'SOs de servidores',
    'Sos de multiprocessadores',
    'Sos de computadores pessoais',
    'Sos de tempo real',
    'Sos de cartõesinteligentes',
    'SOs de nós sensores'
            ],
    answer: 6

},
{
    q:'Um processo pode ser iniciado e terminado. O sistema operacional sabe se o processo está em execução ou não, por meio da técnica de troca de estados. Considerando o texto acima e que os processos possuem tipos de estados que podem se encontrar, selecione a alternativa que apresente todos os tipos de estados válidos:',
    options:['Novo, em heap, em processamento, pronto ',
             'Em heap, em processamento, pronto, aguardando,',
             'Em memória, em processamento, pronto, em heap',
            'Novo, em espera, pronto, em execução',
            'Novo, pronto, inicial, em memória',
            ],
    answer: 3

},
{
    q:'Um processo pode ser considerado um programa em execução. Por exemplo: imagine que desejamos ler um livro em nosso computador (os chamados e-books). O livro somente poderá ser lido quando ele estiver em execução e para isto é necessário clicar duas vezes sob ele para a sua abertura. Com isto, um processador de texto será aberto. A partir deste momento temos um processo em execução (no caso o processador de texto com o e-book sendo exibido).'
 
    +'VOLTZ, Wagner Mendes. Sistemas Operacionais. Reimpressão - Maringá - PR. Unicesumar, 2019 (adaptado).'
    
    +'Considerando o texto acima e no que diz respeito aos processos de um sistema operacional é correto afirmar que:0',
    options:['Para a execução de um processo se faz necessário recursos como: tempo de CPU, dispositivos de entrada e saída, alocação de memória e arquivos',
             'Os processos são estruturas físicas que os operadores devem reproduzir com os computadores,',
             ' São estruturas abstratas que são executados apenas em ambientes na nuvem',
            'São estruturas que utilizam o uso do processador e da memória de um computador',
            ' São estruturas físicas em que se pode expandir a capacidade do hardware para a',
            ],
    answer: 0

},
{
    q:'Sobre o Sistema Operacional Android é correto afirmar:',
    options:['É um sistema operacional servidor que é baseado em Linux e foi desenvolvido pelo Google ',
             'É um sistema operacional embarcado que é focado em dispositivos de Internet das Coisas e sua interface gráfica é baseada no Linux',
             'É um sistema operacional para dispositivos móveis que teve seu desenvolvimento a partir do kernel do Linux',
            'É um sistema operacional embarcado que é focado em dispositivos móveis e sua interface gráfica é baseada no Linux',
            'É um sistema operacional para dispositivos móveis que teve seu desenvolvimento a partir do kernel do Windows',
            ],
    answer: 2

},
{
    q:'Você já deve ter percebido que os processos de alguma maneira têm que se comunicar com outros. Cabe ao sistema operacional garantir esta comunicação de forma bem estruturada e sem interrupções.'
    + 'Considerando o texto acima e pensando sobre a solução de Peterson é correto afirmar',
    options:[' É uma solução para facilitar o processo de instalação de múltiplos sistemas operacionais em um computador',
             'É responsável pela melhor utilização da memória em sistemas operacionais de 64 bits',
             'Está diretamente ligado com a virtualização de ambientes e na criação de máquinas virtuais',
            'Consiste em um algoritmo, inicialmente para dois processos, que controla a lista de processos interessados em acessar a região crítica',
            'Nenhuma das anteriores',
            ],
    answer: 3

},
{
    q:'A partir da ideia de memória virtual, observe as afirmativas a seguir: \n'
    +'I – O controle do uso de memória para a troca de processos armazenados temporariamente realiza trocas de processos na memória (swapping). \n'
    +'II – Um dos algoritmos para controle do swapping retira conteúdos de páginas de memória principal menos utilizados e os coloca em memória virtual para que um novo conteúdo seja colocado. \n'
    +'III – Conteúdos de páginas de memória em uso são prioridade para serem alocados em memória virtual nos algoritmos de controle de swapping. \n',
    options:['I, apenas. ',
             'II, apenas.',
             'III, apenas.',
            'I e II, apenas.',
            'II e III, apenas.',
            ],
    answer: 3

},
{
    q:'Podemos descrever a função do sistema operacional como: gerenciar o uso dos componentes (hardware) de um computador, garantindo disponibilidade do hardware e armazenamento correto de dados; fornecer uma camada de abstração para utilização e desenvolvimento de outros softwares; e fornecer uma interface de acesso para dispositivos com tecnologias distintas como USB e IDE.'
    +'Considerando o texto descrito a cima e sabendo que existem vários tipos de Sistemas Operacionais, selecione a alternativa que apresente tipos reais:',
    options:['SO de servidores, SO de Backend, SO embarcado; ',
             'SO de servidores, SO de Computadores Pessoais, SO embarcado',
             'SO de potência, SO de Computadores Impessoais, SO embarcado',
            'SO de Aplicação, SO de Threads, SO embarcado',
            'SO de servidores, SO de Computadores Pessoais, SO de Threads',
            ],
    answer: 1

},
{
    q:'Todo processo precisa de um espaço em memória durante a sua execução e um pedaço desta memória é compartilhado entre outros processos. Este compartilhamento é chamado de região crítica. A melhor maneira para que não ocorra condição de corrida é realizando a exclusão mútua. '
    +'Com base no texto acima e no que diz respeito a comunicação entre processos e sobre a exclusão mútua, selecione a alternativa que represente um critério que se deve considerar numa proposta de solução:',
    options:[ 'Todo processo deve esperar eternamente para entrar em sua região crítica',
             'Dois processos nunca podem estar simultaneamente em suas regiões críticas',
            'Tudo pode ser afirmado sobre a velocidade ou sobre o número de CPUs',
            'Todo processo executando fora de sua região crítica pode bloquear outros processos.',
            'Nenhuma das anteriores',
            ],
    answer: 1

},
{
    q:'Um processo pode ser considerado um programa em execução. Por exemplo: imagine que desejamos ler um livro em nosso computador (os chamados e-books). O livro somente poderá ser lido quando ele estiver em execução e para isto é necessário clicar duas vezes sob ele para a sua abertura. Com isto, um processador de texto será aberto. A partir deste momento temos um processo em execução (no caso o processador de texto com o e-book sendo exibido).'
    +'Sobre os processos de um Sistema Operacional, selecione a alternativa que apresente as quatro grandes áreas que o compõe?',
    options:['Seção de dados, seção de informações, heap e pilha ',
             'Seção de texto, seção de dados, heap e fila',
             'Seção de texto, seção de dados, máquina virtual e pilha',
            'Seção de memória, seção de dados, fila e pilha',
            'Seção de texto, seção de dados, heap e pilha',
            ],
    answer: 4

},
{
    q:'Os recursos de hardware representam uma série de tecnologia que trabalha em conjunto para que soluções de software possam ser executadas. Um dos recursos de hardware mais conhecidos é a memória de armazenamento. As afirmativas a seguir se referem a características de alguns tipos de memórias.'
    +'I – Memória ROM ou de massa é usada para armazenamento de quantidades maiores de dados de forma permanente.'
    +'II – Memória RAM se refere à memória temporária básica de trabalho onde os softwares abertos são inicialmente alocados.'
    +'III – Memória cache se refere a um tipo de memória de pequena capacidade para dados de uso mais imediato pelo processador.',
    options:['I, apenas. ',
             'II, apenas.',
             'III, apenas.',
            'I e II, apenas.',
            'II e III, apenas.',
            ],
    answer: 4

},
{
    q:'O sistema operacional possuiu um conjunto grande de algoritmos de escalonamento que podem ser utilizados. Eles são divididos em: algoritmos de escalonamento preemptivo: o processo é executado por um tempo máximo fixado; e algoritmos de escalonamento não preemptivo: o processo é executado até que seja bloqueado. Com base no texto acima e que o escalonamento consiste em utilizar algoritmos para decidir qual processo deve ser utilizado. Um dos algoritmos mais simples de escalonamento é o chamado FCFS. Selecione a alternativa que apresenta uma definição correta sobre esse algoritmo:',
    options:['São conhecidos como Pilhas e a ideia é que o último processo a entrar é o primeiro a sair ',
             'O algoritmo FCFS consegue gerenciar os processos de modo que os menores sempre sejam executados primeiro',
             'O algoritmo FCFS (first come, first served) implementa o conceito de Fila, onde o primeiro a entrar é o primeiro a sair',
            'São conhecidos como Hash e a ideia é que o último processo a entrar é o primeiro a sair',
            'O algoritmo FPS consegue gerenciar os processos de modo que os menores sempre sejam executados primeiro',
            ],
    answer: 2

},
{
    q:'Tudo aquilo que utilizamos para realizar alguma interação com o computador pode ser considerado'
    +'hardware de entrada/saída. Podemos citar o mouse, teclado e monitor como exemplos. Em alguns casos a'
    +'interação consiste em forma diferenciada, como no caso do disco rígido ou o relógio do sistema, já que não'
    +'estamos tocando fisicamente estas peças, mas estamos enviando dados e extraindo informações delas em'
    +'todo o momento.',
    options:['As duas categorias são: de memória e de processamento',
             'Categoria de barramento e de bloco',
             'As duas categorias são: de bloco e de caractere',
            'Via USB e via barramento',
            'Categoria de caractere ou de USB',
            ],
    answer: 2

},
{
    q:'Considerando o sistema operacional Linux, selecione a alternativa que apresenta o comando correto para'
    +'finalizar um processo cujo número do processo é 2123:',
    options:['stop pid 2123',
             'stop 2123',
             'rm 2123',
            'kill 2123',
            'exit 2123',
            ],
    answer: 3

},
{
    q:'selecione a alterntiva correta sobre a diferença entre alocação contígua e'
    +'alocação encadeada para a implementação de memórias secundárias.',
    options:[' a) A alocação contigua apresenta a mesma performance e aproveitamento de memória que a alocação encadeada',
             'b) A alocação encadeada consiste no armazenamento de cada arquivos em blocos contíguos',
             'c) A alocação contígua também é conhecida como i-nodes, onde o objetivo é associar cada arquivo a uma estrutura de dados chamada nó-indices',
            'd) A alocação encadeada apresenta a vantagem de otimização na alocação de memória em relação a alocação contígua',
            'e) A alocação contigua possui a mesma eficiência na alocação de memória que a alocação encadeada',
            ],
    answer: 3

},
{
    q:'selecione a alternativa correta sobre as vantagens ou desvantagens do'
    +'uso dos thin clients:',
    options:['A vantagem está no alto desempenho de se ter recursos compartilhados entre todos os thin cliente ',
             'Melhor gerenciamento do que é instalado já que é concentrado numa CPU centralizada',
             'A vantagem está no baixo custo de desempenho de se ter recursos compartilhados entre todos os discos rígidos',
            'A desvantagens está no fato de utilizar muita banda da internet tornando os links de download e upload lentos',
            'A vantagem está na utilização de redes coaxiais para apoiar a interoperabilidade',
            ],
    answer: 1

},
{
    q:'A partir da ideia de armazenamento de dados em disco, observe as afirmativas a seguir:'
   +' I – Os dados são gravados em arquivos que devem obrigatoriamente possuir nome e extensão sempre.'  
    +'II – Pastas são estruturas em disco para que uma grande quantidade de arquivos possa ser gravada, mas'
    +'limitada ao espaço em disco.'
    +'III – Arquivos possuem tamanhos variados e isso é influenciado pelo tipo de conteúdo armazenado.' 
    +'Assinale a alternativa que contenha apenas afirmativas corretas.',
    options:['I, apenas.',
             'II, apenas.',
             'III, apenas.',
            'I e II, apenas.',
            'II e III, apeas.',
            ],
    answer: 4

},
{
    q:'selecione a alternativa'
    +'que apresente uma definição correta para deadlock:',
    options:[' Se dá quando dois (ou mais) processos estão acessando um recurso e bloqueando-o se tem um deadlock',
             'Deadlock é quando se tem vários processos em paralelo rodando, cada um acessando um recurso diferente',
             'Deadlock só se da em sistemas monoprocessados',
            'O deadlock é uma tecnologia do Sistema Operacional que gerencia o acesso a recursos de impressora',
            'Deadlock é o nome dado a um processo que possui alta prioridade de execução',
            ],
    answer: 0

},
{
    q:'Mecanismos de entrada e saída em hardware são controlados e se comunicam através dos recursos que'
   +'um sistema operacional oferece. Esses recursos vão desde o que um usuário pode fazer durante a'
    +'interação com um dispositivo desse tipo, até o que o dispositivo pode oferecer ao usuário.'
    +'A partir da ideia de dispositivos de entrada e saída controlados pelo sistema operacional, observe as'
    +'afirmativas a seguir:'
    +'I – A exibição de uma interface gráfica em um dispositivo de saída como o monitor depende do sistema'
    +'operacional e não da resolução do monitor.'
    +'II – Dentro da comunicação entre sistema operacional e dispositivos de entrada e saída, um componente'
    +'essencial para essa comunicação se chama driver.'
    +'III – Os barramentos são responsáveis pela comunicação física entre dispositivos de entrada e saída e a'
    +'placa mãe que os gerencia em conjunto com o sistema operacional.'
    +'Assinale a alternativa que contenha apenas afirmativas corretas.',
    options:['I, apenas.',
             'II, apenas.',
             'III, apenas.',
            'I e II, apenas.',
            'I, II e III.',
            ],
    answer: 4

},
{
    q:'Com base no texto acima, e pensando sobre ataques à sistemas operacionais é correto afirmar que:',
    options:['Força bruta, hacking, interrupção e intercepção são exemplos de tipos de ataques',
             'Existem quatro tipos de ataques: interrupção, interceptação, modificação ou fabricação',
             'Fabricação, permissão, interceptação e interrupção são exemplos de tipos',
            'Existem quatro tipos de ataques: correção, força bruta, modificação ou fabricação',
            'Modificação, correção, força bruta e intercepção são exemplos',
            ],
    answer: 1

},
{
    q:'A partir da ideia de códigos maliciosos, observe as afirmativas a seguir: \n'
    +'I – Vírus são os agentes mais tradicionais de infecção e se baseiam na ideia de infiltração, mas não se '
    +'preocupam com a infecção de outros arquivos além do que foi originalmente contaminado. \n'
    +'II – Existem softwares dedicados a buscar pontos desprotegidos não detectados ou não corrigidos, e que '
    +'permitam uma possível invasão. \n'
    +'III – Existem softwares que são capazes de capturar o que é digitado por usuários para uso, assim como '
    +'existem softwares que se prestam a ocultar acessos indevidos e o conjunto destas duas alternativas se '
    +'mostra um grande risco. \n' 
    +'Assinale a alternativa que contenha apenas afirmativas corretas.',
    options:['I, apenas ',
             'II, apenas',
             'III, apenas',
            'I e II, apenas',
            'II e III, apenas',
            ],
    answer: 4

},
{
    q:'Qual comando para listar o conteúdo de uma pasta?',
    options:['cd',
             'ls',
             'mkdir',
            'mk',
            'rm',
            ],
    answer: 1

},
{
    q:'para listar conteúdo de uma pasta superior',
    options:['com espaço entre o ls e os dois pontos',
             'ls ls',
             'mkdir mkdir',
            'mk x2',
            'rm ..',
            ],
    answer: 0

},
{
    q:'Voltar um diretório no linux?',
    options:['cd .. ou cd - ',
             'mkdir',
             'rm',
            'ps',
            'top',
            ],
    answer: 0

},
{
    q:'Listar conteúdo de uma pasta superior:',
    options:['ls ..',
             'ls -',
             'pwd',
            'listar prox',
            'ls -all',
            ],
    answer: 0

},
{
    q:'Mostrar os programs em execução ativos, parados, tempo usando na CPU, detalhes sobre o uso da memória RAM, swap, disponivilidade para execução de programs no sistema etc?',
    options:['top',
             'botton',
             'left',
            'mostrar',
            'touch',
            ],
    answer: 0

},
{
    q:'Criar um diretório',
    options:['mkdir <nome do diretório>',
             'somente mkdir',
             'mk < nome do diretório>',
            'cd < nome>',
            'rm <nome do diretório>',
            ],
    answer: 0

},
{
    q:'Criar um arquivo?',
    options:['touch <nome do arquivo>',
             'arquivo <nome do arquivo>',
             'dir <nome do arquivo >',
            'ps <nome do arquivo>',
            'nenhuma das alternativas',
            ],
    answer: 0

},
{
    q:'Mover ou renomeia arquivo e diretórios:',
    options:['mv',
             'mover',
             'mkdir',
            'trocar',
            'mvdir',
            ],
    answer: 0

},
{
    q:'Interromper processo:',
    options:['Ctrl + 5',
             'Ctrl alt del',
             'Ctrl + c',
            'kill',
            'q',
            ],
    answer: 2

},
{
    q:'Encerrar processo',
    options:['kill <numero do processo>',
             'Ctrl alt del',
             'Ctrl shift Esc',
            'Ctrl alt /',
            'Ctrl --log',
            ],
    answer: 0

},
{
    q:'Exibir o diretório atual?',
    options:['mkdir',
             'rm',
             'ps',
            'top',
            'pwd',
            ],
    answer: 4

},
{
    q:'Comando para remover arquivo',
    options:['rmdir',
             'remover',
             'delete',
            'rm <nome do arquivo>',
            'rv',
            ],
    answer: 0

},
{
    q:'Criar um arquivo?',
    options:['criar <nome do arquivo>',
             'cd <nome do arquivo>',
             'touch <nome do arquivo>',
            'rm <nome do arquivo>',
            'creator <nome do arquivo>',
            ],
    answer: 0

}

]