const express = require("express");
const mongoose = require("mongoose");
const Workouts = require("../models/workouts");
app = express();

module.exports = function (app) {
    //get all workouts
    app.get("/api/workouts", (req, res) => {
        Workouts.find({}).then(data => {
            res.json(data);
        }).catch(err => { 
            console.log(err);
        });
    });
    //Add exercise
    // var totalDur;
    // app.put("/api/workouts/:id", (req, res) => {
    //     console.log("PUT ID", req.params.id);
    //     //NEED TO INCLUDE ALL OF EXERCISE 

    //     Workouts.findByIdAndUpdate({_id: req.params.id}, {day: Date.now(), $push: {exercises: req.body}}, {new: true}).then(update => {
    //         console.log("update", update);
    //         totalDur = update.getTotalDuration();
    //     Workouts.update({_id: req.params.id}, {$set: {totalDuration: totalDur}}, {new: true})}).then(data => {
    //         console.log(data, "update after");
    //         res.json(data);
    //     }).catch(err => { 
    //         console.log(err);
    //     });
    // });
    app.put("/api/workouts/:id", async (req, res) => {
        console.log("PUT ID", req.params.id);
        //NEED TO INCLUDE ALL OF EXERCISE 
        try{
       var addExcercise =  await Workouts.findByIdAndUpdate({_id: req.params.id}, {$set: {day: Date.now()}, $push: {exercises: req.body}}, {new: true});
            addExcercise.getTotalDuration();
            console.log("update", addExcercise);
        var addTotalDur = await Workouts.findByIdAndUpdate({_id: req.params.id}, {$set: {totalDuration: addExcercise.totalDuration}}, {new: true})
            console.log(addTotalDur, "update after");
            res.json(addTotalDur);
        }
        catch(err){
            console.log(err)
        }
       
    });
    //Create new workout
    app.post("/api/workouts", (req, res) => {
        Workouts.create({day: Date.now()}).then(data => {
            res.json(data);
        }).catch(err => { 
            console.log(err);
        });
    
    
    });

       //get all workouts
       app.get("/api/workouts/range", (req, res) => {
        Workouts.find({}).then(data => {
                res.json(data);
            }).catch(err => {throw err})
        })
    
}