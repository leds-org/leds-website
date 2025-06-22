"use client"
import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  MapPin,
  Target,
  Lightbulb,
  Zap,
  Heart,
  HelpCircle,
  ChevronDown,
  Compass,
  Eye,
  Star,
  Users,
  BookOpen,
  Cpu,
} from "lucide-react"

export default function InstitucionalPage() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0)

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index)
  }

  const areas = [
    {
      name: "Engenharia de Software",
      icon: Cpu,
      description: "Desenvolvimento de metodologias e ferramentas para criação de software de qualidade",
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "Ciência de Dados",
      icon: BookOpen,
      description: "Análise e processamento de grandes volumes de dados para geração de insights",
      color: "from-green-500 to-green-600",
    },
    {
      name: "Inteligência Computacional",
      icon: Lightbulb,
      description: "Desenvolvimento de sistemas inteligentes e algoritmos de aprendizado de máquina",
      color: "from-red-500 to-red-600",
    },
  ]

  const pillars = [
    {
      title: "Ensino",
      description: "Formação de profissionais qualificados através de metodologias inovadoras",
      icon: BookOpen,
    },
    {
      title: "Pesquisa",
      description: "Desenvolvimento de conhecimento científico e tecnológico de ponta",
      icon: Target,
    },
    {
      title: "Extensão",
      description: "Aplicação do conhecimento para solucionar problemas reais da sociedade",
      icon: Users,
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Institucional</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça a história e missão do LEDS - Laboratório de Extensão em Desenvolvimento de Soluções
          </p>
        </div>

        {/* Hero Image Section */}
        <div className="mb-20">
          <Card className="overflow-hidden shadow-2xl">
            <div className="relative h-96">
              <Image
                src="/images/team-group-campus.png"
                alt="Equipe LEDS no Campus Serra"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-8 left-8 text-white">
                <h2 className="text-3xl font-bold mb-2">Nossa Equipe</h2>
                <p className="text-lg text-gray-200">
                  Professores e alunos unidos pela paixão em desenvolver soluções inovadoras
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* About Section */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Sobre o LEDS</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  O Laboratório de Extensão e Desenvolvimento de Soluções (LEDS) é um programa de extensão ligado ao
                  Instituto Federal do Espírito Santo Campus Serra que funciona atualmente na sala 804, localizado no
                  bloco 8.
                </p>
                <p>
                  Criado em 2012, atualmente o programa conta com a participação de oito professores e 21 alunos, que
                  atuam de forma interdisciplinar nos projetos. O Laboratório visa fazer a conexão, por meio de
                  projetos, de demandas de entidades governamentais, empresas e organizações sociais com alunos e
                  professores.
                </p>
              </div>
            </div>
            <div className="relative">
              <Card className="overflow-hidden shadow-xl">
                <Image
                  src="/images/leds-office-wall.png"
                  alt="Ambiente interno do LEDS"
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover"
                />
              </Card>
            </div>
          </div>
        </section>

        {/* Areas de Atuação */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Áreas de Atuação</h2>
            <p className="text-lg text-gray-600">Principais áreas de pesquisa e desenvolvimento do LEDS</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {areas.map((area, index) => {
              const IconComponent = area.icon
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div
                      className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${area.color} flex items-center justify-center`}
                    >
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{area.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{area.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Pilares */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossos Pilares</h2>
            <p className="text-lg text-gray-600">Os três pilares que sustentam nossa atuação</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => {
              const IconComponent = pillar.icon
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-600 to-green-600 flex items-center justify-center">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{pillar.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{pillar.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Team Photo Section */}
        <section className="mb-20">
          <Card className="overflow-hidden shadow-xl">
            <div className="relative h-80">
              <Image src="/images/leds-meeting-team.jpeg" alt="Reunião da equipe LEDS" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <h2 className="text-3xl font-bold mb-4">Colaboração e Inovação</h2>
                  <p className="text-lg max-w-2xl">
                    Nosso ambiente promove a colaboração entre professores, alunos e parceiros para desenvolver soluções
                    que transformam a realidade
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Missão e Visão */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-blue-900">
                  <Compass className="h-6 w-6 mr-3" />
                  Nossa Missão
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-800 text-lg leading-relaxed">
                  "Prover aprendizado colaborativo num ambiente inovador com práticas que visam a resolução de problemas
                  reais trazidos pela sociedade"
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-green-900">
                  <Eye className="h-6 w-6 mr-3" />
                  Nossa Visão
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-800 text-lg leading-relaxed">
                  "Desenvolver a realidade local por meio da Integração do Ensino, Pesquisa e Extensão"
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Nossa Rede */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossa Rede</h2>
            <p className="text-lg text-gray-600">Conheça os campi onde o LEDS atua</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {campuses.map((campus, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div
                    className={`w-12 h-12 mb-4 rounded-lg bg-gradient-to-r ${campus.color} flex items-center justify-center`}
                  >
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{campus.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-gray-600">{campus.description}</p>
                  <div className="pt-3 border-t border-gray-100">
                    <p className="text-sm text-gray-500">{campus.address}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Accordion para informações detalhadas */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Saiba Mais</h2>
            <p className="text-lg text-gray-600">Informações detalhadas sobre nossa filosofia e funcionamento</p>
          </div>

          <div className="space-y-4">
            {/* Conceito */}
            <Card className="overflow-hidden">
              <button
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                onClick={() => toggleAccordion(1)}
              >
                <div className="flex items-center">
                  <Lightbulb className="h-6 w-6 text-blue-600 mr-4" />
                  <h3 className="text-xl font-semibold text-gray-900">Conceito</h3>
                </div>
                <ChevronDown
                  className={`h-5 w-5 text-gray-500 transition-transform ${activeAccordion === 1 ? "rotate-180" : ""}`}
                />
              </button>
              {activeAccordion === 1 && (
                <div className="px-6 pb-6 space-y-4 text-gray-700">
                  <p>
                    Embora saibamos que há uma grande confiança no papel da Educação para o desenvolvimento da
                    sociedade, no nosso laboratório trazemos à luz uma forma muito simples, direta e prática de
                    expressão desse papel: a sociedade traz um problema, e, com o LEDS, estuda/aprende/propõe uma
                    solução, que pode se apresentar como um produto, sistema, serviço, método ou modelo.
                  </p>
                  <p>
                    Muito se fala hoje da necessidade de unir ensino, pesquisa e extensão. No LEDS, essa união se dará
                    na ordem extensão (a comunidade traz o problema), pesquisa (o conhecimento) e ensino (os alunos e
                    professores pesquisam e aprendem o necessário para desenvolver soluções) e extensão (os resultados
                    da pesquisa-ensino são devolvidos à sociedade).
                  </p>
                </div>
              )}
            </Card>

            {/* Significado da sigla */}
            <Card className="overflow-hidden">
              <button
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                onClick={() => toggleAccordion(2)}
              >
                <div className="flex items-center">
                  <Zap className="h-6 w-6 text-blue-600 mr-4" />
                  <h3 className="text-xl font-semibold text-gray-900">O significado por trás da sigla LEDS</h3>
                </div>
                <ChevronDown
                  className={`h-5 w-5 text-gray-500 transition-transform ${activeAccordion === 2 ? "rotate-180" : ""}`}
                />
              </button>
              {activeAccordion === 2 && (
                <div className="px-6 pb-6 space-y-4 text-gray-700">
                  <p>
                    A relação do Laboratório LEDS com a tecnologia LED traz analogias bastante significativas. LED vem
                    do verbo inglês "to lead", que significa liderar. "Leaders" em inglês significa líderes, aqueles que
                    lideram. LED é também um diodo emissor de luz.
                  </p>
                  <p>
                    O conceito "Emissor de Luz" vem em contraposição ao significado da palavra Aluno, que significa "sem
                    luz", ou então "sem conhecimento" (A - sem, Luno - Luz). No LEDS, os "alunos" são LEDS! Não são
                    aqueles sem luz, são aqueles que iluminam, e são protagonistas.
                  </p>
                </div>
              )}
            </Card>

            {/* Valores e Princípios */}
            <Card className="overflow-hidden">
              <button
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                onClick={() => toggleAccordion(3)}
              >
                <div className="flex items-center">
                  <Heart className="h-6 w-6 text-blue-600 mr-4" />
                  <h3 className="text-xl font-semibold text-gray-900">Valores e Princípios</h3>
                </div>
                <ChevronDown
                  className={`h-5 w-5 text-gray-500 transition-transform ${activeAccordion === 3 ? "rotate-180" : ""}`}
                />
              </button>
              {activeAccordion === 3 && (
                <div className="px-6 pb-6 space-y-6 text-gray-700">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Star className="h-5 w-5 mr-2 text-yellow-500" />
                      Valores
                    </h4>
                    <ul className="space-y-2">
                      <li>
                        <strong>Pensamento crítico e criativo</strong> mais que técnicas e métodos
                      </li>
                      <li>
                        <strong>Integração de conhecimento</strong> mais que conhecimento isolado
                      </li>
                      <li>
                        <strong>Trabalho em equipe</strong> mais que individualismo
                      </li>
                      <li>
                        <strong>Resolução de problema</strong> mais que estudos teóricos
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Princípios Fundamentais</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h5 className="font-medium mb-2">A Força está em Todos</h5>
                        <p className="text-sm">Quando colaboramos e nos unimos ampliamos o alcance de nossas ações.</p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h5 className="font-medium mb-2">Somos todos aprendizes</h5>
                        <p className="text-sm">Todo mundo tem algo para aprender e algo para ensinar.</p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h5 className="font-medium mb-2">Empatia transforma</h5>
                        <p className="text-sm">Conhecer os problemas da sociedade nos motiva a agir.</p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h5 className="font-medium mb-2">Respeitamos individualidades</h5>
                        <p className="text-sm">Valorizamos talentos e respeitamos limitações de cada um.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Card>

            {/* FAQ */}
            <Card className="overflow-hidden">
              <button
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                onClick={() => toggleAccordion(4)}
              >
                <div className="flex items-center">
                  <HelpCircle className="h-6 w-6 text-blue-600 mr-4" />
                  <h3 className="text-xl font-semibold text-gray-900">Perguntas Frequentes</h3>
                </div>
                <ChevronDown
                  className={`h-5 w-5 text-gray-500 transition-transform ${activeAccordion === 4 ? "rotate-180" : ""}`}
                />
              </button>
              {activeAccordion === 4 && (
                <div className="px-6 pb-6 space-y-4">
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h5 className="font-medium text-gray-900 mb-2">Como participar do LEDS?</h5>
                      <p className="text-sm text-gray-700">
                        O LEDS abre seleção sempre que há necessidade de renovar a equipe para novos projetos.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h5 className="font-medium text-gray-900 mb-2">Como funciona a seleção?</h5>
                      <p className="text-sm text-gray-700">
                        A seleção é feita através de formulário de inscrição seguido de entrevista.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h5 className="font-medium text-gray-900 mb-2">Há bolsas disponíveis?</h5>
                      <p className="text-sm text-gray-700">
                        Alguns projetos oferecem bolsas, dependendo do financiamento disponível.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}
