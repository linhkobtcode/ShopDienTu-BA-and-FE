import { Router } from 'express';
import { container } from 'tsyringe';
import { SliderController } from '../controllers/sliderController';

const slideRouter = Router();
const slideController = container.resolve(SliderController);
slideRouter.get('/get-all', slideController.getSlideAll.bind(slideController));

export default slideRouter;