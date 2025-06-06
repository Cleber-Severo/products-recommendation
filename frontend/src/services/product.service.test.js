import axios from 'axios';
import getProducts from './product.service';
import mockProducts from '../mocks/mockProducts';

jest.mock('axios');

describe('getProducts', () => {
  test('should return products list on success', async () => {
    axios.get.mockResolvedValue({ data: mockProducts });

    const products = await getProducts();

    expect(axios.get).toHaveBeenCalledWith('http://localhost:3001/products');
    expect(products).toEqual(mockProducts);
  });
});
