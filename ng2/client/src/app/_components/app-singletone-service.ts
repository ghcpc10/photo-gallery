import { Pin } from '../_models/pin';




export class AppSingletonService {
  allPins: Pin[];
  static instance:AppSingletonService;
  static isCreating:Boolean = false;

  constructor() {
    if (!AppSingletonService.isCreating) {
      throw new Error("You can't call new in Singleton instances! Call SingletonService.getInstance() instead.");
    }
  }

  static getInstance() {
    if (AppSingletonService.instance === null) {
      AppSingletonService.isCreating = true;
      AppSingletonService.instance = new AppSingletonService();
      AppSingletonService.isCreating = false;
    }

    return AppSingletonService.instance;
  }

  setAllPins(allPins:Pin[]) {
    this.allPins = allPins;
  }

  getAllPins() {
    return this.allPins;
  }
}