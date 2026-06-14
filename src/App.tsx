/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { 
  Check, 
  Play, 
  Star, 
  Shield, 
  Clock, 
  ChevronDown, 
  ChevronLeft,
  ChevronRight,
  Zap, 
  Lock, 
  CreditCard,
  User,
  ArrowUpRight,
  Info,
  ShoppingBag,
  Gift,
  Heart,
  Palette,
  DollarSign,
  Smartphone,
  Calculator,
  Bot,
  Sparkles,
  ListChecks,
  MessageSquare,
  CheckCircle,
  Calendar
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Artisanal Components ---

const handleRedirect = (url: string) => {
  const search = window.location.search;
  if (search) {
    const separator = url.includes('?') ? '&' : '?';
    window.location.href = url + separator + search.substring(1);
  } else {
    window.location.href = url;
  }
};

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-madeira-media/95 backdrop-blur-sm border-b border-dourado-principal/20 shadow-md">
    <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="font-black text-xl tracking-tight uppercase text-bege-claro">Tábua<span className="text-dourado-principal">Lucrativa</span></span>
      </div>
      <button 
        onClick={() => handleRedirect('#')}
        className="border border-dourado-principal text-dourado-principal hover:bg-dourado-principal hover:text-madeira-escura transition-all duration-300 text-[10px] font-bold py-2 px-5 rounded-full uppercase tracking-wider"
      >
        Acessar
      </button>
    </div>
  </nav>
);

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="pt-16 md:pt-18 pb-10 md:pb-12 bg-vinho text-bege-claro">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block bg-dourado-principal/20 text-dourado-claro border border-dourado-principal/30 px-6 py-2 rounded-2xl text-[10px] md:text-xs font-bold uppercase tracking-widest mb-3"
        >
          OPORTUNIDADE ÚNICA DE<br />RENDA EXTRA
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-2xl md:text-4xl font-extrabold leading-tight md:leading-[1.15] tracking-tight mb-4 md:mb-5 text-bege-claro"
        >
          Ganhe até <span className="text-dourado-principal font-black">R$ 1.000 por semana</span> vendendo tábuas de frios deliciosas — mesmo começando do zero.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-bege-claro/90 text-xs md:text-base font-medium max-w-2xl mx-auto mb-6 md:mb-8 leading-relaxed"
        >
          Assista ao vídeo abaixo e descubra como o aplicativo mostra quais tábuas de frios montar, quanto cobrar e quanto você pode lucrar.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="relative aspect-[9/16] max-w-[320px] mx-auto bg-madeira-escura rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-dourado-principal/20 group cursor-pointer"
          onClick={() => setIsPlaying(true)}
        >
          {!isPlaying ? (
            <>
              <img 
                src="https://i.postimg.cc/TP4cZD2B/Whats_App_Image_2026_03_14_at_22_26_20.webp" 
                alt="Thumbnail do Vídeo" 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black/20 group-hover:bg-black/10 transition-colors">
                <div className="w-16 h-16 bg-dourado-principal text-madeira-escura rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Play className="fill-current w-6 h-6 ml-1" />
                </div>
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="bg-dourado-principal text-madeira-escura px-5 py-2 rounded-full text-xs font-bold shadow-md uppercase tracking-wider"
                >
                  Clique para assistir
                </motion.div>
              </div>
            </>
          ) : (
            <iframe
              src="https://player.vimeo.com/video/1173769301?h=0&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1"
              className="absolute inset-0 w-full h-full"
              allow="autoplay; fullscreen; picture-in-picture"
              title="Mini VSL"
            ></iframe>
          )}
        </motion.div>
      </div>
    </section>
  );
};

const HowItWorks = () => (
  <section className="pt-16 pb-24 bg-bege-claro">
    <div className="max-w-6xl mx-auto px-6">
      <div className="mb-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-vinho uppercase">COMECE A VENDER TÁBUAS DE FRIOS EM 3 PASSOS SIMPLES</h2>
        <div className="w-16 h-1.5 bg-dourado-principal mx-auto rounded-full" />
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { 
            step: "01", 
            title: "🧀 ESCOLHA UMA TÁBUA PRONTA", 
            desc: "Abra o aplicativo e receba ideias prontas para aniversários, encontros, presentes e datas comemorativas.\n\nCada tábua já vem com lista de compras, quantidades e sugestão de montagem.", 
            icon: Smartphone 
          },
          { 
            step: "02", 
            title: "💰 DESCUBRA QUANTO COBRAR", 
            desc: "O aplicativo calcula seus custos e mostra um preço sugerido de venda.\n\nSem planilhas complicadas e sem medo de cobrar errado.", 
            icon: Calculator 
          },
          { 
            step: "03", 
            title: "DIVULGUE E VENDA", 
            desc: "O app cria textos prontos para WhatsApp e Instagram. Você publica a tábua de frios e começa a receber pedidos imediatamente.", 
            icon: ArrowUpRight 
          },
        ].map((item, i) => (
          <div key={i} className="group p-8 bg-off-white rounded-3xl border border-dourado-principal/10 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-center">
            <div className="w-16 h-16 bg-dourado-principal/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-dourado-principal/20 transition-colors">
              <item.icon className="w-6 h-6 text-vinho group-hover:text-vinho transition-colors" />
            </div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-3 text-vinho">{item.title}</h3>
            <p className="text-corpo-texto text-sm leading-relaxed whitespace-pre-line">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const AppTechnology = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-off-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-12 md:mb-16 text-center">
        <div className="flex flex-col items-center gap-6 md:gap-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-2 text-madeira-escura leading-tight">
              SEU NEGÓCIO DE TÁBUAS DE FRIOS NA PALMA DA MÃO
            </h2>
            <span className="inline-block text-dourado-principal text-[9px] md:text-[10px] font-bold tracking-[0.2em] uppercase mb-8">
              TECNOLOGIA EXCLUSIVA
            </span>
            <p className="text-corpo-texto text-sm md:text-base leading-relaxed">
              O aplicativo mostra ideias de tábuas, calcula o lucro e ajuda você a começar a vender.
            </p>
          </div>
        </div>
      </div>
      
      <div className="max-w-[300px] md:max-w-[320px] mx-auto relative group px-4">
        {/* Navigation Arrows */}
        <button 
          onClick={() => scroll('left')}
          className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-madeira-escura hover:text-dourado-principal transition-all duration-300 border border-dourado-principal/15"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        
        <button 
          onClick={() => scroll('right')}
          className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-madeira-escura hover:bg-dourado-principal hover:text-white transition-all duration-300 border border-dourado-principal/15"
          aria-label="Próximo"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <div 
          ref={scrollRef}
          className="flex overflow-x-auto pb-4 md:pb-12 scrollbar-hide snap-x snap-mandatory"
        >
          {[
            "https://i.postimg.cc/TP4cZD2B/Whats-App-Image-2026-03-14-at-22-26-20.webp",
            "https://i.postimg.cc/8C0bq6k3/Whats-App-Image-2026-03-14-at-22-26-21.webp",
            "https://i.postimg.cc/5tRmZC9T/Whats-App-Image-2026-03-14-at-22-26-22.webp",
            "https://i.postimg.cc/R0DTjHCb/Whats-App-Image-2026-03-14-at-22-26-22_(1).webp",
            "https://i.postimg.cc/pd6BgFVG/Whats-App-Image-2026-03-14-at-22-26-22_(2).webp",
            "https://i.postimg.cc/s2NJthfH/Whats-App-Image-2026-03-14-at-22-26-23.webp",
            "https://i.postimg.cc/KYH5dMcH/Whats-App-Image-2026-03-14-at-22-26-21_(1).webp",
            "https://i.postimg.cc/rpP9vryj/Whats-App-Image-2026-03-14-at-22-26-21_(2).webp",
            "https://i.postimg.cc/q75G93Bj/Whats-App-Image-2026-03-14-at-22-26-21_(3).webp",
            "https://i.postimg.cc/LsbVr14x/Whats-App-Image-2026-03-14-at-22-26-21_(4).webp",
            "https://i.postimg.cc/pdxj8zMz/Whats-App-Image-2026-05-23-at-22-10-22-(1)-(1).webp",
            "https://i.postimg.cc/HLHM5X1b/Whats-App-Image-2026-05-23-at-22-10-32.webp",
            "https://i.postimg.cc/FKmSc3X1/Whats-App-Image-2026-05-23-at-22-10-39-(1)-(1).webp",
            "https://i.postimg.cc/XvzgTCNx/Whats-App-Image-2026-03-14-at-22-26-21_(5).webp",
            "https://i.postimg.cc/tgMzLxRz/Whats-App-Image-2026-03-14-at-22-26-21_(6).webp",
            "https://i.postimg.cc/vmNvpV8L/Whats-App-Image-2026-03-14-at-22-26-22_(3).webp",
            "https://i.postimg.cc/PqRMBwfQ/Whats-App-Image-2026-03-14-at-22-26-22_(4).webp",
            "https://i.postimg.cc/N0zxWHG4/Whats-App-Image-2026-03-14-at-22-26-22_(5).webp"
          ].map((url, i) => (
            <div key={i} className="w-full flex-shrink-0 aspect-[9/16] bg-bege-claro rounded-2xl overflow-hidden border border-dourado-principal/15 snap-center shadow-lg">
              <img 
                src={url} 
                alt={`App Screen ${i + 1}`} 
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-12 md:mt-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            { 
              title: "🧀 GERAR TÁBUA", 
              desc: "Receba ideias prontas de tábuas para diferentes ocasiões, com lista de compras, quantidades e preço sugerido.", 
              icon: Sparkles 
            },
            { 
              title: "💰 CALCULADORA DE PREÇOS", 
              desc: "Descubra quanto cobrar pelas suas tábuas sem precisar fazer contas complicadas.", 
              icon: Calculator 
            },
            { 
              title: "👥 QUANTIDADES POR PESSOAS", 
              desc: "Saiba exatamente quanto comprar para servir de 2 a 20 convidados sem desperdícios.", 
              icon: User 
            },
            { 
              title: "🎓 PASSO A PASSO SIMPLES", 
              desc: "Aprenda como montar, divulgar e vender suas primeiras tábuas de frios mesmo começando do zero.", 
              icon: Info 
            },
            { 
              title: "📲 TEXTOS PARA VENDER", 
              desc: "Copie e use legendas prontas para Instagram, WhatsApp e respostas para clientes.", 
              icon: MessageSquare 
            },
            { 
              title: "🛒 FORNECEDORES", 
              desc: "Descubra onde comprar queijos, frios, tábuas, embalagens e outros materiais.", 
              icon: ShoppingBag 
            },
            { 
              title: "📅 CALENDÁRIO COMERCIAL", 
              desc: "Veja as datas que mais vendem durante o ano e quais tábuas oferecer em cada ocasião.", 
              icon: Calendar 
            },
            { 
              title: "📈 SIMULADOR DE GANHOS", 
              desc: "Veja quanto você pode faturar e lucrar com base na quantidade de pedidos.", 
              icon: ArrowUpRight 
            },
          ].map((f, i) => (
            <div 
              key={i} 
              className="p-8 bg-white rounded-3xl border border-dourado-principal/10 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-dourado-claro/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <f.icon className="w-6 h-6 text-dourado-principal" />
              </div>
              <h4 className="font-bold text-madeira-escura text-lg mb-3 leading-tight">{f.title}</h4>
              <p className="text-corpo-texto text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => (
  <section className="py-24 bg-bege-claro">
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-2xl md:text-3xl font-extrabold text-vinho tracking-tight mb-2">
          O QUE ELAS ESTÃO DIZENDO
        </h2>
        <span className="text-vinho-medio text-[10px] font-bold tracking-[0.2em] uppercase mb-8 block">
          RESULTADOS REAIS
        </span>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {[
          { 
            name: "CARLA SOUZA", 
            role: "Empreendedora",
            image: "https://i.postimg.cc/dVXGbZmW/image_13_229x300_(1).webp",
            text: "Eu sempre quis vender tábuas de frios, mas não sabia por onde começar. O aplicativo me mostrou ideias prontas e até quanto cobrar. Consegui fazer minhas primeiras vendas muito mais rápido do que imaginava." 
          },
          { 
            name: "RENATA OLIVEIRA", 
            role: "Vendedora de Tábuas",
            image: "https://i.postimg.cc/fRFYGSj8/image_14_300x300_(1).webp",
            text: "O que mais gostei foi ver o lucro antes de montar a tábua. Isso me deu segurança para começar. Fiz minha primeira venda na mesma semana que comecei a usar." 
          },
          { 
            name: "ANA PAULA LIMA", 
            role: "Mãe e Empreendedora",
            image: "https://i.postimg.cc/CKqbSMmc/image_15_300x300_(1)_(1).webp",
            text: "Eu tinha medo de investir e não vender. O app me ajudou com ideias de tábuas de frios e textos para divulgar. Hoje já recebo pedidos pelo WhatsApp." 
          },
          { 
            name: "JULIANA FERREIRA", 
            role: "Empreendedora",
            image: "https://i.postimg.cc/YSWQM2bb/image_16_281x300_(1)_(1).webp",
            text: "Para quem está começando do zero é perfeito. O aplicativo mostra o que colocar na tábua de frios, quanto cobrar e como divulgar. Ficou muito mais fácil começar." 
          },
        ].map((t, i) => (
          <div key={i} className="p-8 bg-off-white rounded-2xl border border-dourado-principal/30 hover:border-dourado-principal/70 transition-all duration-300 shadow-sm hover:shadow-md">
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-dourado-principal text-dourado-principal" />
              ))}
            </div>
            <p className="text-corpo-texto text-sm leading-relaxed mb-8 italic">"{t.text}"</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-dourado-principal/30 shrink-0">
                <img 
                  src={t.image} 
                  alt={t.name} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <p className="font-bold text-vinho text-xs tracking-wider mb-1 uppercase">{t.name}</p>
                <p className="text-vinho-medio text-[10px] font-bold uppercase tracking-widest">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Results = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-off-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-extrabold text-madeira-escura tracking-tight mb-2">
            O RESULTADO QUE VOCÊ VAI ENTREGAR
          </h2>
          <span className="text-dourado-principal text-[10px] font-bold tracking-[0.2em] uppercase mb-8 block">
            TÁBUAS QUE GERAM PEDIDOS
          </span>
          <p className="text-corpo-texto text-sm max-w-xl mx-auto mb-8">
            Modelos de tábuas de frios que você pode montar e vender mesmo começando do zero.
          </p>
        </div>
        
        <div className="relative group">
          {/* Navigation Arrows */}
          <button 
            onClick={() => scroll('left')}
            className="absolute -left-4 md:left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-madeira-escura hover:bg-dourado-principal hover:text-white transition-all duration-300 border border-dourado-principal/15"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button 
            onClick={() => scroll('right')}
            className="absolute -right-4 md:right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-madeira-escura hover:bg-dourado-principal hover:text-white transition-all duration-300 border border-dourado-principal/15"
            aria-label="Próximo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div 
            ref={scrollRef}
            className="flex gap-4 md:gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory"
          >
            {[
              "https://i.postimg.cc/VNm0w16Y/bc3e3da1e0ae952dde1585787fe2b957.webp",
              "https://i.postimg.cc/Xv4BW3Jn/0e41856d2bd755872a1f6f85c49cedeb.webp",
              "https://i.postimg.cc/5tbQJ10V/526e4f9ab7334fed9865512085d2f4b7.webp",
              "https://i.postimg.cc/JhMH8mnV/03ab7fd77fa8ec384072c6627e53ea36.webp",
              "https://i.postimg.cc/vmbxyMmJ/46f9a52cbb6167160e29550a2b22c08e.webp",
              "https://i.postimg.cc/bvpSP8v5/4bf79d0e330985d6ca3e66a9d6378ef9.webp",
              "https://i.postimg.cc/YSML7kSJ/752c68c25f501fd5f1da26f6e25e71c9.webp",
              "https://i.postimg.cc/bvpSP8vM/6e84e0e38706d7a5fbfe17b5bb19605f.webp",
              "https://i.postimg.cc/Zq4vmZRz/7c5b2bbc423094d86d5e33c74fd17128.webp",
              "https://i.postimg.cc/1zsVSPz2/ef7737a848897620f1e13384ec3fa411.webp",
              "https://i.postimg.cc/hGcQngG5/fda8a74bcb0ea1b02a5bd74ba91664d3.webp"
            ].map((url, i) => (
              <div key={i} className="min-w-[260px] md:min-w-[300px] aspect-[9/16] bg-white rounded-2xl overflow-hidden snap-center shadow-lg border border-dourado-principal/15">
                <img 
                  src={url} 
                  alt={`Tábua Exemplo ${i + 1}`} 
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const WhatYouGet = () => (
  <section className="py-24 bg-bege-claro overflow-hidden relative">
    {/* Background Glows (Subtle for light mode) */}
    <div className="absolute top-0 left-1/4 w-[50%] h-[50%] bg-dourado-principal/5 rounded-full blur-[120px] pointer-events-none" />

    <div className="max-w-4xl mx-auto px-6 relative z-10">
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight text-madeira-escura">
          MONTAR É FÁCIL.<br />
          <span className="text-dourado-principal">AGORA APRENDA A VENDER.</span>
        </h2>
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-[1px] w-8 bg-dourado-principal/10" />
          <span className="text-dourado-principal text-[10px] font-black tracking-[0.3em] uppercase">
            🎁 BÔNUS EXCLUSIVOS
          </span>
          <div className="h-[1px] w-8 bg-dourado-principal/10" />
        </div>
        <p className="text-corpo-texto text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          Além do acesso vitalício ao aplicativo, você garante estes bônus especiais para acelerar seus resultados.
        </p>
      </div>

      <div className="space-y-16">
        {/* Bonus 1 - Super Bonus */}
        <div className="group relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-dourado-principal to-vinho rounded-[2.5rem] blur opacity-10 group-hover:opacity-20 transition duration duration-1000 group-hover:duration-200" />
          <div className="relative bg-white p-8 md:p-12 rounded-[2.5rem] border border-dourado-principal/15 shadow-xl group-hover:shadow-2xl group-hover:-translate-y-1 transition-all duration-500">
            <div className="flex flex-col items-center text-center gap-8">
              <div className="flex-1 w-full">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <span className="bg-dourado-principal text-white text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                    BÔNUS 01
                  </span>
                  <span className="text-vinho text-[9px] font-black uppercase tracking-widest animate-pulse">
                    🔥 SUPER BÔNUS
                  </span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-extrabold mb-4 leading-tight text-madeira-escura">
                  COMO CONSEGUIR AS<br />PRIMEIRAS VENDAS
                </h3>
                
                <p className="text-corpo-texto text-sm md:text-base mb-8 leading-relaxed max-w-xl mx-auto">
                  Ter as tábuas de frios prontas é só o começo. Aqui você aprende como fazer as pessoas quererem comprar.
                </p>

                <div className="flex flex-col gap-4 mb-8 max-w-md mx-auto">
                  {[
                    "Divulgação em redes sociais, Instagram, WhatsApp, Facebook",
                    "Posts que despertam interesse",
                    "Conseguir primeiros clientes",
                    "Vender sem parecer insistente",
                    "Transformar clientes em novos pedidos"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-dourado-principal/10 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-dourado-principal" />
                      </div>
                      <p className="text-corpo-texto text-xs md:text-sm text-left">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="inline-flex items-center gap-3 px-4 py-2 bg-bege-claro rounded-xl border border-dourado-principal/10">
                  <span className="text-corpo-texto/40 text-[10px] line-through uppercase tracking-widest">Valor: R$ 197,00</span>
                  <span className="text-dourado-principal text-[10px] font-black uppercase tracking-widest">Hoje: Grátis</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bonus 2 */}
        <div className="group relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-dourado-principal to-vinho rounded-[2.5rem] blur opacity-10 group-hover:opacity-20 transition duration duration-1000 group-hover:duration-200" />
          <div className="relative bg-white p-8 md:p-12 rounded-[2.5rem] border border-dourado-principal/15 shadow-xl group-hover:shadow-2xl group-hover:-translate-y-1 transition-all duration-500">
            <div className="flex flex-col items-center text-center gap-8">
              <div className="flex-1 w-full">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <span className="bg-dourado-principal text-white text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                    BÔNUS 02
                  </span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-extrabold mb-4 leading-tight text-madeira-escura">
                  COMO COMEÇAR A VENDER<br />TÁBUAS DE FRIOS AINDA ESTA SEMANA
                </h3>
                
                <p className="text-corpo-texto text-sm md:text-base mb-8 leading-relaxed max-w-xl mx-auto">
                  Um guia direto para quem quer começar ainda essa semana no ramo das tábuas de frios
                </p>

                <div className="flex flex-col gap-4 mb-8 max-w-md mx-auto">
                  {[
                    "Quais tábuas montar primeiro",
                    "Onde comprar itens baratos",
                    "Como montar sua primeira tábua",
                    "Como tirar fotos com o celular",
                    "Como divulgar e conseguir pedidos"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-dourado-principal/10 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-dourado-principal" />
                      </div>
                      <p className="text-corpo-texto text-xs md:text-sm text-left">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="inline-flex items-center gap-3 px-4 py-2 bg-bege-claro rounded-xl border border-dourado-principal/10">
                  <span className="text-corpo-texto/40 text-[10px] line-through uppercase tracking-widest">Valor: R$ 97,00</span>
                  <span className="text-dourado-principal text-[10px] font-black uppercase tracking-widest">Hoje: Grátis</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Pricing = () => {
  const [timeLeft, setTimeLeft] = useState(5 * 60 + 20);

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(prev => prev > 0 ? prev - 1 : 0), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  };

  return (
    <section className="py-24 bg-vinho text-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-dourado-principal rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-vinho-medio rounded-full blur-[120px]" />
      </div>

      <div className="max-w-xl mx-auto px-6 text-center relative z-10">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-extrabold uppercase mb-2">Tábua Lucrativa</h2>
          <span className="text-[10px] font-black tracking-[0.3em] uppercase text-dourado-claro bg-white/5 px-4 py-2 rounded-full border border-white/10 inline-block mb-8">
            OFERTA EXCLUSIVA • VAGAS LIMITADAS
          </span>
          <p className="text-dourado-principal text-xs font-bold tracking-widest uppercase">ACESSO TOTAL + BÔNUS</p>
        </div>

        <div className="group relative bg-white/5 border border-white/10 rounded-2xl p-8 mb-8 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-dourado-principal/5">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-dourado-principal/20 to-vinho-medio/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
          <div className="relative">
            <div className="mb-8">
            <p className="text-[10px] font-black tracking-[0.3em] uppercase text-dourado-principal mb-4 flex items-center justify-center gap-2">
              <Clock className="w-3 h-3" /> OFERTA EXPIRA EM: {formatTime(timeLeft)}
            </p>
            <p className="text-[10px] text-white/60 uppercase tracking-wider mb-6">
              O preço subirá para <span className="text-white font-bold">R$ 197,00</span> após o cronômetro zerar
            </p>
            
            <div className="space-y-2 mb-2">
              <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest">
                <span>Vagas Preenchidas:</span>
                <span className="text-dourado-claro">71%</span>
              </div>
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "71%" }}
                  className="h-full bg-dourado-principal"
                />
              </div>
            </div>
            <p className="text-[9px] uppercase tracking-widest text-white/40 italic">Últimas 9 licenças disponíveis com desconto</p>
          </div>

          <div className="mb-8">
            <p className="text-white/40 text-xs uppercase tracking-widest mb-2 italic">Aproveite a oferta de lançamento</p>
            <p className="text-white/40 line-through text-lg mb-1">DE R$ 197,00</p>
            <div className="flex items-start justify-center gap-1">
              <span className="text-2xl font-black italic mt-2">R$</span>
              <span className="text-7xl font-black italic tracking-tighter text-dourado-claro">37</span>
              <span className="text-2xl font-black italic mt-2">,00</span>
            </div>
          </div>

          <div className="space-y-3 mb-10 text-left max-w-[280px] mx-auto">
            {[
              "Acesso completo ao aplicativo",
              "Ideias prontas de tábuas para vender",
              "Lista de compras e ingredientes",
              "Quantidades certas para cada pedido",
              "Descubra quanto cobrar sem errar",
              "Textos prontos para divulgação",
              "Bônus: Guia Começar do Zero",
              "Bônus: Como Conseguir as Primeiras Vendas"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-dourado-principal/20 flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 text-dourado-principal" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-tight text-white/80">{item}</span>
              </div>
            ))}
          </div>

          <button 
            onClick={() => handleRedirect('https://pay.wiapy.com/qEj50axiGA')}
            className="w-full bg-dourado-principal hover:bg-dourado-principal/90 text-white font-black py-5 rounded-xl transition-all flex flex-col items-center justify-center gap-1 uppercase italic tracking-tight animate-pulse-subtle shadow-lg shadow-dourado-principal/20 cursor-pointer"
          >
            <span className="text-lg flex items-center gap-2"><ShoppingBag className="w-5 h-5" /> LIBERAR MEU ACESSO AGORA</span>
          </button>
          
          <p className="text-[9px] font-bold uppercase tracking-[0.2em] mt-4 text-white/40">
            PIX • CARTÃO • BOLETO
          </p>
          </div>
        </div>

        <div className="flex justify-center gap-6 opacity-30 grayscale invert mb-12">
          <Shield className="w-5 h-5" />
          <Lock className="w-5 h-5" />
          <CreditCard className="w-5 h-5" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-sm"
        >
          <div className="flex flex-col md:flex-row items-center gap-8 text-left">
            <div className="relative shrink-0">
              <div className="w-24 h-24 md:w-32 md:h-32 bg-dourado-claro/20 rounded-full flex items-center justify-center border-2 border-dourado-claro/30">
                <Shield className="w-12 h-12 md:w-16 md:h-16 text-dourado-claro" />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-dourado-principal text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
                7 DIAS
              </div>
            </div>
            
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-dourado-claro uppercase italic tracking-tight">
                RISCO ZERO: GARANTIA INCONDICIONAL
              </h3>
              <p className="text-white/70 text-sm md:text-base leading-relaxed font-medium">
                Fique tranquila! Você tem 7 dias para testar o aplicativo e todos os bônus. Se por qualquer motivo você não gostar ou achar que não é para você, basta nos enviar um e-mail e devolvemos 100% do seu dinheiro. Sem perguntas e sem letras miúdas. O seu sucesso é o nosso compromisso.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);
  const items = [
    { 
      q: "COMO RECEBO O ACESSO?", 
      a: "Assim que o pagamento for confirmado, você recebe acesso imediato ao aplicativo via email e poderá começar a utilizar todas as ferramentas no mesmo dia." 
    },
    { 
      q: "PRECISO TER EXPERIÊNCIA?", 
      a: "Não. O aplicativo foi criado justamente para quem está começando do zero e não sabe por onde começar." 
    },
    { 
      q: "PRECISO SABER MONTAR TÁBUAS DE FRIOS?", 
      a: "Não. O aplicativo mostra ideias prontas, ingredientes, quantidades e orientações para facilitar a montagem." 
    },
    { 
      q: "PRECISO TER ESTOQUE?", 
      a: "Não necessariamente. Muitas pessoas recebem os pedidos primeiro e compram os ingredientes apenas quando precisam montar a tábua." 
    },
    { 
      q: "COMO VOU SABER QUANTO COBRAR?", 
      a: "O aplicativo possui calculadora de preços e ferramentas que ajudam você a definir o valor de venda das suas tábuas." 
    },
    { 
      q: "O APLICATIVO ENSINA QUANTO COMPRAR PARA CADA PEDIDO?", 
      a: "Sim. Você terá acesso às quantidades recomendadas de ingredientes para diferentes números de convidados, evitando desperdícios." 
    },
    { 
      q: "FUNCIONA EM QUALQUER CIDADE?", 
      a: "Sim. O aplicativo pode ser utilizado em qualquer cidade do Brasil." 
    },
    { 
      q: "TEM GARANTIA?", 
      a: "Sim. Você conta com garantia incondicional de 7 dias. Se não gostar, basta solicitar o reembolso dentro do prazo." 
    },
  ];

  return (
    <section className="py-24 bg-bege-claro">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-extrabold uppercase mb-12 text-center text-madeira-escura">Dúvidas</h2>
        <div className="space-y-4">
          {items.map((item, i) => (
            <div key={i} className="border-b border-dourado-principal/25 pb-4">
              <button 
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between py-2 text-left cursor-pointer"
              >
                <span className="font-bold text-sm uppercase italic text-madeira-escura">{item.q}</span>
                <ChevronDown className={`w-4 h-4 transition-transform text-madeira-escura/40 ${open === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="text-xs text-corpo-texto py-4 leading-relaxed">{item.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-16 bg-bege-claro border-t border-dourado-principal/15">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <div className="flex justify-center gap-8 mb-8 text-[10px] font-bold uppercase tracking-widest text-corpo-texto/50">
        <button onClick={() => handleRedirect('#')} className="hover:text-dourado-principal transition-colors cursor-pointer">Privacidade</button>
        <button onClick={() => handleRedirect('#')} className="hover:text-dourado-principal transition-colors cursor-pointer">Termos</button>
      </div>
      
      <div className="space-y-4 text-[10px] md:text-[11px] text-corpo-texto/60 leading-relaxed max-w-2xl mx-auto">
        <p className="font-bold text-madeira-escura uppercase tracking-tighter">
          © 2026 AxerCompany • Todos os direitos reservados.
        </p>
        
        <p>
          Todo o conteúdo presente nesta página, incluindo textos, imagens, design, estrutura, vídeos, materiais e quaisquer outros elementos, é protegido por leis de direitos autorais e propriedade intelectual.
        </p>
        
        <p>
          É proibida a reprodução, cópia, distribuição ou modificação, total ou parcial, sem autorização prévia por escrito do responsável. O uso indevido do conteúdo poderá resultar em medidas legais conforme a legislação vigente.
        </p>
      </div>
    </div>
  </footer>
);

const FloatingScarcity = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("Mariana");

  useEffect(() => {
    const names = ["Mariana", "Ana Paula", "Carla", "Julia", "Renata", "Beatriz", "Fernanda", "Luciana", "Patrícia", "Camila", "Amanda", "Larissa"];
    const timer = setInterval(() => {
      setName(names[Math.floor(Math.random() * names.length)]);
      setShow(true);
      setTimeout(() => setShow(false), 3000);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -20, opacity: 0 }}
          className="fixed bottom-6 left-6 z-50 bg-white border border-dourado-principal/30 p-4 rounded-lg shadow-xl flex items-center gap-3"
        >
          <div className="w-2 h-2 bg-dourado-principal rounded-full animate-pulse" />
          <p className="text-[10px] font-bold uppercase italic tracking-tight text-corpo-texto">
            {name} acabou de garantir o acesso
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-bege-claro font-sans antialiased selection:bg-dourado-principal/20 selection:text-madeira-escura">
      <Hero />
      <HowItWorks />
      <AppTechnology />
      <Testimonials />
      <Results />
      <WhatYouGet />
      <Pricing />
      <FAQ />
      <Footer />
      <FloatingScarcity />
    </div>
  );
}
