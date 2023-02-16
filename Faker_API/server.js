
const express= require('express')
const app = express()
const PORT = 8080

app.listen(PORT, () =>{
    console.log("Servidor corriendo ")
})

// IMPORTACION D FAKER API PARA SU USO

const { faker } = require('@faker-js/faker');

// CLASE PRA USUARIO

const  crearUsuario = ()=>{

    return{
        _id:faker.datatype.uuid(),
        primer_nombre:faker.name.firstName(),
        apellido:faker.name.lastName(),
        numero_telefono:faker.phone.number(),        
        Email:faker.internet.email(),
        contrasena:faker.internet.password(),
        
    }
}

// CLASE PRA USUARIO y empresa
const  crearEmpesasUsuarios = ()=>{

    return{
        _id:faker.datatype.uuid(),
        primer_nombre:faker.name.firstName(),
        apellido:faker.name.lastName(),
        numero_telefono:faker.phone.number(),        
        Email:faker.internet.email(),
        contrasena:faker.internet.password(),
        
    },
    {
        _id:faker.datatype.number(),
        nombre:faker.company.name(),
        direccion:faker.address.direction(),
        calle:faker.address.street(),
        ciudad:faker.address.city(),
        estado:faker.address.stateAbbr(),
        codigo_postal:faker.address.zipCode(),
        pais:faker.address.country(),
    }
}


// CLASE PRA EMPRESA
const  crearEmpresa = ()=>{

    return{
        _id:faker.datatype.number(),
        nombre:faker.company.name(),
        direccion:faker.address.direction(),
        calle:faker.address.street(),
        ciudad:faker.address.city(),
        estado:faker.address.stateAbbr(),
        codigo_postal:faker.address.zipCode(),
        pais:faker.address.country(),
            }
}


// MIDDLWARE
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// simulacion de base de datos
const usuarios=[];
const empresas=[];
const empresasusuarios=[];

// ruta o direccion para usuario de tipo get

app.get('/api/users/new', (req, res)=>{
    const nuevoUsuario = crearUsuario()
    //console.log(nuevoUsuario)
    //res.json(nuevoUsuario)
    usuarios.push(nuevoUsuario)
    res.json(usuarios)
})

// ruta o direccion para empresa de tipo get
app.get('/api/companies/new', (req, res)=>{
    const nuevaEmpresa = crearEmpresa()
    //console.log(nuevoUsuario)
    //res.json(nuevoUsuario)
    empresas.push(nuevaEmpresa)
    res.json(empresas)
})


// ruta o direccion para los dos de tipo get
app.get('/api/user/company', (req, res)=>{
    const nuevaEmpresaUsuario = crearEmpesasUsuarios()
    //console.log(nuevoUsuario)
    //res.json(nuevoUsuario)
    empresasusuarios.push(nuevaEmpresaUsuario)
    res.json(empresasusuarios)
})
// Crear Usuario y Mostrar
//app.post('/api/user', (consulta, respuesta)=>{
   // console.log(consulta.body)
    //respuesta.json(consulta.body)
//})