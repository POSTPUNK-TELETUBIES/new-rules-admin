export interface CustomError {
    message: string;
  }

  class ProxyRequest<T> {
    private fallbackJsonPath: string;

    constructor(fallbackJsonPath: string){
        this.fallbackJsonPath = fallbackJsonPath
    }

    private handleRequestError = (error: CustomError): CustomError => {
        console.error('Error en la petición:', error);
        throw error;
    };

    private requestToJson = async (path: string): Promise<T> => {
        const response = await fetch(path);
        const result: T = await response.json();
        return result;
    }

    async makeRequest(requestFunction: () => Promise<T>): Promise<T> {
        try {
            const response = await requestFunction();
            return response;
        } catch (error) {
            console.warn('La solicitud falló. Se intentará cargar el JSON de respaldo.');

            try {
                const isDevelopment = import.meta.env.DEV
                if (isDevelopment) {
                    console.warn('Entorno de desarrollo detectado. No se cargará el JSON de respaldo.');
                    throw error;
                }

                return await this.requestToJson(this.fallbackJsonPath);
                
            } catch (fallbackError) {
                this.handleRequestError(fallbackError as CustomError);
                throw fallbackError;
            }
        }
    }

  }

  export default ProxyRequest;
