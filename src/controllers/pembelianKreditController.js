const models = require( '../models/index')
const uuidv4 = require('uuid/v4')
module.exports = {

    addPembelian(req, res){
        var response

        
        // return Promise.all([
        //     checkKendaraan(req.body.kendaraan_id),
        //     ]).then((resultStock) => {
        //         if(resultStock[0]){
        //             res.status(200).send(resultStock.map((stock) => { return { stok:stock.stok }}))
        //         }else{
                    // response = {
                    //     status: false,
                    //     data: "Barang Tidak Ada"
                    // };
                    // res.status(201).send(response)
        //         }           
        //     })

        //check stock kendaraan nya
        return models.Kendaraan.findOne({
            where:{
                uid:req.body.kendaraan_id,
                is_aktif: true
            }
        }).then((resultStock) => {
            if(resultStock){
                var stok = resultStock.stok
            }else{
                response = {
                    status: false,
                    data: "Barang Tidak Ada"
                };
                res.status(201).send(response)
            }
        }).catch((error) => {
            response = {
                status: false,
                data: error
            };
            res.status(400).send(response)
        })
    },

    

};

// function checkKendaraan(id) {
//     return models.Kendaraan.findOne({
//         where:{
//             uid:id
//         }
//     }).then((resultStock) => {
//         return resultStock
//     }).catch((error) => {

//     })
// }