import express, { Request, Response } from 'express';
import fs from 'fs';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

app.post('/submit-feedback', (req: Request, res: Response) => {

    const { name, email, feedback } = req.body;
    const feedbackData = `Name: ${name}, Email: ${email}, Feedback: ${feedback}`;

    fs.appendFile('feedback.txt', JSON.stringify(req.body), (err) => {
        if (err) {
            res.status(500).send('Error submitting feedback');
        } else {
            res.status(200).send('Feedback submitted successfully');
        }
    });
});

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});