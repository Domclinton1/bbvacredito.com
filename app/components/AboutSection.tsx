export default function AboutSection() {
  return (
    <section className="w-full bg-[#004481] text-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {/* Título */}
        <div className="text-center flex flex-col gap-4">
          <h2 className="text-3xl md:text-5xl font-bold">
            Criando Oportunidades
          </h2>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            Somos uma instituição financeira global focada em inovação,
            tecnologia e sustentabilidade.
          </p>
        </div>

        {/* Quem somos */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-semibold">Quem Somos</h3>
            <p className="text-gray-200 leading-relaxed">
              Com mais de 160 anos de história, somos uma instituição global que
              atende milhões de clientes em todo o mundo. Nascemos na Espanha e
              hoje estamos presentes em diversos países, oferecendo soluções
              financeiras modernas e acessíveis.
            </p>
          </div>

          <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
            <p className="italic text-lg">
              "Colocar ao alcance de todos as oportunidades desta nova era."
            </p>
          </div>
        </div>

        {/* Pilares */}
        <div className="flex flex-col gap-8">
          <h3 className="text-2xl font-semibold text-center">Nossos Pilares</h3>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white text-[#004481] p-6 rounded-2xl shadow-lg flex flex-col gap-3">
              <h4 className="font-bold text-lg">Liderança Digital</h4>
              <p>
                Experiência simples, segura e intuitiva através de tecnologia de
                ponta.
              </p>
            </div>

            <div className="bg-white text-[#004481] p-6 rounded-2xl shadow-lg flex flex-col gap-3">
              <h4 className="font-bold text-lg">Sustentabilidade</h4>
              <p>
                Compromisso com o futuro, apoiando uma economia sustentável e
                inclusiva.
              </p>
            </div>

            <div className="bg-white text-[#004481] p-6 rounded-2xl shadow-lg flex flex-col gap-3">
              <h4 className="font-bold text-lg">Cliente em Primeiro Lugar</h4>
              <p>
                Transparência e inovação para facilitar o dia a dia das pessoas.
              </p>
            </div>
          </div>
        </div>

        {/* Números */}
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div>
            <h4 className="text-3xl font-bold">+160</h4>
            <p className="text-gray-300">Anos de história</p>
          </div>

          <div>
            <h4 className="text-3xl font-bold">+25</h4>
            <p className="text-gray-300">Países</p>
          </div>

          <div>
            <h4 className="text-3xl font-bold">80M+</h4>
            <p className="text-gray-300">Clientes</p>
          </div>

          <div>
            <h4 className="text-3xl font-bold">120K+</h4>
            <p className="text-gray-300">Colaboradores</p>
          </div>
        </div>
      </div>
    </section>
  );
}
