# SendIT
[![Build Status](https://travis-ci.org/Joyce-O/SendIT.svg?branch=develop)](https://travis-ci.org/Joyce-O/SendIT) [![Coverage Status](https://coveralls.io/repos/github/Joyce-O/SendIT/badge.svg?branch=develop)](https://coveralls.io/github/Joyce-O/SendIT?branch=develop) [![Maintainability](https://api.codeclimate.com/v1/badges/ba8d6de7ffdcee6c81ea/maintainability)](https://codeclimate.com/github/Joyce-O/SendIT/maintainability)

# Description
SendIT is a courier service that helps users deliver parcels to different destinations. SendIT provides courier quotes based on weight categories.

<br/><b>gh-pages:</b> https://joyce-o.github.io/SendIT/UI/index.html
<br/><b> Hosted API on Heroku: </b> https://joyce-o-mailxpress.herokuapp.com/api/v1
 <br/>


## API Endpoints

<table>

<tr><th>HTTP VERB</th><th>API ENDPOINT</th><th>FUNCTION</th>

<tr>
<td>GET</td> <td>api/v1/parcels</td>  <td>fetch all parcel delivery orders</td>
</tr>

<tr>
<td>GET</td> <td>api/v1/parcels/:parcelId</td>  <td>fetch a specific parcel delivery order</td>
</tr>

<tr>
<td>PUT</td> <td>api/v1/parcels/:parcelId/cancel</td>  <td>cancel the specific parcel delivery order</td>
</tr>

<tr>
<td>POST</td> <td>api/v1/parcels</td>  <td>Create a parcel delivery order</td>
</tr>

<tr>
<td>POST</td> <td>api/v1/users</td>  <td>Sign up a user</td>
</tr>


<tr>
<td>GET</td> <td>api/v1/users/:userId</td>  <td>Get a specific user</td>
</tr>

<tr>
<td>GET</td> <td>api/v1/users/:userId/parcels</td>  <td>fetch all parcel delivery orders by a specific user</td>
</tr>


## Installation
1. Clone this repository:
```
https://github.com/Joyce-O/SendIT.git
```
2. cd into the repository:
```
cd SendIT
```
3. Open the repository in terminal and Install dependencies by running:
```
npm install
```
4. Run "npm start" to start the app

5. Use Postman to test all endpoints

6. Run "npm test" to test all endpoints


## Technologies

ES6: See [here](https://en.wikipedia.org/wiki/ECMAScript) for details.

NodeJS: An asynchronous event driven JavaScript runtime, designed to build scalable network applications. Visit [here](https://nodejs.org/en/) for details.

Airbnb JavaScript style guide was adopted as a coding convention, see [here](https://github.com/airbnb/javascript) for details.

ExressJS: This is the web application framework for Node.js Visit [here](https://expressjs.com) for details.
