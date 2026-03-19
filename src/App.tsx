import React from 'react';
import { motion } from 'motion/react';
import { Menu, Wallet, ChevronRight, XCircle, BrainCircuit, FileText, Mic2, Users, Star, CheckCircle2, Instagram, Phone } from 'lucide-react';

const WHATSAPP_URL = "https://wa.me/5519991016031";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 glass-effect">
        <div className="flex items-center justify-between px-6 h-16 w-full max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <Menu className="text-primary cursor-pointer md:hidden" />
            <img 
              alt="KNJ TUR Logo" 
              className="h-10 w-auto object-contain" 
              src="https://lh3.googleusercontent.com/aida/ADBb0ugiBbtHI5VmH5y13RTLesBZgLwAesp7D8fvzaQ1IfgCXEzPRv5BKRM85-JoVo7ZFVZKgCyer8VK44z-BcWdGvzmaVzU2jyx2UL8dPf-TPRR5rQYxtO63-n_QD9fbrzb9dXpft13vqN3ZzG9cVOihZCReq1tNGhsG9loKE1pZ8Q_L5Qnd57Phz61_Nv2sdDGKR9GX2xCyb8lrUNRk5WHhG2vPjC46IiM7PL5pycN47s-fgufy2Igomr-NDmyYr5P28xQ1KC5tyHjCds" 
            />
          </div>
          <nav className="hidden md:flex items-center gap-8 text-on-surface-variant font-medium text-sm">
            <a href="#" className="text-primary hover:text-primary-container transition-colors">Início</a>
            <a href="#servicos" className="hover:text-primary transition-colors">Vistos</a>
            <a href="#depoimentos" className="hover:text-primary transition-colors">Depoimentos</a>
            <a href="#sobre" className="hover:text-primary transition-colors">Sobre</a>
          </nav>
          <div className="flex items-center">
            <Wallet className="text-primary cursor-pointer active:scale-95 transition-transform" />
          </div>
        </div>
      </header>

      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex flex-col justify-center px-6 py-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/60 to-surface z-10" />
            <img 
              alt="Statue of Liberty Sunset" 
              className="w-full h-full object-cover opacity-40" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoBTIU2T-wDOcL8HUKaEv2cFZPoF_Hllo8qSGKZaHiB5MIgUQh5IF5H0Te-AtEwIUrF3xjgFZsKhCHByH6dEqBZdZqbCYkMmLvNbg-N_vqXdnI2MAaTqUIB2Maj280Xcxss2bfyHnGCuttov7bqRW0rU464QJgsou4YTNJhDMuNFlQmdXq7q_4EupM_suw3C4W8SOl4fDtdw2QOqiN0NL9SZCzFr7NL_Hr8EdHMlTnqT-jSqv4b5EOq3tY8mAbwDDuJbKQjv57-uHq" 
              referrerPolicy="no-referrer"
            />
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-20 max-w-4xl mx-auto text-center md:text-left"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
              Consultoria Premium
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
              Tire seu visto americano com <span className="gradient-text">especialistas</span>
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant font-light mb-10 max-w-2xl leading-relaxed">
              Evite erros comuns que causam negativas imediatas. Garantimos o acompanhamento de elite que sua viagem merece.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <a href={WHATSAPP_URL} target="_blank" className="primary-button w-full sm:w-auto">
                Falar com especialista no WhatsApp
              </a>
              <a href="#servicos" className="secondary-button w-full sm:w-auto">
                Ver nossos serviços
              </a>
            </div>
          </motion.div>
        </section>

        {/* Pain Points */}
        <section className="py-24 px-6 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
                  Erros no processo podem custar sua aprovação
                </h2>
                <p className="text-on-surface-variant text-lg">
                  Milhares de vistos são negados mensalmente por preenchimentos incorretos ou falta de estratégia na entrevista. Não deixe o seu sonho nas mãos da sorte.
                </p>
              </div>
              <div className="md:w-1/2 grid grid-cols-1 gap-6 w-full">
                <motion.div 
                  whileHover={{ x: 10 }}
                  className="p-6 rounded-2xl bg-surface-dim border-l-4 border-error/50 flex items-start gap-4"
                >
                  <XCircle className="text-error shrink-0" size={32} />
                  <div>
                    <h4 className="font-bold mb-1">Preenchimento Falho</h4>
                    <p className="text-sm text-on-surface-variant">Qualquer divergência no formulário DS-160 é motivo de suspeita imediata.</p>
                  </div>
                </motion.div>
                <motion.div 
                  whileHover={{ x: 10 }}
                  className="p-6 rounded-2xl bg-surface-dim border-l-4 border-error/50 flex items-start gap-4"
                >
                  <BrainCircuit className="text-error shrink-0" size={32} />
                  <div>
                    <h4 className="font-bold mb-1">Insegurança na Entrevista</h4>
                    <p className="text-sm text-on-surface-variant">Respostas inconsistentes geram desconfiança do agente consular em segundos.</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="servicos" className="py-24 px-6">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Assessoria completa do início ao fim</h2>
            <p className="text-on-surface-variant">Metodologia exclusiva KNJ TUR para garantir sua tranquilidade.</p>
          </div>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<FileText size={32} />}
              title="Análise de Perfil"
              description="Avaliamos seus vínculos e documentação para identificar pontos fortes e fragilidades antes de qualquer taxa ser paga."
            />
            <ServiceCard 
              icon={<ChevronRight size={32} />}
              title="Preenchimento DS-160"
              description="Nossos especialistas preenchem seu formulário de forma estratégica, garantindo 100% de conformidade."
            />
            <ServiceCard 
              icon={<Mic2 size={32} />}
              title="Simulação de Entrevista"
              description="Treinamento prático com as perguntas reais do consulado para você chegar confiante e preparado."
            />
          </div>
        </section>

        {/* Authority */}
        <section id="sobre" className="py-24 px-6 bg-surface-dim relative overflow-hidden">
          <div className="absolute -right-24 top-0 w-96 h-96 bg-primary-container/5 blur-[120px] rounded-full" />
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2 relative">
              <div className="aspect-square rounded-3xl overflow-hidden border border-outline/10 p-2 bg-surface-container-low">
                <img 
                  alt="Especialista KNJ TUR" 
                  className="w-full h-full object-cover rounded-2xl object-top" 
                  src="https://lh3.googleusercontent.com/aida/ADBb0uge4x0dlKbR2lI8mzKKmOihjiB9Mkt1bhWnhiJt07aotrj3oHcyCNQiXifKS0GEIbpUvMuXWr_C9rW3aZ69snfUNlIfWQqceshA58uZSpvRJgDikZzOdxDW9SGyOxxO7XCKqoPeCY-M2uIcdGn8HtUKqW9IILiapWZlzNPuTBI6FVN9MKgbmH55btli1Ogpf-VXAStmmouEkU5ZUpar44ww1Dmv9EEZZf2haSqL3jXjeC1d1EmFx5CQ3XSaXz9crbhxdgcMBKAK0w" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 p-6 backdrop-blur-md bg-surface/80 rounded-2xl border border-outline/10 shadow-xl">
                <p className="text-3xl font-black text-primary">10+</p>
                <p className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">Anos de Mercado</p>
              </div>
            </div>
            <div className="md:w-1/2">
              <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">Nossa Expertise</span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Especialistas em visto americano</h2>
              <p className="text-on-surface-variant text-lg mb-8 leading-relaxed">
                A KNJ TUR nasceu com o propósito de desburocratizar o acesso aos EUA. Com uma taxa de aprovação superior a 95%, transformamos processos complexos em jornadas seguras.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary" size={20} />
                  <span className="font-medium italic">Consultoria premium e personalizada</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary" size={20} />
                  <span className="font-medium italic">Especialistas certificados em imigração turística</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="depoimentos" className="py-24 px-6 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-2xl font-bold text-on-surface-variant uppercase tracking-[0.2em] mb-4">Vistos aprovados recentemente</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <TestimonialCard 
                name="Ricardo Silveira"
                type="Visto B1/B2"
                text="Pensei que meu perfil era difícil por ser autônomo, mas a KNJ me orientou perfeitamente. Aprovado!"
              />
              <TestimonialCard 
                name="Mariana Costa"
                type="Renovação"
                text="O treinamento para a entrevista fez toda a diferença. Fui muito mais calma e deu tudo certo."
              />
              <TestimonialCard 
                name="Juliana Mendes"
                type="Visto J1"
                text="O atendimento é impecável. Eles realmente se importam com o resultado do cliente."
              />
              <TestimonialCard 
                name="Carlos Henrique"
                type="Visto B1/B2"
                text="Equipe muito profissional. Vale cada centavo pela segurança que nos passam."
              />
            </div>
          </div>
        </section>

        {/* Final Offer */}
        <section className="py-24 px-6 bg-surface relative overflow-hidden">
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-surface-container rounded-[2.5rem] p-8 md:p-16 border border-primary/10 shadow-2xl">
              <div className="text-center mb-12">
                <span className="text-primary font-black tracking-widest text-xs uppercase mb-4 block">Oferta Exclusiva</span>
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Consultoria completa personalizada</h2>
                <p className="text-on-surface-variant">Tudo o que você precisa para seu visto em um único lugar.</p>
              </div>
              <div className="space-y-6 mb-12">
                {[
                  "Análise estratégica de perfil e vínculos",
                  "Preenchimento total do DS-160",
                  "Agendamento rápido de CASV e Consulado",
                  "Simulação real de entrevista",
                  "Suporte via WhatsApp por 6 meses"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 border-b border-outline/10 pb-4">
                    <CheckCircle2 className="text-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <a href={WHATSAPP_URL} target="_blank" className="inline-block w-full py-6 bg-gradient-to-r from-primary to-primary-container text-on-primary-fixed font-black text-xl rounded-2xl shadow-[0_15px_30px_-5px_rgba(255,106,0,0.4)] active:scale-95 transition-transform text-center">
                  Comece agora no WhatsApp
                </a>
                <p className="mt-6 text-on-surface-variant text-[10px] uppercase tracking-widest">Atendimento disponível de seg a sex das 09h às 18h</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-12 px-6 bg-surface border-t border-outline/10 flex flex-col items-center gap-6 text-center">
        <img 
          alt="KNJ TUR Logo" 
          className="h-16 w-auto object-contain mx-auto mb-2" 
          src="https://lh3.googleusercontent.com/aida/ADBb0ugiBbtHI5VmH5y13RTLesBZgLwAesp7D8fvzaQ1IfgCXEzPRv5BKRM85-JoVo7ZFVZKgCyer8VK44z-BcWdGvzmaVzU2jyx2UL8dPf-TPRR5rQYxtO63-n_QD9fbrzb9dXpft13vqN3ZzG9cVOihZCReq1tNGhsG9loKE1pZ8Q_L5Qnd57Phz61_Nv2sdDGKR9GX2xCyb8lrUNRk5WHhG2vPjC46IiM7PL5pycN47s-fgufy2Igomr-NDmyYr5P28xQ1KC5tyHjCds" 
        />
        <div className="flex flex-wrap justify-center gap-8 text-sm text-on-surface-variant">
          <a href="#" className="hover:text-primary transition-colors">Privacidade</a>
          <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
          <a href="#" className="hover:text-primary transition-colors">FAQ</a>
          <a href="https://www.instagram.com/knjtur" target="_blank" className="hover:text-primary transition-colors flex items-center gap-2">
            <Instagram size={16} /> Instagram
          </a>
        </div>
        <p className="text-sm text-on-surface-variant opacity-60">
          © 2024 KNJ TUR - Consultoria de Vistos Premium.
        </p>
      </footer>

      {/* Mobile Bottom Nav */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[92%] rounded-full bg-surface/90 backdrop-blur-2xl border border-white/5 shadow-2xl flex justify-between items-center p-2 z-50 md:hidden">
        <button className="text-on-surface flex items-center justify-center w-12 h-12">
          <Menu size={24} />
        </button>
        <a href={WHATSAPP_URL} target="_blank" className="bg-primary-container text-on-primary-fixed flex items-center justify-center flex-1 mx-2 h-12 rounded-full gap-2 active:scale-95 transition-transform font-bold text-xs uppercase tracking-widest">
          <Phone size={18} />
          WhatsApp
        </a>
        <a href="https://www.instagram.com/knjtur" target="_blank" className="text-on-surface flex items-center justify-center w-12 h-12">
          <Instagram size={24} />
        </a>
      </nav>

      {/* Desktop FAB */}
      <div className="hidden md:flex fixed bottom-8 right-8 z-50 items-center gap-4">
        <div className="bg-surface-container-high px-6 py-3 rounded-full border border-outline/10 shadow-2xl backdrop-blur-md">
          <p className="text-on-surface text-xs font-bold">Dúvidas? Fale conosco!</p>
        </div>
        <a 
          href={WHATSAPP_URL} 
          target="_blank"
          className="w-16 h-16 bg-primary-container text-on-primary-fixed rounded-full shadow-2xl flex items-center justify-center active:scale-95 transition-transform border-4 border-surface"
        >
          <Phone size={32} />
        </a>
      </div>
    </div>
  );
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="card-bento"
    >
      <div className="mb-6 w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-on-surface-variant text-sm leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}

function TestimonialCard({ name, type, text }: { name: string, type: string, text: string }) {
  return (
    <div className="p-8 rounded-2xl bg-surface-dim border border-outline/5">
      <div className="flex text-primary mb-4 gap-1">
        {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
      </div>
      <p className="text-on-surface-variant text-sm mb-6 italic">"{text}"</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-surface-container-highest" />
        <div>
          <p className="text-xs font-bold">{name}</p>
          <p className="text-[10px] text-primary">{type}</p>
        </div>
      </div>
    </div>
  );
}
