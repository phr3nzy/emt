import { Request, Response } from "express";
import * as mongoose from "mongoose";
import * as bcrypt from "bcryptjs";
import * as crypto from "crypto";
import * as jwt from "jsonwebtoken";
import { UserSchema } from "../models/user";

const User = mongoose.model("User", UserSchema);

export class UserController {

	/*
	* Create a User
	*/
	public async register(req: Request, res: Response) {
		(await (() =>
			new Promise((resolve, reject) => {
				User.findOne({ username: req.body.username })
					.then(user => {
						if (!user) {
							const user = new User(req.body);
							if (req.body.password) {
								const hashedPassword = bcrypt.hashSync(req.body.password, 10);
								const modifiedUser = user.toObject()
								modifiedUser.password = hashedPassword;
								Object.assign(user, modifiedUser);
								user
									.save()
									.then(u => {
										resolve(res.status(201).json(u));
									}).catch(err => { return reject(res.status(400).send({ message: err })) });
							}
						} else if (user) {
							return reject(res.status(400).send({ message: "User already exists!" }));
						}
					})
					.catch(error => { return reject(res.status(400).json({ message: error })) });
			}))())
	}

	/*
	* Authenticate a User
	*/


}