import express from "express"
import * as bodyParser from "body-parser"
import mongoose from "mongoose"
import morgan from "morgan"
import { UserRoutes } from "./routes/user";
import ErrorHandler from "./helpers/errors";

class App {

	public app: express.Application;
	public userRouter: UserRoutes = new UserRoutes();
	public mongoUrl: string = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/emt-db"

	constructor() {
		this.app = express();
		this.config()
		this.userRouter.routes(this.app);
		this.mongoSetup();
		this.initializeErrorHandling();
	}

	private mongoSetup(): void {
		mongoose.Promise = global.Promise;
		mongoose.connect(this.mongoUrl, { useCreateIndex: true, useNewUrlParser: true });
	}

	private initializeErrorHandling() {
		this.app.use(ErrorHandler);
	}

	private config(): void {
		this.app.use(bodyParser.json());
		this.app.use(bodyParser.urlencoded({ extended: false }));
		this.app.use(morgan("dev"));
	}
}

export default new App().app;