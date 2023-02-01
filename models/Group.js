import mongoose from 'mongoose';
import { isEmail } from 'validator';

// var validateEmail = function ( email ) {
//   var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//   return re.test( email );
// };

const GroupSchema = new mongoose.Schema( {
  groupname: {
    type: String,
    lowercase: true,
    required: true,
    pattern: [ 'a-z', '0-9', '!@#$%^&?*-+_.' ]
    // pattern: '([a-z0-9][!@#$%^&?*-+_.])'
  },
  email: {
    type: String,
    lowercase: true,
    required: true,
    // validate: [ validateEmail, 'Please fill a valid email address' ],
    validate: [ isEmail, 'invalid email' ],
    match: [ /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address' ]
  },
  mobile: Number,
  profile: String,
  avatarimage: String

} );

// module.exports = mongoose.model( "Group", GroupSchema );

const Group = mongoose.model( "Group", GroupSchema );
module.exports = Group;
