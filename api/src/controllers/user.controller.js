const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// const UserController = {
//   update: async (req, res) => {
//     const { firstName, lastName, password, email } = req.body;

//     if (email !== req.user.email) {
//       return res.status(400).send({ error: "Email ne peut pas être modifié" });
//     }

//     const userpw = await User.findOne({ email }).select("+password");

//     const result = await bcrypt.compare(password, userpw.password);

//     if (!result) {
//       return res.status(400).send({ error: "Invalid password" });
//     }

//     try {
//       const user = await User.findByIdAndUpdate(
//         req.user._id,
//         {
//           firstName,
//           lastName,
//         },
//         {
//           new: true,
//         }
//       );

//       const accessToken = jwt.sign(
//         {
//           _id: user._id,
//           email: user.email,
//           firstName: user.firstName,
//           lastName: user.lastName,
//         },
//         process.env.JWT_SECRET,
//         {
//           expiresIn: 86400,
//         }
//       );

//       res.send({ accessToken });
//     } catch (error) {
//       return res.status(400).send({ error: error.message });
//     }
//   },

//   updatePassword: async (req, res) => {
//     const { password, newPassword } = req.body;

//     const userpw = await User.findOne({ email: req.user.email }).select(
//       "+password"
//     );

//     const result = await bcrypt.compare(password, userpw.password);

//     if (!result) {
//       return res.status(400).send({ error: "Invalid password" });
//     }

//     const hash = await bcrypt.hash(newPassword, 10);

//     try {
//       const user = await User.findByIdAndUpdate(
//         req.user._id,
//         {
//           password: hash,
//         },
//         {
//           new: true,
//         }
//       );
//       res.send(user);
//     } catch (error) {
//       return res.status(400).send({ error: error.message });
//     }
//   },
// };

const UserController = {
  updateUser: async (req, res) => {
    const { firstName, lastName, password, newPassword, email } = req.body;

    // get firstName and lastName before update
    const user = await User.findById(req.user._id);

    const updatedFirstName = firstName || user.firstName;
    const updatedLastName = lastName || user.lastName;

    if (email !== req.user.email) {
      return res.status(400).send({ error: "Email ne peut pas être modifié" });
    }

    const userPassword = await User.findOne({ email }).select("+password");

    const result = await bcrypt.compare(password, userPassword.password);

    if (!result) {
      return res.status(400).send({ error: "Invalid password" });
    }

    if (newPassword) {
      const hash = await bcrypt.hash(newPassword, 10);

      try {
        const user = await User.findByIdAndUpdate(
          req.user._id,
          {
            firstName: updatedFirstName,
            lastName: updatedLastName,
            password: hash,
          },
          {
            new: true,
          }
        );

        const accessToken = jwt.sign(
          {
            _id: user._id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
          },
          process.env.JWT_SECRET,
          {
            expiresIn: 86400,
          }
        );

        res.send({ accessToken });
      } catch (error) {
        return res.status(400).send({ error: error.message });
      }
    } else {
      try {
        const user = await User.findByIdAndUpdate(
          req.user._id,
          {
            firstName: updatedFirstName,
            lastName: updatedLastName,
          },
          {
            new: true,
          }
        );

        const accessToken = jwt.sign(
          {
            _id: user._id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
          },
          process.env.JWT_SECRET,
          {
            expiresIn: 86400,
          }
        );

        res.send({ accessToken });
      } catch (error) {
        return res.status(400).send({ error: error.message });
      }
    }
  },
};

module.exports = UserController;
