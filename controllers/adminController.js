var adminHelper = require("../helpers/adminHelper");

const adminCredential = {
    name: "STORY CLUB ADMIN PANEL",
    email: "admin@gmail.com",
    password: "storyclub123",
};

module.exports = {
    //admin login 

    postLogin: async (req, res) => {
        try {
          console.log("Received login request:", req.body);
    
          if (
            req.body.email == adminCredential.email &&
            req.body.password == adminCredential.password
          ) {
            res.status(200).json({ message: "success" });
          } else {
            res.status(401).json({ message: "invalid password/email" });
          }
    
        } catch (error) {
          console.error("Error during login:", error);
          res.status(500).json({ message: "Internal server error" });
        }
      },

      // to add categories to database
      
      postCategory: async (req, res) => {
        console.log("welcome to add category!!");
        try {
          const categoryy = req.body;
          adminHelper.addCategory(categoryy).then(() => {
            res.status(200).json({ message: "successfully added" });
          });
          // if already exist ----------->>
        } catch (error) {
          res.status(500).json({ message: "internal server error" });
        }
      },
}