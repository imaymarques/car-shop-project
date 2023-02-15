import 'dotenv/config';
import app from './app';
import connectToDatabase from './Models/Connection';

const PORT = process.env.PORT || 3001;
connectToDatabase()
  .then(() => {
    // eslint-disable-next-line no-console
    app.listen(PORT, () => console.log(`Running server on port: ${PORT}`));
  })
  .catch((error) => {
    // eslint-disable-next-line no-console
    console.log('Connection with database generated an error:\r\n');
    // eslint-disable-next-line no-console
    console.error(error);
    // eslint-disable-next-line no-console
    console.log('\r\nServer initialization cancelled');
    process.exit(0);
  });
