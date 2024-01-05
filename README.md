# BlackBolt

## Esp32Agent

### Setup

- Escoger modelo `ESP32-WROOM-DA Module` 
- Armado de circuito 
- Veriricar codigo
- Cargar codigo
- Abrir monito serie (esquina superior derecha)
- enviar 1-2 on/off en monitor serie

## LeapAgent

### Setup
- Instalar Software Version: 4.1.0+52211 (leap motion) [here](https://drive.google.com/file/d/1Qe6kL6dTHIt9s_ntuEn6m3PYbTp-GQ7U/view?usp=drive_link)
- Ensender leap motion desde show hidden icons (permanecer ensendido)
- Instalar dependencias `npm install`
- Ejecutar leapAgent con `npm run dev`

### Librerias
- dependencias

```json
"dependencies": {
  "leapjs": "^1.1.1",
  "leapjs-plugins": "^0.1.12",
}
```