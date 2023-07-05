const { Router } = require("express");
const hueClient = require("../helpers/HueClient");

const ipAddress = "10.129.224.195";
const username = "d944ca69c875a425a392f26f9541f";

module.exports = Router()
  .get("/", async (req, res) => {
    const lights = await hueClient.fetchLightsInfo(ipAddress, username);
    res.status(200).json({ success: true, lights: lights });
  })
  .get("/:lightId", async (req, res) => {
    const light = await hueClient.fetchOneLightInfo(
      ipAddress,
      username,
      req.params.lightId
    );
    res.status(200).json({ success: true, light: light });
  })
  .put("/:lightId", async (req, res, next) => {
    if (req.body.on === undefined) {
      throw new Error("data type error");
    }
    try {
      const light = await hueClient.turnLightOnOff(
        ipAddress,
        username,
        req.params.lightId,
        req.body.on
      );
      res.status(200).json({ success: true, light: light });
    } catch (error) {
      next(error);
    }
  });
