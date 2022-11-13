# Overview

This is mini E-commerce application specified books, which is to show AWS knowledge on portfolio.

<img src="/Preview.png" alt="Preview of the App">

Users can browse online book stores as well as add to a shopping cart and process payment as basic E-commerce application's functionality.

Owner can add new items on this application via hidden path /admin

⚠️ For security reason, I replaced Stripe api key with fake one. It means payment process always failed on purpose.

## Motivation

As a complete web user-infraction application using React.js, I decided to create this. I focused to develope essential functionalities to be a E-commerce application and how to collaborate with AWS as backend side.

Understanding how AWS works took me some time, however, throughout this project, I've got a solid confident to use AWS and my React.js skill. As well as users can do CRUD action within the application, I developed CRUD actions between application and database on hidden path /admin without going to AWS console.

## Usage

You can try with owner account:

- user name: admin
- password: password

This application is available on [AWS](http://ookstore-20221014214828-hostingbucket-dev.s3-website.ca-central-1.amazonaws.com/)

or

```
git clone git@github.com:Tomo-ja/Book-store.git
```

## Language and Libraries

- React.js
- TypeScript
- Styled components
- AWS (amplify, lambda)

### Thank you for reading through all of this. I hope you find some fun :)
