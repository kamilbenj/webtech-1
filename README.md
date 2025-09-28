# Node.js HTTP Server

## Introduction

This project is a simple Web API built with Express.js.
It demonstrates:
- how to define RESTful routes,
- how to manage in-memory data models (articles and comments),
- and how to test endpoints using Postman or curl.

## Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)  
- [npm] (comes with Node.js)

## Installation

Install dependencies :
   ```bash
   npm install
   npm install nodemon
   npm install express
   npm install uuid
   ```

## Usage

### Start the server
```bash
npm run dev  
```

The server will run on http://localhost:8080.

### Routes

#### `/`
Returns a welcome message explaining how to use ?name=....

#### `/hello?name=Alice`
- Returns:

 'Hello Alice'

#### `/hello?name=Kamil`

- Returns:

  'Hello, my name is Kamil, I am 20 years old, I study Cybersecurity in ECE Paris'


#### `/articles`

- GET /articles
Returns the list of all articles in JSON.

- POST /articles
Creates a new article.

Example body (JSON):
```json
{
  "title": "New Post",
  "content": "This is the article content",
  "author": "Rayan"
}
```

Returns the newly created article with id and date

#### `/articles/:articleId`

GET /articles/:articleId
Returns the article matching articleId.
If not found → 404 { "error": "Article not found" }.

#### `/articles/:articleId/comments`
	
- GET /articles/:articleId/comments
Returns all comments linked to the article.
If the article doesn’t exist → 404 { "error": "Article not found" }.

- POST /articles/:articleId/comments
Adds a new comment to the specified article.
Example body (JSON):
```json
{
  "content": "Nice article!",
  "author": "Gab"
}
```

#### `/articles/:articleId/comments/:commentId`

GET /articles/:articleId/comments/:commentId
Returns the specific comment for an article.
If not found → 404 { "error": "Comment not found" }.

#### `/:slug`

If a file content/<slug>.json exists, its content is returned.
Otherwise → 404 { "error": "File not found" }.


## Advanced Example

You can test the API using Postman and test the url : http://localhost:8080/articles

---

## Author

Kamil BENJELLOUN
Rayan GAAD
Gabriel DALIBERT