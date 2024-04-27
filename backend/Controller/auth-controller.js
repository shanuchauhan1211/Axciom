import AddUserModel from "../Models/auth-model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const logIn = async (req, res) => {
  try {
    const { name, password } = req.body;
    console.log(`Name: ${name} , Password: ${password}`);
    const NewUser = await AddUserModel.findOne({ name: name });

    if (!NewUser) {
      return res.status(404).json({ message: " Invalid account NO data " });
    }
    const isPasswordCorrect = await bcrypt.compare(password, NewUser.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Incorrect Password!" });
    } else {
      const token = jwt.sign(
        {
          name: NewUser.name,
          id: NewUser.id,
          isAdmin: NewUser.isAdmin,
        },
        "test"
      );
      res.status(200).json({ result: NewUser, token });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const home = async (req, res) => {
  try {
    res.status(200).send("Welcome to server using route ");
  } catch (error) {
    console.log(error);
  }
};

export {
  home,
  logIn,
 
};
