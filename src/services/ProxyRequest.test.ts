import { assert, describe, it} from 'vitest';
import ProxyRequest from './ProxyRequest';


describe('ProxyRequest tests ', () => {

    it('makeRequest should handle successful request', async () => {
        const mockResponse = { data: 'Mock data' };
        const mockRequestFunction = async () => mockResponse;

        const proxyRequest = new ProxyRequest<any>('/fallback.json');
        const result = await proxyRequest.makeRequest(mockRequestFunction);

        assert.equal(result, mockResponse);
      });

      it('makeRequest should handle environment warning and throw error', async () => {

          const errorEnvironmentDetected = 'Entorno de desarrollo detectado. No se cargará el JSON de respaldo.'
          const originalIsDevelopment = import.meta.env.DEV;
          import.meta.env.DEV = true;

          const mockError = new Error(errorEnvironmentDetected);
          const mockRequestFunction = async () => {
            throw mockError;
          };

          const proxyRequest = new ProxyRequest<any>('/fallback.json');

          try {
              await proxyRequest.makeRequest(mockRequestFunction);

              assert.fail('Expected an error to be thrown');
          } catch (error) {
              assert.equal((error as Error).message, errorEnvironmentDetected);
          } finally {
              import.meta.env.DEV = originalIsDevelopment;
          }
        });

});

