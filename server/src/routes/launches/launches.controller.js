const {
  getAllLaunches,
  scheduleNewLaunch,
  existsLaunchwithId,
  abortLaunchById,
} = require('../../models/launches.model');

const {
  getPagination
} = require('../../services/query');

async function httpGetAllLaunches(req, res) {
  const {limit, skip} = getPagination(req.query);
  const launches = await getAllLaunches(skip,limit);
  return res.status(200).json(launches);
}

async function httpAddNewLaunch(req, res) {
  const launch = req.body;


  if (!launch.mission || !launch.rocket || !launch.launchDate || !launch.target) {
    return res.status(400).json({
      error: 'Missing required property'
    })
  }

  launch.launchDate = new Date(launch.launchDate);
  if (isNaN(launch.launchDate)) {
    return res.status(400).json({
      error: 'Invalid launch date'
    })
  }

  await scheduleNewLaunch(launch);
  return res.status(201).json(launch)
}

async function httpAbortLaunch(req, res) {
  const launchId = Number(req.params.id);
  const launchExists = await existsLaunchwithId(launchId);
  if (!launchExists) {
    return res.status(404).json({
      error: 'Launch not found'
    })
  }

  const aborted = await abortLaunchById(launchId);

  if (!aborted) {
    return res.status(400).json({
      error: 'Launch not aborted'
    })
  }


  return res.status(200).json({
    ok: true,
  });



}

module.exports = {
  httpGetAllLaunches,
  httpAddNewLaunch,
  httpAbortLaunch
}