const express = require('express');
const app = express();
const port = 80;

const body = require('body-parser');
app.use(body.json({limit: '50mb'}));

const request = require("request");

const mongoose = require('mongoose');
const Model = require('./build');
//Model.Events.setMaxListeners(60);
mongoose.connect('mongodb://vcdep-db/builds');

app.post('/polling', function(req, res) {
  const buildName = req.body.buildName;
  Model.Build.findOne({"buildName": buildName}, function(err, build) {
    if (build) {
      if (build.status === "done") {
        res.json({'finished': 'true'});
      } else {
        res.json({'finished': 'false'});
      }
    }
    else
    {
      res.json({'error': 'build does not exist'});
    }
  });
})

app.post('/get_log', function(req, res) {
  const buildName = req.body.buildName;
  Model.Build.findOne({"buildName": buildName}, function(err, build) {
    if (build) {
      res.json(build);
    }
    else
    {
      res.json({'error': 'build does not exist'});
    }
  });
});

app.post('/set_build', function(req, res) {
  const buildName = req.body.buildName;
  Model.Build.findOne({"buildName": buildName}, function(err, build) {
    if (build) {
      build.status = "working";
      build.save();
      res.json({'buildName': buildName});
    }
    else
    {
      const newBuild = new Model.Build({"buildName": buildName, "buildStatus": "", "logFile": "", "status": "working"});
      newBuild.save(function(err, newBuild) {
        if (err) console.log(err);
        else console.log(" [x] saved new build");
      });
      res.json({'buildName': buildName});
    }
  });
});

/*
app.post('/get_build', function(req, res) {
  const buildName = req.body.buildName;
  console.log(buildName);
  function onCreate(data) {
    Model.Build.findById(data._id, function(err, build) {
      if (err) console.error(err);

      console.log("Created model");
      if (build.buildName === buildName)
      {
        console.log("Document got created", build.buildName);

        // clean up the event listeners
        Model.Events.removeListener('create', onCreate);
        Model.Events.removeListener('update', onUpdate);

        res.json(build);
      }

    });
  }

  function onUpdate(data) {
    Model.Build.findById(data._id, function(err, build) {
      if (err) console.error(err);

      console.log("Updated model");
      if (build.buildName === buildName) 
      {
        console.log("Document got updated", build.buildName);

        // clean up the event listeners
        Model.Events.removeListener('create', onCreate);
        Model.Events.removeListener('update', onUpdate);

        res.json(build);
      }

    });
  }

  Model.Events.on('create', onCreate);
  Model.Events.on('update', onUpdate);
});
*/
app.post('/build', function(req, res) {
//  console.log(req.body);
  Model.Build.findOne({"buildName": req.body.name}, function(err, build) {
    if (build) {
      build.logFile = req.body.logFile;
      build.status = "done";
      build.save();
      res.send('Build updated');
    }
    else
    {
      const newBuild = new Model.Build({buildName: req.body.name, buildStatus: req.body.result, logFile: req.body.logFile, status: "done"});
      newBuild.save(function(err, newBuild) {
        if (err) console.log(err);
        else console.log(" [x] saved new build");
      });
      res.send('Build saved');
    }
  });
  //res.send('testing');
});

app.listen(port, function() {
  console.log('Listen on port:', port);
});
