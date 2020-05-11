import { Router } from 'express';
import { IndexControllers } from '../controllers/index_controllers';

const index_router: Router = Router();
const indexControllers: IndexControllers = new IndexControllers();

index_router.get('/', indexControllers.index);

export default index_router;