import { Router } from 'express';
import url from './url';
const router = Router();

router.use('/url' , url);

export default router ;