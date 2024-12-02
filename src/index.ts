import dotenv from 'dotenv';
import app from './app';

dotenv.config({ path: '.env.local' });

console.log('Database Name:', process.env.DB_NAME);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});
