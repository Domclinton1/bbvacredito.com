export default function CreditSection() {
  return (
    <section className="w-full bg-white text-[#004481] py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        {/* HERO */}
        <div className="text-center flex flex-col gap-4">
          <h1 className="text-3xl md:text-5xl font-bold">
            Crédito Flexível BBVA – O Impulso que Você Precisa
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            De projetos pessoais à expansão do seu negócio. Crédito rápido,
            digital e com as taxas mais competitivas do mercado europeu.
          </p>
        </div>

        {/* CONDIÇÕES */}
        <div className="flex flex-col gap-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-center">
            Condições Exclusivas
          </h2>

          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="bg-[#004481] text-white p-6 rounded-2xl">
              <h3 className="font-bold text-lg">Montantes</h3>
              <p>€30.000 a €2.000.000</p>
            </div>

            <div className="bg-[#004481] text-white p-6 rounded-2xl">
              <h3 className="font-bold text-lg">Taxa</h3>
              <p>A partir de 1,30% ao ano</p>
            </div>

            <div className="bg-[#004481] text-white p-6 rounded-2xl">
              <h3 className="font-bold text-lg">Prazo</h3>
              <p>Até 360 meses</p>
            </div>

            <div className="bg-[#004481] text-white p-6 rounded-2xl">
              <h3 className="font-bold text-lg">Rapidez</h3>
              <p>Liberação em até 3 dias</p>
            </div>
          </div>
        </div>

        {/* PARA VOCÊ / EMPRESA */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Pessoa */}
          <div className="bg-gray-100 p-8 rounded-2xl flex flex-col gap-4">
            <h3 className="text-2xl font-semibold">Para Você</h3>
            <p className="text-gray-600">
              Realize o sonho da casa própria ou invista nos seus projetos com
              segurança.
            </p>

            <ul className="flex flex-col gap-2">
              <li>✓ Uso livre do crédito</li>
              <li>✓ Carência de até 12 meses</li>
              <li>✓ Seguro de proteção incluso</li>
            </ul>
          </div>

          {/* Empresa */}
          <div className="bg-gray-100 p-8 rounded-2xl flex flex-col gap-4">
            <h3 className="text-2xl font-semibold">Para Sua Empresa</h3>
            <p className="text-gray-600">
              Expanda seu negócio com capital inteligente e sustentável.
            </p>

            <ul className="flex flex-col gap-2">
              <li>✓ Financiamento de equipamentos e frotas</li>
              <li>✓ Contratação 100% digital</li>
              <li>✓ Bônus para projetos sustentáveis</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
