
import React, { useState } from 'react';
import { Twitter, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext 
} from "@/components/ui/carousel";

const Index = () => {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  const handleButtonClick = () => {
    window.open("https://www.instagram.com/direct/t/17846052717436451", "_blank");
  };

  return (
    <div className="min-h-screen bg-oceanBlue text-textWhite font-playfair">
      <div className="container mx-auto px-4 py-8 relative">
        {/* Book Container */}
        <div className="max-w-4xl mx-auto bg-[#0c2341] rounded-lg shadow-2xl overflow-hidden border-t border-r border-[#1a3152]">
          <Carousel className="w-full" opts={{ loop: false }}>
            <CarouselContent>
              {/* Page 1 - Cover */}
              <CarouselItem className="relative">
                <div className="h-[80vh] p-8 flex flex-col justify-between">
                  <div className="text-center pt-16 animate-fade-in">
                    <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                      Ghostwriter
                    </h1>
                    <h2 className="text-3xl md:text-4xl mb-4 text-gray-300">
                      Transformando histórias em bestsellers
                    </h2>
                    <div className="w-16 h-1 bg-[#F97316] mx-auto my-8"></div>
                    <p className="text-xl text-gray-400 italic">por Gustavo Correia</p>
                  </div>
                  <p className="text-center text-gray-400 animate-pulse">
                    Arraste para passar
                  </p>
                </div>
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-r from-transparent to-[#0a192f]/30"></div>
                </div>
              </CarouselItem>

              {/* Page 2 - Introduction */}
              <CarouselItem>
                <div className="h-[80vh] p-8 overflow-y-auto">
                  <h2 className="text-4xl font-bold mb-8 border-b border-[#F97316] pb-2">Capítulo 1</h2>
                  <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                    <p>
                      Enquanto muitos escrevem livros, ele constrói narrativas. Cada projeto que passa por suas mãos é tratado como uma obra de impacto, com estrutura, ritmo e mensagem pensados para um só objetivo: transformar leitura em resultado.
                    </p>
                    <p>
                      Com uma trajetória ao lado de grandes nomes que moldaram o marketing digital no Brasil, Gustavo conhece os bastidores onde as grandes ideias viram movimentos. Mais do que escrever livros, ele sabe como posicionar histórias que geram autoridade, influência e vendas.
                    </p>
                    <p className="text-2xl font-semibold text-[#F97316] my-8 text-center italic">
                      "Livro bem-sucedido é como um filme premiado, escrita afiada, narrativa impactante e uma bestseller cheia de resultados."
                    </p>
                  </div>
                </div>
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#0a192f]/30 to-transparent"></div>
                  <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-r from-transparent to-[#0a192f]/30"></div>
                </div>
              </CarouselItem>

              {/* Page 3 - About */}
              <CarouselItem>
                <div className="h-[80vh] p-8 overflow-y-auto">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="w-full md:w-2/5 aspect-[3/4] overflow-hidden rounded-lg shadow-xl mb-6 md:mb-0">
                      <img
                        src="https://i.postimg.cc/FRwqf88Z/487993310-528029013363503-6384488293855636473-n-2.jpg"
                        alt="Gustavo Correia"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-4xl font-bold mb-6 border-b border-[#F97316] pb-2">Capítulo 2</h2>
                      <div className="space-y-5 text-gray-300 text-lg leading-relaxed">
                        <p>
                          Hoje, assina obras para marcas e experts que exigem estratégia, identidade e performance. Com mais de 24 obras criadas, ele comanda cada etapa — da ideia ao lançamento — com precisão cirúrgica, palavra por palavra.
                        </p>
                        <p>
                          Não se trata apenas de escrever. É sobre dar voz à sua visão, embalar seu conhecimento em narrativa de alto nível e transformar sua história em um ativo de influência.
                        </p>
                        <p>
                          Se você tem uma história dentro de você, ele sabe como escrevê-lo do jeito certo. Porque com a direção certa, um livro não é só leitura — é legado, autoridade e receita.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#0a192f]/30 to-transparent"></div>
                  <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-r from-transparent to-[#0a192f]/30"></div>
                </div>
              </CarouselItem>

              {/* Page 4 - Contact */}
              <CarouselItem>
                <div className="h-[80vh] p-8 overflow-y-auto">
                  <h2 className="text-4xl font-bold mb-8 border-b border-[#F97316] pb-2">Capítulo 3</h2>
                  <div className="flex flex-col items-center">
                    <p className="text-2xl text-center mb-8">
                      Especialista em transformar experiência de vida em um livro
                    </p>
                    <div className="w-16 h-1 bg-[#F97316] my-8"></div>
                    <div className="max-w-xl mx-auto text-center space-y-6">
                      <h3 className="text-3xl font-bold">Trabalhe Comigo</h3>
                      <p className="text-xl text-gray-300 mb-4">Vamos bater Bestseller nas vendas!</p>
                      <Button
                        onClick={handleButtonClick}
                        className="bg-[#F97316] hover:bg-[#F97316]/90 text-white px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:scale-105 w-fit"
                      >
                        Produzir meu Livro
                      </Button>
                      <div className="flex justify-center gap-6 mt-8">
                        <a
                          href="https://x.com/umbomescritor"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-blue-400 transition-colors duration-300"
                        >
                          <Twitter size={32} />
                        </a>
                        <a
                          href="https://www.instagram.com/umbomescritor/"
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
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#0a192f]/30 to-transparent"></div>
                </div>
              </CarouselItem>
            </CarouselContent>

            <div className="absolute bottom-4 right-0 left-0 flex justify-center gap-2 z-10">
              <div className="flex space-x-1">
                {[0, 1, 2, 3].map((page) => (
                  <div 
                    key={page}
                    className="w-2 h-2 rounded-full bg-white/50 page-indicator"
                  />
                ))}
              </div>
            </div>
          </Carousel>
        </div>
      </div>

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
