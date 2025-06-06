import React, { useState } from 'react';
import Form from './components/Form/Form';
import RecommendationList from './components/RecommendationList/RecommendationList';

function App() {
  const [recommendations, setRecommendations] = useState([]);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center pb-2">
      <h1 className="text-2xl md:text-3xl font-bold md:mb-6 p-4 md:p-0 md:py-2 ">
        Recomendador de Produtos RD Station
      </h1>
      <div
        className="
          bg-white rounded-lg shadow-md 
          w-full md:w-3/4 lg:w-1/2 p-4 md:p-8
          grid grid-cols-1 md:grid-cols-2 gap-8
        "
      >
        <div className="col-span-2 mb-2">
          <p className="text-base md:text-lg  text-slate-500 text-justify">
            Bem-vindo ao Recomendador de Produtos RD Station. Aqui você pode
            encontrar uma variedade de produtos da RD Station, cada um projetado
            para atender às necessidades específicas do seu negócio. De CRM a
            Marketing, de Conversas a Inteligência Artificial, temos uma solução
            para ajudar você a alcançar seus objetivos. Use o formulário abaixo
            para selecionar suas preferências e funcionalidades desejadas e
            receba recomendações personalizadas de produtos que melhor atendam
            às suas necessidades.
          </p>
        </div>
        <div className="col-span-2 md:col-span-1">
          <Form setRecommendations={setRecommendations} />
        </div>
        <div className="md:max-h-[900px] overflow-auto col-span-2 md:col-span-1">
          <RecommendationList recommendations={recommendations} />
        </div>
      </div>
    </div>
  );
}

export default App;
