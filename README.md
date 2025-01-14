# catalogue-pro-api

Este proyecto backend de un catálogo de productos implementando una base de datos en memoria usando maps de javascript.

## diagrama

```
Frontend ←→ API ←→ Maps en Memoria
  React   Express  (Products)
                   (Categories)
```

## modelo de datos
```
// Product Schema
{
  id: Number (timestamp),
  name: String,
  price: Number,
  stock: Number,
  status: Boolean,
  categoryId: String,
  images: Array
}

// Category Schema
{
  id: Number (timestamp),
  name: String,
  description: String,
  slug: String,
  active: Boolean
}
```

## datos de prueba

En el archivo src/data/mockData.js se van a generar 15 productos y 3 categorías de prueba simulando un catálogo de una tienda de computadoras.

## EndPoints

- GET /api/products (devuelve productos con la información de sus categorías)