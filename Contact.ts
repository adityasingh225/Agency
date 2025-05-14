import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address'],
  },
  phone: {
    type: String,
    required: false,
  },
  service: {
    type: String,
    required: [true, 'Service selection is required'],
    enum: ['web-development', 'ui-ux-design', 'digital-marketing', 'other'],
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Contact || mongoose.model('Contact', contactSchema); 