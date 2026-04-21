import { Instagram, Linkedin } from 'lucide-react'
import logoFixIt from '../imports/2.png'
import imagenInicio from '../imports/Imagen_para_el_inicio_de_la_página.png'

export default function App() {
  // Enlaces actualizados
  const INSTAGRAM_URL = "https://www.instagram.com/fixitapp_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
  const LINKEDIN_URL = "https://www.linkedin.com/company/fix-it-app"
  const YOUTUBE_VIDEO_URL = "https://www.youtube.com/embed/rx1mwHECLWY"
  const FORMS_URL = "https://forms.gle/7RnjiKd5sF9wFqc37"

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#FF5722] px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 bg-[#f5f5dc] rounded-xl flex items-center justify-center p-2 shadow-sm">
            <img src={logoFixIt} alt="Fix It Logo" className="w-full h-full object-contain" />
          </div>
          <h1 className="text-4xl font-bold text-[#1a1a1a]">Fix It</h1>
        </div>
       
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-[#2d2d2d] mb-8">
          Soluciones inmediatas a problemas complejos
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Formulario - Queremos conocer tu opinión */}
          <a
            href={FORMS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FF5722] rounded-2xl p-12 flex items-center justify-center hover:bg-[#f4511e] transition-colors cursor-pointer min-h-[250px]"
          >
           <h3 className="text-2xl font-bold text-white text-center leading-tight">
            Queremos conocer tu opinión<br />Llena nuestro forms aquí👈
          </h3>
          </a>

          {/* Ilustración */}
          <div className="bg-[#d4857c] rounded-2xl overflow-hidden flex items-center justify-center min-h-[250px]">
            <img src={imagenInicio} alt="Fix It - Soluciones profesionales" className="w-full h-full object-cover" />
          </div>

          {/* Lista de características */}
          <div className="bg-[#FF5722] rounded-2xl p-8 border-4 border-[#2d2d2d]">
            <h3 className="text-3xl font-bold text-[#2d2d2d] mb-6">Beneficios de Fix It</h3>
            <ul className="space-y-5">
              {[
                'Técnicos verificados',
                'Agendar en línea',
                'Puedo ver las calificaciones de los maestros',
                'Conocer el recorrido completo',
                'Garantía del servicio'
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full border-3 border-[#2d2d2d] flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-[#2d2d2d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[#2d2d2d] font-semibold text-xl">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Video de YouTube */}
          <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden min-h-[250px]">
            <iframe
              className="w-full h-full min-h-[250px] md:min-h-[400px]"
              src={YOUTUBE_VIDEO_URL}
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Botones inferiores */}
        <div className="flex gap-4 justify-center mt-12">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#2d2d2d] text-white px-8 py-3 rounded-lg flex items-center gap-2 hover:bg-[#3d3d3d] transition-colors"
          >
            <Linkedin size={24} />
            <span className="font-semibold text-lg">LinkedIn</span>
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#FF5722] px-8 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-100 transition-colors border-2 border-[#FF5722]"
          >
            <Instagram size={24} />
            <span className="font-semibold text-lg">Instagram</span>
          </a>
        </div>
      </main>
    </div>
  )
}
