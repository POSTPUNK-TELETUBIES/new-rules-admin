---
slug: possible-improvements-when-using-github-actions
Title: Posibles mejoras al usar github actions
authors: jaenfigueroa
---

# Build Matrices

Use build matrices to test a project across various dependency versions, programming languages, or operating systems. This can help ensure compatibility and detect issues early in the process.

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

# Notifications and Comments

Harness the notification and comment capabilities in GitHub Actions. You can configure notifications to receive alerts about the status of executions and add comments to issues to communicate with the team.

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

# Reusing Actions in Other Actions

Custom actions can be created and then utilized in multiple workflows.

`comment-workflow.yml`

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

`principal-workflow.yml`

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

- The custom action (comment-workflow.yml) accepts a parameter "comment" that can be customized in the main workflow.
