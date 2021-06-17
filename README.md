# Ejercicio Frontend

## ¿Que esperamos?

Esperamos que el tiempo que tengas que invertir en este ejercicio no supere la hora de trabajo. Sabemos que es complicado sacar tiempo para este tipo de ejercicios y te agradecemos que nos puedas dedicar aproximadamente una hora de tu tiempo.
Con este ejercicio queremos comprobar que tienes los conocimientos mínimos para trabajar con nosotros, el objetivo no es, ni mucho menos, que demuestres todo lo que sabes.

## ¿Que buscamos?

Una solución lo más simple y efectiva posible al problema que te planteamos.

## ¿Como enviarnos la solución?

Queremos que subas tu solución a un repositorio público en GitHub, Bitbucket o cualquiera otra plataforma Git que podamos consultar.
Para ayudarnos a revisar tu código intenta que tu historial de commits este dividido, por lo menos, que exista más de un commit y tenga un mensaje con sentido.

Cuando lo tengas listo enviamos la url del repositorio a nuestro correo electrónico.

## El ejercicio

Hemos creado un proyecto con React sencillo pero con casi las mismas tecnologías que estamos utilizando en Airgrup.
Este proyecto arranca una página que muestra cuantas horas y minutos faltan para que sean las 12:00 de la noche. Queremos que crees un tercer componente: `<CountdownSeconds/>`  en React que indique cuantos segundos faltan para las 12:00 de la noche.

Si ahora mismo fueran las 13:48:55 la página deberia mostrar: Quedan 10 horas, 11 minutos y 5 segundos para las 12:00 de la noche.

El resultado final de App.tsx debe ser:

```tsx
function App() {
  return (
    <div className="App">
        <div>
           Quedan <CountdownHours /> horas, <CountdownMinutes /> minutos y <CountdownSeconds/> segundos para las 12:00 de la noche.
        </div>
    </div>
  );
}
```

La idea del ejercicio es que nos enseñes que, independientemente de tus conocimientos técnicos concretos, eres capaz de investigar, aprender rapidamente un par de conceptos y aplicarlos de forma eficaz.

No necesitamos que entiendas como funciona React para solucionar este ejercicio, si es la primera vez que utilizas estas tecnologías no intentes entender todo el código y  centrarte en solucionar el ejercicio y que funcione correctamente.

Puedes basarte en los componentes que ya existen y no tienes porque refactorizar ni mejorar nada del código existente.

## Como empezar

> Necesitas tener instalado node >= 10.

Para empezar necesitas instalar las dependencias del proyecto, para ello, en el directorio del proyecto:

```
npm install
``` 

Una vez instalado puedes arrancar el proyecto con:

```
npm start
``` 

Con esto ya podrás acceder a la url: `http://localhost:3000`

