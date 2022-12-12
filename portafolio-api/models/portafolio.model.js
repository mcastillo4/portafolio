const execQuery = require('./../helpers/execQuery');
const  TYPES = require('tedious').TYPES;

const addPortafolio = (portafolioData) => {
    const {
        id,
        nombre,
    } = portafolioData;


    // EN ESTE PUNTO ES IMPORTANTE HACER LA QUERY A LA TABLA CORRESPONDIENTE Y LOS VALORES CORRESPONDIENTES y tipos de datos.
    const query = ` INSERT INTO [dbo].[test] (id, nombre)
                    VALUES (@id,  @nombre)
                    
                    `;
                    //FIN DE LA QUERY
                    const parameterers = [
                        {name: 'id', type: TYPES.UniqueIdentifier, value: id},
                        {name: 'nombre', type: TYPES.VarChar, value: nombre},

                    ];
                    return execQuery.execWritedCommand(query, parameterers);
};



const updatePortafolio = (portafolioData) => {
    const {
        id,
        nombre,
    } = portafolioData;


    // EN ESTE PUNTO ES IMPORTANTE HACER LA QUERY A LA TABLA CORRESPONDIENTE Y LOS VALORES CORRESPONDIENTES
    const query = ` UPDATE[dbo].[test] 
                    SET nombre=@nombre
                    WHERE id = @id         
                    `;
                    //FIN DE LA QUERY
                    const parameterers = [
                        {name: 'id', type: TYPES.UniqueIdentifier, value: id},
                        {name: 'nombre', type: TYPES.VarChar, value: nombre},

                    ];
                    return execQuery.execWritedCommand(query, parameterers);
};


const deletePortafolio = (id) => {
    const query =  `DELETE FROM [dbo].[test]
                    WHERE id = @id        
                    `;
                    //FIN DE LA QUERY

                    const parameterers = [
                        {name: 'id', type: TYPES.UniqueIdentifier, value: id},
                    ];

                    return execQuery.execWritedCommand(query, parameterers);
                    
};



const allPortafolio = () => {
    const query =` SELECT * FROM [dbo].[test]     
                    `;
                     return execQuery.execReadCommand(query);
};




const getByIDPortafolio = (id) => {
    const query =` SELECT * FROM [dbo].[test]
                    WHERE id = @id     
                    `;
                    //FIN DE LA QUERY

                    const parameterers = [
                        {name: 'id', type: TYPES.UniqueIdentifier, value: id},
                    ];


                     return execQuery.execReadCommand(query, parameterers);
};


//CAMBIAR ESTADO A COMPLETADO
const completePortafolio = (id) => {
    const query = ` UPDATE[dbo].[test] 
                    SET estado = 1
                    WHERE id = @id         
                    `;
                    //FIN DE LA QUERY
                    const parameterers = [
                        {name: 'id', type: TYPES.UniqueIdentifier, value: id},

                    ];

                    return execQuery.execWritedCommand(query, parameterers);
};

//CAMBIAR ESTADO
const changeStatePortafolio = (id , state) => {
    const query = ` UPDATE[dbo].[test] 
                    SET estado = @estado
                    WHERE id = @id         
                    `;
                    //FIN DE LA QUERY
                    const parameterers = [
                        {name: 'id', type: TYPES.UniqueIdentifier, value: id},
                        {name: 'estado', type: TYPES.VarChar, value: estado},

                    ];

                    return execQuery.execWritedCommand(query, parameterers);
};







//TABLA USUARIOS


const allUsuarios = () => {
    const query =` SELECT * FROM [dbo].[usuario]     
                    `;
                     return execQuery.execReadCommand(query);
};


const addUsuario = (portafolioData) => {
    const {
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
        imagen
    } = portafolioData;


    // EN ESTE PUNTO ES IMPORTANTE HACER LA QUERY A LA TABLA CORRESPONDIENTE Y LOS VALORES CORRESPONDIENTES y tipos de datos.
    const query = ` INSERT INTO [dbo].[usuario] (id_usuario, nombre, apellido_p, apellido_m, fecha_nacimiento, id_estado, correo, telefono, contrasena, id_direccion, rut_usuario, id_especialidad, id_rol, imagen )
                    VALUES (@id_usuario, @nombre, @apellido_p, @apellido_m, @fecha_nacimiento, @id_estado, @correo, @telefono, @contrasena, @id_direccion, @rut_usuario, @id_especialidad, @id_rol,  @imagen )
                    
                    `;
                    //FIN DE LA QUERY
                    const parameterers = [
                        {name: 'id_usuario', type: TYPES.UniqueIdentifier, value: id_usuario},
                        {name: 'nombre', type: TYPES.NVarChar, value: nombre},
                        {name: 'apellido_p', type: TYPES.NVarChar, value: apellido_p},
                        {name: 'apellido_m', type: TYPES.NVarChar, value: apellido_m},
                        {name: 'fecha_nacimiento', type: TYPES.Date, value: fecha_nacimiento},
                        {name: 'id_estado', type: TYPES.NVarChar, value: id_estado},
                        {name: 'correo', type: TYPES.NVarChar, value: correo},
                        {name: 'telefono', type: TYPES.NVarChar, value: telefono},
                        {name: 'contrasena', type: TYPES.NVarChar, value: contrasena},
                        {name: 'id_direccion', type: TYPES.NVarChar, value: id_direccion},
                        {name: 'rut_usuario', type: TYPES.NVarChar, value: rut_usuario},
                        {name: 'id_especialidad', type: TYPES.NVarChar, value: id_especialidad},
                        {name: 'id_rol', type: TYPES.NVarChar, value: id_rol},
                        {name: 'imagen', type: TYPES.NVarChar, value: imagen},


                    ];
                    return execQuery.execWritedCommand(query, parameterers);
};




const getByIDUsuario= (correo) => {
    const query =` SELECT * FROM [dbo].[usuario] 
                    WHERE correo = @correo     
                    `;
                    //FIN DE LA QUERY

                    const parameterers = [
                        {name: 'correo', type: TYPES.NVarChar, value: correo},
                        
                        
                    ];


                     return execQuery.execReadCommand(query, parameterers);
};






const updateUsuario = (portafolioData) => {
    const {
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
        imagen
    } = portafolioData;


    // EN ESTE PUNTO ES IMPORTANTE HACER LA QUERY A LA TABLA CORRESPONDIENTE Y LOS VALORES CORRESPONDIENTES
    const query = ` UPDATE[dbo].[usuario] 
                    SET nombre = @nombre , apellido_p = @apellido_p, apellido_m = @apellido_m, fecha_nacimiento = @fecha_nacimiento, id_estado = @id_estado,  correo = @correo , telefono = @telefono , contrasena = @contrasena , id_direccion = @id_direccion , rut_usuario = @rut_usuario, id_especialidad = @id_especialidad, id_rol = @id_rol, imagen = @imagen
                    WHERE id_usuario = @id_usuario         
                    `;
                    //FIN DE LA QUERY
                    const parameterers = [
                        {name: 'id_usuario', type: TYPES.UniqueIdentifier, value: id_usuario},
                        {name: 'nombre', type: TYPES.NVarChar, value: nombre},
                        {name: 'apellido_p', type: TYPES.NVarChar, value: apellido_p},
                        {name: 'apellido_m', type: TYPES.NVarChar, value: apellido_m},
                        {name: 'fecha_nacimiento', type: TYPES.Date, value: fecha_nacimiento},
                        {name: 'id_estado', type: TYPES.NVarChar, value: id_estado},
                        {name: 'correo', type: TYPES.NVarChar, value: correo},
                        {name: 'telefono', type: TYPES.NVarChar, value: telefono},
                        {name: 'contrasena', type: TYPES.NVarChar, value: contrasena},
                        {name: 'id_direccion', type: TYPES.NVarChar, value: id_direccion},
                        {name: 'rut_usuario', type: TYPES.NVarChar, value: rut_usuario},
                        {name: 'id_especialidad', type: TYPES.NVarChar, value: id_especialidad},
                        {name: 'id_rol', type: TYPES.NVarChar, value: id_rol},
                        {name: 'imagen', type: TYPES.NVarChar, value: imagen},



                    ];
                    return execQuery.execWritedCommand(query, parameterers);
};



const deleteUsuario = (id_usuario) => {
    const query =  `DELETE FROM [dbo].[usuario]
                    WHERE id_usuario = @id_usuario        
                    `;
                    //FIN DE LA QUERY

                    const parameterers = [
                        {name: 'id_usuario', type: TYPES.NVarChar, value: id_usuario},
                    ];

                    return execQuery.execWritedCommand(query, parameterers);
                    
};










//FIN TABLA USUARIO

//TABLA CIUDAD


const allCiudad = () => {
    const query =` SELECT * FROM [dbo].[ciudad]     
                    `;
                     return execQuery.execReadCommand(query);
};



const addCiudad = (portafolioData) => {
    const {
        id_ciudad,
        nombre_ciudad,
    } = portafolioData;


    // EN ESTE PUNTO ES IMPORTANTE HACER LA QUERY A LA TABLA CORRESPONDIENTE Y LOS VALORES CORRESPONDIENTES y tipos de datos.
    const query = ` INSERT INTO [dbo].[ciudad] (id_ciudad, nombre_ciudad)
                    VALUES (@id_ciudad,  @nombre_ciudad)
                    
                    `;
                    //FIN DE LA QUERY
                    const parameterers = [
                        {name: 'id_ciudad', type: TYPES.UniqueIdentifier, value: id_ciudad},
                        {name: 'nombre_ciudad', type: TYPES.NVarChar, value: nombre_ciudad},

                    ];
                    return execQuery.execWritedCommand(query, parameterers);
};




const getByIDCiudad = (id_ciudad) => {
    const query =` SELECT * FROM [dbo].[ciudad] 
                    WHERE id_ciudad = @id_ciudad     
                    `;
                    //FIN DE LA QUERY

                    const parameterers = [
                        {name: 'id_ciudad', type: TYPES.NVarChar, value: id_ciudad},
                        
                        
                    ];


                     return execQuery.execReadCommand(query, parameterers);
};






const updateCiudad = (portafolioData) => {
    const {
        id_ciudad,
        nombre_ciudad,
    } = portafolioData;


    // EN ESTE PUNTO ES IMPORTANTE HACER LA QUERY A LA TABLA CORRESPONDIENTE Y LOS VALORES CORRESPONDIENTES
    const query = ` UPDATE[dbo].[ciudad] 
                    SET nombre_ciudad = @nombre_ciudad
                    WHERE id_ciudad = @id_ciudad         
                    `;
                    //FIN DE LA QUERY
                    const parameterers = [
                        {name: 'id_ciudad', type: TYPES.NVarChar, value: id_ciudad},
                        {name: 'nombre_ciudad', type: TYPES.NVarChar, value: nombre_ciudad},

                    ];
                    return execQuery.execWritedCommand(query, parameterers);
};



const deleteCiudad = (id_ciudad) => {
    const query =  `DELETE FROM [dbo].[ciudad]
                    WHERE id_ciudad = @id_ciudad        
                    `;
                    //FIN DE LA QUERY

                    const parameterers = [
                        {name: 'id_ciudad', type: TYPES.NVarChar, value: id_ciudad},
                    ];

                    return execQuery.execWritedCommand(query, parameterers);
                    
};





//FIN TABLA CIUDAD



//TABLA COMUNA

const allComuna = () => {
    const query =` SELECT * FROM [dbo].[comuna]     
                    `;
                     return execQuery.execReadCommand(query);
};


const addComuna = (portafolioData) => {
    const {
        id_comuna,
        nombre_comuna,
    } = portafolioData;


    // EN ESTE PUNTO ES IMPORTANTE HACER LA QUERY A LA TABLA CORRESPONDIENTE Y LOS VALORES CORRESPONDIENTES y tipos de datos.
    const query = ` INSERT INTO [dbo].[comuna] (id_comuna, nombre_comuna)
                    VALUES (@id_comuna,  @nombre_comuna)
                    
                    `;
                    //FIN DE LA QUERY
                    const parameterers = [
                        {name: 'id_comuna', type: TYPES.UniqueIdentifier, value: id_comuna},
                        {name: 'nombre_comuna', type: TYPES.NVarChar, value: nombre_comuna},

                    ];
                    return execQuery.execWritedCommand(query, parameterers);
};


const getByIDComuna= (id_comuna) => {
    const query =` SELECT * FROM [dbo].[comuna] 
                    WHERE id_comuna = @id_comuna     
                    `;
                    //FIN DE LA QUERY

                    const parameterers = [
                        {name: 'id_comuna', type: TYPES.NVarChar, value: id_comuna},
                        
                        
                    ];


                     return execQuery.execReadCommand(query, parameterers);
};






const updateComuna = (portafolioData) => {
    const {
        id_comuna,
        nombre_comuna,
    } = portafolioData;


    // EN ESTE PUNTO ES IMPORTANTE HACER LA QUERY A LA TABLA CORRESPONDIENTE Y LOS VALORES CORRESPONDIENTES
    const query = ` UPDATE[dbo].[comuna] 
                    SET nombre_comuna = @nombre_comuna
                    WHERE id_comuna = @id_comuna         
                    `;
                    //FIN DE LA QUERY
                    const parameterers = [
                        {name: 'id_comuna', type: TYPES.NVarChar, value: id_comuna},
                        {name: 'nombre_comuna', type: TYPES.NVarChar, value: nombre_comuna},

                    ];
                    return execQuery.execWritedCommand(query, parameterers);
};



const deleteComuna = (id_comuna) => {
    const query =  `DELETE FROM [dbo].[comuna]
                    WHERE id_comuna = @id_comuna        
                    `;
                    //FIN DE LA QUERY

                    const parameterers = [
                        {name: 'id_comuna', type: TYPES.NVarChar, value: id_comuna},
                    ];

                    return execQuery.execWritedCommand(query, parameterers);
                    
};










//FIN TABLA COMUNA



//TABLA CONTRATO


const allContrato = () => {
    const query =` SELECT * FROM [dbo].[contrato]     
                    `;
                     return execQuery.execReadCommand(query);
};



const addContrato = (portafolioData) => {
    const {
        id_contrato,
        id_estado,
        fecha_contrato,
        imagen,
    } = portafolioData;


    // EN ESTE PUNTO ES IMPORTANTE HACER LA QUERY A LA TABLA CORRESPONDIENTE Y LOS VALORES CORRESPONDIENTES y tipos de datos.
    const query = ` INSERT INTO [dbo].[contrato] (id_contrato, id_estado, fecha_contrato, imagen)
                    VALUES (@id_contrato,  @id_estado, @fecha_contrato, @imagen)
                    
                    `;
                    //FIN DE LA QUERY
                    const parameterers = [
                        {name: 'id_contrato', type: TYPES.NVarChar, value: id_contrato},
                        {name: 'id_estado', type: TYPES.NVarChar, value: id_estado},
                        {name: 'fecha_contrato', type: TYPES.Date, value: fecha_contrato},
                        {name: 'imagen', type: TYPES.NVarChar, value: imagen},

                    ];
                    return execQuery.execWritedCommand(query, parameterers);
};




const getByIDContrato= (id_contrato) => {
    const query =` SELECT * FROM [dbo].[contrato] 
                    WHERE id_contrato = @id_contrato     
                    `;
                    //FIN DE LA QUERY

                    const parameterers = [
                        {name: 'id_contrato', type: TYPES.NVarChar, value: id_contrato},
                        
                        
                    ];


                     return execQuery.execReadCommand(query, parameterers);
};






const updateContrato = (portafolioData) => {
    const {
        id_contrato,
        id_estado,
    } = portafolioData;


    // EN ESTE PUNTO ES IMPORTANTE HACER LA QUERY A LA TABLA CORRESPONDIENTE Y LOS VALORES CORRESPONDIENTES
    const query = ` UPDATE[dbo].[contrato] 
                    SET id_estado = @id_estado
                    WHERE id_contrato = @id_contrato         
                    `;
                    //FIN DE LA QUERY
                    const parameterers = [
                        {name: 'id_contrato', type: TYPES.NVarChar, value: id_contrato},
                        {name: 'id_estado', type: TYPES.NVarChar, value: id_estado},

                    ];
                    return execQuery.execWritedCommand(query, parameterers);
};



const deleteContrato = (id_contrato) => {
    const query =  `DELETE FROM [dbo].[contrato]
                    WHERE id_contrato = @id_contrato        
                    `;
                    //FIN DE LA QUERY

                    const parameterers = [
                        {name: 'id_contrato', type: TYPES.NVarChar, value: id_contrato},
                    ];

                    return execQuery.execWritedCommand(query, parameterers);
                    
};



//FIN TABLA CONTRATO









//TABLA DETALLE_SERVICIO



const allDetalle_servicio = () => {
    const query =` SELECT * FROM [dbo].[detalle_servicio]     
                    `;
                     return execQuery.execReadCommand(query);
};


const addDetalleServicio = (portafolioData) => {
    const {
        id_asesoria,
        detalle_asesoria,
        fecha,
        extra,
        profesional,
        tema,
        ubicacion,
        duracion,
        id_tipo_servicio,
        id_servicio
    } = portafolioData;


    // EN ESTE PUNTO ES IMPORTANTE HACER LA QUERY A LA TABLA CORRESPONDIENTE Y LOS VALORES CORRESPONDIENTES y tipos de datos.
    const query = ` INSERT INTO [dbo].[detalle_servicio] (id_asesoria, detalle_asesoria, fecha, extra, profesional, tema, ubicacion, duracion, id_tipo_servicio, id_servicio)
                    VALUES (@id_asesoria, @detalle_asesoria, @fecha, @extra, @profesional, @tema, @ubicacion, @duracion, @id_tipo_servicio, @id_servicio )
                    
                    `;
                    //FIN DE LA QUERY
                    const parameterers = [
                        {name: 'id_asesoria', type: TYPES.UniqueIdentifier, value: id_asesoria},
                        {name: 'detalle_asesoria', type: TYPES.Text, value: detalle_asesoria},
                        {name: 'fecha', type: TYPES.Date, value: fecha},
                        {name: 'extra', type: TYPES.NVarChar, value: extra},
                        {name: 'profesional', type: TYPES.NVarChar, value: profesional},
                        {name: 'tema', type: TYPES.NVarChar, value: tema},
                        {name: 'ubicacion', type: TYPES.NVarChar, value: ubicacion},
                        {name: 'duracion', type: TYPES.Int, value: duracion},
                        {name: 'id_tipo_servicio', type: TYPES.NVarChar, value: id_tipo_servicio},
                        {name: 'id_servicio', type: TYPES.NVarChar, value: id_servicio},

                    ];
                    return execQuery.execWritedCommand(query, parameterers);
};




const getByIDDetalleServicio= (id_asesoria) => {
    const query =` SELECT * FROM [dbo].[detalle_servicio] 
                    WHERE id_asesoria = @id_asesoria     
                    `;
                    //FIN DE LA QUERY

                    const parameterers = [
                        {name: 'id_asesoria', type: TYPES.NVarChar, value: id_asesoria},
                        
                        
                    ];


                     return execQuery.execReadCommand(query, parameterers);
};






const updateDetalleServicio = (portafolioData) => {
    const {
        id_asesoria,
        detalle_asesoria,
    } = portafolioData;


    // EN ESTE PUNTO ES IMPORTANTE HACER LA QUERY A LA TABLA CORRESPONDIENTE Y LOS VALORES CORRESPONDIENTES
    const query = ` UPDATE[dbo].[detalle_servicio] 
                    SET detalle_asesoria = @detalle_asesoria
                    WHERE id_asesoria = @id_asesoria         
                    `;
                    //FIN DE LA QUERY
                    const parameterers = [
                        {name: 'id_asesoria', type: TYPES.NVarChar, value: id_asesoria},
                        {name: 'detalle_asesoria', type: TYPES.Text, value: detalle_asesoria},

                    ];
                    return execQuery.execWritedCommand(query, parameterers);
};



const deleteDetalleServicio = (id_asesoria) => {
    const query =  `DELETE FROM [dbo].[detalle_servicio]
                    WHERE id_asesoria = @id_asesoria        
                    `;
                    //FIN DE LA QUERY

                    const parameterers = [
                        {name: 'id_asesoria', type: TYPES.NVarChar, value: id_asesoria},
                    ];

                    return execQuery.execWritedCommand(query, parameterers);
                    
};







//FIN TABLA DETALLE_SERVICIO

//TABLA DETALLE_USUARIO


const allDetalle_usuario = () => {
    const query =` SELECT * FROM [dbo].[detalle_usuario]     
                    `;
                     return execQuery.execReadCommand(query);
};



const addDetalle_usuario = (portafolioData) => {
    const {
        id_usuario,
        id_empresa,
        id_detalle_usuario,

    } = portafolioData;


    // EN ESTE PUNTO ES IMPORTANTE HACER LA QUERY A LA TABLA CORRESPONDIENTE Y LOS VALORES CORRESPONDIENTES y tipos de datos.
    const query = ` INSERT INTO [dbo].[detalle_usuario] (id_usuario, id_empresa ,id_detalle_usuario)
                    VALUES (@id_usuario,  @id_empresa , @id_detalle_usuario)
                    
                    `;
                    //FIN DE LA QUERY
                    const parameterers = [
                        {name: 'id_usuario', type: TYPES.UniqueIdentifier, value: id_usuario},
                        {name: 'id_empresa', type: TYPES.NVarChar, value: id_empresa},
                        {name: 'id_detalle_usuario', type: TYPES.NVarChar, value: id_detalle_usuario},


                    ];
                    return execQuery.execWritedCommand(query, parameterers);
};




const getByIDDetalle_usuario = (id_detalle_usuario) => {
    const query =` SELECT * FROM [dbo].[detalle_usuario] 
                    WHERE id_detalle_usuario = @id_detalle_usuario     
                    `;
                    //FIN DE LA QUERY

                    const parameterers = [
                        {name: 'id_detalle_usuario', type: TYPES.NVarChar, value: id_detalle_usuario},
                        
                        
                    ];


                     return execQuery.execReadCommand(query, parameterers);
};






const updateDetalle_usuario  = (portafolioData) => {
    const {
       
        id_empresa,
    } = portafolioData;


    // EN ESTE PUNTO ES IMPORTANTE HACER LA QUERY A LA TABLA CORRESPONDIENTE Y LOS VALORES CORRESPONDIENTES
    const query = ` UPDATE[dbo].[detalle_usuario] 
                    SET id_empresa = @id_empresa
                    WHERE id_detalle_usuario = @id_detalle_usuario         
                    `;
                    //FIN DE LA QUERY
                    const parameterers = [
                        {name: 'id_empresa', type: TYPES.UniqueIdentifier, value: id_empresa},

                    ];
                    return execQuery.execWritedCommand(query, parameterers);
};



const deleteDetalle_usuario  = (id_detalle_usuario) => {
    const query =  `DELETE FROM [dbo].[detalle_usuario]
                    WHERE id_detalle_usuario = @id_detalle_usuario        
                    `;
                    //FIN DE LA QUERY

                    const parameterers = [
                        {name: 'id_detalle_usuario', type: TYPES.NVarChar, value: id_detalle_usuario},
                    ];

                    return execQuery.execWritedCommand(query, parameterers);
                    
};






//FIN DETALLE_USUARIO


//TABLA DIRECCION


const allDireccion = () => {
    const query =` SELECT * FROM [dbo].[direccion]     
                    `;
                     return execQuery.execReadCommand(query);
};




const addDireccion = (portafolioData) => {
    const {
        id_direccion,
        calle,
        numero,
        id_comuna,
        id_pais,
        id_ciudad,
        id_region,
        observaciones

    } = portafolioData;


    // EN ESTE PUNTO ES IMPORTANTE HACER LA QUERY A LA TABLA CORRESPONDIENTE Y LOS VALORES CORRESPONDIENTES y tipos de datos.
    const query = ` INSERT INTO [dbo].[direccion] (id_direccion, calle, numero, id_comuna, id_pais, id_ciudad, id_region, observaciones  )
                    VALUES (@id_direccion, @calle, @numero, @id_comuna, @id_pais,  @id_ciudad, @id_region, @observaciones )
                    
                    `;
                    //FIN DE LA QUERY
                    const parameterers = [
                        {name: 'id_direccion', type: TYPES.UniqueIdentifier, value: id_direccion},
                        {name: 'calle', type: TYPES.NVarChar, value: calle},
                        {name: 'numero', type: TYPES.Int, value: numero},
                        {name: 'id_comuna', type: TYPES.NVarChar, value: id_comuna},
                        {name: 'id_pais', type: TYPES.NVarChar, value: id_pais},
                        {name: 'id_ciudad', type: TYPES.NVarChar, value: id_ciudad},
                        {name: 'id_region', type: TYPES.NVarChar, value: id_region},
                        {name: 'observaciones', type: TYPES.Text, value: observaciones},


                    ];
                    return execQuery.execWritedCommand(query, parameterers);
};




const getByIDDireccion = (id_direccion) => {
    const query =` SELECT * FROM [dbo].[direccion] 
                    WHERE id_direccion = @id_direccion     
                    `;
                    //FIN DE LA QUERY

                    const parameterers = [
                        {name: 'id_direccion', type: TYPES.NVarChar, value: id_direccion},
                        
                        
                    ];


                     return execQuery.execReadCommand(query, parameterers);
};






const updateDireccion = (portafolioData) => {
    const {
        id_direccion,
        numero,
        observaciones

    } = portafolioData;


    // EN ESTE PUNTO ES IMPORTANTE HACER LA QUERY A LA TABLA CORRESPONDIENTE Y LOS VALORES CORRESPONDIENTES
    const query = ` UPDATE[dbo].[direccion] 
                    SET numero = @numero, observaciones = @observaciones
                    WHERE id_direccion = @id_direccion         
                    `;
                    //FIN DE LA QUERY
                    const parameterers = [
                        {name: 'id_direccion', type: TYPES.UniqueIdentifier, value: id_direccion},
                        {name: 'numero', type: TYPES.NVarChar, value: numero},
                        {name: 'observaciones', type: TYPES.NVarChar, value: observaciones},

                    ];
                    return execQuery.execWritedCommand(query, parameterers);
};



const deleteDireccion = (id_direccion) => {
    const query =  `DELETE FROM [dbo].[direccion]
                    WHERE id_direccion = @id_direccion        
                    `;
                    //FIN DE LA QUERY

                    const parameterers = [
                        {name: 'id_direccion', type: TYPES.NVarChar, value: id_direccion},
                    ];

                    return execQuery.execWritedCommand(query, parameterers);
                    
};




//FIN TABLA DIRECCION


//TABLA EMPRESA


const allEmpresa = () => {
    const query =` SELECT * FROM [dbo].[empresa]   
                    `;
                     return execQuery.execReadCommand(query);
};

const addEmpresa = (portafolioData) => {
    const {
        id_empresa,
        nombre_empresa,
        rut_empresa,
        id_rubro,
        id_contrato,
       
        
    } = portafolioData;


    // EN ESTE PUNTO ES IMPORTANTE HACER LA QUERY A LA TABLA CORRESPONDIENTE Y LOS VALORES CORRESPONDIENTES y tipos de datos.
    const query = ` INSERT INTO [dbo].[empresa] (id_empresa, nombre_empresa, rut_empresa, id_rubro,  id_contrato )
                    VALUES (@id_empresa,  @nombre_empresa, @rut_empresa, @id_rubro,  @id_contrato )
                    
                    `;
                    //FIN DE LA QUERY
                    const parameterers = [
                        {name: 'id_empresa', type: TYPES.UniqueIdentifier, value: id_empresa},
                        {name: 'nombre_empresa', type: TYPES.NVarChar, value: nombre_empresa},
                        {name: 'rut_empresa', type: TYPES.NVarChar, value: rut_empresa},
                        {name: 'id_rubro', type: TYPES.NVarChar, value: id_rubro},
                        {name: 'id_contrato', type: TYPES.NVarChar, value: id_contrato},



                    ];
                    return execQuery.execWritedCommand(query, parameterers);
};




const getByIDEmpresa= (id_empresa) => {
    const query =` SELECT * FROM [dbo].[empresa] 
                    WHERE id_empresa = @id_empresa     
                    `;
                    //FIN DE LA QUERY

                    const parameterers = [
                        {name: 'id_empresa', type: TYPES.NVarChar, value: id_empresa},
                        
                        
                    ];


                     return execQuery.execReadCommand(query, parameterers);
};






const updateEmpresa = (portafolioData) => {
    const {
        id_empresa,
        id_rubro,
    } = portafolioData;


    // EN ESTE PUNTO ES IMPORTANTE HACER LA QUERY A LA TABLA CORRESPONDIENTE Y LOS VALORES CORRESPONDIENTES
    const query = ` UPDATE[dbo].[empresa] 
                    SET id_rubro = @id_rubro
                    WHERE id_empresa = @id_empresa         
                    `;
                    //FIN DE LA QUERY
                    const parameterers = [
                        {name: 'id_rubro', type: TYPES.NVarChar, value: id_rubro},
                        {name: 'id_empresa', type: TYPES.Text, value: id_empresa},

                    ];
                    return execQuery.execWritedCommand(query, parameterers);
};



const deleteEmpresa = (id_empresa) => {
    const query =  `DELETE FROM [dbo].[empresa]
                    WHERE id_empresa = @id_empresa        
                    `;
                    //FIN DE LA QUERY

                    const parameterers = [
                        {name: 'id_empresa', type: TYPES.NVarChar, value: id_empresa},
                    ];

                    return execQuery.execWritedCommand(query, parameterers);
                    
};




//FIN TABLA EMPRESA


//TABLA ESPECIALIDAD PROFESIONAL


const allEspecialidadProfesional = () => {
    const query =` SELECT * FROM [dbo].[especialidad_profesional]     
                    `;
                     return execQuery.execReadCommand(query);
};




const addEspecialidadProfesional = (portafolioData) => {
    const {
        id_especialidad,
        nombre_especialidad,
        detalle_especialidad,

        
    } = portafolioData;


    // EN ESTE PUNTO ES IMPORTANTE HACER LA QUERY A LA TABLA CORRESPONDIENTE Y LOS VALORES CORRESPONDIENTES y tipos de datos.
    const query = ` INSERT INTO [dbo].[especialidad_profesional] (id_especialidad, nombre_especialidad, detalle_especialidad)
                    VALUES (@id_especialidad, @nombre_especialidad, @detalle_especialidad)
                    
                    `;
                    //FIN DE LA QUERY
                    const parameterers = [
                        {name: 'id_especialidad', type: TYPES.UniqueIdentifier, value: id_especialidad},
                        {name: 'nombre_especialidad', type: TYPES.NVarChar, value: nombre_especialidad},
                        {name: 'detalle_especialidad', type: TYPES.NVarChar, value: detalle_especialidad},



                    ];
                    return execQuery.execWritedCommand(query, parameterers);
};




const getByIDEspecialidadProfesional= (id_especialidad) => {
    const query =` SELECT * FROM [dbo].[especialidad_profesional] 
                    WHERE id_especialidad = @id_especialidad     
                    `;
                    //FIN DE LA QUERY

                    const parameterers = [
                        {name: 'id_especialidad', type: TYPES.NVarChar, value: id_especialidad},
                        
                        
                    ];


                     return execQuery.execReadCommand(query, parameterers);
};






const updateEspecialidadProfesional = (portafolioData) => {
    const {
        nombre_especialidad,
        detalle_especialidad,
    } = portafolioData;


    // EN ESTE PUNTO ES IMPORTANTE HACER LA QUERY A LA TABLA CORRESPONDIENTE Y LOS VALORES CORRESPONDIENTES
    const query = ` UPDATE[dbo].[especialidad_profesional] 
                    SET nombre_especialidad = @nombre_especialidad, detalle_especialidad = @detalle_especialidad
                    WHERE id_especialidad = @id_especialidad         
                    `;
                    //FIN DE LA QUERY
                    const parameterers = [
                        {name: 'nombre_especialidad', type: TYPES.NVarChar, value: nombre_especialidad},
                        {name: 'detalle_especialidad', type: TYPES.Text, value: detalle_especialidad},

                    ];
                    return execQuery.execWritedCommand(query, parameterers);
};



const deleteEspecialidadProfesional= (id_especialidad) => {
    const query =  `DELETE FROM [dbo].[especialidad_profesional]
                    WHERE id_especialidad = @id_especialidad        
                    `;
                    //FIN DE LA QUERY

                    const parameterers = [
                        {name: 'id_especialidad', type: TYPES.NVarChar, value: id_especialidad},
                    ];

                    return execQuery.execWritedCommand(query, parameterers);
                    
};






//FIN ESPECIALIDAD PROFESIONAL



//TABLA ESTADO

const allEstado = () => {
    const query =` SELECT * FROM [dbo].[estado]     
                    `;
                     return execQuery.execReadCommand(query);
};






const addEstado = (portafolioData) => {
    const {
        id_estado,
        nombre_estado,
        observaciones_estado,
    } = portafolioData;


    // EN ESTE PUNTO ES IMPORTANTE HACER LA QUERY A LA TABLA CORRESPONDIENTE Y LOS VALORES CORRESPONDIENTES y tipos de datos.
    const query = ` INSERT INTO [dbo].[estado] (id_estado, nombre_estado, observaciones_estado)
                    VALUES (@id_estado,  @nombre_estado, @observaciones_estado)
                    
                    `;
                    //FIN DE LA QUERY
                    const parameterers = [
                        {name: 'id_estado', type: TYPES.NVarChar, value: id_estado},
                        {name: 'nombre_estado', type: TYPES.NVarChar, value: nombre_estado},
                        {name: 'observaciones_estado', type: TYPES.Text, value: observaciones_estado},
                       

                    ];
                    return execQuery.execWritedCommand(query, parameterers);
};



const getByIDEstado= (id_estado) => {
    const query =` SELECT * FROM [dbo].[estado] 
                    WHERE id_estado = @id_estado     
                    `;
                    //FIN DE LA QUERY

                    const parameterers = [
                        {name: 'id_estado', type: TYPES.NVarChar, value: id_estado},
                        
                        
                    ];


                     return execQuery.execReadCommand(query, parameterers);
};






const updateEstado = (portafolioData) => {
    const {
        id_estado,
        
        observaciones_estado
    } = portafolioData;


    // EN ESTE PUNTO ES IMPORTANTE HACER LA QUERY A LA TABLA CORRESPONDIENTE Y LOS VALORES CORRESPONDIENTES
    const query = ` UPDATE[dbo].[estado] 
                    SET observaciones_estado = @observaciones_estado 
                    WHERE id_estado = @id_estado         
                    `;
                    //FIN DE LA QUERY
                    const parameterers = [
                        {name: 'id_estado', type: TYPES.NVarChar, value: id_estado},
                        {name: 'observaciones_estado', type: TYPES.NVarChar, value: observaciones_estado},

                    ];
                    return execQuery.execWritedCommand(query, parameterers);
};



const deleteEstado = (id_estado) => {
    const query =  `DELETE FROM [dbo].[estado]
                    WHERE id_estado = @id_estado        
                    `;
                    //FIN DE LA QUERY

                    const parameterers = [
                        {name: 'id_estado', type: TYPES.NVarChar, value: id_estado},
                    ];

                    return execQuery.execWritedCommand(query, parameterers);
                    
};









//FIN TABLA ESTADO











//TABLA ITEM

const allItem = () => {
    const query =` SELECT * FROM [dbo].[item]     
                    `;
                     return execQuery.execReadCommand(query);
};



const addItem= (portafolioData) => {
    const {
        id_item,
        nombre_item,
        descripcion_item,
        id_estado,
        fecha_agregado,
        id_empresa
    } = portafolioData;


    // EN ESTE PUNTO ES IMPORTANTE HACER LA QUERY A LA TABLA CORRESPONDIENTE Y LOS VALORES CORRESPONDIENTES y tipos de datos.
    const query = ` INSERT INTO [dbo].[item] (id_item, nombre_item, descripcion_item, id_estado, fecha_agregado, id_empresa )
                    VALUES (@id_item,  @nombre_item, @descripcion_item, @id_estado, @fecha_agregado, @id_empresa )
                    
                    `;
                    //FIN DE LA QUERY
                    const parameterers = [
                        {name: 'id_item', type: TYPES.UniqueIdentifier, value: id_item},
                        {name: 'nombre_item', type: TYPES.NVarChar, value: nombre_item},
                        {name: 'descripcion_item', type: TYPES.Text, value: descripcion_item},
                        {name: 'id_estado', type: TYPES.NVarChar, value: id_estado},
                        {name: 'fecha_agregado', type: TYPES.Date, value: fecha_agregado},
                        {name: 'id_empresa', type: TYPES.NVarChar, value: id_empresa},

                    ];
                    return execQuery.execWritedCommand(query, parameterers);
};


const getByIDItem= (id_item) => {
    const query =` SELECT * FROM [dbo].[item] 
                    WHERE id_item = @id_item    
                    `;
                    //FIN DE LA QUERY

                    const parameterers = [
                        {name: 'id_item', type: TYPES.NVarChar, value: id_item},
                        
                        
                    ];


                     return execQuery.execReadCommand(query, parameterers);
};






const updateItem = (portafolioData) => {
    const {
        id_item,
        id_estado,
        descripcion,

    } = portafolioData;


    // EN ESTE PUNTO ES IMPORTANTE HACER LA QUERY A LA TABLA CORRESPONDIENTE Y LOS VALORES CORRESPONDIENTES
    const query = ` UPDATE[dbo].[item] 
                    SET id_estado = @id_estado, descripcion = @descripcion
                    WHERE id_item = @id_item         
                    `;
                    //FIN DE LA QUERY
                    const parameterers = [
                        {name: 'id_item', type: TYPES.NVarChar, value: id_item},
                        {name: 'id_estado', type: TYPES.NVarChar, value: id_estado},
                        {name: 'descripcion', type: TYPES.Text, value: descripcion},

                    ];
                    return execQuery.execWritedCommand(query, parameterers);
};



const deleteItem = (id_comuna) => {
    const query =  `DELETE FROM [dbo].[item]
                    WHERE id_item = @id_item        
                    `;
                    //FIN DE LA QUERY

                    const parameterers = [
                        {name: 'id_item', type: TYPES.NVarChar, value: id_item},
                    ];

                    return execQuery.execWritedCommand(query, parameterers);
                    
};


//FIN TABLA ITEM




//TABLA MENSUALIDAD

const allMensualidad = () => {
    const query =` SELECT * FROM [dbo].[mensualidad]     
                    `;
                     return execQuery.execReadCommand(query);
};




const addMensualidad= (portafolioData) => {
    const {
        id_mensualidad,
        id_estado,
        observaciones,

    } = portafolioData;


    // EN ESTE PUNTO ES IMPORTANTE HACER LA QUERY A LA TABLA CORRESPONDIENTE Y LOS VALORES CORRESPONDIENTES y tipos de datos.
    const query = ` INSERT INTO [dbo].[mensualidad] (id_mensualidad, id_estado, observaciones )
                    VALUES (@id_mensualidad,  @id_estado, @observaciones)
                    
                    `;
                    //FIN DE LA QUERY
                    const parameterers = [
                        {name: 'id_mensualidad', type: TYPES.UniqueIdentifier, value: id_mensualidad},
                        {name: 'id_estado', type: TYPES.NVarChar, value: id_estado},
                        {name: 'observaciones', type: TYPES.Text, value: observaciones},


                    ];
                    return execQuery.execWritedCommand(query, parameterers);
};


const getByIDMensualidad= (id_mensualidad) => {
    const query =` SELECT * FROM [dbo].[mensualidad] 
                    WHERE id_mensualidad = @id_mensualidad    
                    `;
                    //FIN DE LA QUERY

                    const parameterers = [
                        {name: 'id_mensualidad', type: TYPES.NVarChar, value: id_mensualidad},
                        
                        
                    ];


                     return execQuery.execReadCommand(query, parameterers);
};






const updateMensualidad = (portafolioData) => {
    const {

        id_estado,
        observaciones,

    } = portafolioData;


    // EN ESTE PUNTO ES IMPORTANTE HACER LA QUERY A LA TABLA CORRESPONDIENTE Y LOS VALORES CORRESPONDIENTES
    const query = ` UPDATE[dbo].[mensualidad] 
                    SET id_estado = @id_estado, observaciones = @observaciones
                    WHERE id_mensualidad = @id_mensualidad         
                    `;
                    //FIN DE LA QUERY
                    const parameterers = [
                        {name: 'id_estado', type: TYPES.NVarChar, value: id_estado},
                        {name: 'observaciones', type: TYPES.NVarChar, value: observaciones},


                    ];
                    return execQuery.execWritedCommand(query, parameterers);
};



const deleteMensualidad= (id_mensualidad) => {
    const query =  `DELETE FROM [dbo].[mensualidad]
                    WHERE id_mensualidad = @id_mensualidad        
                    `;
                    //FIN DE LA QUERY

                    const parameterers = [
                        {name: 'id_mensualidad', type: TYPES.NVarChar, value: id_mensualidad},
                    ];

                    return execQuery.execWritedCommand(query, parameterers);
                    
};


//FIN TABLA MENSUALIDAD















//TABLA PAIS



const allPais = () => {
    const query =` SELECT * FROM [dbo].[pais]     
                    `;
                     return execQuery.execReadCommand(query);
};



const addPais= (portafolioData) => {
    const {
        id_pais,
        nombre_pais,


    } = portafolioData;


    // EN ESTE PUNTO ES IMPORTANTE HACER LA QUERY A LA TABLA CORRESPONDIENTE Y LOS VALORES CORRESPONDIENTES y tipos de datos.
    const query = ` INSERT INTO [dbo].[pais] (id_pais, nombre_pais )
                    VALUES (@id_pais,  @nombre_pais)
                    
                    `;
                    //FIN DE LA QUERY
                    const parameterers = [
                        {name: 'id_pais', type: TYPES.UniqueIdentifier, value: id_pais},
                        {name: 'nombre_pais', type: TYPES.NVarChar, value: nombre_pais},
                   


                    ];
                    return execQuery.execWritedCommand(query, parameterers);
};


const getByIDPais= (id_pais) => {
    const query =` SELECT * FROM [dbo].[pais] 
                    WHERE id_pais = @id_pais    
                    `;
                    //FIN DE LA QUERY

                    const parameterers = [
                        {name: 'id_pais', type: TYPES.NVarChar, value: id_pais},
                        
                        
                    ];


                     return execQuery.execReadCommand(query, parameterers);
};






const updatePais = (portafolioData) => {
    const {

        nombre_pais,
        

    } = portafolioData;


    // EN ESTE PUNTO ES IMPORTANTE HACER LA QUERY A LA TABLA CORRESPONDIENTE Y LOS VALORES CORRESPONDIENTES
    const query = ` UPDATE[dbo].[mensualidad] 
                    SET nombre_pais = @nombre_pais
                    WHERE id_pais = @id_pais         
                    `;
                    //FIN DE LA QUERY
                    const parameterers = [

                        {name: 'nombre_pais', type: TYPES.NVarChar, value: nombre_pais},


                    ];
                    return execQuery.execWritedCommand(query, parameterers);
};



const deletePais= (id_pais) => {
    const query =  `DELETE FROM [dbo].[pais]
                    WHERE id_pais = @id_pais        
                    `;
                    //FIN DE LA QUERY

                    const parameterers = [
                        {name: 'id_pais', type: TYPES.NVarChar, value: id_pais},
                    ];

                    return execQuery.execWritedCommand(query, parameterers);
                    
};










//FIN TABLA PAIS


//TABLA REGION


const allRegion = () => {
    const query =` SELECT * FROM [dbo].[region]     
                    `;
                     return execQuery.execReadCommand(query);
};


const addRegion= (portafolioData) => {
    const {
        id_region,
        nombre_region,


    } = portafolioData;


    // EN ESTE PUNTO ES IMPORTANTE HACER LA QUERY A LA TABLA CORRESPONDIENTE Y LOS VALORES CORRESPONDIENTES y tipos de datos.
    const query = ` INSERT INTO [dbo].[region] (id_region, nombre_region)
                    VALUES (@id_region,  @nombre_region )
                    
                    `;
                    //FIN DE LA QUERY
                    const parameterers = [
                        {name: 'id_region', type: TYPES.UniqueIdentifier, value: id_region},
                        {name: 'nombre_region', type: TYPES.NVarChar, value: nombre_region},
                   


                    ];
                    return execQuery.execWritedCommand(query, parameterers);
};


const getByIDRegion= (id_region) => {
    const query =` SELECT * FROM [dbo].[region] 
                    WHERE id_region = @id_region    
                    `;
                    //FIN DE LA QUERY

                    const parameterers = [
                        {name: 'id_region', type: TYPES.NVarChar, value: id_region},
                        
                        
                    ];


                     return execQuery.execReadCommand(query, parameterers);
};






const updateRegion = (portafolioData) => {
    const {

        nombre_region,
        

    } = portafolioData;


    // EN ESTE PUNTO ES IMPORTANTE HACER LA QUERY A LA TABLA CORRESPONDIENTE Y LOS VALORES CORRESPONDIENTES
    const query = ` UPDATE[dbo].[region] 
                    SET nombre_region = @nombre_region
                    WHERE id_region = @id_region         
                    `;
                    //FIN DE LA QUERY
                    const parameterers = [

                        {name: 'nombre_region', type: TYPES.NVarChar, value: nombre_region},


                    ];
                    return execQuery.execWritedCommand(query, parameterers);
};



const deleteRegion= (id_region) => {
    const query =  `DELETE FROM [dbo].[region]
                    WHERE id_region = @id_region        
                    `;
                    //FIN DE LA QUERY

                    const parameterers = [
                        {name: 'id_region', type: TYPES.NVarChar, value: id_region},
                    ];

                    return execQuery.execWritedCommand(query, parameterers);
                    
};



//FIN TABLA REGION


//TABLA ROL

const allRol = () => {
    const query =` SELECT * FROM [dbo].[rol]     
                    `;
                     return execQuery.execReadCommand(query);
};

const addRol= (portafolioData) => {
    const {
        id_rol,
        nombre_rol,
        detalle_rol,


    } = portafolioData;


    // EN ESTE PUNTO ES IMPORTANTE HACER LA QUERY A LA TABLA CORRESPONDIENTE Y LOS VALORES CORRESPONDIENTES y tipos de datos.
    const query = ` INSERT INTO [dbo].[rol] (id_rol, nombre_rol, detalle_rol)
                    VALUES (@id_rol,  @nombre_rol, @detalle_rol)
                    
                    `;
                    //FIN DE LA QUERY
                    const parameterers = [
                        {name: 'id_rol', type: TYPES.UniqueIdentifier, value: id_rol},
                        {name: 'nombre_rol', type: TYPES.NVarChar, value: nombre_rol},
                        {name: 'detalle_rol', type: TYPES.NVarChar, value: detalle_rol}
                   


                    ];
                    return execQuery.execWritedCommand(query, parameterers);
};


const getByIDRol= (id_rol) => {
    const query =` SELECT * FROM [dbo].[rol] 
                    WHERE id_rol = @id_rol    
                    `;
                    //FIN DE LA QUERY

                    const parameterers = [
                        {name: 'id_rol', type: TYPES.NVarChar, value: id_rol},
                        
                        
                    ];


                     return execQuery.execReadCommand(query, parameterers);
};






const updateRol = (portafolioData) => {
    const {

        nombre_rol,
        detalle_rol
        

    } = portafolioData;


    // EN ESTE PUNTO ES IMPORTANTE HACER LA QUERY A LA TABLA CORRESPONDIENTE Y LOS VALORES CORRESPONDIENTES
    const query = ` UPDATE[dbo].[rol] 
                    SET nombre_rol = @nombre_rol, detalle_rol = @detalle_rol
                    WHERE id_rol = @id_rol         
                    `;
                    //FIN DE LA QUERY
                    const parameterers = [

                        {name: 'nombre_rol', type: TYPES.NVarChar, value: nombre_rol},
                        {name: 'detalle_rol', type: TYPES.NVarChar, value: detalle_rol},



                    ];
                    return execQuery.execWritedCommand(query, parameterers);
};



const deleteRol= (id_rol) => {
    const query =  `DELETE FROM [dbo].[rol]
                    WHERE id_rol = @id_rol        
                    `;
                    //FIN DE LA QUERY

                    const parameterers = [
                        {name: 'id_rol', type: TYPES.NVarChar, value: id_rol},
                    ];

                    return execQuery.execWritedCommand(query, parameterers);
                    
};

//FIN TABLA ROL


//TABLA RUBRO

const allRubro = () => {
    const query =` SELECT * FROM [dbo].[rubro]     
                    `;
                     return execQuery.execReadCommand(query);
};



const addRubro = (portafolioData) => {
    const {

        id_rubro,
        nombre_rubro,
        descripcion_rubro

    } = portafolioData;


    // EN ESTE PUNTO ES IMPORTANTE HACER LA QUERY A LA TABLA CORRESPONDIENTE Y LOS VALORES CORRESPONDIENTES y tipos de datos.
    const query = ` INSERT INTO [dbo].[rubro] (id_rubro, nombre_rubro, descripcion_rubro)
                    VALUES (@id_rubro, @nombre_rubro, @descripcion_rubro)
                    
                    `;
                    //FIN DE LA QUERY
                    const parameterers = [
                        {name: 'id_rubro', type: TYPES.NVarChar, value: id_rubro},
                        {name: 'nombre_rubro', type: TYPES.NVarChar, value: nombre_rubro},
                        {name: 'descripcion_rubro', type: TYPES.Text, value: descripcion_rubro},

                    ];
                    return execQuery.execWritedCommand(query, parameterers);
};




const getByIDRubro= (id_rubro) => {
    const query =` SELECT * FROM [dbo].[rubro] 
                    WHERE id_rubro = @id_rubro     
                    `;
                    //FIN DE LA QUERY

                    const parameterers = [
                        {name: 'id_rubro', type: TYPES.NVarChar, value: id_rubro},
                        
                        
                    ];


                     return execQuery.execReadCommand(query, parameterers);
};






const updateRubro = (portafolioData) => {
    const {
        nombre_rubro,
        descripcion_rubro
    } = portafolioData;


    // EN ESTE PUNTO ES IMPORTANTE HACER LA QUERY A LA TABLA CORRESPONDIENTE Y LOS VALORES CORRESPONDIENTES
    const query = ` UPDATE[dbo].[rubro] 
                    SET nombre_rubro = @nombre_rubro, descripcion_rubro = @descripcion_rubro
                    WHERE id_rubro = @id_rubro         
                    `;
                    //FIN DE LA QUERY
                    const parameterers = [
                        {name: 'nombre_rubro', type: TYPES.NVarChar, value: nombre_rubro},
                        {name: 'descripcion_rubro', type: TYPES.Text, value: descripcion_rubro},

                    ];
                    return execQuery.execWritedCommand(query, parameterers);
};



const deleteRubro = (id_rubro) => {
    const query =  `DELETE FROM [dbo].[rubro]
                    WHERE id_rubro = @id_rubro        
                    `;
                    //FIN DE LA QUERY

                    const parameterers = [
                        {name: 'id_rubro', type: TYPES.NVarChar, value: id_rubro},
                    ];

                    return execQuery.execWritedCommand(query, parameterers);
                    
};









//FIN TABLA RUBRO


//TABLA SERVICIO

const allServicio = () => {
    const query =` SELECT * FROM [dbo].[servicio]     
                    `;
                     return execQuery.execReadCommand(query);
};


const addServicio = (portafolioData) => {
    const {

        id_servicio,
        id_mensualidad,
        id_empresa

    } = portafolioData;


    // EN ESTE PUNTO ES IMPORTANTE HACER LA QUERY A LA TABLA CORRESPONDIENTE Y LOS VALORES CORRESPONDIENTES y tipos de datos.
    const query = ` INSERT INTO [dbo].[servicio] (id_servicio, id_mensualidad, id_empresa)
                    VALUES (@id_servicio, @id_mensualidad, @id_empresa)
                    
                    `;
                    //FIN DE LA QUERY
                    const parameterers = [
                        {name: 'id_servicio', type: TYPES.UniqueIdentifier, value: id_servicio},
                        {name: 'id_mensualidad', type: TYPES.NVarChar, value: id_mensualidad},
                        {name: 'id_empresa', type: TYPES.NVarChar, value: id_empresa},

                    ];
                    return execQuery.execWritedCommand(query, parameterers);
};




const getByIDServicio= (id_servicio) => {
    const query =` SELECT * FROM [dbo].[servicio] 
                    WHERE id_servicio = @id_servicio     
                    `;
                    //FIN DE LA QUERY

                    const parameterers = [
                        {name: 'id_servicio', type: TYPES.NVarChar, value: id_servicio},
                        
                        
                    ];


                     return execQuery.execReadCommand(query, parameterers);
};






const updateServicio = (portafolioData) => {
    const {
        id_servicio,
        id_mensualidad
    } = portafolioData;


    // EN ESTE PUNTO ES IMPORTANTE HACER LA QUERY A LA TABLA CORRESPONDIENTE Y LOS VALORES CORRESPONDIENTES
    const query = ` UPDATE[dbo].[servicio] 
                    SET id_mensualidad = @id_mensualidad
                    WHERE id_servicio = @id_servicio         
                    `;
                    //FIN DE LA QUERY
                    const parameterers = [
                        {name: 'id_servicio', type: TYPES.NVarChar, value: id_servicio},
                        {name: 'id_mensualidad', type: TYPES.Text, value: id_mensualidad},

                    ];
                    return execQuery.execWritedCommand(query, parameterers);
};



const deleteServicio = (id_servicio) => {
    const query =  `DELETE FROM [dbo].[servicio]
                    WHERE id_servicio = @id_servicio        
                    `;
                    //FIN DE LA QUERY

                    const parameterers = [
                        {name: 'id_servicio', type: TYPES.NVarChar, value: id_servicio},
                    ];

                    return execQuery.execWritedCommand(query, parameterers);
                    
};





//FIN TABLA SERVICIO



//TABLA TIPO_SERVICIO


const allTipoServicio = () => {
    const query =` SELECT * FROM [dbo].[tipo_servicio]     
                    `;
                     return execQuery.execReadCommand(query);
};



const addTipoServicio = (portafolioData) => {
    const {

        id_tipo_servicio,
        nombre_tipo_servicio,
        detalle_tipo_servicio

    } = portafolioData;


    // EN ESTE PUNTO ES IMPORTANTE HACER LA QUERY A LA TABLA CORRESPONDIENTE Y LOS VALORES CORRESPONDIENTES y tipos de datos.
    const query = ` INSERT INTO [dbo].[tipo_servicio] (id_tipo_servicio, nombre_tipo_servicio, detalle_tipo_servicio)
                    VALUES (@id_tipo_servicio, @nombre_tipo_servicio, @detalle_tipo_servicio)
                    
                    `;
                    //FIN DE LA QUERY
                    const parameterers = [
                        {name: 'id_tipo_servicio', type: TYPES.NVarChar, value: id_tipo_servicio},
                        {name: 'nombre_tipo_servicio', type: TYPES.NVarChar, value: nombre_tipo_servicio},
                        {name: 'detalle_tipo_servicio', type: TYPES.Text, value: detalle_tipo_servicio},

                    ];
                    return execQuery.execWritedCommand(query, parameterers);
};




const getByIDTipoServicio= (id_tipo_servicio) => {
    const query =` SELECT * FROM [dbo].[tipo_servicio] 
                    WHERE id_tipo_servicio = @id_tipo_servicio     
                    `;
                    //FIN DE LA QUERY

                    const parameterers = [
                        {name: 'id_tipo_servicio', type: TYPES.NVarChar, value: id_tipo_servicio},
                        
                        
                    ];


                     return execQuery.execReadCommand(query, parameterers);
};






const updateTipoServicio = (portafolioData) => {
    const {
        id_tipo_servicio,
        detalle_tipo_servicio
    } = portafolioData;


    // EN ESTE PUNTO ES IMPORTANTE HACER LA QUERY A LA TABLA CORRESPONDIENTE Y LOS VALORES CORRESPONDIENTES
    const query = ` UPDATE[dbo].[tipo_servicio] 
                    SET detalle_tipo_servicio = @detalle_tipo_servicio
                    WHERE id_tipo_servicio = @id_tipo_servicio         
                    `;
                    //FIN DE LA QUERY
                    const parameterers = [
                        {name: 'id_tipo_servicio', type: TYPES.NVarChar, value: id_tipo_servicio},
                        {name: 'detalle_tipo_servicio', type: TYPES.Text, value: detalle_tipo_servicio},

                    ];
                    return execQuery.execWritedCommand(query, parameterers);
};



const deleteTipoServicio = (id_tipo_servicio) => {
    const query =  `DELETE FROM [dbo].[tipo_servicio]
                    WHERE id_tipo_servicio = @id_tipo_servicio        
                    `;
                    //FIN DE LA QUERY

                    const parameterers = [
                        {name: 'id_tipo_servicio', type: TYPES.NVarChar, value: id_tipo_servicio},
                    ];

                    return execQuery.execWritedCommand(query, parameterers);
                    
};


//FIN TABLA TIPO_SERVICIO











//TABLA EXPORTAR MODULOS PARA CONSUMIR




module.exports = {
    addPortafolio,
    addCiudad,
    addComuna,
    addContrato,
    addDetalleServicio,
    addDetalle_usuario,
    addDireccion,
    addEmpresa,
    addEspecialidadProfesional,
    addEstado,
    addItem,
    addMensualidad,
    addPais,
    addRegion,
    addRol,
    addRubro,
    addServicio,
    addTipoServicio,
    addUsuario,
    



    updatePortafolio,
    updateCiudad,
    updateComuna,
    updateContrato,
    updateDetalleServicio,
    updateDetalle_usuario,
    updateDireccion,
    updateEmpresa,
    updateEspecialidadProfesional,
    updateEstado,
    updateItem,
    updateMensualidad,
    updatePais,
    updateRegion,
    updateRol,
    updateRubro,
    updateServicio,
    updateTipoServicio,
    updateUsuario,




    deletePortafolio,
    deleteCiudad,
    deleteComuna,
    deleteContrato,
    deleteDetalleServicio,
    deleteDetalle_usuario,
    deleteDireccion,
    deleteEmpresa,
    deleteEspecialidadProfesional,
    deleteEstado,
    deleteItem,
    deleteMensualidad,
    deletePais,
    deleteRegion,
    deleteRol,
    deleteRubro,
    deleteServicio,
    deleteTipoServicio,
    deleteUsuario,



    allPortafolio,



    getByIDPortafolio,
    getByIDCiudad,
    getByIDComuna,
    getByIDContrato,
    getByIDDetalleServicio,
    getByIDDetalle_usuario,
    getByIDDireccion,
    getByIDEmpresa,
    getByIDEspecialidadProfesional,
    getByIDEstado,
    getByIDItem,
    getByIDMensualidad,
    getByIDPais,
    getByIDRegion,
    getByIDRol,
    getByIDRubro,
    getByIDServicio,
    getByIDTipoServicio,
    getByIDUsuario,



    completePortafolio,
    changeStatePortafolio,

    allCiudad,
    allComuna,
    allContrato,
    allDetalle_servicio,
    allDetalle_usuario,
    allDireccion,
    allEmpresa,
    allEspecialidadProfesional,
    allEstado,
    allItem,
    allMensualidad,
    allPais,
    allRegion,
    allRol,
    allRubro,
    allServicio,
    allTipoServicio,
    allUsuarios,
    
    
    
    
    
    
    

    
    
    
    


};






