import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const blogpostSchema = new Schema({
    title:  {
        type: String,
        required: true,
      },published: {
        type: Boolean,
        default: false,
      },
      author: {
        type: String,
        required: true,
      },
      content: String,
      tags: [String],
      createdAt: {
        type: Date,
        default: () => Date.now(),
        immutable: true,
      },
});

const Blogpost = model('Blogpost', blogpostSchema);

export default Blogpost;

//RESTREVIEW_NS=sample_restaurants