import express from 'express';
import path from 'path';

const app = express();
const port = 3000;

// * SERVE THE PUBLIC DIRECTORY
const publicDir = express.static(path.join(__dirname, '/public'));

// * SERVE BOOTSTRAP, JQUERY & POPPER
const bsCssDir = express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css'));
const bsJsDir = express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js'));
// const jqDir = express.static(path.join(__dirname, '/node_modules/jquery/dist/'));
// const popperJs = express.static(path.join(__dirname, '/node_modules/@popperjs/core/dist/umd'));

app.use(publicDir);
app.use(bsCssDir);
app.use(bsJsDir);
// app.use(jqDir);
// app.use(popperJs);

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(port, () => {
  console.log(`Sandbox listening on port ${port}`);
});
