let First = require('../Models/Schema');

exports.Create = async (req,res) => {
    try { 
        const { name, email } = req.body; 
        let data = await First.create({
            name,email 
        })
        res.status(200).json({
            success: true,
            data: data,
            message:"Entry Created Successfully"
        })
    }
    catch (error) {
        res.status(400).json({
            success: false,
            data:"internal error occurs",
            message:error.message
        })
    }
}
