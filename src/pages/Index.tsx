
import React from 'react';

const Index = () => {
  return (
    <div className="min-h-screen bg-oceanBlue text-textWhite">
      {/* Produções Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold mb-12 text-left">Produções</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Ícaro de Carvalho */}
          <div className="flex flex-col items-center">
            <div className="w-64 h-64 rounded-full overflow-hidden mb-6 hover:scale-105 transition-transform duration-300">
              <img
                src="https://i.postimg.cc/nc09YxV0/high-1744993455.jpg"
                alt="Ícaro de Carvalho"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4">Ícaro de Carvalho</h3>
            <p className="text-center text-gray-300 max-w-md">
              Mestre em copywriting e construção de autoridade.
              Juntos, formam a base estratégica por trás de grandes movimentos do mercado.
            </p>
          </div>

          {/* Leandro Ladeira */}
          <div className="flex flex-col items-center">
            <div className="w-64 h-64 rounded-full overflow-hidden mb-6 hover:scale-105 transition-transform duration-300">
              <img
                src="https://i.postimg.cc/HW5kkg7V/Hotmart-a-maior-plataforma-de-curso-online-do-mundo.jpg"
                alt="Leandro Ladeira"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4">Leandro Ladeira</h3>
            <p className="text-center text-gray-300 max-w-md">
              Um dos nomes mais influentes do marketing digital no Brasil.
              Ladeira é referência em vendas, com domínio absoluto de funis e produtos perpétuos.
            </p>
          </div>
        </div>
      </section>

      {/* Personal Presentation Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-64 h-64 rounded-full overflow-hidden flex-shrink-0 hover:scale-105 transition-transform duration-300">
            <img
              src="https://i.postimg.cc/FRwqf88Z/487993310-528029013363503-6384488293855636473-n-2.jpg"
              alt="Gustavo Correia"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-6">Gustavo Correia – Diretor de Marketing</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Com uma trajetória construída ao lado de grandes nomes como Ícaro de Carvalho e Leandro Ladeira e outros grandes nomes, Gustavo carrega a experiência de quem conhece o marketing digital de verdade por dentro, nos bastidores, onde as grandes decisões são tomadas.
              </p>
              <p>
                Hoje, lidera campanhas de Anúncios de VSL para marcas e profissionais que exigem resultado e estratégia de alto nível para se tornar uma autoridade no seu seguimento.
              </p>
              <p>
                À frente de uma equipe multidisciplinar, Gustavo comanda copywriters criativos e especialistas em audiovisual, garantindo que cada projeto entregue clareza, conversão e autoridade.
              </p>
              <p>
                Não importa o tamanho da ideia com a direção certa, ela vira um movimento.
                E é isso que ele faz: transforma estratégia em impacto real.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
