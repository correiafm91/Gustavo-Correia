import React from 'react';
import { Youtube, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen bg-oceanBlue text-textWhite font-playfair">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold mb-16 leading-tight max-w-4xl mx-auto">
          Campanha bem-sucedida é como um filme premiado, roteiro afiado, trilha impactante e uma bilheteira cheia de resultados.🎬💰
        </h1>
      </section>

      {/* Produções Section */}
      <section className="container mx-auto px-4 py-16 animate-fade-in">
        <h2 className="text-5xl font-bold mb-16 text-left tracking-wide">Produções</h2>
        <div className="grid md:grid-cols-2 gap-16">
          {/* Ícaro de Carvalho */}
          <div className="flex flex-col items-center animate-scale-in">
            <div className="w-64 h-64 rounded-full overflow-hidden mb-8 hover:scale-105 transition-transform duration-300 shadow-lg">
              <img
                src="https://i.postimg.cc/nc09YxV0/high-1744993455.jpg"
                alt="Ícaro de Carvalho"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-3xl font-bold mb-4">Ícaro de Carvalho</h3>
            <p className="text-center text-gray-300 max-w-md leading-relaxed">
              Mestre em copywriting e construção de autoridade.
              Juntos, formam a base estratégica por trás de grandes movimentos do mercado.
            </p>
          </div>

          {/* Leandro Ladeira */}
          <div className="flex flex-col items-center animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="w-64 h-64 rounded-full overflow-hidden mb-8 hover:scale-105 transition-transform duration-300 shadow-lg">
              <img
                src="https://i.postimg.cc/HW5kkg7V/Hotmart-a-maior-plataforma-de-curso-online-do-mundo.jpg"
                alt="Leandro Ladeira"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-3xl font-bold mb-4">Leandro Ladeira</h3>
            <p className="text-center text-gray-300 max-w-md leading-relaxed">
              Um dos nomes mais influentes do marketing digital no Brasil.
              Ladeira é referência em vendas, com domínio absoluto de funis e produtos perpétuos.
            </p>
          </div>
        </div>
      </section>

      {/* Personal Presentation Section */}
      <section className="container mx-auto px-4 py-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
        <div className="flex flex-col md:flex-row items-start gap-12">
          <div className="w-full md:w-1/3 aspect-[3/4] overflow-hidden flex-shrink-0 rounded-lg hover:scale-105 transition-transform duration-300 shadow-xl">
            <img
              src="https://i.postimg.cc/FRwqf88Z/487993310-528029013363503-6384488293855636473-n-2.jpg"
              alt="Gustavo Correia"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-4xl font-bold mb-8">Trabalhe comigo</h2>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p className="text-2xl font-semibold mb-6">
                Vamos bater a bilheteira nas vendas na sua marca!
              </p>
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
              <div className="flex items-center gap-6 mt-8">
                <div className="flex gap-6">
                  <a
                    href="https://youtube.com/@opersuasivo?si=TruuZIguSIYV8j0i"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-red-500 transition-colors duration-300"
                  >
                    <Youtube size={32} />
                  </a>
                  <a
                    href="https://www.instagram.com/opersuasivo_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-pink-500 transition-colors duration-300"
                  >
                    <Instagram size={32} />
                  </a>
                </div>
                <Button
                  className="bg-[#F97316] hover:bg-[#F97316]/90 text-white px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:scale-105"
                >
                  Fazer orçamento
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
