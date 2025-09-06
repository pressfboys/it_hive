import express from 'express';
import cors from 'cors';


const app = express();
app.use(express.json());
app.use(cors());


app.post('/api/contact', (req, res) => {
console.log(req.body);
res.json({ ok: true });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));