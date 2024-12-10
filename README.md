
# FutDraftApp MarketPlace

## Estructura del proyecto
futDraftFrontMP/
├── .env
├── .env.example
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── public/
├── README.md
├── src/
│   ├── components/
│   ├── config/
│   ├── context/
│   ├── data/
│   ├── hooks/
│   ├── layouts/
│   ├── views/
│   └── main.jsx
├── tailwind.config.js
└── vite.config.js

### Instalacion

1. Clonar repositorio


```bash
git clone https://github.com/usuario/futDraftFrontMP.git
```

2. Navegar al directorio del proyecto:
```bash
cd futDraftFrontMP
```

3. Instalar las dependencias:
```bash
npm install
```

4. Configurar variables de entorno:
Copie el archivo .env.example y renombrelo a .env configurando las variables necesarias.

5. Ejecucion:
```bash
npm run dev
```

La aplicacion estara disponible en el puerto local 3000
## Componentes Principales

- Producto.jsx: Muestra los detalles de un producto y permite agregarlo al carrito.

- ModalProducto.jsx: Modal para seleccionar opciones antes de agregar un producto.

- Resumen.jsx: Muestra un resumen del pedido actual.

- Sidebar.jsx: Barra lateral con navegación entre categorías.

- AdminSidebar.jsx: Barra lateral para opciones de administrador.

- Layouts: Plantillas de diseño como Layout.jsx y AdminLayout.jsx para estructurar las vistas.


## API

La aplicación se conecta a una API backend para obtener datos de productos, categorías y manejar autenticaciones. Las peticiones HTTP se gestionan con Axios configurado en src/config/axios.js.

## Estilos

Los estilos se manejan con Tailwind CSS. La configuración está en tailwind.config.js. Los estilos globales se definen en index.css.

## Explicación de Archivos Clave

- main.jsx: Punto de entrada de la aplicación donde se configura el enrutamiento y los contextos.

- router.jsx: Define las rutas de la aplicación utilizando React Router.

- ProductosProvider.jsx: Proveedor de contexto para gestionar el estado global de productos y pedidos.

- useProductos.js: Hook personalizado para acceder al contexto de productos.

- Layout.jsx: Diseño principal que envuelve las vistas públicas.

- AdminLayout.jsx: Diseño para las vistas de administración.

## Dependencias
- React: Biblioteca principal para construir la interfaz de usuario.

- React Router: Manejo de rutas en la aplicación.

- Axios: Cliente HTTP para realizar peticiones a la API.

- Tailwind CSS: Framework de utilidades CSS para estilos rápidos y responsivos.

- SWR: Para la gestión eficiente de datos remotos.

- React Toastify: Mostrar notificaciones no intrusivas.

- Modal React: Manejo de modales en la interfaz.

## Caracteristicas

- Validaciones: Verificación de datos en formularios de registro, inicio de sesión y pedidos.

- Autenticaciones: Implementación de autenticación de usuarios y gestión de sesiones.

- Roles: Distinción entre usuarios y administradores para funciones específicas.

### Funcionamiento del Sistema:
- Los usuarios pueden navegar por categorías, ver productos y realizar pedidos.
- Los administradores pueden agregar, editar y eliminar productos.
- Gestión de carrito de compras y resumen de pedidos.

## Recomendaciones
Se recomienda utilizar XAMPP para levantar la base de datos y el servidor backend necesario para el funcionamiento completo de la aplicación.
Asegúrese de configurar correctamente las variables de entorno y tener el backend en ejecución.