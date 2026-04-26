import mongoose from 'mongoose'

const clinicSchema = new mongoose.Schema({
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
  phone: String,
  address: String,
  city: String,
  state: String,
  zipCode: String,
  licenseNumber: String,
  doctors: [
    {
      userId: mongoose.Schema.Types.ObjectId,
      specialty: String,
      licenseNumber: String,
    },
  ],
  patients: [mongoose.Schema.Types.ObjectId],
  servicesOffered: [String],
  operatingHours: {
    monday: String,
    tuesday: String,
    wednesday: String,
    thursday: String,
    friday: String,
    saturday: String,
    sunday: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
})

export const Clinic = mongoose.models.Clinic || mongoose.model('Clinic', clinicSchema)
