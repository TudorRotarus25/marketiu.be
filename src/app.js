import Express from 'express';
import bodyParser from 'body-parser';
import BlogRouter from './router/BlogRouter';
import TestimonialsRouter from './router/TestimonialsRouter';

const app = new Express();

const buildUrl = (version, path) => `/api/v${version}/${path}`;

// parse application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(buildUrl(1, 'blog'), BlogRouter);
app.use(buildUrl(1, 'testimonials'), TestimonialsRouter);

const server = app.listen(4000, () => {
  console.log('Listening on 4000...');
});
