import React from 'react';

function RecommendationList({ recommendations }) {
  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Lista de Recomendações:</h2>

      {recommendations.length === 0 && <p>Nenhuma recomendação encontrada.</p>}

      <ul>
        {recommendations.map((recommendation, index) => (
          <li key={index} className="mb-2">
            <div className="max-w-sm rounded-lg border border-gray-300 bg-white shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col border-l-2 border-indigo-400 pl-2 mb-2">
                <h2 className="text-xl font-semibold text-gray-800 mb-1">
                  {recommendation.name}
                </h2>
                <p className="text-sm font-medium text-indigo-600">
                  {recommendation.category}
                </p>
              </div>

              <div className="border-t border-dashed border-slate-300">
                <h3 className="text-sm font-semibold text-gray-700 mb-1">
                  Funcionalidades:
                </h3>
                <ul className="list-disc list-inside text-gray-600 text-sm space-y-0.5">
                  {recommendation.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecommendationList;
