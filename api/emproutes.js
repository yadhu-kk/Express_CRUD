const router=require("express").Router();
const empList = require('./emp')

router.get('/list',(req,res)=>{
    res.json({success:1,items:empList})
})

router.post('/list',(req,res)=>{
    let body=req.body;
    console.log(body);
    if(!body.id){
        return res.json({success:0,message:"id not found"})
    } else {
        empList.push(body);
    }
    res.json({success:1,items:empList});
    
})

router.get('/list/:id',(req,res)=>{
    let id=req.params.id;
    console.log({id});
    let newArray = empList.filter((item)=>{
        if(item.id ===Number(id)){
            return item;
        }
      
    })
    return  res.json({success:1,item:newArray});
});

router.put('/list/:id',(req,res)=>{
    let id=req.params.id;
    let body=req.body;
    let data=empList.map((item)=>{
        if(item.id===Number(id)){
            item=body;
        }
        return item;
    })
   return res.json({success:1,
    item:data})
})
router.delete('/list/:id',(req,res)=>{
    let id=req.params.id;
    let newArray=empList.filter((item)=>{
        if(item.id!==Number(id)){
            return item;
        }
    })
    res.json({success:1,message:'deleted successfully',item:newArray})
})




module.exports=router;