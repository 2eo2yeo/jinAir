/********************************
 *      @정서령
 ********************************/

import express from 'express';
import * as controller from '../controller/uploadController.js';

const router = express.Router();

router
    .post('/', controller.fileUpload)
    .delete('/', controller.fileDelte)

export default router;