import express from 'express';
import StudentsController from '../controllers/StudentsController';

const studentRouter = express.Router()

studentRouter.get('/', StudentsController.getAllStudents);
studentRouter.get('/:major', StudentsController.getAllStudentsByMajor);

export default studentRouter
