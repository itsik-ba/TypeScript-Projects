import UserModel from "./playersModel";
const jwt: any = require("jwt-simple");
const secret: string | undefined = process.env.JWT_SECRET;
// import bcrypt from "bcryptjs";
// const salt = bcrypt.genSaltSync(10);

export const addNewPlayer = async (req: any, res: any) => {
  try {
    const { name, email, password } = req.body;
    // const hash = bcrypt.hashSync(password, salt);
    const playerRegister = await UserModel.create({

      // name, email, password: hash
    })
    console.log(playerRegister)
    res.status(201).send({ ok: true })

  } catch (error) {
    if ((error as { code: number }).code === 11000) {
      res.status(409).send({ ok: false, error: `user already exists` });
    }
    console.error(error)
  }
}

export const mainPage = async (req: any, res: any) => {
   try {
    res.send({ok:true})
   } catch (error) {
     console.error(error)
   }
   

}

// export const playerLogin = async (req: any, res: any) => {
//   try {
//     let { email, password } = req.body;
//     password = bcrypt.hashSync(password, salt);
//     const playerLog = await UserModel.findOne({ email, password })
//     if (!playerLog) {
//       res.status(401).send({ ok: false })
//     } else {
//       const token = jwt.encode(playerLog._id, secret)

//       console.log(token)
//       res.cookie(`${email}`, token, {
//         maxAge: 9000000, httpOnly: true
//       })
//       res.status(200).send({ ok: true })
//     }

//   } catch (error) {
//     console.error(error)
//   }
// }