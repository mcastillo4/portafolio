const portafolioRoute = require('express').Router();
const {v4: uuidv4} =require('uuid');
const portafolioModel = require('./../models/portafolio.model');




portafolioRoute.get('/', async(req, res) => {
    portafolioModel.allPortafolio()
    .then(data => {
        res.status(200).json({data});
    })
    .catch(error => {
        res.status(500).json({error});

    });
});


portafolioRoute.get('/usuario', async(req, res) => {
    portafolioModel.allUsuarios()
    .then(data => {
        res.status(200).json({data});
    })
    .catch(error => {
        res.status(500).json({error});

    });
});


// MOSTRAR TODO

portafolioRoute.get('/all/ciudad', async(req, res) => {
    portafolioModel.allCiudad()
    .then(data => {
        res.status(200).json({data});
    })
    .catch(error => {
        res.status(500).json({error});

    });
});


portafolioRoute.get('/all/comuna', async(req, res) => {
    portafolioModel.allComuna()
    .then(data => {
        res.status(200).json({data});
    })
    .catch(error => {
        res.status(500).json({error});

    });
});


portafolioRoute.get('/all/contrato', async(req, res) => {
    portafolioModel.allContrato()
    .then(data => {
        res.status(200).json({data});
    })
    .catch(error => {
        res.status(500).json({error});

    });
});


portafolioRoute.get('/all/detalle_servicio', async(req, res) => {
    portafolioModel.allDetalle_servicio()
    .then(data => {
        res.status(200).json({data});
    })
    .catch(error => {
        res.status(500).json({error});

    });
});


portafolioRoute.get('/all/detalle_usuario', async(req, res) => {
    portafolioModel.allDetalle_usuario()
    .then(data => {
        res.status(200).json({data});
    })
    .catch(error => {
        res.status(500).json({error});

    });
});


portafolioRoute.get('/all/direccion', async(req, res) => {
    portafolioModel.allDireccion()
    .then(data => {
        res.status(200).json({data});
    })
    .catch(error => {
        res.status(500).json({error});

    });
});




portafolioRoute.get('/all/empresa', async(req, res) => {
    portafolioModel.allEmpresa()
    .then(data => {
        res.status(200).json({data});
    })
    .catch(error => {
        res.status(500).json({error});

    });
});



portafolioRoute.get('/all/especialidad_profesional', async(req, res) => {
    portafolioModel.allEspecialidadProfesional()
    .then(data => {
        res.status(200).json({data});
    })
    .catch(error => {
        res.status(500).json({error});

    });
});


portafolioRoute.get('/all/estado', async(req, res) => {
    portafolioModel.allEstado()
    .then(data => {
        res.status(200).json({data});
    })
    .catch(error => {
        res.status(500).json({error});

    });
});


portafolioRoute.get('/all/item', async(req, res) => {
    portafolioModel.allItem()
    .then(data => {
        res.status(200).json({data});
    })
    .catch(error => {
        res.status(500).json({error});

    });
});




portafolioRoute.get('/all/mensualidad', async(req, res) => {
    portafolioModel.allMensualidad()
    .then(data => {
        res.status(200).json({data});
    })
    .catch(error => {
        res.status(500).json({error});

    });
});




portafolioRoute.get('/all/pais', async(req, res) => {
    portafolioModel.allPais()
    .then(data => {
        res.status(200).json({data});
    })
    .catch(error => {
        res.status(500).json({error});

    });
});



portafolioRoute.get('/all/region', async(req, res) => {
    portafolioModel.allRegion()
    .then(data => {
        res.status(200).json({data});
    })
    .catch(error => {
        res.status(500).json({error});

    });
});



portafolioRoute.get('/all/rol', async(req, res) => {
    portafolioModel.allRol()
    .then(data => {
        res.status(200).json({data});
    })
    .catch(error => {
        res.status(500).json({error});

    });
});



portafolioRoute.get('/all/rubro', async(req, res) => {
    portafolioModel.allRubro()
    .then(data => {
        res.status(200).json({data});
    })
    .catch(error => {
        res.status(500).json({error});

    });
});



portafolioRoute.get('/all/servicio', async(req, res) => {
    portafolioModel.allServicio()
    .then(data => {
        res.status(200).json({data});
    })
    .catch(error => {
        res.status(500).json({error});

    });
});




portafolioRoute.get('/all/tipo_servicio', async(req, res) => {
    portafolioModel.allTipoServicio()
    .then(data => {
        res.status(200).json({data});
    })
    .catch(error => {
        res.status(500).json({error});

    });
});

portafolioRoute.get('/all/usuario', async(req, res) => {
    portafolioModel.allUsuarios()
    .then(data => {
        res.status(200).json({data});
    })
    .catch(error => {
        res.status(500).json({error});

    });
});

//FIN MOSTRAR TODO

//OBTENER POR ID



portafolioRoute.get('/all/ciudad/:id_ciudad', async(req, res) => {
    const {id_ciudad: id_ciudad} = req.params;
    portafolioModel.getByIDCiudad(id_ciudad)
    .then(data => {
        if(data.length > 0 ){
        res.status(200).json({data: { ...data[0]}});

    }

    else{
        res.status(404).json({error: 'No se encuentra esta tarea'});
        }

    })

    .catch(error =>{
        res.status(500).json({error});
    });

});



portafolioRoute.get('/all/comuna/:id_comuna', async(req, res) => {
    const {id_comuna: id_comuna} = req.params;
    portafolioModel.getByIDComuna(id_comuna)
    .then(data => {
        if(data.length > 0 ){
        res.status(200).json({data: { ...data[0]}});

    }

    else{
        res.status(404).json({error: 'No se encuentra esta tarea'});
        }

    })

    .catch(error =>{
        res.status(500).json({error});
    });

});




portafolioRoute.get('/all/contrato/:id_contrato', async(req, res) => {
    const {id_contrato: id_contrato} = req.params;
    portafolioModel.getByIDContrato(id_contrato)
    .then(data => {
        if(data.length > 0 ){
        res.status(200).json({data: { ...data[0]}});

    }

    else{
        res.status(404).json({error: 'No se encuentra esta tarea'});
        }

    })

    .catch(error =>{
        res.status(500).json({error});
    });

});

portafolioRoute.get('/all/estado/:id_estado', async(req, res) => {
    const {id_estado: id_estado} = req.params;
    portafolioModel.getByIDEstado(id_estado)
    .then(data => {
        if(data.length > 0 ){
        res.status(200).json({data: { ...data[0]}});

    }

    else{
        res.status(404).json({error: 'No se encuentra esta tarea'});
        }

    })

    .catch(error =>{
        res.status(500).json({error});
    });

});



//FIN MOSTRAR POR ID








portafolioRoute.get('/:id', async(req, res) => {
    const {id: id} = req.params;
    portafolioModel.getByIDPortafolio(id)
    .then(data => {
        if(data.length >= 0 ){
        res.status(200).json({data: { ...data[0]}});

    }

    else{
        res.status(404).json({error: 'No se encuentra esta tarea'});
        }

    })

    .catch(error =>{
        res.status(500).json({error});
    });

});


//FIN OBTENER POR ID

//AGREGAR DATOS


portafolioRoute.post('/', async(req, res) => {
    const id = uuidv4();
    const {
        nombre,
    } = req.body; 

    portafolioModel.addPortafolio({
        id,
        nombre,
    })

    .then((rowCount, more) =>{
        res.status(200).json({
            data:{
                rowCount,
                more,
                id,
            },
        });
    })

    .catch(error => {
        res.status(500).json({error});
    });

});




portafolioRoute.post('/add/ciudad', async(req, res) => {
    const id_ciudad = uuidv4();
    const {
        nombre_ciudad,
    } = req.body; 

    portafolioModel.addCiudad({
        id_ciudad,
        nombre_ciudad,
    })

    .then((rowCount, more) =>{
        res.status(200).json({
            data:{
                rowCount,
                more,
                id_ciudad,
                
            },
        });
    })

    .catch(error => {
        res.status(500).json({error});
    });

});






portafolioRoute.post('/add/comuna', async(req, res) => {
    const id_comuna = uuidv4();
    const {
        nombre_comuna,
    } = req.body; 

    portafolioModel.addComuna({
        id_comuna,
        nombre_comuna,
    })

    .then((rowCount, more) =>{
        res.status(200).json({
            data:{
                rowCount,
                more,
                id_comuna,
                nombre_comuna,
                
            },
        });
    })

    .catch(error => {
        res.status(500).json({error});
    });

});



portafolioRoute.post('/add/contrato', async(req, res) => {
    const id_contrato = uuidv4();
    const id_estado = "5a34647c-3197-4344-a28b-fa8f59e81516";
    const {

        fecha_contrato,
        imagen,

    } = req.body; 

    portafolioModel.addContrato({
        id_contrato,
        id_estado,
        fecha_contrato,
        imagen
    })

    .then((rowCount, more) =>{
        res.status(200).json({
            data:{
                rowCount,
                more,
                id_contrato,
                id_estado,
                fecha_contrato,
                imagen
            },
        });
    })

    .catch(error => {
        res.status(500).json({error});
    });

});

















portafolioRoute.post('/add/estado', async(req, res) => {
    const id_estado = uuidv4();
    const {

    
        nombre_estado,
        observaciones_estado

    } = req.body; 

    portafolioModel.addEstado({
        
        id_estado,
        nombre_estado,
        observaciones_estado
    })

    .then((rowCount, more) =>{
        res.status(200).json({
            data:{
                rowCount,
                more,
                id_estado,
                nombre_estado,
                observaciones_estado
                
            },
        });
    })

    .catch(error => {
        res.status(500).json({error});
    });

});

















//FIN AGREGAR DATOS




//ACTUALIZAR DATOS TABLAS



portafolioRoute.put('/:id', async(req, res) => {
    const {id: id} = req.params;
    const {
        nombre,
    } = req.body; 

    portafolioModel.updatePortafolio({
        id,
        nombre,
    })

    .then((rowCount, more) =>{
        res.status(200).json({
            data:{
                rowCount,
                more,
                id,
            },
        });
    })

    .catch(error => {
        res.status(500).json({error});
    });

});


portafolioRoute.put('/ciudad/:id_ciudad', async(req, res) => {
    const {id_ciudad: id_ciudad} = req.params;
    const {
        nombre_ciudad,
    } = req.body; 

    portafolioModel.updateCiudad({
        id_ciudad,
        nombre_ciudad,
    })

    .then((rowCount, more) =>{
        res.status(200).json({
            data:{
                rowCount,
                more,
                id_ciudad,
                nombre_ciudad,
                
                
            },
        });
    })

    .catch(error => {
        res.status(500).json({error});
    });

});




portafolioRoute.put('/comuna/:id_comuna', async(req, res) => {
    const {id_comuna: id_comuna} = req.params;
    const {
        nombre_comuna,
    } = req.body; 

    portafolioModel.updateComuna({
        id_comuna,
        nombre_comuna,
    })

    .then((rowCount, more) =>{
        res.status(200).json({
            data:{
                rowCount,
                more,
                id_comuna,
                nombre_comuna,
                
                
            },
        });
    })

    .catch(error => {
        res.status(500).json({error});
    });

});








portafolioRoute.put('/contrato/:id_contrato', async(req, res) => {
    const {id_contrato: id_contrato} = req.params;
    const {
        id_estado,
    } = req.body; 

    portafolioModel.updateContrato({
        id_contrato,
        id_estado,
    })

    .then((rowCount, more) =>{
        res.status(200).json({
            data:{
                rowCount,
                more,
                id_contrato,
                id_estado,
                
                
            },
        });
    })

    .catch(error => {
        res.status(500).json({error});
    });

});








portafolioRoute.put('/estado/:id_estado', async(req, res) => {
    const {id_estado: id_estado} = req.params;
    const {
        observaciones_estado,
    } = req.body; 

    portafolioModel.updateEstado({
        id_estado,
        observaciones_estado,
    })

    .then((rowCount, more) =>{
        res.status(200).json({
            data:{
                rowCount,
                more,
                id_estado,
                observaciones_estado,
                
                
            },
        });
    })

    .catch(error => {
        res.status(500).json({error});
    });

});






//FIN ACTUALIZAR DATOS









portafolioRoute.put('/:id/completed', async(req, res) => {
    const {id: id} = req.params;
    portafolioModel.completePortafolio(id)
    .then((rowCount, more) => {
        res.status(200).json({
            data:{
                rowCount,
                more,
            },
        });
    })
    .catch(error => {
        res.status(500).json({error});

    });

});   




portafolioRoute.put('/:id/changeState', async(req, res) => {
    const {id: id} = req.params;
    const {state} = req.body;
    portafolioModel.changeStatePortafolio(id. state)
    .then((rowCount, more) => {
        res.status(200).json({
            data:{
                rowCount,
                more,
            },
        });
    })
    .catch(error => {
        res.status(500).json({error});

    });

});   




//ELIMINACION DE DATOS


portafolioRoute.delete('/:id', async(req, res) => {
    const {id: id} = req.params;
    portafolioModel.deletePortafolio(id)
    .then((rowCount, more) => {
        res.status(200).json({ rowCount, more });
    })
    .catch(error => {
        res.status(500).json({error});

    })

});



portafolioRoute.delete('/borrarCiudad/:id_ciudad', async(req, res) => {
    const {id_ciudad: id_ciudad} = req.params;
    portafolioModel.deleteCiudad(id_ciudad)
    .then((rowCount, more) => {
        res.status(200).json({ rowCount, more ,  });
    })
    .catch(error => {
        res.status(500).json({error});

    })

});



portafolioRoute.delete('/borrarComuna/:id_comuna', async(req, res) => {
    const {id_comuna: id_comuna} = req.params;
    portafolioModel.deleteComuna(id_comuna)
    .then((rowCount, more) => {
        res.status(200).json({ rowCount, more ,  });
    })
    .catch(error => {
        res.status(500).json({error});

    })

});




portafolioRoute.delete('/borrarContrato/:id_contrato', async(req, res) => {
    const {id_contrato: id_contrato} = req.params;
    portafolioModel.deleteContrato(id_contrato)
    .then((rowCount, more) => {
        res.status(200).json({ rowCount, more ,  });
    })
    .catch(error => {
        res.status(500).json({error});

    })

});





portafolioRoute.delete('/borrarEstado/:id_estado', async(req, res) => {
    const {id_estado: id_estado} = req.params;
    portafolioModel.deleteEstado(id_estado)
    .then((rowCount, more) => {
        res.status(200).json({ rowCount, more ,  });
    })
    .catch(error => {
        res.status(500).json({error});

    })

});




//FIN ELIMINACION DE DATOS





portafolioRoute.get('/usuarios', async(req, res) => {
    portafolioModel.allUsuarios()
    .then(data => {
        res.status(200).json({data});
    })
    .catch(error => {
        res.status(500).json({error});

    });
});


portafolioRoute.get('/rol', async(req, res) => {
    portafolioModel.allRol()
    .then(data => {
        res.status(200).json({data});
    })
    .catch(error => {
        res.status(500).json({error});

    });
});








module.exports = portafolioRoute;


