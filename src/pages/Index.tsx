
import React from 'react';
import { Twitter, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem
} from "@/components/ui/carousel";

const Index = () => {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const [activePage, setActivePage] = React.useState(0);
  const carouselRef = React.useRef(null);
  const [api, setApi] = React.useState(null);

  React.useEffect(() => {
    if (!api) return;
    
    // Update active page when slide changes
    api.on('select', () => {
      setActivePage(api.selectedScrollSnap());
    });

    // Initialize script for form integration after component mounts
    const script = document.createElement('script');
    script.src = 'https://form.respondi.app/static/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
      api?.off('select');
    };
  }, [api]);

  const goToPage = (pageIndex) => {
    api?.scrollTo(pageIndex);
  };

  const handleButtonClick = () => {
    setIsDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-oceanBlue text-textWhite font-playfair">
      <div className="container mx-auto px-4 py-8 relative">
        {/* Book Container */}
        <div className="max-w-4xl mx-auto bg-[#0c2341] rounded-lg shadow-2xl overflow-hidden border-t border-r border-[#1a3152]">
          <Carousel 
            className="w-full" 
            setApi={setApi}
            ref={carouselRef}
            opts={{ loop: false }}
          >
            <CarouselContent>
              {/* Page 1 - Cover */}
              <CarouselItem className="relative">
                <div className="h-[80vh] p-8 flex flex-col justify-between">
                  <div className="text-center pt-16 animate-fade-in">
                    <p className="text-2xl md:text-3xl text-[#F97316] italic mb-8">
                      "Livro bem-sucedido é como um filme premiado, escrita afiada, narrativa impactante e uma bestseller cheia de resultados."
                    </p>
                    <div className="w-16 h-1 bg-[#F97316] mx-auto my-8"></div>
                    <p className="text-xl text-gray-400">Gustavo Correia</p>
                  </div>
                  <p className="text-center text-gray-400">
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
                  <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                    <p className="text-2xl text-center font-semibold text-[#F97316] my-8 italic">
                      Especialista em transformar experiência de vida em um livro
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                      <div className="bg-[#0f2a4a] p-6 rounded-lg border border-[#1a3152] text-center hover:shadow-lg hover:shadow-[#F97316]/20 transition-all duration-300 hover:-translate-y-1">
                        <div className="text-3xl font-bold text-[#F97316] mb-2">+24</div>
                        <p className="text-gray-300">Obras criadas</p>
                      </div>
                      
                      <div className="bg-[#0f2a4a] p-6 rounded-lg border border-[#1a3152] text-center hover:shadow-lg hover:shadow-[#F97316]/20 transition-all duration-300 hover:-translate-y-1">
                        <div className="text-3xl font-bold text-[#F97316] mb-2">+400k</div>
                        <p className="text-gray-300">Lucros gerados</p>
                      </div>
                      
                      <div className="bg-[#0f2a4a] p-6 rounded-lg border border-[#1a3152] text-center hover:shadow-lg hover:shadow-[#F97316]/20 transition-all duration-300 hover:-translate-y-1">
                        <div className="text-3xl font-bold text-[#F97316] mb-2">89,4%</div>
                        <p className="text-gray-300">Aprovação dos leitores</p>
                      </div>
                    </div>
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
                    <div className="w-full md:w-2/5 aspect-[3/4] overflow-hidden rounded-lg shadow-xl mb-6 md:mb-0 relative group">
                      <img
                        src="https://i.postimg.cc/FRwqf88Z/487993310-528029013363503-6384488293855636473-n-2.jpg"
                        alt="Gustavo Correia"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0c2341]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-3xl font-bold mb-6 text-[#F97316]">Gustavo Correia - Ghostwriter</h2>
                      <div className="space-y-5 text-gray-300 text-lg leading-relaxed">
                        <p>
                          Enquanto muitos escrevem livros, ele constrói narrativas. Cada projeto que passa por suas mãos é tratado como uma obra de impacto, com estrutura, ritmo e mensagem pensados para um só objetivo: transformar leitura em resultado.
                        </p>
                        <p>
                          Com uma trajetória ao lado de grandes nomes que moldaram o marketing digital no Brasil, Gustavo conhece os bastidores onde as grandes ideias viram movimentos. Mais do que escrever livros, ele sabe como posicionar histórias que geram autoridade, influência e vendas.
                        </p>
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
                  <div className="flex flex-col items-center">
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
                          href="https://x.com/obestseller_"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-blue-400 transition-colors duration-300"
                        >
                          <Twitter size={32} />
                        </a>
                        <a
                          href="https://www.instagram.com/obestseller_/"
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
                    onClick={() => goToPage(page)}
                    className={`w-2 h-2 rounded-full cursor-pointer transition-all ${
                      activePage === page 
                        ? "bg-[#F97316] w-4" 
                        : "bg-white/50 hover:bg-white/80"
                    }`}
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
