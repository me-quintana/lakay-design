LAKAY DESIGN

Lakay design es un e-commerce de productos de decoración. El sitio fue desarrollado como proyecto final para el curso de React de Coderhouse, realizado durante el primer trimestre del año 2021.


Components

En la carpeta "components" se encuentran todos los componentes utilizados en el proyecto. Algunos de ellos corresponden a secciones del sitio y otros forman parte del flujo de compra de productos.

- navbar: está compuesto por todos los elementos de la barra de navegación.
- footer: contiene el footer del sitio.
- home: página de inicio del sitio.
- nosotros: sección sobre los creadores de la marca.
- cartWigdet: constituido por un ícono de carrito de compras de Font Awesome.
- itemList: componente en el que se mapean todos los productos creados en la base de datos.
- item: corresponde a la card que contiene la información de cada producto mapeado en itemList.
- itemDetail: vista detallada del producto seleccionado desde el componente item.
- itemCount: permite que el usuario indique la cantidad de unidades a comprar de un determinado producto.
- checkout: contiene el formulario de pago y el mensaje de compra exitosa.

Containers

En la carpeta "containers" se encuentran los contenedores utilizados en el proyecto.

- itemListContainer: contiene los productos que se mapean en el componente itemList y los muestra con el formato del compomente de card del componente item.
- itemDetailContainer: contiene la vista detallada del producto seleccionado de acuerdo con el formato del componente itemDetail.
- cartContainer: contiene el detalle de los productos agregados al carrito y permite cancelar o continuar la compra.

Context

En esta carpeta se encuentra el archivo encargado de configurar el contexto de nuestra aplicación, más específicamente de las funciones del carrito de compras. Al tenerlo de esta forma, los datos y las funciones se pueden utilizar de forma global en el proyecto.

Firebase

El archivo que se encuentra dentro de esta carpeta guarda la configuración de Firebase, una plataforma que permite generar bases de datos dinámicas.

Para este proyecto, utilizamos Firebase para obtener la información de los productos comercializados, así como también para guardar la información de los clientes que realizaron una compra y asignar un id a cada orden.