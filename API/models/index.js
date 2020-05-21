// Accounts' Schemas
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uuidv4 = require('uuid/v4');

const AccountSchema = new Schema (
{
	username : String,
	password : String,
	email : {
		type : String,
		default : 'exmaple@email.com'
	},
	createdAt : {
		type : Date,
		default : Date.now
	},
	token : {
		type : String,
		default : uuidv4()
	}
});

// populate
const ThreadSchema = new Schema(
	{
		creator : String,
		title: String,
		createdAt : {
			type : Date,
			default : Date.now
		},
		messages : [{type: Schema.Types.ObjectId, ref: 'Message' }],
	}
);

const MessageSchema = new Schema(
	{
		creator : String,		
		message : String,
		threadid : String,
		createdAt : {
			type : Date,
			default : Date.now
		},

	}
);

module.exports = {
	Account : mongoose.model('Account', AccountSchema),
	Message : mongoose.model('Message', MessageSchema),
	Thread : mongoose.model('Thread', ThreadSchema),
};