---
slug: possible-improvements-when-using-github-actions
Title: Posibles mejoras al usar github actions
authors: jaenfigueroa
---

# Matrices de Construcción

Utilizar matrices de construcción para probar un proyecto en varias versiones de dependencias, lenguajes de programación o sistemas operativos. Esto puede ayudar a garantizar la compatibilidad y detectar problemas temprano en el proceso.

```yml
name: Test Project

on: [push, pull_request]

jobs:
  test:
    runs-on: ${{ matrix.os }}

    strategy:
      matrix:
        os: [ubuntu-latest, windows-latest]
        node: [12, 14, 16]

    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: ${{ matrix.node }}

      - name: Install dependencies
        run: npm install

      - name: Run tests
        run: npm test
```

# Notificaciones y Comentarios

Aprovechar las capacidades de notificación y comentarios en GitHub Actions. Se puede configurar notificaciones para recibir alertas sobre el estado de las ejecuciones y agregar comentarios a los issues para comunicarlo con el equipo.

```yml
- name: Notificar en caso de fallo
  if: failure()
  run: echo "Prueba fallida..."
```

```yml
- name: Mostrar un mensaje
  env:
    GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
    PR_COMMENTS_URL: ${{ github.event.pull_request.comments_url }}
  run: |
    MESSAGE="Hola mundo"

    curl \
    -X POST \
    $PR_COMMENTS_URL \
    -H "Content-Type: application/json" \
    -H "Authorization: token $GITHUB_TOKEN" \
    --data "{ \"body\": \"$MESSAGE\" }"
```

# Reutilizar acciones en otras acciones

Se pueden crear acciones personalizadas y luego usarlas en varios flujos de trabajo

```yml
name: 'Añadir Comentario'

on:
  workflow_run:
    workflows: ['Flujo de Trabajo Principal']
    types:
      - completed

jobs:
  add-comment:
    runs-on: ubuntu-latest

    steps:
      - name: Añadir Comentario
        run: |
          echo "Comentario personalizado: ${{ inputs.comment }}"
        env:
          COMMENT: ${{ inputs.comment }}
```

```yml
name: 'Flujo de Trabajo Principal'

on:
  push:
    branches:
      - main

jobs:
  main-job:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v2

      - name: Ejecutar Acción Personalizada
        uses: ./.github/workflows/comment-workflow.yml
        with:
          comment: 'Gracias por abrir este issue. Estamos revisando tu problema.'
```

- El flujo de trabajo principal (main-workflow.yml) se ejecuta solo en un push a la rama main.
- La acción personalizada (comment-workflow.yml) acepta un parámetro comment que se puede personalizar en el flujo de trabajo principal.
