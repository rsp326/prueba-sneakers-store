import app from './app.js';
import connectDB from './db.js';


// conect DB
connectDB();

const port = 3000;

app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});