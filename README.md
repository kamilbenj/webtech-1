# Node.js HTTP Server

## Introduction

This project is a simple Node.js web server.  
It demonstrates:
- how to create a server,  
- how to handle routes (`/`, `/hello`),  
- and how to serve JSON files dynamically from a `content/` folder.  

## Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)  
- [npm] (comes with Node.js)

## Installation

1. Clone this repository:
   ```bash
   git clone <git@github.com:kamilbenj/webtech-1...git>
   cd <LAB 1>
   ```

2. Install dependencies :
   ```bash
   npm install
   npm install nodemon
   ```

## Usage

### Start the server
```bash
npm run dev  
```

The server will run on http://localhost:8080.

### Routes

#### `/`
Displays a short explanation of how the `/hello` route works.

#### `/hello?name=Alice`
- Returns:

 'Hello Alice'

#### `/hello?name=Kamil`
- Returns:

  'Hello, my name is Kamil, I am 20 years old, I study Cybersecurity in ECE Paris'

#### `/about`
- display the content of `content/about.json`:
  ```json
  {
  "title": "About",
  "content": "this is a node.js app made for my lab",
  "author": "BENJELLOUN Kamil",
  "date": "14/09/2025"
  }
  ```

#### `/something`
- If a file `content/something.json` exists, its JSON content is served.  
- Otherwise, the server returns:
  
  '404 Not Found'
  

## Advanced Example

1. Add a new file `content/student.json`:
   ```json
   {
     "title": "student",
     "email": "example@mail.com",
     "phone": "07 xx xx xx xx"
   }
   ```

2. Start the server and visit:  
   http://localhost:8080/student
👉 The server will dynamically load and display the JSON file!

---

## Author

Kamil BENJELLOUN