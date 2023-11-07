import fs from 'fs/promises'
import { generateEnumDeclaration } from './helpers/generateEnumDeclaration.mjs'

const [inputPath, outputPath] = process.argv.slice(2)

if (!inputPath || !outputPath) {
  console.error('No input or output file provided')
  process.exit(1)
}

;(async () => {
  try {
    const data = await fs.readFile(inputPath, 'utf8')
    const enums = Object.entries(JSON.parse(data)).map(([key, value]) =>
      generateEnumDeclaration(key, value),
    )
    await fs.writeFile(outputPath, enums.join(''), 'utf8')
    console.log('Enum generation completed.')
  } catch (error) {
    console.error(error.message)
    process.exit(1)
  }
})()
