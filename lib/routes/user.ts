import { Request, Response, NextFunction } from "express";
import { UserController } from "../controllers/user";

export class UserRoutes {

	/*
	* Init a new Controller
	*/
	public userController: UserController = new UserController();

	/*
	* Controller Roues & Respective Actions
	*/
	public routes(app: any) {
		app.route("/register").post(this.userController.register);
	}
}