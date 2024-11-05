# Cifrados-Luna
Esta página de cifrado fue creada para facilitar la encriptación y desencriptación de mensajes utilizando dos métodos clásicos: el Cifrado César y el Cifrado Vigenère. La herramienta está diseñada para ser intuitiva y accesible, permitiendo a los usuarios ingresar mensajes de texto de manera sencilla y aplicar diferentes métodos de cifrado para proteger su información.

El Cifrado César, que utiliza un desplazamiento fijo de letras, y el Cifrado Vigenère, que emplea una clave variable, son técnicas fundamentales en la historia de la criptografía. Esta página tiene como objetivo proporcionar una experiencia educativa sobre cómo funcionan estos métodos, así como ofrecer una plataforma práctica para experimentar con el cifrado de texto.

# Cifrado César
El Cifrado César es una técnica de cifrado por sustitución donde cada letra del texto se desplaza un número fijo de posiciones en el alfabeto.

Cómo se hace:

Elige un número de desplazamiento (por ejemplo, 3).
Para cada letra del mensaje original:
Desplaza la letra hacia adelante en el alfabeto según el número elegido.
Si el desplazamiento lleva a una letra que excede 'Z', se vuelve a comenzar desde 'A'.
Ejemplo:

Mensaje: "HOLA"
Desplazamiento: 3
Cifrado:
H → K
O → R
L → O
A → D
Resultado: "KROD"

# Cifrado Vigenère
El Cifrado Vigenère es un método de cifrado que utiliza una palabra clave para determinar el desplazamiento de cada letra en el mensaje.

Cómo se hace:

Elige una clave (por ejemplo, "CLAVE").
Repita la clave tantas veces como sea necesario para que tenga la misma longitud que el mensaje.
Para cada letra del mensaje:
Encuentra el desplazamiento correspondiente a la letra de la clave.
Desplaza la letra del mensaje según la letra de la clave.
Ejemplo:

Mensaje: "HOLA"
Clave: "CLAVE" → "CLAV" (se recorta)
Cifrado:
H (desplazamiento C = 2) → J
O (desplazamiento L = 11) → Z
L (desplazamiento A = 0) → L
A (desplazamiento V = 21) → V
Resultado: "JZLV"
Resumen
Cifrado César: Desplazamiento fijo en el alfabeto.
Cifrado Vigenère: Desplazamiento variable basado en una palabra clave.
