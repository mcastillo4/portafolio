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

portafolioRoute.get('/all/detalleservicio/:id_detalle_servicio', async(req, res) => {
    const {id_detalle_servicio: id_detalle_servicio} = req.params;
    portafolioModel.getByIDDetalleServicio(id_detalle_servicio)
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


portafolioRoute.get('/all/detalleusuario/:id_detalle_usuario', async(req, res) => {
    const {id_detalle_usuario: id_detalle_usuario} = req.params;
    portafolioModel.getByIDDetalle_usuario(id_detalle_usuario)
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



portafolioRoute.get('/all/direccion/:id_direccion', async(req, res) => {
    const {id_direccion: id_direccion} = req.params;
    portafolioModel.getByIDDireccion(id_direccion)
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



portafolioRoute.get('/all/empresa/:id_empresa', async(req, res) => {
    const {id_empresa: id_empresa} = req.params;
    portafolioModel.getByIDEmpresa(id_empresa)
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



portafolioRoute.get('/all/especialidadprofesional/:id_especialidad_profesional', async(req, res) => {
    const {id_especialidad_profesional: id_especialidad_profesional} = req.params;
    portafolioModel.getByIDEspecialidadProfesional(id_especialidad_profesional)
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





portafolioRoute.get('/all/item/:id_item', async(req, res) => {
    const {id_item: id_item} = req.params;
    portafolioModel.getByIDItem(id_item)
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



portafolioRoute.get('/all/mensualidad/:id_mensualidad', async(req, res) => {
    const {id_mensualidad: id_mensualidad} = req.params;
    portafolioModel.getByIDMensualidad(id_mensualidad)
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





portafolioRoute.get('/all/pais/:id_pais', async(req, res) => {
    const {id_pais: id_pais} = req.params;
    portafolioModel.getByIDPais(id_pais)
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




portafolioRoute.get('/all/region/:id_region', async(req, res) => {
    const {id_region: id_region} = req.params;
    portafolioModel.getByIDRegion(id_region)
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


portafolioRoute.get('/all/rol/:id_rol', async(req, res) => {
    const {id_rol: id_rol} = req.params;
    portafolioModel.getByIDRol(id_rol)
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





portafolioRoute.get('/all/rubro/:id_rubro', async(req, res) => {
    const {id_rubro: id_rubro} = req.params;
    portafolioModel.getByIDRubro(id_rubro)
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



portafolioRoute.get('/all/servicio/:id_servicio', async(req, res) => {
    const {id_servicio: id_servicio} = req.params;
    portafolioModel.getByIDServicio(id_servicio)
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




portafolioRoute.get('/all/tiposervicio/:id_tipo_servicio', async(req, res) => {
    const {id_tipo_servicio: id_tipo_servicio} = req.params;
    portafolioModel.getByIDTipoServicio(id_tipo_servicio)
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


portafolioRoute.get('/all/usuario/:id_usuario', async(req, res) => {
    const {id_usuario: id_usuario} = req.params;
    portafolioModel.getByIDUsuario(id_usuario)
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


//DETALLESERVICIO


portafolioRoute.post('/add/detalle-servicio', async(req, res) => {
    const id_asesoria = uuidv4();
    const extra = "No";


    const {

        detalle_asesoria,
        fecha,
        profesional,
        tema,
        ubicacion,
        duracion,
        id_tipo_servicio,
        id_servicio,





    } = req.body; 

    portafolioModel.addDetalleServicio({
        id_asesoria,
        extra,
        detalle_asesoria,
        fecha,
        profesional,
        tema,
        ubicacion,
        duracion,
        id_tipo_servicio,
        id_servicio,

    })

    .then((rowCount, more) =>{
        res.status(200).json({
            data:{
                rowCount,
                more,
                id_asesoria,
                extra,
                detalle_asesoria,
                fecha,
                profesional,
                tema,
                ubicacion,
                duracion,
                id_tipo_servicio,
                id_servicio,
            },
        });
    })

    .catch(error => {
        res.status(500).json({error});
    });

});









//DETALLEUSUARIO

portafolioRoute.post('/add/detalle-usuario', async(req, res) => {
    const id_detalle_usuario = uuidv4();

    const {

        id_usuario,
        id_empresa,


    } = req.body; 

    portafolioModel.addDetalle_usuario({
        id_detalle_usuario,
        id_usuario,
        id_empresa,

    })

    .then((rowCount, more) =>{
        res.status(200).json({
            data:{
                rowCount,
                more,
                id_detalle_usuario,
                id_usuario,
                id_empresa,
            },
        });
    })

    .catch(error => {
        res.status(500).json({error});
    });

});






//DIRECCION

portafolioRoute.post('/add/direccion', async(req, res) => {
    const id_direccion = uuidv4();
    const {
    
        //SE AGREGAN LOS CAMPOS QUE DEBEMOS MANDAR POR BODY
        calle,
        numero,
        id_comuna,
        id_pais,
        id_ciudad,
        id_region,
        observaciones
        

    } = req.body; 

    portafolioModel.addDireccion({
        id_direccion,
        calle,
        numero,
        id_comuna,
        id_pais,
        id_ciudad,
        id_region,
        observaciones
    

    })

    .then((rowCount, more) =>{
        res.status(200).json({
            data:{
                rowCount,
                more,
                id_direccion,
                calle,
                numero,
                id_comuna,
                id_pais,
                id_ciudad,
                id_region,
                observaciones
            
            },
        });
    })

    .catch(error => {
        res.status(500).json({error});
    });

});










//EMPRESA

portafolioRoute.post('/add/empresa', async(req, res) => {
    const id_empresa = uuidv4();
    const {
    
        //SE AGREGAN LOS CAMPOS QUE DEBEMOS MANDAR POR BODY
        nombre_empresa,
        rut_empresa,
        id_rubro,
        id_contrato,
        id_servicio,
        id_detalle_usuario,
        

    } = req.body; 

    portafolioModel.addEmpresa({
        id_empresa,
        nombre_empresa,
        rut_empresa,
        id_rubro,
        id_contrato,
        id_servicio,
        id_detalle_usuario,
    

    })

    .then((rowCount, more) =>{
        res.status(200).json({
            data:{
                rowCount,
                more,
                id_empresa,
                nombre_empresa,
                rut_empresa,
                id_rubro,
                id_contrato,
                id_servicio,
                id_detalle_usuario,
            
            },
        });
    })

    .catch(error => {
        res.status(500).json({error});
    });

});



//ESPECIALIDAD PROFESIONAL
//ESTADO
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

//ITEM


portafolioRoute.post('/add/item', async(req, res) => {
    const id_item = uuidv4();
    const {
    
        //SE AGREGAN LOS CAMPOS QUE DEBEMOS MANDAR POR BODY
        nombre_item,
        descripcion_item,
        id_estado,
        fecha_agregado,
        id_empresa,

        

    } = req.body; 

    portafolioModel.addItem({
        id_item,
        nombre_item,
        descripcion_item,
        id_estado,
        fecha_agregado,
        id_empresa,

    })

    .then((rowCount, more) =>{
        res.status(200).json({
            data:{
                rowCount,
                more,
                id_item,
                nombre_item,
                descripcion_item,
                id_estado,
                fecha_agregado,
                id_empresa,
            },
        });
    })

    .catch(error => {
        res.status(500).json({error});
    });

});








//MENSUALIDAD




portafolioRoute.post('/add/mensualidad', async(req, res) => {
    const id_mensualidad = uuidv4();
    const {
    
        //SE AGREGAN LOS CAMPOS QUE DEBEMOS MANDAR POR BODY
        id_estado,
        observaciones


        

    } = req.body; 

    portafolioModel.addMensualidad({
        id_mensualidad,
        id_estado,
        observaciones
    })

    .then((rowCount, more) =>{
        res.status(200).json({
            data:{
                rowCount,
                more,
                id_mensualidad,
                id_estado,
                observaciones
            },
        });
    })

    .catch(error => {
        res.status(500).json({error});
    });

});









//PAIS


portafolioRoute.post('/add/pais', async(req, res) => {
    const id_pais = uuidv4();
    const {
    
        //SE AGREGAN LOS CAMPOS QUE DEBEMOS MANDAR POR BODY
        nombre_pais,



        

    } = req.body; 

    portafolioModel.addPais({
        id_pais,
        nombre_pais,

    })

    .then((rowCount, more) =>{
        res.status(200).json({
            data:{
                rowCount,
                more,
                id_pais,
                nombre_pais,
            },
        });
    })

    .catch(error => {
        res.status(500).json({error});
    });

});









//REGION


portafolioRoute.post('/add/region', async(req, res) => {
    const id_region = uuidv4();
    const {
    
        //SE AGREGAN LOS CAMPOS QUE DEBEMOS MANDAR POR BODY
        nombre_region,



        

    } = req.body; 

    portafolioModel.addRegion({
        id_region,
        nombre_region,

    })

    .then((rowCount, more) =>{
        res.status(200).json({
            data:{
                rowCount,
                more,
                id_region,
                nombre_region,
            },
        });
    })

    .catch(error => {
        res.status(500).json({error});
    });

});




//ROL



portafolioRoute.post('/add/rol', async(req, res) => {
    const id_rol= uuidv4();
    const {
    
        //SE AGREGAN LOS CAMPOS QUE DEBEMOS MANDAR POR BODY
        nombre_rol,
        detalle_rol



        

    } = req.body; 

    portafolioModel.addRol({
        id_rol,
        nombre_rol,
        detalle_rol

    })

    .then((rowCount, more) =>{
        res.status(200).json({
            data:{
                rowCount,
                more,
                id_rol,
                nombre_rol,
                detalle_rol
            },
        });
    })

    .catch(error => {
        res.status(500).json({error});
    });

});




//RUBRO



portafolioRoute.post('/add/rubro', async(req, res) => {
    const id_rubro= uuidv4();
    const {
    
        //SE AGREGAN LOS CAMPOS QUE DEBEMOS MANDAR POR BODY
        nombre_rubro,
        descripcion_rubro




    } = req.body; 

    portafolioModel.addRubro({
        id_rubro,
        nombre_rubro,
        descripcion_rubro

    })

    .then((rowCount, more) =>{
        res.status(200).json({
            data:{
                rowCount,
                more,
                id_rubro,
                nombre_rubro,
                descripcion_rubro
            },
        });
    })

    .catch(error => {
        res.status(500).json({error});
    });

});





//SERVICIO




portafolioRoute.post('/add/servicio', async(req, res) => {
    const id_servicio= uuidv4();
    const {
    
        //SE AGREGAN LOS CAMPOS QUE DEBEMOS MANDAR POR BODY
        id_mensualidad,
        id_empresa




    } = req.body; 

    portafolioModel.addServicio({
        id_servicio,
        id_mensualidad,
        id_empresa

    })

    .then((rowCount, more) =>{
        res.status(200).json({
            data:{
                rowCount,
                more,
                id_servicio,
                id_mensualidad,
                id_empresa
            },
        });
    })

    .catch(error => {
        res.status(500).json({error});
    });

});











//TIPOSERVICIO



portafolioRoute.post('/add/tipo-servicio', async(req, res) => {
    const id_tipo_servicio= uuidv4();
    const {
    
        //SE AGREGAN LOS CAMPOS QUE DEBEMOS MANDAR POR BODY
        nombre_tipo_servicio,
        detalle_tipo_servicio




    } = req.body; 

    portafolioModel.addTipoServicio({
        id_tipo_servicio,
        nombre_tipo_servicio,
        detalle_tipo_servicio

    })

    .then((rowCount, more) =>{
        res.status(200).json({
            data:{
                rowCount,
                more,
                id_tipo_servicio,
                nombre_tipo_servicio,
                detalle_tipo_servicio
            },
        });
    })

    .catch(error => {
        res.status(500).json({error});
    });

});











//USUARIO




portafolioRoute.post('/add/usuario', async(req, res) => {
    const id_usuario = uuidv4();
    const id_estado_usuario = "ACTIVO";
    const {
    
        //SE AGREGAN LOS CAMPOS QUE DEBEMOS MANDAR POR BODY
        nombre,
        apellido_p,
        apellido_m,
        fecha_nacimiento,
        id_estado,
        correo,
        telefono,
        contrasena,
        id_direccion,
        rut_usuario,
        id_especialidad,
        id_rol,
        imagen




    } = req.body; 

    portafolioModel.addTipoServicio({
        id_usuario,
        nombre,
        apellido_p,
        apellido_m,
        fecha_nacimiento,
        id_estado,
        correo,
        telefono,
        contrasena,
        id_direccion,
        rut_usuario,
        id_especialidad,
        id_rol,
        id_estado_usuario,
        imagen

    })

    .then((rowCount, more) =>{
        res.status(200).json({
            data:{
                rowCount,
                more,
                id_usuario,
                nombre,
                apellido_p,
                apellido_m,
                fecha_nacimiento,
                id_estado,
                correo,
                telefono,
                contrasena,
                id_direccion,
                rut_usuario,
                id_especialidad,
                id_rol,
                id_estado_usuario,
                imagen
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


