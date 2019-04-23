// defining a mongoose schema
// including the module
var mongoose = require('mongoose');
var bcrypt=require('bcrypt-nodejs');
// declare schema object.
var Schema = mongoose.Schema;


//Create user schema and validation
var userSchema = new Schema({

	username  			: {type:String,default:'',required:true},
	email	  			  : {type:String,default:'',required:true,unique:true},
	password			  : {type:String,default:''},
  joined          : {type:Date}
});

//Before saving encrypt password
userSchema.pre('save', function(next) {
  var user=this;
	// only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next();
  bcrypt.hash(user.password, null, null, function(err, hash) {
    // Store hash in password DB.
    if(err)
    	return next(err);
    user.password=hash;
  	next();
  });
});



//Compare password by decryption
userSchema.methods.comparePassword =  function(password) {
	bcrypt.hash(password, null, null, function(err, hash) {
		// Store hash in password DB.
		if(err)
			return err;
		console.log(hash);
	});
	console.log(this.password);
    return bcrypt.compareSync(password,this.password);
};

//Export model
module.exports = mongoose.model('User',userSchema);
