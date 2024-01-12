import { getCombinedData } from './combinedDB'
import downloadExcelFile from './dowloandExcelFile'

export async function generateExcel(): Promise<void> {
  try {
    const combinedData = await getCombinedData()
    const dataArray = Object.values(combinedData)

    downloadExcelFile(dataArray)
  } catch (error) {
    console.error('Error al obtener datos combinados y descargar Excel:', error)
    throw error
  }
}
