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




//TABLA DETALLE_USUARIO


const allDetalle_usuario = () => {
    const query =` SELECT * FROM [dbo].[detalle_usuario]     
                    `;
                     return execQuery.execReadCommand(query);
};



//TABLA DIRECCION


const allDireccion = () => {
    const query =` SELECT * FROM [dbo].[direccion]     
                    `;
                     return execQuery.execReadCommand(query);
};



//TABLA EMPRESA


const allEmpresa = () => {
    const query =` SELECT * FROM [dbo].[empresa]   
                    `;
                     return execQuery.execReadCommand(query);
};




//TABLA ESPECIALIDAD PROFESIONAL


const allEspecialidadProfesional = () => {
    const query =` SELECT * FROM [dbo].[especialidad_profesional]     
                    `;
                     return execQuery.execReadCommand(query);
};




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



//TABLA MENSUALIDAD

const allMensualidad = () => {
    const query =` SELECT * FROM [dbo].[mensualidad]     
                    `;
                     return execQuery.execReadCommand(query);
};


//TABLA PAIS



const allPais = () => {
    const query =` SELECT * FROM [dbo].[pais]     
                    `;
                     return execQuery.execReadCommand(query);
};



//TABLA REGION


const allRegion = () => {
    const query =` SELECT * FROM [dbo].[region]     
                    `;
                     return execQuery.execReadCommand(query);
};



//TABLA ROL

const allRol = () => {
    const query =` SELECT * FROM [dbo].[rol]     
                    `;
                     return execQuery.execReadCommand(query);
};




//TABLA RUBRO

const allRubro = () => {
    const query =` SELECT * FROM [dbo].[rubro]     
                    `;
                     return execQuery.execReadCommand(query);
};





//TABLA SERVICIO

const allServicio = () => {
    const query =` SELECT * FROM [dbo].[servicio]     
                    `;
                     return execQuery.execReadCommand(query);
};




//TABLA TIPO_SERVICIO


const allTipoServicio = () => {
    const query =` SELECT * FROM [dbo].[tipo_servicio]     
                    `;
                     return execQuery.execReadCommand(query);
};






//TABLA EXPORTAR MODULOS PARA CONSUMIR




module.exports = {
    addPortafolio,
    addCiudad,
    addComuna,
    addContrato,
    addEstado,



    updatePortafolio,
    updateCiudad,
    updateComuna,
    updateContrato,
    updateEstado,




    deletePortafolio,
    deleteCiudad,
    deleteComuna,
    deleteContrato,
    deleteEstado,



    allPortafolio,



    getByIDPortafolio,
    getByIDCiudad,
    getByIDComuna,
    getByIDContrato,
    getByIDEstado,



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






