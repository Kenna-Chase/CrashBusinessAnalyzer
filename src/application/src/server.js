import express from 'express';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config.cjs';
import webpackHotMiddleware from 'webpack-hot-middleware';
import historyApiFallback from 'connect-history-api-fallback';

// const HOST = process.env.SERVER_HOST;
const PORT = process.env.SERVER_PORT || 8080;

const app = express();

app.use((req, res, next) => {
    console.log('------------------------------');
    console.log(`Request: ${req.method} ${req.url}`);
    return next();
})

const compiler = webpack(webpackConfig);
app.use(historyApiFallback({
    verbose: true,
    rewrites: [
        {
            from: /^\/api\/.*$/,
            to: (context) => context.parsedUrl.path
        }
    ]
}));
app.use(webpackMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
}));
app.use(webpackHotMiddleware(compiler));

//API Routes
const ApiRouter = express.Router();
ApiRouter.get('/home', (req, res) => {
    return res.json({message: 'Home Page from Express'});
})
ApiRouter.get('/login', (req, res) => {
    return res.json({message: 'Login Page from Express'});
})
app.use('/api', ApiRouter);

app.listen(PORT, function() {
    console.log('Server running at http://127.0.0.1:' + PORT);
});