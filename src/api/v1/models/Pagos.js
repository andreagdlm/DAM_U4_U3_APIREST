import * as mongoose from 'mongoose';

const pagosSchema = new mongoose.Schema({
  IdInstitutoOK: { type: String, required: true },
  IdNegocioOK: { type: String, required: true },
  IdPagoOK: { type: String, required: true },
  IdPagoBK: { type: String, required: true },
  IdOrdenOK: { type: String, required: true },
  MontoTotal: { type: Number, required: true },
  Observacion: { type: String },

  info_ad: [{
    IdEtiquetaOK: { type: String },
    IdEtiqueta: { type: String, required: true },
    Etiqueta: { type: String, required: true },
    Valor: { type: String, required: true },
    IdTipoSeccionOK: { type: String, required: true },
    Secuencia: { type: Number },
    detail_row: {
      Activo: { type: String, required: true },
      Borrado: { type: String, required: true },
      detail_row_reg: [{
        FechaReg: { type: Date, required: true },
        UsuarioReg: { type: String, required: true }
      }]
    }
  }],

  forma_pago: [{
    IdTipoMetodoOK: { type: String, required: true },
    Monto: { type: Number, required: true },
    IdTipoMonedaOK: { type: String, required: true },
    pago_tarjeta: {
      IdTipoTarjertaOK: { type: String },
      IdTipoRed: { type: String },
      Banco: { type: String },
      NombreTitular: { type: String },
      Numero: { type: String },
      FechaVencimiento: { type: String },
      CodigoCVV: { type: String }
    },
    datos_transaccion: {
      IdTransaccion: { type: String },
      CodigoAutoriza: { type: String },
      FechaReg: { type: Date, required: true }
    },
    estatus: [{
      IdTipoEstatusOK: { type: String, required: true },
      Actual: { type: String, required: true },
      Observacion: { type: String },
      detail_row: {
        Activo: { type: String, required: true },
        Borrado: { type: String, required: true },
        detail_row_reg: [{
          FechaReg: { type: Date, required: true },
          UsuarioReg: { type: String, required: true }
        }]
      }
    }]
  }],

  estatus: [{
    IdTipoEstatusOK: { type: String, required: true },
    Actual: { type: String, required: true },
    Observacion: { type: String },
    detail_row: {
      Activo: { type: String, required: true },
      Borrado: { type: String, required: true },
      detail_row_reg: [{
        FechaReg: { type: Date, required: true },
        UsuarioReg: { type: String, required: true }
      }]
    }
  }],

  factura: [{
    IdPersonaOK: { type: String, required: true },
    Nombre: { type: String, required: true },
    RFC: { type: String, required: true },
    correo: { type: String, required: true },
    Telefono: { type: String, required: true },
    IdTipoFacturaOK: { type: String, required: true },
    IdTipoPago: { type: String, required: true },
    domicilio: [{
      IdDomicilioOK: { type: String, required: true },
      CalleNumero: { type: String, required: true },
      CodPostal: { type: String, required: true },
      Pais: { type: String, required: true },
      Estado: { type: String, required: true },
      Municipio: { type: String, required: true },
      Localidad: { type: String, required: true },
      Colonia: { type: String, required: true }
    }],
    productos: [{
      IdProdServOK: { type: String, required: true },
      IdPresentaOK: { type: String, required: true },
      Cantidad: { type: Number, required: true },
      PrecioUnitario: { type: Number, required: true },
      descuentos: [{
        IdTipoDescuentoOK: { type: String, required: true },
        CodigoDescuento: { type: String, required: true },
        Monto: { type: Number, required: true }
      }]
    }]
  }]
});

// Exportar el modelo
export default mongoose.model(
    'pagos', 
    pagosSchema);
