import { Router } from 'express';
import config from '../../../config/config';
//Import Routes
import pagosRoutes from './pagos.routes';
//Import ordersRoutes from './orders.routes';
const routerAPI = (app) => {
  const router = Router();
  const api = config.API_URL;
  app.use(api, router);
  // Routes
  router.use('/pagos', pagosRoutes);
  //router.use('/orders', ordersRoutes);
  // Return Router
  return router;
};
module.exports = routerAPI;