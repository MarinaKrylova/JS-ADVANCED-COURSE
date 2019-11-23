//REST-API - подход к организации клиент-серверных запросов
//Типы действий и запросов. Реализация CRUD:
// C - create(post),//создать новые данные на сервере
// R - request(get),//считать инфо с базы данных
// U - update(put),//увеличить кол-во товара,или добавл инфо о клиенте
// D - delete(delete).


//с помощью require подключаем модули
const express = require('express');
const fs = require('fs');
const cart = require('./cartRouter');
const app = express();

app.use(express.json());//middleware
app.use('/', express.static('project_public'));//обработчик на корневые запросы
app.use('/api/cart', cart);

//Получение инфо по каталогу
app.get('/api/products', (req, res) => {
    fs.readFile('server/db/products.json', 'utf8', (err, data) => {
        if(err){
            res.send({result: 0, text: 'Error!'})
        } else {
            res.send(data)
        }
    })
});


//app.get() //ловим входящий запрос
// app.post()
// app.put()
// app.delete()

// app.get('/', (req, res) => {
//     res.send('Hello, World!');
// });
//
// app.get('/api/users/:id', (req, res) => {
//     res.send(req.query);  //http://localhost:3000/api/users/579?name=John&pass=577
//     //res.send(req.params.id);
// });


app.listen(3000, () => console.log('Server started...'));