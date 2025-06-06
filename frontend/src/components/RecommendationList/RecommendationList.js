import { Check } from '@phosphor-icons/react';

function RecommendationList({ recommendations }) {
  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Lista de Recomendações:</h2>

      {recommendations.length === 0 && <p>Nenhuma recomendação encontrada.</p>}

      <ul>
        {recommendations.map((recommendation, index) => (
          <li key={index} className="mb-2">
            <div className="max-w-sm rounded-lg border border-gray-300 bg-white shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col border-l-2 border-indigo-400 pl-2 mb-3">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                  {recommendation.name}
                </h3>
                <span className="inline-block mt-1 w-fit text-xs font-medium text-indigo-600 bg-indigo-100 rounded-full px-3 py-0.5">
                  {recommendation.category}
                </span>
              </div>

              <div className="border-t border-dashed border-slate-300 pt-2">
                <ul className="list-inside text-gray-600 text-sm space-y-0.5">
                  {recommendation.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-1">
                      <Check
                        size={14}
                        weight="bold"
                        className="text-indigo-600 mt-0.5"
                      />
                      <span className="max-w-[300px]">{feature}</span>
                    </li>
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
