interface CustomError {
    message: string;
  }

  export const ProxyRequest = async <T>(
    requestFunction: () => Promise<T>,
    fallbackJsonPath: string
  ): Promise<T> => {
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

        const fallbackResponse = await fetch(fallbackJsonPath);
        const fallbackResult: T = await fallbackResponse.json();
        return fallbackResult;
      } catch (fallbackError) {
        handleRequestError(fallbackError as CustomError);
        throw fallbackError;
      }
    }
  };

  const handleRequestError = (error: CustomError): CustomError => {
    console.error('Error en la petición:', error);
    throw error;
  };
