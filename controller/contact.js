const Contact = require("../model/contact");

exports.getContact = async (req, res, next) => {
  const availableMessages = await Contact.find();

  return res
    .status(200)
    .json({ message: "successfully fetched", contact: availableMessages });
};

exports.postContact = async (req, res, next) => {
  const { name, email, message } = req.body;

  const contact = new Contact({
    name: name,
    email: email,
    message: message,
  });

  const availableEmail = await Contact.findOne({ email: email });

  if (availableEmail) {
    return res.status(400).json({ message: "This email already exist !" });
  }

  try {
    await contact.save();
    return res
      .status(201)
      .json({ message: "Successfully created !", contact: contact });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};
