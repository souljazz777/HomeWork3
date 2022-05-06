const PostModel = require('../models/posts')

exports.HomePage = async (req,res) => {
    res.send('<h1>HOME PAGE<h1>')
}


// 取得所有待辦
exports.find = async (req,res) => {
    const data = await PostModel.find();
    res.status(200).json({data})
}

//新增待辦
exports.add = async (req,res) => {
    try{
        const newPostModel = await PostModel.create(req.body)
        res.status(200).json({
            status: "success",
            PostModel: newPostModel
        })
    }catch(error){
        res.status(400).json({
            status: "false",
            data: []
        }) 
    } 
}

// 刪除所有待辦
exports.deletes = async (req,res) => {
    const data = await PostModel.deleteMany({})
    res.status(200).json({
        status: "success",
        data: []
    })
}

// 刪除一筆待辦
exports.delete = async (req,res) => {
    const id = req.params.id
    const deletePost = await PostModel.findByIdAndDelete(id)
    res.status(200).json({
        status: "success",
        data: deletePost
    })
}

// 更新一筆待辦
exports.Update = async (req,res) => {
    try{
        const id = req.params.id
        const content = req.body.content
        if(content == undefined){
            throw "輸入格式錯誤"
        }
        const updatedata = await PostModel.findByIdAndUpdate(id,{content: content})
            res.status(200).json({
                status: "success",
                data: updatedata 
            })
    }catch(error){
        res.status(400).json({
            status: "false",
            error: error
        }) 
    } 
}