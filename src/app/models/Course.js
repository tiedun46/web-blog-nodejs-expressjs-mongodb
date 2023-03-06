const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Course = new Schema({
  name: { type: String, required: true},
  desc: { type: String},
  image: { type: String, required: true},
  videoId: { type: String, required: true},
  level: { type: String},
  slug: { type: String, slug:["name", "videoId"]}
},{
  timestamps:true,
});

module.exports = mongoose.model('Course',Course)