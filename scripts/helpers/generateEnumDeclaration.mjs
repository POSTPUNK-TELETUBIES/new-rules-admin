/**
 * @param {string} enumName
 * @param {string[]} values
 * @returns {string}
 */

export const generateEnumDeclaration = (enumName, values) => {
  const sanitizeValue = (value) => value.replace(/\s/g, '_')
  const enumString = `export enum ${enumName} {\n`
  const valueStrings = values.map((value) => {
    const sanitizedValue = sanitizeValue(value)
    return `  ${sanitizedValue.toUpperCase()} = '${sanitizedValue}',\n`
  })
  const enumValuesString = valueStrings.join('')
  const enumDeclaration = `${enumString}${enumValuesString}}\n\n`

  return enumDeclaration
}
