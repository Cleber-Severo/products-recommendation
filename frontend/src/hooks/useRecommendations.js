// useRecommendations.js

import { useState } from 'react';
import recommendationService from '../services/recommendation.service';

function useRecommendations(products) {
  const getRecommendations = (formData) => {
    return recommendationService.getRecommendations(formData, products);
  };

  return { getRecommendations };
}

export default useRecommendations;
