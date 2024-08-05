import express from 'express';


const app = express();

// Set static folder
app.use( express.static( 'public' ) );

// Parse URL-encoded bodies (as sent by HTML forms)
app.use( express.urlencoded( { extended: true } ) );

app.use( express.json() );


// Handle GET request to fetch users
app.get( '/users', ( req, res ) => {
  const users = [
    { name: 'John Doe', email: 'john@gmail.com', id: '1' },
    { name: 'Bob Williams', email: 'bob@gmail.com', id: '2' },
    { name: 'Shannon Jackson', email: 'shannon@gmail.com', id: '3' },
  ];
  
  res.send( `
    <h1 class='text-2xl font-bold my-4'>Users</h1>
    <ul>
      ${ users.map( ( user ) => `<li>${ user.name }</li>` ).join( '' ) }
    </ul>
  
  ` );
} );

// Start the server
app.listen( 3000, () => console.log( 'Server started on port 3000' ) );