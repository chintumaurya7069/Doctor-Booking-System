import express from 'express'
import { addDoctor, loginAdmin } from '../controllers/admin.js'
import upload from '../middlewares/multer.js'
import authAdmin from '../middlewares/authAdmin.js'

const admin = express.Router()

admin.post('/add-doctor',authAdmin,upload.single('image'), addDoctor)
admin.post('/login', loginAdmin)


export default admin