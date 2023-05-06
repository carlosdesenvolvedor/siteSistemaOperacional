// uma matriz de objetos:
const quiz = [



{
    q:'Uma das técnicas de gerenciamento da comunicação entre processos no tocante ao mecanismo de sincronização mais utilizado na construção de aplicações concorrentes, usando uma variável protegida que só pode ser manipulada por operações do tipo wait() e signal(), representando respectivamente espera e sinal para controlar o acesso a recursos. <br> Assinale a alternativa correta que contenha o nome desse mecanismo de controle de comunicaão entre processos. ',
    options:['chaveamento obrigatório.',
             'Monitor',
             'Instrução TSL.',
             'Solução de peterson',
             'Semáforo.',
            ],
    answer: 4

},
{
    q:'Processos necessitam de recursos para serem executados, e necessitam de controles para a sua execução. A organização de recursos é importante para oferecer maior eficiência na execução e menor chance de problemas no compartilhamento de recursos como memória e processador. <br>Sobre a organização de processos em áreas de memória, observe as afirmativas a seguir: <br>I - Heap se refere a uma área variável de memória para conter dados de variável globalis.<br>II - Seleção de texto se refere à área onde o código de um programa é alocado.<br>Pilha é área para dados temporários para variáveis locais, parâmetros e retornos de funções.',
    options:['I e II, apenas',
             'III, apenas',
             'I, apenas',
             'II e III, apenas',
             'II, apenas',
            ],
    answer: 3

},
{
    q:'Processos são iniciados e encerrados de formas variadas em casos específicos, Baseado em um mecanismo de troca de estados, o sistema operacional gerencia os processos. Durante o ciclo de vida de um processo, isto é, desde seu inicio até o seu encerramento, podem ocorrer diversas transições entre os estados relacioonados.<br>I - Porcessos parados à espera de uma interação do usuário ficam em estado de espera.<br>II - Processos em execução, mas que ainda não utilizam suas funcionalidades se encontram em estado de pronto.<br>III - Um processo por estar em estado de pronto e em espera ao mesmo tempo.<br> Assinale a alternativa que contenha apenas afirmativas corretas.',
    options:['II, apenas',
             'I e II, apenas',
             'II e III, apenas',
             'II e III, apenas',
             'I, apenas',
            ],
    answer: 1

},
{
    q:'Um sistema operacional deve ser capaz de administrar a possibilidade de ocorrência de sistemas multiprogramados necessitarem e requisitarem um mesmo recurso simultaneamente. Existem técnicas para impedir que o recurso (arquivo em disco, impressora etc.) seja disponivilizados aos dois processos. A partir da ideia de condição de corrida, observe as afirmativas a seguir, contendo opçõesde solução:<br>I - Uma possibilidade é a de que interrupções não serem possíveis de ocorrerem ao mesmo tempo.<br>II - O uso de uma trava determina que um processo qeu acessa um recurso indique que o recurso está ocupado através da mudança do valor de um bit indicativo de uso do recurso de 0 para 1.<br>III -Há um método que, caso um processonecessite de um recurso, antes é verificado se o mesmo se encontra na chamada região critica por outro processo estar requisitado-o também e, caso esteja ele é enfileirado e aguarda.',
    options:['I e II, apenas',
             'III, apenas',
             'I, apenas',
             'II, apenas.',
             'II e III apenas',
            ],
    answer: 4

},
{
    q:'Os chamados códigos maliciosos são responsáveis por inúmeros problemas em empresas, pois ao contaminarem infraestruturas de TI, podem ocasionar perdas significativas para a mesma. Esses códigos representam uma categoria especial de software que pode ser capaz de se replicar em um sistema operacional e se ocultar durante as atividades normais do SO para contaminar arquivos para os quais esteja programado a infectar, como uma doença. <br>A partir de códigos maliciosos , observe as afirmativas a seguir.<br>I - Virus são os agentes mais tradicionais de infecção e se baseiam na ideia de infiltração, mas não se preocupam com ainfecção de outros arquivos além do que foi originalmente contaminado.<br>II - Existem softwares dedicados a buscar pontos desprotegidos não detectados ou não corrigidos, e que permitam uma possivel invalão.<br>III - Existem softwares que são capazes de capturar o que é digitado por usuários para uso, assim como exitem softwares que se prestam a ocultar acessos indevidos e o conjuntos destas duas alternativas se mostra um grande risco.<br>Assinale a alternativa que contenha apenas afirmativas corretas.',
    options:['I, apenas',
             'II, apenas.',
             'II e III, apenas',
             'I, apenas',
             'III, apenas',
            ],
    answer: 2

},
{
    q:'Dentro das funcionalidades de um sistema operacional, existem os comandos que são utilizados em janelas do tipo console (shell) que são executadas a partir de uma interface fráfica do sistema operacional, mas há verões de sistemas operacionais que não utilizam interfaces fráficas. O Linux é um sistema operacional que possui verões tanto com interfaces fráficas quanto com interfaces de texto apenas.<br>Sobre interfaces textuais Shell em Linux, observe as afirmativas a seguir:<br>I - O comando ls é utilizado para que se possa listar arquivos e pastas e visualizar alguns detalhes relativos a estes.<br>II - O comando cd(cleardevice) é utilizado na limpeza de discos, formatando-os por completo para uso posterior.III - O comando ps (print screen) é usado para enviar diretamente à impessora a própria imagem da tela como no sistema operacinal Windows',
    options:['I e II, apenas.',
             'II e III, apenas.',
             'II, apenas.',
             'III, apenas',
             'I, apenas',
            ],
    answer: 4

},
{
    q:'A segurança envolve a parte externa, por exemplo, o acesso ao sistema operacional a partir de login e senha, ou então ataques de vírus e outras pragas a partir da internet. O melhor cenário para um computador é quando ele possui um sistema operacional seguro e protegido.<br>Com base no texto acima, e pensando sobre ataques à sistemas operacionais é correto afirmar qeu:',
    options:['Força bruta, hacking, interrupção e interrupção são exemplos de tipos de ataques',
             'Fabricação, permissão, interceptação e interrupção são exemplos de tipos',
             'Modificação, correção, força bruta e intercepção são exemplos',
             'Existem quatrotipos de ataques: correção, força bruta, modificação ou fabricação',
             'Existem quatro tipos de ataques interrupção, interceptação, modificação ou fabricação.',
            ],
    answer: 4

},
{
    q:'Existe um drive para cada tipo de dispositivo, como discos rígidos SATA, portas USB, placas gráficas, etc. Muitas vezes o driver é consruido pelo próprio fabricante do hardware e fornecido em forma compilada(em linguagem de máquina) para ser acoplado ao restante do sistema operacional.<br>Assinale a alternativa que apresenta a função do driver para o sistema operacional.',
    options:['São softwares de entrada e saída no nível usuário.',
             'São mecanismo de hardwares para o gerenciamento das interrupções.',
             'São softwares do sistema operacional independente do dispositivo.',
             'São softwares que auxiliam o sistema operacional no controle de novos hardwares.',
             'São peças do computador que auxiliam a instalação de novos hardwares.',
            ],
    answer: 3

},
{
    q:'Os temporizadores periódicos são implementados baseados em interrupções de um relógio de hardware (ticks). A cada tick, o kernel executa tarefas administrativas como verificação de alarmes a serem disparados, contagem de tempo da tarefa que está executando no processador, análise de escalonamento, preempções e outros serviços periódicos do sistema.<br>Assinale a alternativa que apresenta um escalonamento controlado por um temporizador:',
    options:['outros',
             'Solução de Peterson.',
             'Trava do tipo Lock',
             'Semáforo',
             'Round Robin',
            ],
    answer: 4

},


]