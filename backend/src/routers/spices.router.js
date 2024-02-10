import { Router } from "express";
import { SpicesModel } from "../models/spices.model.js";
import  handler  from "express-async-handler";

const router = Router();

router.get('/',handler(async (req,res)=>{
    const spices = await SpicesModel.find({});
    res.send(spices);
}))

router.get('/tags', handler(async (req, res) => {
  const tags = await SpicesModel.aggregate([
    { $unwind: '$tags' },
    {
      $group: {
        _id: '$tags',
        count: { $sum: 1 },
      },
    },
    {
      $project: {
        _id: 0,
        name: '$_id',
        count: '$count',
      },
    },
  ]).sort({ count: -1 });

  const all = {
    name: 'All',
    count: await SpicesModel.countDocuments(),
  };

  tags.unshift(all);
  res.send(tags);
}));



router.get('/search/:searchTerm', handler(async (req,res)=>{
    const{searchTerm}= req.params;

    const searchRegex = new RegExp(searchTerm, 'i');

    const spices = await SpicesModel.find({name:{$regex: searchRegex}});

    res.send(spices);
}))


router.get(
  '/tag/:tag',handler(async(req,res)=>{
    const{tag}=req.params;
    const spices= await SpicesModel.find({tags:tag});
    res.send(spices);
  })
);



router.get('/:spicyId', handler(async (req,res)=>{
    const{spicyId}  = req.params;
    const spycy = await SpicesModel.findById(spicyId);
    res.send(spycy)
}))

export default router;