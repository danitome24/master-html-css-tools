## PEC 1

### Tema del proyecto

El tema del proyecto está basado en un recogido de las tierras que pertenecen a cada familia que vive en el pueblo de San Fiz do Seo.
Mi familia es de allí y me ha echo gracia poder hacer una aplicación web que sirva de consulta para ver que tierra tiene cada familia. 
Son familias que siempre se han dedicado a la agricultura así que podremos saber quien ha trabajado cada zona.

Los logos de las diferentes familias han sido creados con una herramienta online gratuita de creación de logos. Creo que era la mejor 
opción ya que la mayoría de familias no tienen un escudo identificativo.

### Instalación

Para la ejecución y desarrollo del proyecto usaré [Docker](https://www.docker.com/). Docker permitirá tener encapsulada la aplicación
en el entorno ideal para su correcto funcionamiento. Así como para que todos los desarrolladores tengan la facilidad de disponer de todas
las dependencias necesarias para el despliege de la web. El requisito para poder levantar una instancia del proyecto es tener Docker
instalado.

Una vez Docker instalado ejecutando la comanda: 

```
docker-compose up
``` 

Se nos iniciará un contenedor con la aplicación y podremos acceder a ella a través de la url `http://localhost:3000` y ya estamos
listos para desarrollar.

### Decisiones de diseño

* Plantilla HTML: He decidido usar la plantilla gratuita de Bootstrap `freelancer` para avanzar más rápidamente en
el desarrollo de la práctica. Me sirve como base de colores y estructura mientras yo me he podido centrar más en el contenido.
También me ayudará a que la web sea responsive 100%.

* Data: He creado un fichero `data/data.js` como repositorio de información para la práctica, así sin depender de ningún tipo
de I/O.

### Dependencias usadas

Las dependencias que he usado son:

```
  "dependencies": {
    "@fortawesome/fontawesome-free": "^5.11.2",
    "jquery": "^3.4.1",
    "startbootstrap-freelancer": "^5.1.3"
  }
```

He usado los iconos de FontAwesome ya que es una fuente de iconos gratuitas de muy fácil uso y muy versátil. También necesito Jquery
para algunas interacciones con el DOM y Javascript y he usado una plantilla gratuita de Bootstrap 4 para la estructura principal
del proyecto.

A la hora de desarrollar he necesitado de otras dependencias para el compilado

```
"devDependencies": {
    "autoprefixer": "^9.6.5",
    "npm-run-all": "^4.1.5",
    "parcel-bundler": "^1.12.4",
    "rimraf": "^3.0.0"
  },
``` 

Aqui he usado varias dependencias como `autoprefixer` para el parseo de CSS, `npm-run-all` para ejecutar diversos scripts, 
`parcel-bundler` para el servidor de desarrollo y el empaquetado de los JS y `rimraf` para borrar recursivamente directorios.

### Deploy en producción

Para deployear el proyecto y tenerlo listo para producción simplemente deberemos cambiar el comando en el fichero `docker-compose.yml`
y donde ponga `npm run dev` hay que poner `npm run build`. Esto nos generará los JS, CSS y HTML preparados para subir a nuestro servidor de producción.

### URL pública

* https://dtome24uoc.netlify.com/

### Autor

Daniel Tomé Fernández <dtome24@uoc.edu>
