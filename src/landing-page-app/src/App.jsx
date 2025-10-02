import React from 'react';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50 flex flex-col">
      {/* Header */}
      <header className="w-full p-4 bg-white dark:bg-gray-800 shadow-md">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary-600 dark:text-primary-400">Gabriel Demetrios Lafis</h1>
          <ul className="flex space-x-4">
            <li><a href="#features" className="hover:text-primary-600 dark:hover:text-primary-400">Recursos</a></li>
            <li><a href="#testimonials" className="hover:text-primary-600 dark:hover:text-primary-400">Depoimentos</a></li>
            <li><a href="#contact" className="hover:text-primary-600 dark:hover:text-primary-400">Contato</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-r from-primary-500 to-secondary-500 dark:from-primary-700 dark:to-secondary-700 text-white py-20 md:py-32 flex-grow flex items-center justify-center">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-up">
            Soluções Profissionais para o Seu Negócio
          </h2>
          <p className="text-lg md:text-xl mb-8 animate-fade-in-up animate-delay-200">
            Desenvolvimento de software, análise de dados e consultoria especializada.
          </p>
          <button className="bg-white text-primary-600 dark:text-primary-800 px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-gray-100 transition duration-300 animate-fade-in-up animate-delay-400">
            Saiba Mais
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-12">Nossos Recursos</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
              <h4 className="text-xl font-semibold mb-4">Desenvolvimento Web</h4>
              <p className="text-gray-700 dark:text-gray-300">Criação de websites modernos e responsivos com as últimas tecnologias.</p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
              <h4 className="text-xl font-semibold mb-4">Análise de Dados</h4>
              <p className="text-gray-700 dark:text-gray-300">Transforme dados brutos em insights acionáveis para decisões estratégicas.</p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
              <h4 className="text-xl font-semibold mb-4">Consultoria em TI</h4>
              <p className="text-gray-700 dark:text-gray-300">Orientação especializada para otimizar sua infraestrutura e processos de TI.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-12">O Que Nossos Clientes Dizem</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <p className="italic text-gray-700 dark:text-gray-300 mb-4">"O trabalho de Gabriel superou nossas expectativas. Profissionalismo e qualidade impecáveis!"</p>
              <p className="font-semibold">Cliente Satisfeito A</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <p className="italic text-gray-700 dark:text-gray-300 mb-4">"Recomendo Gabriel para qualquer projeto de tecnologia. Expertise e dedicação notáveis."</p>
              <p className="font-semibold">Cliente Satisfeito B</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-200 dark:bg-gray-700">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-8">Entre em Contato</h3>
          <p className="text-lg mb-8">Interessado em nossos serviços? Fale conosco!</p>
          <a href="mailto:gabriel.lafis@example.com" className="bg-primary-600 dark:bg-primary-400 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-primary-700 dark:hover:bg-primary-500 transition duration-300">
            Enviar E-mail
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full p-4 bg-gray-800 dark:bg-gray-950 text-white text-center">
        <p>&copy; {new Date().getFullYear()} Gabriel Demetrios Lafis. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;

