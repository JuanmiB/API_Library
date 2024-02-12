
# API REST | Library 

REST API built with Node.js integrated with Firebase as the database.

## Authors

- [@JuanmiB](https://github.com/JuanmiB)


## API Reference

#### Get all books

```http
  GET /api/books
```

#### Get book by id

```http
  GET /api/books/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id del libro |

#### Post book

```http
  POST /api/books/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
|           |          | Permire agregar un libro |

#### Delete

```http
  Delete /api/books/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id del libro a eliminar |


## Tools

-Node

-Express

-Cors

-Firebase-Admin

-Eslint: "Standard"


