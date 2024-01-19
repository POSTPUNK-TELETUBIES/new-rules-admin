"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[973],{92:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>t,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=r(1527),s=r(7463);const o={slug:"technical-memory-pr-check",Title:"Memoria t\xe9cnica de la verificaci\xf3n de n\xfamero de l\xedneas modificadas en el pull request",authors:"jaenfigueroa"},l="Memoria t\xe9cnica de la verificaci\xf3n de n\xfamero de l\xedneas modificadas en el pull request",i={permalink:"/new-rules-admin/wiki/blog/technical-memory-pr-check",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-1-19-technical-memory-pr-check.md",source:"@site/blog/2024-1-19-technical-memory-pr-check.md",title:"Memoria t\xe9cnica de la verificaci\xf3n de n\xfamero de l\xedneas modificadas en el pull request",description:"1. Iniciar action workflow",date:"2024-01-19T00:00:00.000Z",formattedDate:"January 19, 2024",tags:[],readingTime:3.81,hasTruncateMarker:!1,authors:[{name:"Jaen Figueroa",title:"Frontend Developer",url:"https://github.com/jaenfigueroa",imageURL:"https://avatars.githubusercontent.com/u/69079292?v=4",key:"jaenfigueroa"}],frontMatter:{slug:"technical-memory-pr-check",Title:"Memoria t\xe9cnica de la verificaci\xf3n de n\xfamero de l\xedneas modificadas en el pull request",authors:"jaenfigueroa"},unlisted:!1,nextItem:{title:"\xbfPor que se cambi\xf3 de probot a actions?",permalink:"/new-rules-admin/wiki/blog/probot-to-github-actions"}},t={authorsImageUrls:[void 0]},c=[{value:"1. Iniciar action workflow",id:"1-iniciar-action-workflow",level:2},{value:"2. Obtener el total de numero de l\xedneas cambiadas de todos los archivos de tipo lock",id:"2-obtener-el-total-de-numero-de-l\xedneas-cambiadas-de-todos-los-archivos-de-tipo-lock",level:2},{value:"3. Calcular los valores para el reporte",id:"3-calcular-los-valores-para-el-reporte",level:2},{value:"4. Generar el mensaje que se va mostrar en el reporte",id:"4-generar-el-mensaje-que-se-va-mostrar-en-el-reporte",level:2},{value:"5. Eliminar los reportes anteriores de los comentarios",id:"5-eliminar-los-reportes-anteriores-de-los-comentarios",level:2},{value:"6. Mostramos el reporte como comentario en el pull request",id:"6-mostramos-el-reporte-como-comentario-en-el-pull-request",level:2},{value:"7. Comprobar si la cantidad de l\xedneas modificadas no sobrepasa el limite",id:"7-comprobar-si-la-cantidad-de-l\xedneas-modificadas-no-sobrepasa-el-limite",level:2},{value:"8. Resultados",id:"8-resultados",level:2}];function d(e){const n={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"1-iniciar-action-workflow",children:"1. Iniciar action workflow"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Este archivo yml se ejecutar\xe1 la primera vez que se cree un nuevo pull request, tambi\xe9n cada vez que se actualize el pr"}),"\n",(0,a.jsx)(n.li,{children:"Damos los permisos de escritura"}),"\n",(0,a.jsx)(n.li,{children:"Designamos el entorno de ejecuci\xf3n"}),"\n",(0,a.jsx)(n.li,{children:"Declaramos las variables de entorno que vamos a usar para las tareas"}),"\n",(0,a.jsx)(n.li,{children:"Indicamos la versi\xf3n de actions que vamos a usar"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yml",children:"on:\r\n  pull_request:\r\n    branches: '*'\r\n\r\npermissions: write-all\r\n\r\njobs:\r\n  check_pr_size:\r\n    environment: dev\r\n    env:\r\n      GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}\r\n      MAX_LINES_PR: ${{ vars.MAX_LINES_PR || 600 }}\r\n      PR_COMMENTS_URL: ${{ github.event.pull_request.comments_url }}\r\n      PR_ADDITIONS: ${{ github.event.pull_request.additions }}\r\n      PR_DELETIONS: ${{ github.event.pull_request.deletions }}\r\n    runs-on: ubuntu-latest\r\n    steps:\r\n      - uses: actions/checkout@v2\r\n        with:\r\n          fetch-depth: 0\r\n\r\n      ... more tasks\n"})}),"\n",(0,a.jsx)(n.h2,{id:"2-obtener-el-total-de-numero-de-l\xedneas-cambiadas-de-todos-los-archivos-de-tipo-lock",children:"2. Obtener el total de numero de l\xedneas cambiadas de todos los archivos de tipo lock"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Tenemos un script que ejecuta ",(0,a.jsx)(n.code,{children:"git diff --stat origin/NOMBRE_RAMA"}),", de donde vamos a obtener el numero de l\xedneas cambiadas de todos lo archivos de tipo lock"]}),"\n",(0,a.jsx)(n.li,{children:"El resultado se guardar\xe1 dentro de una variable PR_MODIFY_LOCK, luego lo guardamos como una nueva variable de entorno"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yml",children:'- name: Obtain the total number of modified lines of the lock files\r\n  env:\r\n    PR_DESTINATION_BRANCH: ${{ github.event.pull_request.base.ref }}\r\n  run: |\r\n    chmod +x bash-scripts/lines-of-lock.sh\r\n\r\n    PR_MODIFY_LOCK=$(bash-scripts/lines-of-lock.sh)\r\n\r\n    echo "PR_MODIFY_LOCK=${PR_MODIFY_LOCK}" >> $GITHUB_ENV\n'})}),"\n",(0,a.jsx)(n.h2,{id:"3-calcular-los-valores-para-el-reporte",children:"3. Calcular los valores para el reporte"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Calculamos el numero de lienas editadas en total"}),"\n",(0,a.jsx)(n.li,{children:"Calculamos el numero de l\xedneas editadas sin contar el numero de l\xedneas editadas de tipo lock"}),"\n",(0,a.jsx)(n.li,{children:"Calculamos el numero de l\xedneas restantes"}),"\n",(0,a.jsx)(n.li,{children:"Finalmente los guardamos como nuevas variables de entorno"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yml",children:'- name: Obtaining missing data for reporting purposes\r\n  run: |\r\n    PR_MODIFY_ALL=$(($PR_ADDITIONS + $PR_DELETIONS))\r\n    PR_MODIFY_REST=$(($PR_MODIFY_ALL - $PR_MODIFY_LOCK))\r\n\r\n    if [ $PR_MODIFY_REST -gt $MAX_LINES_PR ]; then\r\n        PR_EXTRA=$(($PR_MODIFY_REST - $MAX_LINES_PR))\r\n    else\r\n        PR_EXTRA=0\r\n    fi\r\n\r\n    echo "PR_MODIFY_ALL=${PR_MODIFY_ALL}" >> $GITHUB_ENV\r\n    echo "PR_MODIFY_REST=${PR_MODIFY_REST}" >> $GITHUB_ENV\r\n    echo "PR_EXTRA=${PR_EXTRA}" >> $GITHUB_ENV\n'})}),"\n",(0,a.jsx)(n.h2,{id:"4-generar-el-mensaje-que-se-va-mostrar-en-el-reporte",children:"4. Generar el mensaje que se va mostrar en el reporte"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Primero generamos la nota, para el reporte"}),"\n",(0,a.jsx)(n.li,{children:"Usamos la plantilla que tenemos del reporte y haciendo uso de sed vamos a reemplazar las variables"}),"\n",(0,a.jsx)(n.li,{children:"Finamente guardamos el mensaje como una nueva variable de entorno"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yml",children:'- name: Generate the message for commenting on the pr\r\n  run: |\r\n    if [[ $PR_MODIFY_REST -gt $MAX_LINES_PR ]]; then\r\n      NOTE="@${{ github.actor }} Ups, tu pull request tiene m\xe1s de $MAX_LINES_PR l\xedneas modificadas, tienes un total de $PR_MODIFY_REST, considera dividir este pull request."\r\n    else\r\n      NOTE="Perfecto, el pull request no sobrepasa las $MAX_LINES_PR l\xedneas modificadas."\r\n    fi\r\n\r\n    MESSAGE=$(sed \\\r\n        -e \':a;N;$!ba;s/\\r//g\' \\\r\n        -e \'s/\\n/\\\\n/g\' \\\r\n        -e "s/NOTE/$NOTE/" \\\r\n        -e "s/PR_ADDITIONS/$PR_ADDITIONS/" \\\r\n        -e "s/PR_DELETIONS/$PR_DELETIONS/" \\\r\n        -e "s/PR_MODIFY_ALL/$PR_MODIFY_ALL/" \\\r\n        -e "s/PR_MODIFY_LOCK/$PR_MODIFY_LOCK/" \\\r\n        -e "s/PR_MODIFY_REST/$PR_MODIFY_REST/" \\\r\n        -e "s/PR_EXTRA/$PR_EXTRA/" templates/pr-report.md)\r\n\r\n    echo "MESSAGE=${MESSAGE}" >> $GITHUB_ENV\n'})}),"\n",(0,a.jsx)(n.h2,{id:"5-eliminar-los-reportes-anteriores-de-los-comentarios",children:"5. Eliminar los reportes anteriores de los comentarios"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Realizamos una petici\xf3n para obtener una lista de todos los comentarios"}),"\n",(0,a.jsx)(n.li,{children:'Filtramos la lista por los que contengan la frase "Resultados de la pre-revisi\xf3n del PR"'}),"\n",(0,a.jsx)(n.li,{children:"Obtenemos una lista de IDs de los comentarios restantes"}),"\n",(0,a.jsx)(n.li,{children:"Recorremos la lista para eliminar cada uno de ellos"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yml",children:'- name: Remove previous reports from comments\r\n  run: |\r\n    COMMENTS=$(curl -L \\\r\n        -H "Accept: application/vnd.github+json" \\\r\n        -H "Authorization: token $GITHUB_TOKEN" \\\r\n        -H "X-GitHub-Api-Version: 2022-11-28" \\\r\n        $PR_COMMENTS_URL | jq \'.[] | select(.body | contains("Resultados de la pre-revisi\xf3n del PR"))\')\r\n\r\n    COMMENTS_ID=$(echo "$COMMENTS" | jq -r \'.id\')\r\n\r\n    IFS=$\'\\n\'\r\n    for ID in $COMMENTS_ID; do\r\n\r\n        COMMENT_URL="${{ github.api_url }}/repos/${{ github.repository }}/issues/comments/$ID"\r\n\r\n        curl -L \\\r\n            -X DELETE \\\r\n            -H "Accept: application/vnd.github+json" \\\r\n            -H "Authorization: token $GITHUB_TOKEN" \\\r\n            -H "X-GitHub-Api-Version: 2022-11-28" \\\r\n            $COMMENT_URL\r\n    done\n'})}),"\n",(0,a.jsx)(n.h2,{id:"6-mostramos-el-reporte-como-comentario-en-el-pull-request",children:"6. Mostramos el reporte como comentario en el pull request"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Realizamos una petici\xf3n para agregar el nuevo mensaje, enviando el mensaje que guardamos antes como una variable de entorno"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yml",children:'- name: Shows the report as a comment in the pr\r\n  run: |\r\n    curl \\\r\n    -X POST \\\r\n    $PR_COMMENTS_URL \\\r\n    -H "Content-Type: application/json" \\\r\n    -H "Authorization: token $GITHUB_TOKEN" \\\r\n    --data "{ \\"body\\": \\"$MESSAGE\\" }"\n'})}),"\n",(0,a.jsx)(n.h2,{id:"7-comprobar-si-la-cantidad-de-l\xedneas-modificadas-no-sobrepasa-el-limite",children:"7. Comprobar si la cantidad de l\xedneas modificadas no sobrepasa el limite"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Comprobamos que el numero de l\xedneas modificadas no super\xe9 el limite establecido, en caso se super\xe9 el limite mostrar un error de tal manera que no permita realizar el merge, hasta que se realizen las modificaciones"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yml",children:'- name: Stop the execution of the workflow if the limit of modified lines is exceeded.\r\n  run: |\r\n    if [[ $PR_MODIFY_REST -gt $MAX_LINES_PR ]]\r\n    then\r\n        echo "Warning - total lines changed is greater than" $MAX_LINES_PR.\r\n        echo "Please consider breaking this PR down."\r\n        exit 1\r\n    fi\n'})}),"\n",(0,a.jsx)(n.h2,{id:"8-resultados",children:"8. Resultados"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Si el numero de l\xedneas modificadas no supera el limite establecido"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"image",src:r(6931).Z+"",width:"1044",height:"758"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Si el numero de l\xedneas modificadas supera el limite establecido"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"image",src:r(7155).Z+"",width:"1052",height:"738"})})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},7155:(e,n,r)=>{r.d(n,{Z:()=>a});const a=r.p+"assets/images/pr-report-error-785f23cb99fb07053fd242c445909d79.png"},6931:(e,n,r)=>{r.d(n,{Z:()=>a});const a=r.p+"assets/images/pr-report-ok-0928feb29159f3ef414d9b989771c88e.png"},7463:(e,n,r)=>{r.d(n,{Z:()=>i,a:()=>l});var a=r(959);const s={},o=a.createContext(s);function l(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);