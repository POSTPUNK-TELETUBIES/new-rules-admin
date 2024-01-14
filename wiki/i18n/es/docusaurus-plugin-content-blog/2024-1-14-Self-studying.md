---
slug: self-studying
title: Auto estudio
authors: piero
---

Deberíamos autoestudiarnos si queremos programar.

Cuando alguien nos asigna una tarea, a veces no sabemos cómo proceder, pero generalmente los gerentes y POs quieren que estimemos el tiempo que llevará.

Entonces, lanzamos un número y ahora hay un compromiso de entregar la función. El problema aquí es que somos muy malos estimando por naturaleza. Nuestros cerebros son muy amables con los futuros yo (y entre otras cosas, esa es una de las razones por las que las personas procrastinan).

Vamos a explorar un ejemplo; imagina que te asignan codificar una comparación de matrices que se asemeja a una tabla de hojas de cálculo, cambia dinámicamente el número de productos (el usuario puede agregar o quitar columnas de productos) y la primera columna y fila están bloqueadas, lo que significa que cuando desplazas hacia abajo, la fila del encabezado debería "quedarse" en la parte superior. Y en la vista móvil debería admitir ver solo dos columnas como máximo, y para ver el resto, también debería admitir desplazamiento.

## Autoeficacia

Si nunca has hecho algo como esto antes, hay una alta probabilidad de rendirse incluso antes de comenzar.

Si has intentado algo similar pero el intento no fue exitoso, es probable que lo intentes sólidamente ahora, pero tal vez termines rindiéndote, aunque es menos probable esta vez.

Ahora, si tu intento anterior de hacer algo similar fue exitoso en algún momento, hay una buena probabilidad de que ahora lo hagas mejor.

Pero, ¿cómo puedo ganar autoeficacia si todo siempre es nuevo?

### Fundamentos

Si tienes bases sólidas en programación y ciencias de la computación, como:

- Saber cómo diseñar algoritmos
- Entender estructuras de datos
- Tener un modelo mental sobre los roles de las variables
- Complejidad de tiempo y espacio
- Asignación de memoria en pila y montón
- Perfilado

Te sentirás más seguro en lo que estás haciendo. Si eres un desarrollador frontend, es posible que te preguntes "¿por qué diablos debo saber todo esto?".

#### Requisitos no funcionales y errores (también conocido como "¡pero funciona!, deja de pedirme más")

Estos son requisitos como:

- La web debe cargar en menos de 500 ms
- La matriz de comparación debe ser amigable con SEO, así que no CSR, por favor
- La página debe tener 90 o más en la salud de web vitals
- Si la lógica de JavaScript falla, no debe bloquear el JS de otros componentes
- Debería funcionar en IE11 (sí, hay personas que lo usan para ver nuestra página, no me preguntes por qué)
- Debería funcionar en un teléfono con especificaciones bajas (y otros componentes de la página ya tienen toneladas de JS y hay muchos scripts de JS para monitoreo y métricas comerciales en funcionamiento)
- El CSS no crítico debería ser diferido

Dios mío, ahora es bastante complicado tener en cuenta todo esto.

¿Y sobre los errores?

- Otros componentes en el sitio web están interactuando con los tuyos, haciéndolo parecer un Picasso
- Hay cambios en la disposición debido a que tu CSS interactúa con el código CSS anterior
- El código CSS anterior está anulando el tuyo
- En el futuro habrá más y más errores porque los componentes siguen cambiando y la gente sigue agregando scripts externos

Si eres un desarrollador frontend, hay herramientas a tu disposición que pueden ayudarte a realizar un seguimiento del rendimiento de tu aplicación.

Por ejemplo, en navegadores basados en Chromium hay un monitor de perfil en tiempo real que muestra cuántos cambios de disposición están ocurriendo, cuánto espacio ocupa el montón de JS, nodos DOM, y más. También hay un perfilador de montón/rendimiento donde puedes grabar una sesión y evaluar dónde hay problemas en el CSS y JS. Además, puedes emular un dispositivo con menor capacidad de CPU que el tuyo (no le estamos dando tu máquina al cliente, ¿recuerdas esas palabras?).

Además de detectar errores, hay un inspector de fuente completo y un depurador donde puedes, bueno, depurar y crear puntos de interrupción.

¿Genial, verdad? Sí, pero, ¿cuando te encuentras con problemas, sabes cómo resolverlos y entender las razones detrás de esos problemas para asegurarte de que no vas a romper nada?

#### Fuerza bruta

Sí, Knuth dijo una vez que "la optimización prematura" es la raíz de todo mal", así que cuando programas, realmente te preocupas de que funcione, lo cual está bien.

En ese contexto, puedes usar algoritmos de fuerza bruta, lo cual no es malo, pero al menos cuando termines, puedes preguntar a cualquier GPT (chat GPT, code whisper, copilot, etc.) "oye, ¿podrías optimizar esto?"

El problema surge cuando copias todo tu código y lo pegas y le dices literalmente a la herramienta "oye, haz esto mejor", y así no es como funciona, ya que los GPT necesitan contexto e instrucciones detalladas. Además, los GPT no son perfectos, así que pueden alucinar con tus solicitudes.

Entonces, **EN REALIDAD** necesitas saber cómo resolver estos problemas o al menos comprender los fundamentos para guiar a tus herramientas generativas para que te ayuden.

Pero déjame decirte algo, la informática nació de las matemáticas, y aunque no tengamos en cuenta los años que la humanidad ha pasado estudiando matemáticas, esto no es ciencia de la nueva era, desde Turín y Von Neumann hasta hoy, hemos tenido suficiente tiempo para ver problemas repetitivos y patrones en estos problemas, de ahí las bibliotecas que tenemos ahora.

Por lo tanto, tal vez no deberías programar haciendo todas las cosas a través de la fuerza bruta, y podrías empezar teniendo al menos un código moderadamente óptimo y si cada otro programador está haciendo lo mismo, bueno, toda la página funcionará bien en lugar de tener un monstruo.

Pero, esto va a llevar más tiempo, en realidad..., no y sí. Si nunca has practicado estas cosas y nunca has estudiado algoritmos y su diseño, bueno, sí, debes entregar funcionalidad, así que no hay tiempo para aprender estas cosas ahora.

Tengo una fuerte opinión sobre esas personas, y es que no son profesionales.

Por el contrario, si has estudiado esas cosas, bueno, tienes un punto más a favor de tu autoeficacia. Realmente estás familiarizado con los problemas.

Entonces, todo es nuevo, sí, pero tal vez hay partes del problema que se pueden abstraer y encontrar patrones en esos mini-problemas que ya has resuelto.

Lleva mucho tiempo dominar estas cosas, en realidad. No solo la práctica, sino también el autoestudio de la teoría. Y en una nota aparte, eso es muy frustrante y requiere paciencia y dedicación, trata de ser amable contigo mismo.

#### En realidad hay poco cambio

Si leemos un libro de los años 70 sobre programación, podríamos encontrar... hilarante que gran parte de esos libros sigue siendo relevante, si no es lo mismo. Las computadoras digitales son simplemente más rápidas, más potentes y más pequeñas que en el pasado, pero sus principios, en la mayoría de los casos, son los mismos que hace 50 años.

Los problemas que los ingenieros de software enfrentaron en los años 70 son casi los mismos que las empresas enfrentan hoy, incluso con todos los cambios en DevOps. ¿Por qué? Tal vez porque estamos haciendo las cosas mal. Sin embargo, hoy tenemos soluciones ingeniosas que podemos aplicar para resolver esos problemas, pero todos están demasiado ocupados haciendo las cosas correctamente, nuevamente, tal vez.

Sí, hay nuevas tecnologías todos los días que aparecen para resolver nuevos problemas, ¿verdad? Más o menos, en realidad, esta nueva tecnología nos proporciona nuevos paradigmas y automatización de algunas tareas y problemas repetitivos. Esta nueva tecnología puede mejorar la velocidad con la que hacemos las cosas, pero la habilidad del programador y el diseño del sistema juegan un papel importante en la implementación. Los paquetes pueden seguir mejorándose, por eso tienen versiones, pero el código en los repositorios (si nadie lo elimina) no va a morir biológicamente algún día y revertir su estado a la versión 0.0.1. Pero todos tus predecesores aprendieron, cuando mueren, que la información que estaba en sus mentes se borra para siempre de allí.

Podrían haber escrito libros y documentos, pero tienes que volver a aprender todo desde cero, y hay una buena probabilidad de que interpretes esa información de manera diferente a los demás y ahora tenemos en nuestras manos una guerra en internet en los foros sobre "la manera correcta". Humanos, ¿verdad?

### Aumentando la autoeficacia

Entonces, para ser más seguro, deberías estudiar muchas cosas. Tal vez no tengas suficiente tiempo y las personas a tu alrededor (palabra fuerte y opinión que viene) simplemente son demasiado mediocres en su trabajo.

Por esa razón, debería haber tiempo para aprender los fundamentos por ti mismo. Incluso en lugares que tienen educadores de élite, _los estudiantes tienen que estudiar_ mucho por sí mismos.

Cuanto más sepas, más seguro te volverás al realizar cualquier tarea, ya que encontrarás partes de ese requisito que son variaciones u otros problemas que ya has resuelto, o al menos, si es algo totalmente nuevo, hay una buena probabilidad de que detrás de eso haya principios que ya has revisado, así que serás más rápido y más rápido (y tal vez más cómodo y más cómodo).
