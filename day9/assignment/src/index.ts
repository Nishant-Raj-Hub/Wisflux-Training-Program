import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import * as userController from '../controller/userController';

const app = express();

app.use(cors({
    credentials: true,
}));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(3000, ()=>{
    console.log('Server running on http://localhost:3000/');
})

app.get('/', (req: any, res: any)=>{
    res.send('Here is all the routes: /all ->find all users. /findone->find one user with email. /create ->create an user. /update ->update an user. /delete ->delete an user');
})

app.get('/all', userController.findAllUsers)

app.get('/findone', userController.findOne)

app.post('/create', userController.createUser)

app.put('/update', userController.updateUser)

app.delete('/delete', userController.deleteUser)




