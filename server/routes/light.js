const { Router } = require("express");
const hueClient = require("../helpers/HueClient");
const rgbToHsb = require("../helpers/functions/rgbToHsb.js");

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
  .put("/state/:lightId", async (req, res, next) => {
    try {
      if (req.body.on === undefined) {
        throw new Error("data type error");
      }
      const light = await hueClient.turnLightOnOff(
        ipAddress,
        username,
        req.params.lightId,
        { on: req.body.on }
      );
      res.status(200).json({ success: true, light: light });
    } catch (error) {
      next(error);
    }
  })
  .put("/color/:lightId", async (req, res, next) => {
    try {
      if (
        req.body.r === undefined ||
        req.body.g === undefined ||
        req.body.b === undefined
      ) {
        throw new Error("data type error");
      }
      const { r, g, b } = req.body;
      const [hue, saturation, brightness] = rgbToHsb(r, g, b);
      const light = await hueClient.changeColor(
        ipAddress,
        username,
        req.params.lightId,
        { bri: brightness, sat: saturation, hue: hue }
      );
      res.status(200).json({ success: true, light: light });
    } catch (error) {
      next(error);
    }
  });
