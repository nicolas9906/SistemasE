





export const  fetchData = async () => {
    const response = await fetch('127.0.0.1:3000/Derechos/Listar');
     try {
        if (!response.ok) {
        throw new Error('La solicitud no fue exitosa');
      }
      const data = await response.json();
      return data;
    } 
    catch (error) {
      console.error('Error al obtener datos:', error);
      throw error;
    
    }
}