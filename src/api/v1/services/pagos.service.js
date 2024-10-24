import Pagos from '../models/Pagos';
import boom from '@hapi/boom';

//GET PRODUCTS AND SERVICES LIST
export const getPagosList = async () => {
    let pagosList;
    try {
        pagosList = await Pagos.find();
          return(pagosList);
    } catch (error) {
      //res.status(500).json({ message: 'Error: ' + ficError });
      throw boom.internal(error);
    }
  };

//GET PRODUCT OR SERVICE BY ID
export const getPagosItem = async (id, keyType) => {
    let pagosItem;
   
    try {
      if (keyType === 'OK') {
        pagosItem = await Pagos.findOne({
        IdPagoOK: id,
        });
      } else if (keyType === 'BK') {
        pagosItem = await Pagos.findOne({
        IdPagoBK: id,
        });
      }
      return(pagosItem);
    } catch (error) {
      throw boom.internal(error);
    }
  };

// POST (ADD) Pagos
export const postPagosItem = async (paPagosItem) => {
  try {
  const newPagosItem = new Pagos(paPagosItem);
  return await newPagosItem.save();
  } catch (error) {
  throw error;
  }
};

// PUT
export const putPagoItem = async(id, newItem) => {
  try{
    return await Pagos.findOneAndUpdate(
      { IdPagoOK: id }, 
      newItem, 
      {new: true});
  }catch(error){
    throw boom.badImplementation(error);
  }
};

// DELETE
export const deletePagos = async (id) => {
  try{
    return await Pagos.findOneAndDelete({ IdPagoOK:id });
  }catch(error){
    console.error(error);
    throw boom.badImplementation(error);
  }
}
