const models = require( '../models/index')
const uuidv4 = require('uuid/v4')

module.exports = {
    getAllRoles(req, res) {
        return models.Role
            .findAll({
                where:{
                    is_aktif:true
                },
                attributes: ['id','nama_role','is_aktif'],
                order: [
                    ['createdAt', 'DESC'],
                ],
            })
            .then((data) => {
                if(data.length > 0){
                    const val = data.map((res) => {
                        return {
                            nama_role: res.nama_role,
                            is_aktif: res.is_aktif
                        }
                    })
    
                    const response = {
                        status: true,
                        data: val
                    };
    
                    res.status(200).send(response)
                }else{
                    const response = {
                        status: false,
                        data: error
                    };
                    res.status(201).send(response)
                }
            })
            .catch((error) => { 
                const response = {
                    status: false,
                    data: error
                };
                res.status(400).send(response); 
            });
    },

    getRolesById(req, res) {
        return models.Role
            .findAll({
                where:{
                    is_aktif:true,
                    uid: req.query.id,
                },
                attributes: ['id','nama_role','is_aktif'],
                order: [
                    ['createdAt', 'DESC'],
                ],
            })
            .then((data) => {
                if(data.length > 0){
                    const val = data.map((res) => {
                        return {
                            nama_role: res.nama_role,
                            is_aktif: res.is_aktif
                        }
                    })
    
                    const response = {
                        status: true,
                        data: val
                    };
    
                    res.status(200).send(response)
                }else{
                    const response = {
                        status: false,
                        data: error
                    };
                    res.status(201).send(response)
                }
            })
            .catch((error) => { 
                const response = {
                    status: false,
                    data: error
                };
                res.status(400).send(response); 
            });
    },

    addRole(req, res) {
        return models.Role
            .create({
                nama_role: req.body.nama_role,
                uid: uuidv4(),
                is_aktif:true
            })
            .then((data) => {
                res.status(200).json({
                    status:true,
                    data: "Sukses Input Data",
                    result:data
                });
            })
            .catch((err) => {
                res.status(500).json({
                    message:"Kesalahan Server",
                    error: err
                });
            });
    },

    updateRole(req, res) {
        return models.Role
          .findAll({
            attributes: ['id','nama_role','is_aktif'],
            where: {
                uid: req.body.id,
            }
          })
          .then((data) => {
            if(data.length > 0) {
                return models.Role
                .update({
                    nama_role: req.body.nama_role,
                    is_aktif:req.body.is_aktif,
                },{
                    where: {
                        uid: req.body.id
                    }
                })
                .then((data) => {
                    res.status(200).json({
                        status:true,
                        data: "Sukses Update Data",
                    });
                })
                .catch((err) => {
                    res.status(500).json({
                        message:"Kesalahan Server",
                        error: err
                    });
                });
             
            }else{
              const response = {
                status: false,
                data: "Data Tidak Ada"
              };
              res.status(404).json(response);
            }      
          })
          .catch((error) => {
            const response = {
              status: false,
              data: error
            };
            res.status(400).send(response); 
          });
    },

    deleteRole(req, res) {
        return models.Role
            .findAll({
                where:{
                    uid: req.body.id
                }
            })
            .then((data) => {
                if(data.length > 0){
                return models.Role
                    .update({
                            is_aktif:false
                        },{
                        where: {
                            uid: req.body.id
                        }
                    })
                    .then(() => {
                        const response = {
                            status: true,
                            data: "data Berhasil Di Hapus"
                        };
                        res.status(200).json(response); 
                    })
                    .catch((error) => {
                        const response = {
                            status: false,
                            data: error
                        };
                        res.status(400).json(response)
                    });
                }else{
                    const response = {
                        status: false,
                        data: "Data Tidak Ada"
                    };
                    res.status(404).json(response)
                }
                
            })
            .catch((error) => {
                const response = {
                    status: false,
                    data: error
                };
                res.status(400).send(response)
            });
    },
};