
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Youtube, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const Index = () => {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const handleButtonClick = () => {
    window.open("https://www.instagram.com/direct/t/17846052717436451", "_blank");
  };

  const totalPages = 3;

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="min-h-screen bg-oceanBlue text-textWhite font-playfair">
      <div className="relative w-full max-w-5xl mx-auto min-h-screen flex flex-col">
        {/* Book Container */}
        <div className="flex-1 flex items-center justify-center py-12">
          <div className="w-full bg-[#0A1929] border-2 border-[#2A3F59] rounded-lg shadow-2xl p-8 md:p-12 relative">
            {/* Page Number */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-gray-400 italic">
              <span>Página {currentPage} de {totalPages}</span>
            </div>
            
            {/* Page Content */}
            {currentPage === 1 && (
              <section className="animate-fade-in text-center py-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight max-w-4xl mx-auto">
                  "Livro bem-sucedido é como um filme premiado, escrita afiada, narrativa impactante e uma bestseller cheia de resultados."
                </h1>
                <p className="text-lg text-gray-400 font-light">Gustavo Correia</p>
              </section>
            )}

            {currentPage === 2 && (
              <section className="animate-fade-in text-center py-16">
                <h2 className="text-5xl md:text-6xl font-bold tracking-wide">
                  Especialista em transformar experiência de vida em um livro
                </h2>
              </section>
            )}

            {currentPage === 3 && (
              <section className="animate-fade-in py-8">
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
                        Com uma trajetória ao lado de grandes nomes que moldaram o marketing digital no Brasil, Gustavo conhece os bastidores onde as grandes ideias viram movimentos. Mais do que escrever livros, ele sabe como posicionar histórias que geram autoridade, influência e vendas.
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
                        <p className="text-xl text-gray-300 mb-4">Vamos bater Bestseller nas vendas!</p>
                        <Button
                          onClick={handleButtonClick}
                          className="bg-[#F97316] hover:bg-[#F97316]/90 text-white px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:scale-105 w-fit"
                        >
                          Produzir meu Livro
                        </Button>
                        <div className="flex gap-6 mt-8">
                          <a
                            href="https://youtube.com/@umbomescritor?si=8R9BGyR0OkysqZxC"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-red-500 transition-colors duration-300"
                          >
                            <Youtube size={32} />
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
                </div>
              </section>
            )}

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-6">
              {currentPage > 1 && (
                <Button
                  onClick={prevPage}
                  variant="outline"
                  size="icon"
                  className="h-12 w-12 rounded-full bg-[#1A2C47] border-[#2A3F59] hover:bg-[#2A3F59] text-white shadow-lg"
                >
                  <ChevronLeft className="h-6 w-6" />
                  <span className="sr-only">Página anterior</span>
                </Button>
              )}
            </div>
            
            <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-6">
              {currentPage < totalPages && (
                <Button
                  onClick={nextPage}
                  variant="outline" 
                  size="icon"
                  className="h-12 w-12 rounded-full bg-[#1A2C47] border-[#2A3F59] hover:bg-[#2A3F59] text-white shadow-lg"
                >
                  <ChevronRight className="h-6 w-6" />
                  <span className="sr-only">Próxima página</span>
                </Button>
              )}
            </div>
          </div>
        </div>
        
        {/* Page Turn Button */}
        <div className="flex justify-center pb-6">
          {currentPage < totalPages ? (
            <Button 
              onClick={nextPage}
              className="flex items-center gap-2 bg-[#F97316] hover:bg-[#F97316]/90 text-white px-6 py-2 rounded-lg"
            >
              Virar Página <ChevronRight className="h-5 w-5" />
            </Button>
          ) : (
            <Button
              onClick={handleButtonClick}
              className="flex items-center gap-2 bg-[#F97316] hover:bg-[#F97316]/90 text-white px-6 py-2 rounded-lg"
            >
              Produzir meu Livro <ChevronRight className="h-5 w-5" />
            </Button>
          )}
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
