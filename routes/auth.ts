import express from 'express';

import { createNewMember, getAllMembers, getMemberById } from '../controllers';

const router = express.Router();

router.post('/new', createNewMember);
router.get('/getMemberAll', getAllMembers);
router.get('/getMember/:userid', getMemberById);

export default router;
