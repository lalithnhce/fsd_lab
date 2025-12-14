const Contact = require('../model/contactModel');

exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createContact = async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json(contact);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateContact = async (req, res) => {
  try {
    const {name, email, phone} = req.body;
    const updatedContact = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new:true
      }
    )
    if(!updatedContact) return res.status(404).json({error: "Contact to update not found!"});
    res.status(200).json(updatedContact);
  } catch (error) {
    console.error(error);
    res.status(500).json({message: "Internal server error!!"});
  }
}

exports.deleteContact = async(req, res) => {
  try {
    const deletedContact = await Contact.findByIdAndDelete(req.params.id);
    if (!deletedContact) return res.status(404).json("Contact Not found");
    res.status(200).json({message: "Deleted successfully"});
    
  } catch (error) {
    res.status(500).json({message:"Internal server error"});
  }
}