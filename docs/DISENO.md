# Purple Dream Survivor — Documento de diseño

Copia del documento de diseño (noviembre 2026). Es la referencia para todas las fases del plan del final. Si algo cambia, actualiza este archivo.

## Resumen y visión

Purple Dream Survivor necesita tres capas para pasar de demo a juego completo: decisiones en cada subida de nivel, combinaciones que transforman los poderes y progresión permanente entre partidas. Los grandes del género usan las tres; este documento las adapta a nuestro mundo de sueño morado.

| Juego | Qué hace bien | Qué copiamos |
| --- | --- | --- |
| Vampire Survivors | Evoluciones: arma a nivel máximo + pasiva concreta + cofre de un élite. Tienda de mejoras permanentes con oro que se encarece un 10% con cada compra. Límite de 6 armas y 6 pasivas. | Evoluciones, tienda permanente, inventario 6 + 6 |
| Megabonk | Cada personaje = arma inicial + pasiva que crece con cada nivel. Partidas de unos 10 minutos. Progresión por desbloqueos pagados con plata tras cumplir misiones. | Personajes con rasgo por nivel, misiones que desbloquean |
| Brotato | Más de 60 personajes con ventajas y desventajas muy marcadas. | Personajes con desventaja real |
| Halls of Torment | Estética de RPG de finales de los 90. Bendiciones permanentes compradas con oro aunque mueras. Más de 500 misiones. | Bendiciones = rama del árbol, misiones |
| HoloCure | Colabs: dos armas al máximo se funden en una. Super colabs: colab + objeto. | Fusiones de poderes |
| Soulstone Survivors | Árbol de habilidades permanente y runas equipables con coste. | Árbol de mejoras con ramas |

**Visión:** partidas de 15 minutos con tres jefes, cada uno con su cofre de objetos especiales, y un modo Pesadilla infinito después. Entre partidas, el Polvo de Sueño se gasta en un árbol de mejoras, y las misiones desbloquean personajes, poderes y escenarios.

## Bucle de partida

Una partida dura 15 minutos y tiene tres picos marcados por jefes; quien llega al final puede seguir en modo Pesadilla para ganar más Polvo de Sueño.

| Minuto | Qué pasa | Recompensa |
| --- | --- | --- |
| 0–2 | Calma: pocos enemigos lentos para elegir los primeros poderes | Subidas de nivel rápidas |
| 2:30, 4, 6:30, 8, 11:30, 13 | Aparece un élite (enemigo grande con aura) | Cofre normal: sube 1–3 poderes o hace una evolución |
| 5 | Jefe 1 del escenario | Lluvia de bolitas de exp + cofre de jefe (elige 1 de 3 objetos especiales) |
| 10 | Jefe 2 | Igual, con objetos de mayor rareza |
| 15 | Jefe final del escenario | Cofre final + desbloquea el siguiente escenario |
| 15+ | Modo Pesadilla: enemigos cada vez más fuertes, sin límite | Polvo de Sueño ×2 |

**Reglas de la partida**

- Inventario: 6 poderes y 6 reliquias (pasivas). Cuando está lleno, solo salen mejoras de lo que ya tienes.
- Cada nivel: elige 1 de 3 opciones (4 con el árbol de Fortuna). Desbloqueables: volver a tirar, descartar y saltar.
- Cada 5 niveles: un Don del Sueño.
- La dificultad sube por tiempo (vida, velocidad y cantidad de enemigos) y no por nivel del jugador.
- Al morir o terminar: pantalla de resumen con tiempo, nivel, enemigos, jefes, daño por poder y Polvo ganado.

## Poderes, reliquias y combinaciones

16 poderes en 4 escuelas de magia y 12 reliquias pasivas. Cada poder tiene 7 niveles; al máximo puede evolucionar con su reliquia o fundirse con otro poder.

| Poder | Escuela | Qué hace |
| --- | --- | --- |
| Ojo vigilante | Sueño | Ojo flotante que dispara al enemigo más cercano (ya existe) |
| Lunas orbitales | Sueño | Lunas que giran y golpean (ya existe) |
| Suelo de ajedrez | Sueño | Tablero que daña y ralentiza (ya existe) |
| Campana del sueño | Sueño | Onda circular que aturde 1 s |
| Portal galáctico | Vacío | Espiral que absorbe enemigos (ya existe) |
| Tormenta morada | Vacío | Rayos sobre enemigos cercanos (ya existe) |
| Lluvia de estrellas | Vacío | Meteoritos que caen en zonas al azar |
| Espejo roto | Vacío | Abanico de fragmentos hacia donde caminas |
| Champiñón de ácido | Pantano | Setas que explotan en ácido (ya existe) |
| Hiedra de espinas | Pantano | Deja un rastro de espinas al andar |
| Mariposas nocturnas | Pantano | Enjambre que persigue y muerde |
| Calavera aullante | Pantano | Calavera que atraviesa filas y empuja |
| Bola de lava | Fuego | Bola que rebota entre enemigos y quema |
| Linterna de almas | Fuego | Cono de fuego delante del mago |
| Látigo de sombra | Fuego | Barrido rápido a ambos lados |
| Reloj roto | Fuego | Zona que ralentiza el tiempo a los enemigos |

**Reliquias (12):** Botas de niebla (velocidad), Corazón astral (vida), Imán de cristales (recogida), Orbe arcano (daño), Reloj de arena (cadencia), Lupa de cristal (área), Espejo gemelo (+1 proyectil), Vela negra (duración), Trébol podrido (suerte), Escama de dragón (armadura), Cáliz de sangre (regeneración), Pluma de cuervo (velocidad de proyectil).

**Evoluciones:** poder a nivel 7 + su reliquia + abrir un cofre de élite o de jefe.

| Poder | Reliquia | Evolución |
| --- | --- | --- |
| Ojo vigilante | Espejo gemelo | Mil Ojos: anillo de ojos con rayos continuos |
| Lunas orbitales | Vela negra | Eclipse Eterno: lunas que nunca desaparecen y crecen |
| Suelo de ajedrez | Reloj de arena | Jaque Mate: casillas que explotan en cadena |
| Portal galáctico | Imán de cristales | Agujero Negro: absorbe también bolitas de exp |
| Tormenta morada | Orbe arcano | Cólera del Cielo: rayos que saltan entre enemigos |
| Champiñón de ácido | Cáliz de sangre | Bosque Podrido: setas que curan al explotar |
| Lluvia de estrellas | Lupa de cristal | Supernova: un meteorito gigante cada 10 s |
| Bola de lava | Escama de dragón | Corazón de Volcán: charcos de lava permanentes |

Las otras 8 evoluciones se definen en la fase de poderes nuevos.

**Fusiones:** dos poderes a nivel 7 en un altar de fusión (aparece tras el jefe 1) se convierten en uno más fuerte y liberan un hueco.

| Poder A | Poder B | Fusión |
| --- | --- | --- |
| Lunas orbitales | Tormenta morada | Lunas Eléctricas |
| Ojo vigilante | Linterna de almas | Mirada Ardiente |
| Portal galáctico | Champiñón de ácido | Pantano del Vacío |
| Suelo de ajedrez | Campana del sueño | Reino de la Reina |
| Mariposas nocturnas | Bola de lava | Enjambre de Ceniza |
| Espejo roto | Lluvia de estrellas | Cielo Quebrado |

En la pausa hay un Grimorio con las recetas descubiertas; las nuevas aparecen como "???" hasta conseguirlas.

## Dones del Sueño (cada 5 niveles)

En los niveles 5, 10, 15, 20… sale una elección de 3 cartas doradas: un Don. Cambia la forma de jugar, no ocupa hueco del inventario y no se repite. Los niveles 25 y 50 ofrecen Dones legendarios (borde rojo).

| Don | Efecto | Rareza |
| --- | --- | --- |
| Tercer Ojo | +1 opción en cada subida de nivel | Épico |
| Gemelo Onírico | Un clon tuyo lanza tus poderes al 40% de daño | Legendario |
| Luna Llena | +1 proyectil a todos los poderes | Legendario |
| Sueño Lúcido | Al subir de nivel, una onda limpia la pantalla | Épico |
| Alma Doble | Resucitas una vez con la mitad de la vida | Épico |
| Gula de Cristal | Las bolitas dan +50% de exp, pero las pociones curan la mitad | Raro |
| Cuerpo de Niebla | 15% de probabilidad de esquivar golpes | Raro |
| Reloj Parado | Cada 30 s todo se congela 2 s | Épico |
| Corona de Espinas | Devuelves el 100% del daño de contacto | Raro |
| Ambición | Los cofres dan 1 objeto más, pero los enemigos tienen +15% de vida | Raro |
| Ojo de la Tormenta | Cada 50 bolitas recogidas, cae un rayo en cadena | Raro |
| Pacto de Lava | +40% de daño, pero no regeneras vida | Épico |

## Jefes, cofres y objetos especiales

Cada jefe suelta una explosión de bolitas de exp (unos 3 niveles de golpe) y un cofre de jefe con 3 objetos especiales para elegir 1. Estos objetos solo salen de jefes.

| Cofre | Quién lo suelta | Contenido |
| --- | --- | --- |
| Normal (madera morada) | Élites | Sube 1, 3 o 5 poderes; hace evoluciones si cumples la receta |
| De jefe (oro) | Jefes | Elige 1 de 3 objetos especiales + 50 de Polvo de Sueño |
| Maldito (rojo) | Aparece al azar en el mapa | Objeto especial gratis, pero enemigos +20% de vida durante 2 min |

Abrir un cofre tiene animación propia (se para el tiempo, brilla, giran los objetos), dura 2–3 s y se puede saltar.

| Objeto | Efecto | Lo suelta |
| --- | --- | --- |
| Diente de Helioth | Tus proyectiles queman 3 s | Helioth |
| Corona del Rey Gnomo | Cada 10 gnomos muertos, uno lucha a tu lado | Rey Gnomo |
| Corazón de Piedra | +50% vida máxima, −10% velocidad | Gigante de Piedra |
| Pieza de la Reina | El Suelo de ajedrez aparece donde mueren élites | Reina Blanca |
| Espejo del Mago | Copia al azar uno de tus poderes al 50% | Mago Espejo |
| Raíz Madre | Regeneras 1% de vida por segundo sobre hierba | Árbol Vivo |
| Escama del Dragón Antiguo | Inmune al fuego; tus poderes de Fuego +30% | Dragón |
| Reloj de Arena Dorado | −15% tiempo de recarga de todo | Común |
| Bolsa sin Fondo | +1 hueco de reliquia (7 en total) | Común, legendario |
| Ojo de Cristal | Ves cofres malditos y élites en el borde de la pantalla | Común |
| Atrapasueños | Cada 60 s atrae todas las bolitas del mapa | Común |
| Pluma de Fénix | Al morir, renaces una vez con toda la vida | Común, legendario |

Rareza por color: raro morado, épico oro, legendario rojo. Máximo 3 objetos especiales a la vez. Objetivo final: unos 40 objetos.

## Personajes

8 personajes, cada uno con poder inicial, ventaja, desventaja real y un rasgo que crece con cada nivel. Solo el Mago Estelar está disponible al principio; el resto se desbloquea con una misión y luego se compra con Polvo de Sueño.

| Personaje | Poder inicial | Ventaja | Desventaja | Rasgo por nivel | Misión para desbloquear |
| --- | --- | --- | --- | --- | --- |
| Mago Estelar | Ojo vigilante | Equilibrado | Ninguna | +1% daño | Disponible al inicio |
| Bruja del Pantano | Champiñón de ácido | +30% área | −20% vida | +1% duración | Sobrevivir 5 min |
| Gnomo Errante | Suelo de ajedrez | +25% velocidad, más pequeño | −30% vida | +1% suerte | Matar 500 gnomos |
| Caballero Hueco | Látigo de sombra | +5 armadura | −15% velocidad | +1 armadura cada 5 niveles | Derrotar a Helioth |
| Astrónoma | Lluvia de estrellas | +1 proyectil | −25% daño | +1% cadencia | Hacer tu primera evolución |
| Hijo del Sol | Bola de lava | +40% daño | Solo se cura con cofres y Dones | +1% daño de fuego | Sobrevivir 10 min |
| Polilla Nocturna | Mariposas nocturnas | +30% imán y exp | −20% daño | +1% exp | Recoger 10.000 bolitas |
| Encapuchado Rojo | Calavera aullante | 3% robo de vida | −40% vida máxima | +1% crítico | Derrotar 3 jefes en una partida |

Cada personaje tiene su modelo y color dentro de la paleta. Con maestría 5 (partidas terminadas) desbloquea un aspecto alternativo.

## Progresión entre partidas

Moneda: **Polvo de Sueño**. Una partida de 10 minutos da 300–500; completar el árbol cuesta unas 40.000 (80–100 partidas).

**Cómo se gana:** bolsitas que sueltan algunos enemigos (1 de cada 150) y todos los élites; 10 por minuto sobrevivido; 50 por jefe; ×2 en Pesadilla. Se conserva aunque mueras.

**Árbol de los Sueños:** tres ramas desde un nodo central. Cada nodo tiene 3–5 rangos y cada compra encarece el resto un 10%. Se puede reiniciar gratis.

| Rama | Nodos (de dentro hacia fuera) | Nodo final |
| --- | --- | --- |
| Ataque | Daño +5%/rango, cadencia +3%/rango, área +5%/rango, crítico +2%/rango | +1 proyectil a todo |
| Defensa | Vida +10/rango, armadura +1/rango, regeneración, velocidad +3%/rango | 1 resurrección por partida |
| Fortuna | Exp +5%/rango, imán +10%/rango, suerte +5%/rango, polvo +10%/rango | Volver a tirar, descartar y saltar |

**Misiones:** unas 60 que dan polvo y desbloquean poderes, reliquias, personajes y escenarios (por ejemplo "Mata a 1.000 goblins" desbloquea Látigo de sombra; "Derrota al Gigante de Piedra" desbloquea el escenario 2). Los poderes no aparecen en partida hasta desbloquearlos.

Guardado en localStorage y, más adelante, en la nube del SDK de CrazyGames.

## Escenarios

4 escenarios con sus enemigos, 3 jefes (minutos 5, 10 y 15) y una regla especial. Se desbloquean en orden.

| Escenario | Ambiente | Enemigos | Jefes (5 / 10 / 15 min) | Regla especial |
| --- | --- | --- | --- | --- |
| 1. Prado Morado | El mapa actual | Goblins, esqueletos, ojos flotantes, encapuchados rojos, gnomos raros | Helioth · Rey Gnomo · Gigante de Piedra con rayos | Ninguna (tutorial) |
| 2. Biblioteca Infinita | Suelo de ajedrez enorme, estanterías flotantes, velas | Piezas de ajedrez vivas, libros voladores, velas andantes | Reina Blanca · Mago Espejo (copia tus hechizos) · Bibliotecario sin Cara | Casillas negras que dañan cada 20 s |
| 3. Pantano Ácido | Agua verde brillante, árboles retorcidos, niebla | Sapos, setas andantes, polillas gigantes, babosas | Madre Seta · Serpiente de Cristal · Árbol Vivo | Charcos de ácido que ralentizan |
| 4. Abismo Estelar | Plataformas sobre una galaxia, ojos en el cielo | Caballeros del vacío, estrellas fugaces, ojos múltiples | Luna Durmiente · Dragón Low-poly · El Soñador (jefe final) | Gravedad que empuja hacia el centro |

Cada escenario: música propia, paleta dentro de la Guía visual y unos 5 tipos de enemigo con variantes (normal, élite y rara con polvo extra).

## Experiencia en bolitas y sensación de juego

| Bolita | Valor | Color |
| --- | --- | --- |
| Pequeña | 1 | Cian |
| Mediana | 5 | Morado |
| Grande | 25 | Oro |
| De jefe | 100 | Rojo con aura |

- Vuelan hacia ti con estela y "pop" que sube de tono en racha. Con más de 300 en el suelo, las lejanas se fusionan.
- Golpe: parpadeo blanco, pequeño retroceso y número de daño (críticos en oro).
- Muerte: se disuelve en partículas de su color, sin gore.
- Jefe: 2 s de presentación con su nombre, pausa de impacto y cámara lenta al morir.
- Subir de nivel: anillo de luz que empuja enemigos cercanos.
- Temblor de pantalla leve solo en golpes grandes, con opción para quitarlo.
- Animaciones: mago (reposo, correr inclinado, hechizo, golpe, morir); enemigos (aparecer del suelo, andar con balanceo propio, atacar, morir); élites y jefes con aviso antes de atacar.
- Límites: 400 enemigos, 300 bolitas, un solo sistema de partículas, fluido en móvil.

## Plan por fases

1. **Base de datos y bolitas:** poderes, reliquias y objetos en tablas de datos; inventario 6 + 6; pausa con tu build; exp en bolitas.
2. **Poderes y reliquias nuevos:** los 10 poderes y 7 reliquias que faltan, con 7 niveles.
3. **Evoluciones, fusiones y cofres de élite:** élites, cofre normal, recetas y Grimorio.
4. **Jefes, cofres de jefe y Dones:** estructura de 15 min con 3 jefes, objetos especiales, Dones y modo Pesadilla.
5. **Personajes:** los 8 personajes y pantalla de selección.
6. **Polvo de Sueño, Árbol y misiones:** moneda, árbol, misiones, desbloqueos y guardado.
7. **Escenarios 2, 3 y 4:** uno por prompt.
8. **Pulido:** animaciones, sensación de golpe, números de daño y equilibrio con partidas simuladas.
9. **CrazyGames:** SDK, anuncios con recompensa (revivir), guardado en la nube y envío.
