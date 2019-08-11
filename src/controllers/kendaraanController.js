const models = require( '../models/index')
const uuidv4 = require('uuid/v4')

module.exports = {
    
    getAllKendaraan(req, res) {
        return models.Kendaraan
            .findAll({
                where:{
                    is_aktif:true
                },
                attributes: ['id','merk','stok','harga_jual','is_aktif'],
                order: [
                    ['createdAt', 'DESC'],
                ],
            })
            .then((data) => {
                if(data.length > 0){
                    const val = data.map((res) => {
                        return {
                            merk: res.merk,
                            stok: res.stok,
                            harga_jual:res.harga_jual,
                            uid:res.uid,
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

    getKendaraanById(req, res) {
        return models.Kendaraan
            .findAll({
                where:{
                    is_aktif:true,
                    uid:req.query.id
                },
                attributes: ['id','merk','stok','harga_jual','is_aktif'],
                order: [
                    ['createdAt', 'DESC'],
                ],
            })
            .then((data) => {
                if(data.length > 0){
                    const val = data.map((res) => {
                        return {
                            merk: res.merk,
                            stok: res.stok,
                            harga_jual:res.harga_jual,
                            uid:res.uid,
                            is_aktif: res.is_aktif
                        }
                    })
    
                    const response = {
                        status: true,
                        data: val,
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

    addKendaraan(req, res) {
        return models.Kendaraan
            .create({
                merk: req.body.merk,
                stok:req.body.stok,
                harga_jual: req.body.harga_jual,
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

    updateKendaraan(req, res) {
        return models.Kendaraan
            .update({
                merk: req.body.merk,
                stok:req.body.stok,
                harga_jual: req.body.harga_jual,
                is_aktif:true
            },{
                where:{
                    uid:req.body.id
                }
            })
            .then((data) => {
                res.status(200).json({
                    status:true,
                    data: "Sukses Update Data"
                });
            })
            .catch((err) => {
                res.status(500).json({
                    message:"Kesalahan Server",
                    error: err
                });
            });
    },

    deleteKendaran(req, res) {
        return models.Kendaraan
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