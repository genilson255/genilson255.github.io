const quizData = [
    {
        question: 'Segundo o que esta escrito no msa, O que é música?',
        options: [
            'A arte dos sons?',
            'A arte que manifesta os diversos sentimentos da alma?',
            'É como a arte de expressar sentimentos por meio de sons coordenados produzidos por vozes ou instrumentos musicais',
            'É tudo o que ouvimos?'
    ],
        correctAnswer: 'É como a arte de expressar sentimentos por meio de sons coordenados produzidos por vozes ou instrumentos musicais',
    },
    {
        question: 'Segundo o que está escrito no msa. O que é som?',
        options: [
            'É a arte dos sons?',
            'É tudo o que ouvinos',
            'É a execução de um som após o outro?',
            'É a execução simultanea de sons repetidos?'
        ],
        correctAnswer: 'É tudo o que ouvinos',
    },
    {
        question: 'Como é que o som é formado?',
        options: [
            'O som é formado pela propagação de ondas no ar, ao serem captadas por nossos ouvidos',
            'O som é formado pela junção de sons m usicais e sons não musicais',
            'O som é formado por sons produzidos por sons naturais e sons produzidos',
            'O som é formado por um ruido produzidos que resulta em som natural'
        ],
        correctAnswer: 'O som é formado pela propagação de ondas no ar, ao serem captadas por nossos ouvidos',
    },
    {
        question: 'O que significa a sigla MOO?',
        options: [
            'Metodo Orientado a Objeto',
            'Manual de Orintação Orquestral',
            'Manual Organização Orquestral',
            'Manual do Ouvinte Observador'
        ],
        correctAnswer: 'Manual de Orintação Orquestral',
    },
    {
        question: 'Quais os principais elementos da musica?',
        options: [
            'Timbre',
            'Uniform Reference Locator',
            'Unique Resource Locator',
            'Unified Resource Locator'
        ],
        correctAnswer: 'Universal Resource Locator',
    },
    {
        question: 'Qual é o protocolo de transferência de hipertexto padrão da web?',
        options: ['HTTP', 'FTP', 'SMTP', 'TCP'],
        correctAnswer: 'HTTP',
    },
    {
        question: 'Quem é frequentemente chamado de "pai da computação"?',
        options: ['Alan Turing', 'Bill Gates', 'Steve Jobs', 'Tim Berners-Lee'],
        correctAnswer: 'Alan Turing',
    },
    {
        question: 'Qual é o sistema operacional de código aberto baseado no kernel Linux?',
        options: ['Windows', 'macOS', 'Ubuntu', 'Android'],
        correctAnswer: 'Ubuntu',
    },
    {
        question: 'Qual é a linguagem de programação usada para criar aplicativos móveis Android?',
        options: ['Java', 'C#', 'Python', 'Swift'],
        correctAnswer: 'Java',
    },
    {
        question: 'O que é a nuvem (cloud) na computação?',
        options: ['Um local remoto para armazenamento de dados', 'Um tipo de software de edição de fotos', 'Um tipo de hardware de rede', 'Um sistema de ar condicionado para servidores'],
        correctAnswer: 'Um local remoto para armazenamento de dados',
    },
    {
        question: 'Qual é o maior motor de busca na internet?',
        options: ['Bing', 'Yahoo', 'Google', 'DuckDuckGo'],
        correctAnswer: 'Google',
    },
    {
        question: 'Quem é o co-fundador da Apple Inc. junto com Steve Jobs?',
        options: ['Bill Gates', 'Mark Zuckerberg', 'Elon Musk', 'Steve Wozniak'],
        correctAnswer: 'Steve Wozniak',
    },
    {
        question: 'O que é um firewall?',
        options: ['Um dispositivo de segurança de rede', 'Um tipo de sistema operacional', 'Um aplicativo de edição de fotos', 'Um dispositivo de entrada de computador'],
        correctAnswer: 'Um dispositivo de segurança de rede',
    },
    {
        question: 'Qual é a linguagem de marcação usada para criar páginas da web?',
        options: ['Python', 'Java', 'HTML', 'C++'],
        correctAnswer: 'HTML',
    },
    {
        question: 'O que é um "bug" de software?',
        options: ['Um erro ou problema em um programa de computador', 'Um vírus de computador', 'Um programa de teste de software', 'Um componente de hardware defeituoso'],
        correctAnswer: 'Um erro ou problema em um programa de computador',
    },
    {
        question: 'Qual é o sistema operacional padrão para dispositivos móveis da Apple?',
        options: ['iOS', 'Android', 'Windows', 'Linux'],
        correctAnswer: 'iOS',
    },
    {
        question: 'Qual é a linguagem de programação usada para criar páginas da web interativas?',
        options: ['JavaScript', 'HTML', 'Python', 'C#'],
        correctAnswer: 'JavaScript',
    },
    {
        question: 'O que é "open source" (código aberto) em relação ao software?',
        options: ['Software cujo código-fonte é público e pode ser modificado por qualquer pessoa', 'Software de código fechado sem acesso ao código-fonte', 'Software gratuito', 'Software que não funciona'],
        correctAnswer: 'Software cujo código-fonte é público e pode ser modificado por qualquer pessoa',
    },
    {
        question: 'Qual é o serviço de email mais popular do mundo?',
        options: ['Gmail', 'Outlook', 'Yahoo Mail', 'AOL Mail'],
        correctAnswer: 'Gmail',
    },
    {
        question: 'O que é "phishing"?',
        options: ['Uma técnica de pesca', 'Um tipo de malware', 'Uma técnica de hacking', 'Uma tentativa de enganar as pessoas para obter informações pessoais'],
        correctAnswer: 'Uma tentativa de enganar as pessoas para obter informações pessoais',
    },
    {
        question: 'Qual é a linguagem de programação usada para criar aplicativos iOS?',
        options: ['Java', 'Python', 'Swift', 'Ruby'],
        correctAnswer: 'Swift',
    },
    {
        question: 'O que é um "hackathon"?',
        options: ['Um tipo de competição de hackeamento', 'Um evento esportivo', 'Uma conferência de tecnologia', 'Um filme de ficção científica'],
        correctAnswer: 'Um tipo de competição de hackeamento',
    },
    {
        question: 'Qual é o navegador da web desenvolvido pela Mozilla?',
        options: ['Chrome', 'Safari', 'Firefox', 'Edge'],
        correctAnswer: 'Firefox',
    },
    {
        question: 'O que é "machine learning" (aprendizado de máquina)?',
        options: ['Um tipo de robô', 'Um tipo de linguagem de programação', 'Um campo de inteligência artificial', 'Um novo sistema operacional'],
        correctAnswer: 'Um campo de inteligência artificial',
    },
    {
        question: 'Qual é a linguagem de programação usada para criar aplicativos Android?',
        options: ['Java', 'C++', 'Python', 'Swift'],
        correctAnswer: 'Java',
    },
    {
        question: 'O que é um "cookie" na web?',
        options: ['Um tipo de biscoito', 'Um arquivo de dados armazenado em um navegador', 'Um tipo de senha', 'Uma ferramenta de pesquisa na web'],
        correctAnswer: 'Um arquivo de dados armazenado em um navegador',
    },
];

export default quizData;