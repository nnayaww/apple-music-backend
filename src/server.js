import express from 'express';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import compression from 'compression';

import mainRoutes from './main.routes.js';

const app = express();
const port = 3000

const limiter = rateLimit({
	windowMs: 60 * 1000,
	limit: 20,
})

app.use(compression());
app.use(limiter);
app.use(express.json());
app.use(helmet());

app.use('/', mainRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})