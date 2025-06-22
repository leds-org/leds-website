import { Github, Linkedin, Mail, Instagram, Youtube, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-50/80 backdrop-blur-sm border-t border-gray-200/70">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">LEDS</h3>
            <p className="text-gray-600 mb-4">
              Laboratório de Extensão em Desenvolvimento de Soluções - IFES Campus Serra
            </p>
            <div className="space-y-2">
              <p className="flex items-center text-sm text-gray-600">
                <Mail className="h-4 w-4 mr-2" />
                leds.ifes@gmail.com
              </p>
              <p className="flex items-center text-sm text-gray-600">
                <Phone className="h-4 w-4 mr-2" />
                (27) 3149-0700
              </p>
              <p className="flex items-center text-sm text-gray-600">
                <MapPin className="h-4 w-4 mr-2" />
                IFES Campus Serra
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/leds-org"
                target="_blank"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                rel="noreferrer"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://br.linkedin.com/school/ledsifes/"
                target="_blank"
                className="text-gray-600 hover:text-blue-600 transition-colors"
                rel="noreferrer"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/ledsifes/"
                target="_blank"
                className="text-gray-600 hover:text-pink-600 transition-colors"
                rel="noreferrer"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://www.youtube.com/@ledsifes"
                target="_blank"
                className="text-gray-600 hover:text-red-600 transition-colors"
                rel="noreferrer"
              >
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200/70 pt-8 text-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} LEDS - Laboratório de Extensão em Desenvolvimento de Soluções. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
