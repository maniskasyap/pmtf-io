import express from 'express';
import team from './team';
import auth from './auth';

const router = express.Router();

router.use('/team', team);
router.use('/auth', auth);

export default router;
