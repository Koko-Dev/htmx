import express from 'express';


const app = express();

// Set static folder
app.use( express.static( 'public' ) );

// Parse URL-encoded bodies (as sent by HTML forms)
app.use( express.urlencoded( { extended: true } ) );

app.use( express.json() );

// Start the server
app.listen( 3000, () => console.log( 'Server started on port 3000' ) );