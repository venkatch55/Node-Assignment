var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var employeeSchema = new Schema({
    // _id : mongoose.SchemaTypes.ObjectId,
    firstName : String,
    lastName : String,
    email : String,
    age : Number,
    gender : String,
    mobile: Number,
    company: String,
    address: String
})

employeeSchema.methods = {
    saveEmp : function (req,res){
      this.save().then((empObj) => {
       if(empObj) {
           res.status(200).send({message:'Success'});
       }
      }).catch((empErr) => {
         res.status(500).send({message: 'Failed'});
      });
    }
}

employeeSchema.statics = {
    getAllEmps : function(req,res) {
        this.find({}).then((allEmps) => {
            res.status(200).send(allEmps);
            
        }).catch((empErr) => {
           res.status(500).send({message: 'Failed'});
        });
    },

    findEmp : function(req,res) {
        let _id = req.params.id;
        this.findOne({_id: mongoose.Types.ObjectId(_id)}).then((empObj) => {
            res.status(200).send(empObj);
        }).catch((empErr) => {
            
            res.status(500).send({message: 'Failed'});
        });
    },
    
    updateEmp: function(req,res) {
        let _id = req.params.id;
        let empObj = req.body;
        delete empObj._id;
        this.findOneAndUpdate({_id: mongoose.Types.ObjectId(_id)},{$set: empObj},{new:true}).then((newEmpObj) => {
            
            res.status(200).send({message:'Success'});
        }).catch((empErr) => {
            res.status(500).send({message: 'Failed'});
        });
    },

    deleteEmp: function(req,res) {
       let _id = req.params.id;
       
       this.deleteOne({_id: mongoose.Types.ObjectId(_id)}).then((delStatus) => {
        if(delStatus.n === 1) {
          res.status(200).send({message: 'Success'});
        }
       }).catch((empErr) => {
        res.status(500).send({message: 'Failed'});
       });
    }
}


module.exports.employee = mongoose.model('Employee',employeeSchema);