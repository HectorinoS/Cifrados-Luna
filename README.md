# Cifrados-Luna
Esta página de cifrado fue creada para facilitar la encriptación y desencriptación de mensajes utilizando dos métodos clásicos: el Cifrado César y el Cifrado Vigenère. La herramienta está diseñada para ser intuitiva y accesible, permitiendo a los usuarios ingresar mensajes de texto de manera sencilla y aplicar diferentes métodos de cifrado para proteger su información.

El Cifrado César, que utiliza un desplazamiento fijo de letras, y el Cifrado Vigenère, que emplea una clave variable, son técnicas fundamentales en la historia de la criptografía. Esta página tiene como objetivo proporcionar una experiencia educativa sobre cómo funcionan estos métodos, así como ofrecer una plataforma práctica para experimentar con el cifrado de texto.

## Métodos de Cifrado

### Cifrado César

El Cifrado César desplaza cada letra del mensaje original un número fijo de posiciones en el alfabeto. 

**Cómo se hace:**
1. **Elige un número de desplazamiento** (por ejemplo, 3).
2. **Para cada letra del mensaje**:
   - Desplaza la letra hacia adelante según el número elegido.
   - Si el desplazamiento lleva a una letra que excede 'Z', se vuelve a comenzar desde 'A'.

**Ejemplo:**
- Mensaje: "HOLA"
- Desplazamiento: 3
- Cifrado: "KROD"

### Cifrado Vigenère

El Cifrado Vigenère utiliza una palabra clave que determina el desplazamiento de cada letra en el mensaje.

**Cómo se hace:**
1. **Elige una clave** (por ejemplo, "CLAVE").
2. **Repite la clave** para que tenga la misma longitud que el mensaje.
3. **Para cada letra del mensaje**:
   - Encuentra el desplazamiento correspondiente a la letra de la clave.
   - Desplaza la letra del mensaje según la letra de la clave.

**Ejemplo:**
- Mensaje: "HOLA"
- Clave: "CLAV"
- Cifrado: "JZLV"

## Uso

Para usar la herramienta, simplemente ingresa tu mensaje, selecciona el método de cifrado y proporciona el desplazamiento o la clave según corresponda. Presiona "Cifrar" para obtener el resultado.

