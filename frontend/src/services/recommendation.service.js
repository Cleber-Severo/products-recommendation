/* eslint-disable import/no-anonymous-default-export */
// getRecommendations.js

const getRecommendations = (
  formData = {
    selectedPreferences: [],
    selectedFeatures: [],
    selectedRecommendationType: '',
  },
  products
) => {
  let recommendations = [];

  const addRecomendations = (selectedAttributes, key = 'preferences') => {
    selectedAttributes.forEach((formAttributte) => {
      let foundProduct = products.find((product) =>
        product[key].includes(formAttributte)
      );

      if (!foundProduct) return;

      const existingProductIndex = recommendations?.findIndex(
        (product) => product.id === foundProduct.id
      );

      if (existingProductIndex !== -1) {
        const existingProduct = recommendations[existingProductIndex];

        const strength = existingProduct.strength
          ? existingProduct.strength + 1
          : 1;

        recommendations[existingProductIndex] = {
          ...existingProduct,
          strength,
        };

        return;
      }

      recommendations.push({
        ...foundProduct,
        strength: 1,
      });
    });
  };

  if (formData?.selectedPreferences?.length) {
    addRecomendations(formData.selectedPreferences, 'preferences');
  }
  if (formData?.selectedFeatures?.length) {
    addRecomendations(formData.selectedFeatures, 'features');
  }

  if (!recommendations.length) return [];

  const sortedRecommendations = recommendations.sort(
    (a, b) => b.strength - a.strength
  );

  const isSingleProduct =
    formData.selectedRecommendationType === 'SingleProduct';

  if (isSingleProduct) {
    const maxStrength = sortedRecommendations[0].strength;

    const maxStrengthProducts = sortedRecommendations.filter(
      (product) => product.strength === maxStrength
    );

    const lastMaxStrengthProduct =
      maxStrengthProducts[maxStrengthProducts.length - 1];

    return [lastMaxStrengthProduct];
  }

  return sortedRecommendations;
};

export default { getRecommendations };
