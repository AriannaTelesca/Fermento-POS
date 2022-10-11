const Tables = require('../models/modelTable');

const postTable = (req, res) => {

    //check if name is already used
    Tables.findOne({ name :  req.body.name }).then((table) => {
        if(table) {    
            return res.status(400).json({name : "name is already used"});    
        }else{
            //create new tavle
            const name = req.body.name;
            
            const newTable = new Tables({
                  name
              });
  
              newTable.save()
              .then(() => res.json('Table added'))
              .catch((err => res.status(400).json("Error" +err)))
          }
      })
  }

const getAllTables = (req, res) => {
    Tables.find()
    .then((result) => res.json(result))
    .catch((err => res.status(400).json('Error' +err)))
}

const deleteTable = (req, res) => {
    Tables.findByIdAndDelete({_id : req.params._id})
    .then(() => res.json('Table deleted'))
    .catch((err => res.status(400).json("Error" +err)))
}

module.exports = {
    postTable,
    getAllTables,
    deleteTable
}