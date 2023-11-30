import cookieParser from "cookie-parser";
import express, { urlencoded } from "express";
import cors from "cors";
const app = express();

// cross origin url pe agar hit a rha hai--
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);

//  json jo ayega to uske liye jo parsing krna hga---(json k andar k object optional hai)
app.use(express.json({ limit: "20kb" }));

// url k andar me like jaise koi 'space' hai to "%20" use hota hai-------(object optional hai)
app.use(urlencoded({ extended: true }));

app.use(express.static("public"));

// for cookies
app.use(cookieParser());

// routes import
import userRouter from "./routes/user.routes.js";
//  kyunki routes kahi aur hai aur controller ka handler function kahi aur hai to isiliye hmko middleware(.use()) use krna hoga instead of (.get()) ya fir (.post())
//  route declaration
app.use("/api/v1/users", userRouter);

export { app };
