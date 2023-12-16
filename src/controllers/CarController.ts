import { Request, Response } from "express";
import CarModel from "../database/Models/Car";

class CarController {

  async getAll(req: Request, res: Response): Promise<Response> {

    let cars = await CarModel.find();

    return res.json(cars);
  }

  
  async getById(req: Request, res: Response) {
    const { id } = req.params;
    try{
        let car = await CarModel.findById(id);
        res.status(200);
        return res.json(car);


    } catch (err){

        res.json({erro: err});

    }


  }

  async add(req: Request, res: Response) {

    try{
      const { marca, modelo, ano, quilometragem, tipoCambio, precoVenda } = 
      req.body;

      if(marca && modelo && ano && quilometragem && tipoCambio && precoVenda){
        let car = await CarModel.create(req.body);
        res.status(200);
        return res.json(car);

      }else{

        res.json({erro: 'bad request'});
        res.status(401);

      }

    } catch(err){

      res.json({err: err});
    }


  }

  async update(req: Request, res: Response) {
    const {id} = req.params;

    let car = await CarModel.findByIdAndUpdate(id, req.body);

    return res.json(car);

  }

  async delete(req: Request, res: Response) {
    const {id} = req.params;

    let car = await CarModel.findByIdAndDelete(id);

    return res.json(car);

  }

}

export default CarController;
