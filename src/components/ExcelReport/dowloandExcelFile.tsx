import { CombinedDataDTO } from './combinedDB'
import * as XLSX from 'xlsx'

function downloadExcelFile(combinedData: CombinedDataDTO[]): void {
  const workbook = XLSX.utils.book_new()

  const worksheet = XLSX.utils.json_to_sheet(combinedData)

  XLSX.utils.book_append_sheet(workbook, worksheet, 'SonarQube_Rules_Status')

  const excelData = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' })

  const blob = new Blob([excelData], {
    type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  })

  const url = URL.createObjectURL(blob)

  const a = document.createElement('a')
  a.href = url
  a.download = 'SonarQube_Rules_Status.xlsx'

  document.body.appendChild(a)
  a.click()

  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

export default downloadExcelFile
