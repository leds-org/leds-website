// Testimonials data
const testimonials = [
  {
    name: "Tarcísio",
    role: "Desenvolvedor – Banco BTG Pactual",
    content:
      "Se me perguntassem se há algo de que me arrependo no LEDS, certamente seria o fato de não ter participado do laboratório mais cedo, durante a faculdade.",
    location: "LEDS Serra",
  },
  {
    name: "Renan Osório Rios",
    role: "Professor – Ifes Campus Colatina",
    content:
      "Participar do LEDS como orientador virou a chave na minha carreira como professor. O LEDS me mostrou que o professor precisa viver o mercado para ensinar algo conectado com a realidade.",
    location: "LEDS Colatina",
  },
  {
    name: "Ex-LEDS",
    role: "Desenvolvedor – Empresa nos EUA",
    content:
      "O LEDS definitivamente é uma faculdade dentro do IFES. Hoje trabalho para uma empresa dos Estados Unidos — e agora só falta conquistar o mundo 😁.",
    location: "LEDS Serra",
  },
  {
    name: "Ex-LEDS",
    role: "Desenvolvedor Full Stack",
    content:
      "O LEDS me deu atalhos na carreira, permitindo assumir grandes responsabilidades logo no início. Em qualquer empresa, levaria anos para ter essa vivência.",
    location: "LEDS Serra",
  },
  {
    name: "Ex-LEDS",
    role: "Gerente de Produto – Empresa de capital aberto em SP",
    content:
      "Pessoas inovadoras constroem produtos inovadores. O LEDS me deu ambiente e pessoas certas para isso. Minha base? O LEDS.",
    location: "LEDS Serra",
  },
  {
    name: "Diego Pasti",
    role: "Ex-integrante LEDS – Consultor e Desenvolvedor",
    content:
      "Participei do LEDS de 2014 a 2016. Foi uma experiência transformadora. Mais que um programador, me tornei um resolvedor de problemas.",
    location: "LEDS Serra",
  },
]

// Team members data
const teamMembers = [
  {
    name: "Paulo Sérgio dos Santos Júnior",
    role: "Coordenador",
    linkedin: "https://www.linkedin.com/in/paulossjunior/",
    photo: "images/paulo-photo.jpeg",
  },
  {
    name: "Daniel Cavalieri",
    role: "Professor Orientador",
    linkedin: "https://www.linkedin.com/in/daniel-cavalieri-323272123/",
    photo: "images/daniel-photo.jpeg",
  },
  {
    name: "Rafael Emerick",
    role: "Professor Orientador",
    linkedin: "https://www.linkedin.com/in/rafael-emerick-z-o/",
    photo: "images/emerick-photo.jpeg",
  },
  {
    name: "Rodrigo Calhau",
    role: "Professor Orientador",
    linkedin: "https://www.linkedin.com/in/rodrigo-f-calhau-a6663776/",
    photo: "images/rodrigo-calhau.jpeg",
  },
]

// Projects data
const projects = [
  {
    id: 1,
    title: "Smart Idea (BAC)",
    date: "Novembro 2024",
    status: "Concluído",
    description: "Sistema de monitoramento de saúde e atividades dos cães do Batalhão de Ações com Cães da PM ES",
    fullDescription:
      "Projeto desenvolvido em parceria com o BAC da PM ES para monitorar a saúde e atividades dos cães policiais, proporcionando melhor cuidado e eficiência operacional.",
    team: ["Mateus Lannes Cunha", "Harian Adami Chagas Radaelli", "Manoel Rodrigues Loureiro"],
    advisors: ["Prof. Felipe Frechiani", "Prof. Moisés Omena"],
    technologies: ["IoT", "Sensores", "Mobile App", "Dashboard"],
    achievements: [
      "Apresentado em 08/11/2024 no IFES Campus Serra",
      "Demonstração pública com apoio do Secretário Bruno Lamas",
      "Parceria estratégica com PM ES",
    ],
    color: "from-blue-500 to-blue-600",
    statusColor: "status-completed",
  },
  {
    id: 2,
    title: "ConectaFAPES",
    date: "Desde Nov 2023",
    status: "Em Desenvolvimento",
    description:
      "Plataforma integradora entre IFES, bolsistas e FAPES para gestão centralizada de processos acadêmicos",
    fullDescription:
      "Sistema completo de gestão que centraliza documentos, notificações e processos acadêmicos, facilitando a comunicação entre instituições e bolsistas.",
    team: ["Equipe LEDS"],
    advisors: ["Coordenação LEDS"],
    technologies: ["React", "Node.js", "PostgreSQL", "Jira", "GitLab", "Plugin Origami"],
    achievements: [
      "Orçamento de R$ 5,9 milhões por 36 meses",
      "Integrações avançadas implementadas",
      "Gestão centralizada de documentos",
      "Sistema de notificações automatizado",
    ],
    color: "from-green-500 to-green-600",
    statusColor: "status-development",
  },
  {
    id: 3,
    title: "AgentES (Agentes)",
    date: "2025",
    status: "Em Produção",
    description: "Sistema de agentes inteligentes com IA para automação de processos públicos",
    fullDescription:
      "Projeto inovador que utiliza inteligência artificial para criar agentes autônomos capazes de automatizar processos públicos e auxiliar na tomada de decisões estratégicas.",
    team: ["Equipe LEDS", "Prodest", "FAPES"],
    advisors: ["Diretores IFES", "Diretores Prodest", "Diretores FAPES"],
    technologies: ["n8n", "OpenAI", "Mistral", "IA", "Automação"],
    achievements: [
      "POC apresentada em reunião estratégica na Prodest ES",
      "Parceria com Prodest e FAPES",
      "Início da produção para grupo restrito",
      "Treinamento técnico da equipe Prodest planejado",
    ],
    color: "from-red-500 to-red-600",
    statusColor: "status-production",
  },
]

// Services data
const services = [
  {
    name: "RequirimentsAI",
    description: "Transforme reuniões em documentos de requisitos estruturados automaticamente",
    longDescription:
      "Solução baseada em IA que analisa gravações de reuniões e gera documentos de requisitos técnicos completos, economizando tempo e garantindo precisão na documentação de projetos.",
    icon: "file-text",
    color: "from-blue-500 to-blue-600",
    features: [
      "Análise automática de áudio",
      "Geração de documentos estruturados",
      "Integração com ferramentas de gestão",
      "Revisão colaborativa",
    ],
    status: "Em Desenvolvimento",
  },
  {
    name: "Chatbot Inteligente",
    description: "Chatbot baseado em agentes para atendimento personalizado ao público",
    longDescription:
      "Sistema de chatbot avançado que utiliza agentes inteligentes para fornecer atendimento automatizado e personalizado, adaptando-se às necessidades específicas de cada empresa.",
    icon: "bot",
    color: "from-green-500 to-green-600",
    features: ["Agentes inteligentes", "Atendimento 24/7", "Integração multi-plataforma", "Aprendizado contínuo"],
    status: "Disponível",
  },
  {
    name: "LEDS Core",
    description: "Plataforma completa de gestão de projetos para equipes de desenvolvimento",
    longDescription:
      "Sistema integrado de gestão de projetos desenvolvido especificamente para equipes de software, oferecendo controle completo do ciclo de vida dos projetos.",
    icon: "folder-kanban",
    color: "from-red-500 to-red-600",
    features: ["Gestão de sprints", "Controle de versões", "Relatórios avançados", "Integração com Git"],
    status: "Beta",
  },
  {
    name: "LED Hub",
    description: "Portal de desenvolvimento centralizado para equipes de desenvolvimento",
    longDescription:
      "Ambiente integrado que centraliza todas as ferramentas e recursos necessários para equipes de desenvolvimento, proporcionando maior produtividade e colaboração.",
    icon: "code",
    color: "from-purple-500 to-purple-600",
    features: ["Ambiente integrado", "Ferramentas centralizadas", "Colaboração em tempo real", "Deploy automatizado"],
    status: "Em Desenvolvimento",
  },
]

// Teams data
const teams = [
  {
    name: "Coordenação",
    area: "Gestão e Coordenação",
    icon: "target",
    mission:
      "Coordenar e orientar todas as atividades do LEDS, garantindo alinhamento estratégico e excelência na execução dos projetos.",
    members: [
      { name: "Fabiano Ruy" },
      { name: "Felipe Frechiani" },
      { name: "Paulo Sérgio dos Santos Júnior" },
      { name: "Victorio Albani Carvalho" },
    ],
    color: "from-purple-500 to-purple-600",
    technologies: ["Gestão de Projetos", "Metodologias Ágeis", "Liderança", "Planejamento Estratégico"],
    roles: ["Coordenador", "Professor Orientador", "Gestor de Projetos"],
  },
  {
    name: "Equipe de Desenvolvimento",
    area: "Desenvolvimento de Software",
    icon: "code",
    mission:
      "Desenvolver soluções de software robustas, escaláveis e inovadoras para atender às demandas dos projetos do LEDS.",
    members: [
      { name: "Vitor Freire Dandrea" },
      { name: "João Pedro Silva Santos" },
      { name: "Maria Eduarda Oliveira" },
      { name: "Carlos Alberto Costa" },
      { name: "Ana Beatriz Ferreira" },
      { name: "Lucas Gabriel Santos" },
      { name: "Fernanda Lima" },
      { name: "Rafael Souza" },
      { name: "Juliana Martins" },
      { name: "Bruno Alves" },
      { name: "Camila Torres" },
      { name: "Diego Rocha" },
      { name: "Isabela Costa" },
      { name: "Mateus Cunha" },
      { name: "Larissa Campos" },
    ],
    color: "from-blue-500 to-blue-600",
    technologies: ["React", "Next.js", "Node.js", "Python", "PostgreSQL", "Docker", "TypeScript", "JavaScript"],
    roles: ["Frontend Developer", "Backend Developer", "Full Stack Developer", "Mobile Developer"],
  },
]

// Institutional data
const areas = [
  {
    name: "Engenharia de Software",
    icon: "cpu",
    description: "Desenvolvimento de metodologias e ferramentas para criação de software de qualidade",
    color: "from-blue-500 to-blue-600",
  },
  {
    name: "Ciência de Dados",
    icon: "book-open",
    description: "Análise e processamento de grandes volumes de dados para geração de insights",
    color: "from-green-500 to-green-600",
  },
  {
    name: "Inteligência Computacional",
    icon: "lightbulb",
    description: "Desenvolvimento de sistemas inteligentes e algoritmos de aprendizado de máquina",
    color: "from-red-500 to-red-600",
  },
]

const pillars = [
  {
    title: "Ensino",
    description: "Formação de profissionais qualificados através de metodologias inovadoras",
    icon: "book-open",
  },
  {
    title: "Pesquisa",
    description: "Desenvolvimento de conhecimento científico e tecnológico de ponta",
    icon: "target",
  },
  {
    title: "Extensão",
    description: "Aplicação do conhecimento para solucionar problemas reais da sociedade",
    icon: "users",
  },
]

const campuses = [
  {
    name: "LEDS Serra",
    description: "Campus principal do LEDS, onde iniciou suas atividades em 2012",
    address: "IFES Campus Serra - Rodovia ES-010, Km 6,5 - Manguinhos, Serra - ES",
    color: "from-blue-500 to-blue-600",
  },
  {
    name: "LEDS Colatina",
    description: "Unidade focada em desenvolvimento de software e inteligência artificial",
    address: "IFES Campus Colatina - Av. Arino Gomes Leal, 1700 - Santa Margarida, Colatina - ES",
    color: "from-green-500 to-green-600",
  },
  {
    name: "LEDS Cachoeiro de Itapemirim",
    description: "Unidade especializada em automação e sistemas embarcados",
    address:
      "IFES Campus Cachoeiro - Rod. ES-482 (Cachoeiro-Alegre) - Fazenda Morro Grande, Cachoeiro de Itapemirim - ES",
    color: "from-red-500 to-red-600",
  },
]

// Group testimonials by location
const testimonialsByLocation = testimonials.reduce((acc, testimonial) => {
  const location = testimonial.location || "LEDS Serra"
  if (!acc[location]) {
    acc[location] = []
  }
  acc[location].push(testimonial)
  return acc
}, {})
