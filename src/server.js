import app from './app';

const port = process.env.APP_PORT;

app.listen(port, () => {
  console.log();
  console.log();
  console.log('##########################################');
  console.log('##         Aplicativo Iniciado          ##');
  console.log(`##    Acesso em ${process.env.APP_URL_FULL}   ##`);
  console.log('##########################################');
  console.log();
  console.log();
});
