import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';


const app = express();

app.use('/posts', postRoutes);

app.use(bodyParser.json({ limit: "60mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "60mb", extended: true }));
app.use(cors());

// Connection here.

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () =>
        console.log(
            `%c /${PORT} response 🔥 `,
            'background: #222; color: #bada55'
        )))
    .catch((error) =>
        console.log('Error')
    )

mongoose.set('useFindAndModify', false);    