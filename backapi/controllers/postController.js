const Post = require("../models/Post");

exports.crearPost = async (req, res) => {
    try{
        let post;
        post = new Post(req.body);

        await post.save();
        res.send(post);

    }catch (error){
        console.log(error);
        res.status(500).send('Hubo un error');    
    }
}

exports.verPost = async (req,res) =>{
    try{
        const post = await Post.find();
        res.json(post);
    }catch (error){
        console.log(error);
        res.status(500).send('Hubo un error');    
    }
}
exports.actualizarPost = async (req, res) =>{
    try {
        const {title, descrip, write} = req.body;
        let post = await Post.findById(req.params.id);

        if(!post){
            res.status(404).json({ msg:'Ese post no existe'})
        }
        post.title = title;
        post.descrip = descrip;
        post.write = write;

        post = await Post.findOneAndUpdate({_id:req.params.id}, post, {new:true})
        res.json(post);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');  
    }

}
exports.obtenerPost = async (req, res) =>{
    try {
        let post = await Post.findById(req.params.id);

        if(!post){
            res.status(404).json({ msg:'Ese post no existe'})
        }
        res.json(post);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');  
    }

}
exports.eliminarPost = async (req, res) =>{
    try {
        let post = await Post.findById(req.params.id);

        if(!post){
            res.status(404).json({ msg:'Ese post no existe'})
        }
        await Post.findOneAndRemove({_id:req.params.id})
        res.json({msg:'Usuario eliminado'});

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');  
    }

}