## PEC 2

## Logotipo

El logotipo lo he creado con la herramienta online [hatchful](https://hatchful.shopify.com/). Ya que la temática de esta página
web va sobre tierras, pues en el logo se me ha ocurrido incorporar árboles para referenciar a la parte de la naturaleza.

## Imagen editada con clip-path

He integrado el logo en el footer editado con clip-path. La forma que he creado ha sido un polígono de siete lados donde la base
es el lado más largo. Para crear este polígono he usado la herramienta [clippy](https://bennettfeely.com/clippy/) que me ayuda a 
crear, online, polígonos clip-path vía clics y puntos.

## Página de detalle

### Imagen destacada

### Otras imágenes

## Página de categoría

## Responsive

## Accesibilidad

La gestión del proyecto de accesibilidad la he revisado con el plugin de Chrome [Wave Evaluation Tool](http://wave.webaim.org/). He usado un plugin
dada su facilidad de uso en el desarrollo. Sencillamente con activarlo en la página que estoy visitando me muestra un report
con los errores que hay en la página actual. 

![ejemplo del uso de Wave](../assets/docs/waveaccessibility.png)

He hecho el seguimiento de todas las páginas y he eliminado todos y cada uno de los errores que Wave me ha indicado. Por lo tanto,
el sitio web cumple con las buenas prácticas de accesibilidad.

### Deploy en producción

Para deployear el proyecto y tenerlo listo para producción simplemente deberemos cambiar el comando en el fichero `docker-compose.yml`
y donde ponga `npm run dev` hay que poner `npm run build`. Esto nos generará los JS, CSS y HTML preparados para subir a nuestro servidor de producción.

### URL pública

* https://dtome24uoc.netlify.com/

### Autor

Daniel Tomé Fernández <dtome24@uoc.edu>
