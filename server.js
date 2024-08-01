import express from 'express';
import { PrismaClient } from '@prisma/client'

const app = express();
app.use(express.json());

const prisma = new PrismaClient()

app.post('/notes', async (req, res) => {
    
    await prisma.notes.create({
        data: {
            date: req.body.date,
            title: req.body.title,
            content: req.body.content,
            fav: req.body.fav
        }
    })

    res.status(201).json(req.body);
})

app.get('/notes', async (req, res) => {

    const notes = await prisma.notes.findMany()

    res.status(200).json(notes);
});

app.put('/notes/:id', async (req, res) => {
    
    await prisma.notes.update({
        where: {
            id: req.params.id
        },
        data: {
            date: req.body.date,
            title: req.body.title,
            content: req.body.content,
            fav: req.body.fav
        }
    })

    res.status(201).json(req.body);
})

app.delete('/notes/:id', async (req, res) => {

    await prisma.notes.delete({
        where: {
            id: req.params.id
        },
    })

    res.status(200).json({message: 'Nota deletada com sucesso!'});

})

app.listen(3000);