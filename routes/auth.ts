import express from 'express';

import {
  createNewMember,
  getAllMembers,
  getMemberById,
  updatePassword,
} from '../controllers';

const router = express.Router();

router.post('/new', createNewMember);
router.get('/getMemberAll', getAllMembers);
router.get('/getMember/:userid', getMemberById);
router.post('/updatePassword', updatePassword);

export default router;
