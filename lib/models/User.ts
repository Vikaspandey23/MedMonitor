import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['elderly', 'caregiver', 'clinic'],
    default: 'elderly',
  },
  phone: String,
  dateOfBirth: Date,
  medicalHistory: [String],
  medications: [
    {
      name: String,
      dosage: String,
      frequency: String,
      prescribedDate: Date,
      endDate: Date,
    },
  ],
  emergencyContacts: [
    {
      name: String,
      phone: String,
      relationship: String,
    },
  ],
  familyMembers: [
    {
      userId: mongoose.Schema.Types.ObjectId,
      relationship: String,
      accessLevel: {
        type: String,
        enum: ['view', 'edit', 'full'],
        default: 'view',
      },
    },
  ],
  clinicId: mongoose.Schema.Types.ObjectId,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
})

export const User = mongoose.models.User || mongoose.model('User', userSchema)
