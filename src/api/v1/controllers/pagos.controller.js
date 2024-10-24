import Pagos from '../models/Pagos';
import * as PagosServices from '../services/pagos.service';
import boom from '@hapi/boom';

//API GET
//----------------------------------------
//Todos los Pagos.
export const getPagosList = async (req, res, next) => {
    try{
      const pagosList = await PagosServices.getPagosList();
      if (!pagosList) {
        throw boom.notFound('No se encontraron pagos registrados.');
      } else if (pagosList) {
        res.status(200).json(pagosList);
      } 

      } catch(error) {
        next(error);
      }
    };

//Solo un Pago.
export const getPagosItem = async (req, res, next) => {
  try {
    //Obtener parametro id mediante la
    //desestructuracion de objetos
    const { id } = req.params;
    //Se obtiene parametro de la forma
    //clase/objeto.
    //const idProdServ = req.params.id;
  const keyType = req.query.keyType || 'OK';
  const pagosItem = await PagosServices.getPagosItem(id, keyType);
  if (!pagosItem) {
    throw boom.notFound('No se encontraron pagos registrados.');
  } else if (pagosItem) {
    res.status(200).json(pagosItem);
  }
}catch(error){
  next(error);
}
};

//API POST (ADD) Pagos
export const postPagosItem = async (req, res, next) => {
  try {
    const paPagosItem = req.body;
    const newPagosItem = await PagosServices.postPagosItem(paPagosItem);
    if (!newPagosItem) {
      throw boom.badRequest('No se pudo crear el pago.');
    } else if (newPagosItem) {
      res.status(201).json(newPagosItem);
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};

//API PUT
export const putPagosItem = async (req, res, next) => {
  try{
    //SE EXTRAE EL ID DEL PAGO DE LOS PARAMETROS DE LA SOLICITUD (REQ.PARAMS)
    const { id } = req.params;
    console.log('ID recibido:', id);
    //SE OBTIENE EL OBJETO DEL CUERPO DE LA SOLICITUD (PAGOITEM) QUE CONTIENE LOS DATOS A ACTUALIZAR
    const pagoItem = req.body;
    console.log('Datos recibidos:', pagoItem);
    //SE INVOCA EL SERVICIO PARA ACTUALIZAR EL PAGO CON EL ID Y LOS DATOS RECIBIDOS
    const updatedPagoItem = await PagosServices.putPagoItem(id, pagoItem);
    //SI LA ACTUALIZACION NO FUE EXITOSA, SE LANZA UN ERROR HTTP 400(BAD REQUEST)
    if(!updatedPagoItem){
      throw boom.badRequest('No se pudo actualizar el pago.')
    }
    //SI LA ACTUALIZACION FUE EXITOSA, SE RESPONDE CON UN CODIGO 200(OK) Y EL OBJETO FUE ACTUALIZADO EN FORMATO JSON
    else if(updatedPagoItem){
      res.status(200).json(updatedPagoItem);
    }
  }catch(error){
    //EN CASO DE UN ERROR, SE PASA EL ERROR AL SIGUIENTE MIDDLEWARE PARA QUE LO MANEJE
    console.error(error);
    next(error);
  }
};

//API DELETE
export const deletePagosItem = async (req, res, next) => {
  try{
    //SE EXTRAE EL ID DEL PAGO A ELIMINAR DE LOS PARAMETROS DE LA SOLICITUD(REQ.PARAMS)
    const { id } = req.params;
    //SE INVOCA EL SERVICIO PARA ELIMINAR EL PAGO CON EL ID PROPORCIONADO
    const deletedPagoItem = await PagosServices.deletePagos(id);
    //SI LA ELIMINACION NO FUE EXITOSA, SE LANZA UN ERROR HTTP 400(BAD REQUEST)
    if(!deletedPagoItem) {
      throw boom.badRequest('No se pudo eliminar el pago.');
    }
    //SI LA ELIMINACION FUE EXITOSA, SE RESPONDE CON UN CODIGO 200(OK)
    else if(deletedPagoItem) {
      res.status(200).json(deletedPagoItem);
    }
  }catch(error){
    next(error);
  }
};