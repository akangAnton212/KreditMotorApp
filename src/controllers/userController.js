const models = require( '../models/index')
const uuidv4 = require('uuid/v4')
const jwt = require('jsonwebtoken')
const passport = require('passport')
require('../config/passport')(passport)
var bcrypt = require('bcrypt-nodejs');


module.exports = {
    
    getAllUsers(req, res) {
      return models.User
        .findAll({
            where:{
                is_aktif:true
            },
            attributes: ['username', 'nama_lengkap','jenis_kelamin','alamat','telepon','role_id'],
            include: [{
                model: models.Role,
                attributes:['nama_role', 'uid']
            }],
            order: [
                ['createdAt', 'DESC'],
            ],
        })
        .then((users) => {
            if(users.length > 0){
                const val = users.map((res) => {
                    return {
                        username: res.username,
                        nama_lengkap: res.nama_lengkap,
                        jenis_kelamin: res.jenis_kelamin == 'L' ? 'Laki-laki' : 'Perempuan',
                        alamat: res.alamat,
                        telepon: res.telepon,
                        role: res.Role.nama_role
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

    getUserById(req, res) {
        return models.User
        .findAll({
            where:{
                uid: req.query.id,
                is_aktif:true
            },
            attributes: ['username', 'nama_lengkap','jenis_kelamin','alamat','telepon','role_id'],
            include: [{
                model: models.Role,
                attributes:['nama_role', 'uid']
            }],
            order: [
                ['createdAt', 'DESC'],
            ],
        })
        .then((users) => {
            if(users.length > 0){
                const val = users.map((res) => {
                    return {
                        username: res.username,
                        nama_lengkap: res.nama_lengkap,
                        jenis_kelamin: res.jenis_kelamin == 'L' ? 'Laki-laki' : 'Perempuan',
                        alamat: res.alamat,
                        telepon: res.telepon,
                        role: res.Role.nama_role
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

    addUser(req, res) {
        return models.User
            .create({
                username: req.body.username,
                password: req.body.password,
                nama_lengkap: req.body.nama_lengkap,
                jenis_kelamin: req.body.jenis_kelamin,
                alamat: req.body.alamat,
                telepon: req.body.telepon,
                role_id: req.body.role_id,
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

    updateUser(req, res) {
        return models.User
          .findAll({
            attributes: ['username', 'nama_lengkap','jenis_kelamin','alamat','telepon','role_id'],
            where: {
                uid: req.body.id,
            }
          })
          .then((data) => {
            if(data.length > 0) {
                if(req.body.password == ""){
                    return models.User
                    .update({
                      username: req.body.username,
                      nama_lengkap: req.body.nama_lengkap,
                      jenis_kelamin: req.body.jenis_kelamin,
                      alamat: req.body.alamat,
                      telepon: req.body.telepon,
                      role_id: req.body.role_id,
                      is_aktif:req.body.is_aktif
                    },{
                      where: {
                          uid: req.body.id
                      }
                    })
                    .then(() => {
                      const response = {
                        status: true,
                        data: "Data Berhasil Di Update"
                      };
          
                      res.status(200).json(response);
                    })
                    .catch((error) => {
                      const response = {
                        status: false,
                        data: error
                      };
                      res.status(400).send(response); 
                    });
                }else{
                    return models.User
                    .update({
                        username: req.body.username,
                        password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10), null),
                        nama_lengkap: req.body.nama_lengkap,
                        jenis_kelamin: req.body.jenis_kelamin,
                        alamat: req.body.alamat,
                        telepon: req.body.telepon,
                        role_id: req.body.role_id,
                        is_aktif:req.body.is_aktif
                        },{
                        where: {
                            uid: req.body.id
                        }
                    })
                    .then(() => {
                      const response = {
                        status: true,
                        data: "Data Berhasil Di Update"
                      };
          
                      res.status(200).json(response);
                    })
                    .catch((error) => {
                      const response = {
                        status: false,
                        data: error
                      };
                      res.status(400).send(response); 
                    });
                }
             
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

    deleteUser(req, res) {
        return models.User
            .findAll({
                where:{
                uid: req.body.id
                }
            })
            .then((data) => {
                if(data.length > 0){
                return models.User
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

    login(req, res){
        var token;
        models.User.findOne({
            where: {
                username: req.body.username
            }
        })
        .then((user) => {
            if (!user) {
                return res.status(401).send({
                    message: 'Gagal Login, User Tidak Ada',
                });
            } 

            bcrypt.compare(req.body.password, user.password, (err, rest) => {
                if (err) {
                    return rest.status(401).json({
                        message: "Unauthorization"
                    });
                }

                if(rest){
                    token = jwt.sign(JSON.parse(JSON.stringify(user)), 'nodeauthsecret', {expiresIn: 86400 * 30});
                    return res.status(200).json({
                        success: true,
                        token: token
                    });
                }

                return res.status(401).json({
                    message: "Unauthorization"
                });
            })
        })
        .catch((error) => res.status(400).send(error));
    }
};