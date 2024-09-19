import express from 'express';
import router from './routes';
import cors from 'cors';

// import sanphamRouter from './routes/sanphamRouter'; 

const app = express();
const PORT = 7000;
const corsOptions = {
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  Headers: 'X-Requested-With,content-type',
  credentials: true, 
};
app.use(cors(corsOptions));
// Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' })); 
app.use(express.urlencoded({ limit: '50mb', extended: true })); 

// Đăng ký router
app.use('/api/', router);
// app.use('/api/sanpham', sanphamRouter); 

// Lắng nghe cổng
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
