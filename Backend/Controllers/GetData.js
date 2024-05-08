const First = require('../Models/Schema');

exports.GetData = async (req,res) => {
    try {
        const { name, email } = req.body;
        const data = await First.find({ })
       
        res.status(200).json({
            success: true,
            data: data,
            message:"data get successfully"
        })
    } 
    catch (err) {
        res.status(400).json({
            success: false,
            data: "Problem issue",
            message:err.message
        })
    }



}

exports.getByID = async (req,res) => {
    try {
        const { id } = req.params;
        const { name, email } = req.body;
        const data = await First.findById({ _id: id })
        if (!id) {
            res.status.json({
                success: false,
                data:"id not given",
                message: "Id not found",
            })
        }
         
        res.status(200).json({
            success: true,
            data:data,
            message: "Found Successfully",
        })
    }
    catch (err) {
        res.status(400).json({
            success:false,
            data:"Id not found",
            message:err.message,
        })
   }

}