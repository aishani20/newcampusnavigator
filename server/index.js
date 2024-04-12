const express = require('express');
const app = express();
const cookieParser = require('cookie-parser')

require('dotenv').config();
const PORT = process.env.PORT || 4000;

const {connectToDB} = require('./config/database');
connectToDB();


app.use(express.json());
app.use(cookieParser());

const cors = require('cors');
app.use(
    cors({
        origin: `${process.env.CORS_ORIGIN}`,
        credentials: true, 
    })
)

const userRoute = require('./routes/User');
app.use('/api/v1',userRoute);

const predictRoute = require('./routes/Predict');
app.use('/api/v1',predictRoute);

const insightsRoute = require('./routes/Insights');
app.use('/api/v1',insightsRoute);    


app.get('/api/v1', (req, res) => {
    res.json({message: "Welcome to the CampusNavigator!"});
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});