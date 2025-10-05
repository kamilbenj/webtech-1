# Next.js Frontend – WebTech Lab 4


## Introduction

This project is a simple frontend web application built with Next.js.

The goal of this lab is to:
- understand the Next.js project structure and App Router,
- create static pages (`Home`, `About`, `Contacts`, `Articles`),
- implement dynamic routes (e.g., `/articles/[articleId]`),
- create shared components like a header, a footer and a navigation menu


## Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)


## Installation

Clone the repository and install dependencies:

```bash
git clone <https://github.com/kamilbenj/webtech-111.git>
cd client
npm install
```

## Usage

### Start the development server

```bash
npm run dev
```

The app will run on [http://localhost:3000]

## Pages and Routes

### `/`
**Home page**

- Returns:

  'Welcome to My WebTech Lab 4!, This website was built with Next.js'


### `/about`
**About page**

- Returns:

  'Hello, my name is Kamil, I am 20 years old, I study Cybersecurity in ECE Paris'


### `/contacts`
**Contacts page**

Displays a list of three contacts from different cities with:
- name  
- address  
- phone number  
- email  

Example:
```
Paris — Jean Dupont — 12 Rue de Rivoli, 75004 Paris — +33 1 45 23 67 89 — jean.dupont@contact.fr
```

### `/articles`
**Articles page**

Lists 3 articles with title, author, and short description :

```
1. My First Website — Jean Dupont
2. Learning React — Marie Dubois
3. Discovering Next.js — Pierre Martin
```


### `/articles/[articleId]`
**Dynamic article page**

A dynamic route that displays the `articleId` passed in the URL with it's informations :

- `/articles/1` → shows the article with ID 1  
- `/articles/2` → shows the article with ID 2  


## Components

- **`Header.js`** — displays the main navigation (Home, About, Contacts, Articles)  
- **`Footer.js`** — displays a footer common to all pages  

These components are imported inside `src/app/layout.js` to appear globally.


## Authors

- Kamil BENJELLOUN  
- Rayan GAAD  
- Gabriel DALIBERT  
