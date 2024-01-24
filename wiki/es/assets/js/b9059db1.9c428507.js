"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[256],{8248:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var s=n(1527),r=n(7463);const i={slug:"probot-to-github-actions",Title:"\xbfPor que se cambi\xf3 de probot a actions?",authors:"jaenfigueroa"},a="\xbfPor que se cambi\xf3 de probot a actions?",o={permalink:"/new-rules-admin/wiki/es/blog/probot-to-github-actions",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-1-18-probot-to-github-actions.md",source:"@site/i18n/es/docusaurus-plugin-content-blog/2024-1-18-probot-to-github-actions.md",title:"\xbfPor que se cambi\xf3 de probot a actions?",description:"| Caracter\xedstica                                                  |                                                                      Probot                                                                      |                                                                                  Github actions                                                                                   |",date:"2024-01-18T00:00:00.000Z",formattedDate:"18 de enero de 2024",tags:[],readingTime:1.685,hasTruncateMarker:!1,authors:[{name:"Jaen Figueroa",title:"Frontend Developer",url:"https://github.com/jaenfigueroa",imageURL:"https://avatars.githubusercontent.com/u/69079292?v=4",key:"jaenfigueroa"}],frontMatter:{slug:"probot-to-github-actions",Title:"\xbfPor que se cambi\xf3 de probot a actions?",authors:"jaenfigueroa"},unlisted:!1,prevItem:{title:"Memoria t\xe9cnica de la verificaci\xf3n de n\xfamero de l\xedneas modificadas en el pull request",permalink:"/new-rules-admin/wiki/es/blog/technical-memory-pr-check"},nextItem:{title:"Auto estudio",permalink:"/new-rules-admin/wiki/es/blog/self-studying"}},c={authorsImageUrls:[void 0]},d=[];function l(e){const t={table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Caracter\xedstica"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Probot"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Github actions"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Arquitectura y el entorno de ejecuci\xf3n"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Es un servidor de express que tiene que estar corriendoy trabajar con webhooks"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Corre dentro de la misma infraestructura de github y tiene acceso al repo y sus secrets"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Resiliencia y la capacidad de gesti\xf3n de fallos"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Implica que si se muere o hay un timeout en la respuesta perdemos funcionalidad"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Implica que no hay timeout peligroso (6 horas m\xe1ximo) y que es parte de nuestro de nuestro CI/CD, parte del repo y hasta reusable en la organizaci\xf3n, no necesita persistencia"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Lenguage de programaci\xf3n"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Javascript"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Usa YML con info de github y bash scripts, tambi\xe9n puede que use Docker"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Dificultad para los desarrolladores"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Implica que es parte del stack de la mayoria de fronts conocen, se puede mantener y testear localmente, tambien tiene una api facil de programar"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Implica que se tiene que conocer bash script y ademas comerse la curva de aprendizaje de github actions. No todos los fronts conocen de github y POSIX (menos Docker) complejidad"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Gesti\xf3n de dependencias y la complejidad de las pruebas locales"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Hay que bundlear (con node resolution) o usar commonjs"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Solo es un archivo de texto muy peque\xf1o, sin embargo si se quiere testear locamente necesitas un emulador (Nuevamente complejidad)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Escalabilidad"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Escalabilidad limitada dependiendo del servidor de Express"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Escalabilidad alta y capacidad de manejar m\xfaltiples flujos de trabajo simult\xe1neos"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Soporte y Comunidad"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Comunidad activa pero posiblemente menor que la de GitHub Actions"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Fuerte comunidad de GitHub Actions con amplios recursos y ejemplos disponibles"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Costos"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Puede requerir recursos adicionales para mantener el servidor en ejecuci\xf3n"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Integrado con GitHub, algunos minutos gratuitos, con posibles costos adicionales"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Flujos de trabajo complejos"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Limitados en comparaci\xf3n con GitHub Actions"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Dise\xf1ado espec\xedficamente para flujos de trabajo complejos y personalizables"})]})]})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},7463:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>a});var s=n(959);const r={},i=s.createContext(r);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);