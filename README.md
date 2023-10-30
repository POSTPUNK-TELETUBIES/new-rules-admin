# README - Sistema de Reportes de Reglas de SonarQube

Este README proporciona información detallada sobre el sistema de reportes de reglas de SonarQube. El sistema de reportes permite a los desarrolladores rastrear y analizar las reglas de calidad de código aplicadas por SonarQube en un proyecto.

## 1. Introducción

El sistema de reportes de reglas de SonarQube es una herramienta que facilita la generación y análisis de informes sobre las reglas de calidad de código aplicadas por SonarQube en un proyecto. Permite a los equipos de desarrollo monitorear la calidad del código de manera eficiente y tomar medidas correctivas cuando sea necesario.

## 2. Instalación

Asegúrate de que tu entorno cumple con los siguientes requisitos:

- **Node.js**: Debe estar instalado en tu sistema.
- **pnpm**: Gestor de paquetes. Puedes instalarlo con `npm`:

```bash
npm install -g pnpm
```

Clona el repositorio en tu sistema local:

```bash
git@github.com:POSTPUNK-TELETUBIES/new-rules-admin.git
```

Asegúrate de tener instalados los paquetes necesarios. Puedes hacerlo con `pnpm`:

```terminal
cd new-rules-admin
pnpm install
```

## 3. Configuración

## 4. Despliegue

Para realizar el despliegue se configuro un archivo en la siguiente carpeta

```
.github/workflows/release.yml
```

- Asegúrate de que tu proyecto esté en la rama a desplegar.
- Etiqueta (tag) el commit con un nombre que coincida con **'dashboard-v.x.x.x'**
- La letra v hace referencia a la version y las x al numero de version y realiza un push del commit

```bash
git tag dashboard-v0.0.1 && git push origin $_
```

## 5. Preguntas Frecuentes

1. Por que no me permite desplegar el desarrollo que he realizado, si ya le asigne una tag con el prefijo indicado?  
   **R:** Este problema se debe a que estas intentando pushear un commit con una tag q ya ha sido utilizada para desplegar anteriormente verifique las tags usadas con el comando `git tag` y modifique el nombre de su tag por uno q no haya sido usado
