const { UnsupportedMediaType } = require('http-errors');
const path = require('path');
const bcryptjs = require("bcryptjs")
const db = require("../database/models");
const Op = db.Sequelize.Op;
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const { validationResult } = require('express-validator');
const { error } = require('console');



let controlador = {
    indexLogin: function(req, res) {
        console.log(req.session)
        res.render('login');
    },

    register: function(req, res) {
        res.render('register');
    },
    
    registerProceso: (req, res) => {
        const resultValidations = validationResult(req);
        
        if (resultValidations.errors.length > 0) {
            return res.render('register', { 
                errors: resultValidations.mapped(),
                oldData: req.body
            }); 

            
        
        }

        db.Usuarios.findOne({
            where:{
                correo:req.body.correo,
            }
        }).then ((userInDb)=>{
            console.log(userInDb)
            console.log("Repite email")
            if (userInDb){
                res.render("register",{
                    errors:{
                        correo:
                        {
                            msg:"Email existente",
                        }
                    }
                })
            }
            else{
                const hashedPassword = bcryptjs.hashSync(req.body.contrasena, 10);

                    db.Usuarios.create({
                     nombre: req.body.nombre, 
                     apellido: req.body.apellido, 
                     correo: req.body.correo,
                     nacimiento: req.body.cumpleanos,
                     imagen: req.file.filename,
                     contrasena: hashedPassword,
                     usersProfile_id: req.body.userProfile_id,
                    });
                    

                return res.redirect("/usuario/login");
                }
        }) 
    },

    perfil: (req,res)=>{
        console.log(req.session)
        res.render("perfil", {
            usuario: req.session.userLogged
        });
     
    },

    loginproceso: (req, res)=>{
       
        db.Usuarios.findOne({
            where:{
                correo:req.body.correo,
            }
        }).then ((userLogin)=>{
            
            if(userLogin){
                let isOkPassword = bcryptjs.compareSync(req.body.contrasena, userLogin.contrasena);
                
                if(isOkPassword){
                    delete userLogin.contrasena;
                    req.session.userLogged = userLogin
                    return res.redirect('/usuario/perfil')
                }

               return res.render("login",{
                    errors:{
                        correo:
                        {
                            msg:"Datos incorrectos",
                        }
                    }
                })
            }

            res.render("login", {
                errors:{
                    correo:{
                        msg:"Correo no registrado",
                    }
                }
             })
        })
        
     
    }, 

    logout: (req,res)=>{
        console.log("desde logouttttt")
        
        console.log(req.session.userLogged)
        if(req.session.userLogged ){

            req.session.destroy();
        return res.redirect("/");
        } else{
            res.redirect("/");
        }  
    },
}

        
       




module.exports = controlador;