import express from 'express';
import AppController from '../controllers/AppController';

const router = express.Router()

router.get('/', AppController.getHomepage);

export default router;
