import React from 'react';
import { Youtube, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const Index = () => {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  const handleButtonClick = () => {
    window.open("https://www.instagram.com/direct/t/17846052717436451", "_blank");
  };

  return (
    <div className="min-h-screen bg-oceanBlue text-textWhite font-playfair">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight max-w-4xl mx-auto">
          "Livro bem-sucedido é como um filme premiado, escrita afiada, narrativa impactante e uma bestseller cheia de resultados."
        </h1>
        <p className="text-lg text-gray-400 font-light">Gustavo Correia</p>
      </section>

      {/* Produções Section */}
      <section className="container mx-auto px-4 py-16 animate-fade-in">
        <h2 className="text-5xl font-bold mb-16 text-left tracking-wide">Produções</h2>
        <div className="grid md:grid-cols-3 gap-16">
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

          {/* Eduardo Feldberg */}
          <div className="flex flex-col items-center animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <div className="w-64 h-64 rounded-full overflow-hidden mb-8 hover:scale-105 transition-transform duration-300 shadow-lg">
              <img
                src="https://i.postimg.cc/MTds1JdN/356951447-215371860970127-5882135571449129395-n.jpg"
                alt="Eduardo Feldberg"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-3xl font-bold mb-4">Eduardo Feldberg</h3>
            <p className="text-center text-gray-300 max-w-md leading-relaxed">
              Do zero ao milhão com voz e propósito. Eduardo Feldberg, o Primo Pobre, transformou boletos em bilhetes de mudança. Criador do Pobre Show, fundador da Vencer Incorporadora e embaixador do Novo Sertão, ele ensina finanças com humor e constrói impacto onde antes só havia escassez.
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
            <h2 className="text-4xl font-bold mb-8">Gustavo Correia - Ghostwriter</h2>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                Enquanto muitos escrevem livros, ele constrói narrativas. Cada projeto que passa por suas mãos é tratado como uma obra de impacto, com estrutura, ritmo e mensagem pensados para um só objetivo: transformar leitura em resultado.
              </p>
              <p>
                Com uma trajetória ao lado de nomes como Ícaro de Carvalho, Leandro Ladeira e outros que moldaram o marketing digital no Brasil, Gustavo conhece os bastidores onde as grandes ideias viram movimentos. Mais do que escrever livros, ele sabe como posicionar histórias que geram autoridade, influência e vendas.
              </p>
              <p>
                Hoje, assina obras para marcas e experts que exigem estratégia, identidade e performance. Com mais de 24 obras criadas, ele comanda cada etapa  da ideia ao lançamento  com precisão cirúrgica, palavra por palavra.
              </p>
              <p>
                Não se trata apenas de escrever. É sobre dar voz à sua visão, embalar seu conhecimento em narrativa de alto nível e transformar sua história em um ativo de influência.
              </p>
              <p>
                Se você tem uma história dentro de você, ele sabe como escrevê-lo do jeito certo. Porque com a direção certa, um livro não é só leitura é legado, autoridade e receita.
              </p>
              <div className="flex flex-col gap-6 mt-8">
                <h3 className="text-3xl font-bold">Trabalhe Comigo</h3>
                <p className="text-xl text-gray-300 mb-4">Vamos Bestseller nas vendas!</p>
                <Button
                  onClick={handleButtonClick}
                  className="bg-[#F97316] hover:bg-[#F97316]/90 text-white px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:scale-105 w-fit"
                >
                  Produzir meu Livro
                </Button>
                <div className="flex gap-6 mt-8">
                  <a
                    href="https://youtube.com/@opersuasivo?si=TruuZIguSIYV8j0i"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-red-500 transition-colors duration-300"
                  >
                    <Youtube size={32} />
                  </a>
                  <a
                    href="https://www.instagram.com/upersuasivo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-pink-500 transition-colors duration-300"
                  >
                    <Instagram size={32} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="w-full max-w-3xl p-0 bg-transparent border-none">
          <div 
            data-respondi-container="" 
            data-respondi-mode="regular" 
            data-respondi-src="https://form.respondi.app/P314ziSx" 
            data-respondi-width="100%" 
            data-respondi-height="600px">
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
