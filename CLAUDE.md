# Purple Dream Survivor — guía del proyecto

## Idioma
- Habla siempre en **español**, con respuestas breves y directas.
- Textos del juego (menús, poderes, mensajes) en español por ahora.
- En guías de comandos, cada comando en su propio bloque de código (solo agrupa si deben ejecutarse juntos).

## Qué es
Survivors-like (tipo Vampire Survivors / Megabonk) en **3D low-poly** para navegador, hecho con **Three.js**.
El jugador solo se mueve; los hechizos se lanzan solos. Al subir de nivel eliges 1 de 3 mejoras.

**Objetivo:** publicarlo en **CrazyGames**. Requisitos a tener en cuenta:
- Descarga inicial ≤ 50 MB (≤ 20 MB para la portada de móvil).
- Debe funcionar bien en móvil (controles táctiles) y en PC.
- Contenido apto PEGI 12, nada de gore.
- El jugador debe entrar a jugar rápido, sin menús largos.
- Nombre e iconos originales; nada de propiedad intelectual ajena (nada de Pokémon, etc.).
- Más adelante habrá que integrar el SDK de CrazyGames (anuncios, etc.).

## Estética: "old dark fantasy" / dreamcore
Inspirada en la tendencia de TikTok de CGI de finales de los 90 / principios de los 2000:
- Colores muy saturados: morado y azul eléctrico de base, verde ácido y naranja fuego.
- Texturas con venas de rayos, piedra brillante, suelos de ajedrez, galaxias en espiral.
- Elementos surrealistas: soles con cara, ojos flotantes, gigantes de piedra, torres con ventanas iluminadas, setas.
- Baja resolución a propósito (look retro pixelado). Ambiente de sueño raro, más inquietante que oscuro.
- Los gráficos "feos de los 90" son parte del estilo: low-poly, sin buscar realismo.

## Contenido decidido
**Protagonista:** mago con sombrero de punta y túnica estrellada.

**Poderes (magia surrealista, nada de armas):**
- 👁️ Ojo vigilante — ojo flotante que dispara al enemigo más cercano (poder inicial).
- 🌙 Lunas orbitales — lunas que giran alrededor y golpean.
- ♟️ Suelo de ajedrez — tablero bajo el jugador que daña y ralentiza.
- 🌀 Portal galáctico — espiral de estrellas que absorbe enemigos.
- ⚡ Tormenta morada — rayos sobre enemigos cercanos.
- 🍄 Champiñón de ácido — setas que explotan en ácido verde.

**Pasivas:** Botas de niebla (velocidad), Corazón astral (vida), Imán de cristales (recogida), Orbe arcano (daño), Reloj de arena (cadencia).

**Enemigos (mucha variedad):** goblins, esqueletos, ojos flotantes, encapuchados rojos (disparan) y gnomos súper raros (el gnomo se divide en 2 mini-gnomos más pequeños y débiles; se quieren más variantes raras).

**Jefes:** gigantes surrealistas (**Helioth, el Sol que Sueña** ✅ implementado — sol con cara; la barra de vida muestra solo "Helioth" y el aviso el nombre completo —, gigante de piedra con rayos), magos oscuros (uno que copia tus hechizos), criaturas enormes (árbol vivo, dragón low-poly) y el rey gnomo.

## Guía visual (referencia para todo cambio gráfico)
Sacada de capturas de la tendencia "old dark fantasy" (CGI de finales de los 90). Copiar el **estilo**, nunca personajes ni escenas concretas.

**Paleta** (constante `PAL` en `index.html`):
| Uso | Color | Código |
|---|---|---|
| Fondo / sombras | morado casi negro | `#1A0638` |
| Base | morado intenso | `#7A1CFF` |
| Luces mágicas | violeta | `#B04AFF` |
| Rayos, venas, bordes de luz | azul eléctrico | `#1E5BFF` |
| Agua / brillos fríos | cian | `#3EF0FF` |
| Ácido, ojos, setas | verde ácido | `#8CFF1A` |
| Túnicas, peligro | rojo sangre | `#B0001E` |
| Sol, lava, fuego | naranja fuego | `#FF5A00` |
| Ventanas, chispas | oro | `#FFB300` |

**Reglas de estilo:**
- Negros profundos teñidos de morado y mucho contraste; nada de grises neutros.
- Nada de tonos de piel ni ropa "normales": pieles moradas, verdes ácido, lilas o en sombra total.
- Superficies nunca lisas: textura moteada/ruidosa (piedra, escamas, tela vieja), aunque sea a baja resolución.
- Brillos emisivos fuertes: ojos que brillan en todos los enemigos, venas de rayos azules sobre piedra oscura, lava naranja en el fuego, ventanas doradas.
- Borde de luz (rim light) morado/azul en los personajes para separarlos del fondo.
- Contraste de temperatura: fondo frío (morado/azul) con focos cálidos (naranja/oro) o tóxicos (verde ácido).
- Elementos recurrentes: soles con cara, ojos flotantes, gigantes de piedra con venas eléctricas, encapuchados rojos con casco plateado y ojos verdes, suelos de ajedrez, galaxias en espiral, setas con puntos brillantes, agua cian luminosa.
- Ambiente: sueño raro, inquietante más que terrorífico; viñeta oscura morada.

**Interfaz:**
- Tipografías en `fonts/` (OFL): **Uncial Antiqua** solo para el título del juego, **Pirata One** para encabezados, botones y nombres, **VT323** (pixel) para el texto.
- **Nada de emojis.** Los iconos son pixel art propio de 12×12 (`ICONS` + `icon()` en `index.html`, se pintan como SVG nítido); para uno nuevo, dibuja la cuadrícula con las letras de `ICON_PAL`.
- Paneles con esquinas recortadas y doble borde biselado (clase `.frame`), barras segmentadas (vida rojo sangre, experiencia cian, jefe fuego), botones morados con texto dorado.
- Menú de inicio: el mundo animado de fondo (cámara de cine alrededor del mago), título, un solo botón y el mejor tiempo.

**Implementación actual:** shader común de personajes (`charShader`: moteado, rim light, ojos con brillo, venas) y post-proceso final (saturación, contraste, sombras moradas, viñeta que respira, leve posterizado). El color de cada pieza va en `PAL`; los modelos KayKit se recolorean en `tools/prepare-models.mjs`.

## Estado actual
- `index.html`: toda la demo en un solo archivo (HTML + CSS + JS).
- `vendor/three.min.js`: Three.js r128 (sin dependencias de CDN). `vendor/GLTFLoader.js`: cargador glTF de r128 (minificado).
- `models/`: mago, esqueleto y encapuchado de KayKit (CC0), recortados con `tools/prepare-models.mjs` (accesorios fuera, pocas animaciones, menos polígonos, recoloreados).
- Goblin, ojo, gnomo y Helioth (el sol) están hechos por código con el mismo estilo (color por vértice + sombreado plano).
- Todo se dibuja con la paleta de la Guía visual, shader de personaje y un post-proceso de color final.
- Enemigos: sus animaciones (andar, golpe, morir) se hornean en fotogramas al cargar y se dibujan con InstancedMesh (pocas draw calls con 400 enemigos). El mago usa animaciones reales (correr, hechizo, golpe, morir).
- Cámara en tercera persona a ~45º en vertical y ~42º en horizontal, mago al ~60% de la altura de pantalla para ver lo que viene por detrás; FOV 88 en vertical y 72 en horizontal, con una franja de cielo arriba. Textura del suelo sin costuras. Cielo pintado una vez en un canvas (degradado, estrellas, nubes de colores) con una luna con cara; la niebla tiene el color del horizonte y la cámara no dibuja más allá de 80 unidades.
- Escenario: suelo con un shader de zonas (mapa de datos 512×512: piedra con grietas eléctricas, hierba morada, senderos de ajedrez, charcos cian animados). Decoración (setas, árboles retorcidos, torres con ventanas, cristales, caras de piedra, rocas, matas) hecha con piezas de muy pocos polígonos y fusionada por trozos de 40×40 (≈100k vértices en total, pocas draw calls). Siluetas de montañas, castillos y árboles en un anillo en el horizonte.
- El mago lleva un círculo de luz bajo los pies y un borde de luz más claro que el resto.
- Partículas de hechizos: un único sistema de puntos aditivos (`emit`/`burst`): estelas de proyectiles, chispas de lunas, remolino del portal, destellos de rayos, ácido de setas, brillo del ajedrez y al morir enemigos.
- Los enemigos aparecen siempre fuera de la vista (`spawnPoint`: comprueba el campo de visión) o dentro de la niebla al frente.
- Publicado con GitHub Pages: https://karrayjunior-code.github.io/purple-dream-survivor/
- Implementado: 6 poderes, 5 pasivas, 6 tipos de enemigo, jefe Helioth a los 2:30, joystick táctil, pausa, mejor tiempo guardado.
- Pendiente: sonido/música, resto de jefes, balance de dificultad, SDK de CrazyGames.

## Forma de trabajar
- El dueño prueba desde el **móvil** usando el enlace de GitHub Pages: después de cada cambio, haz commit y push a `main` para que se publique.
- Una o dos mejoras por vez; antes de subir, comprueba que el juego arranca sin errores.
- Mantén el juego ligero (rendimiento en móviles) y sin recursos externos que no estén en el repo.
- Si el proyecto crece, se puede dividir el código en módulos, pero sin pasos de build complicados mientras se publique desde GitHub Pages.
