const { Router } = require("express");
const hueClient = require("../helpers/HueClient");
const rgbToHsb = require("../helpers/functions/rgbToHsb.js");
const hsbToRgb = require("../helpers/functions/hsbToRgb.js");

const ipAddress = "10.129.224.195";
const username = "d944ca69c875a425a392f26f9541f";

module.exports = Router()
  .get("/", async (req, res, next) => {
    try {
      const lights = await hueClient.fetchLightsInfo(
        req.query.ip,
        req.query.username
      );
      if (!lights) {
        throw new Error("Operation failed");
      }
      for (let light in lights) {
        [lights[light].r, lights[light].g, lights[light].b] = hsbToRgb(
          lights[light].hue,
          lights[light].saturation,
          lights[light].brightness
        );
      }
      res.status(200).json({ success: true, lights: lights });
    } catch (error) {
      next(error);
    }
  })
  .get("/:lightId", async (req, res) => {
    const light = await hueClient.fetchOneLightInfo(
      ipAddress,
      username,
      req.params.lightId
    );
    res.status(200).json({ success: true, light: light });
  })
  .put("/state", async (req, res, next) => {
    try {
      if (req.body.on === undefined) {
        throw new Error("Data not found");
      }
      if (typeof req.body.on !== "boolean") {
        throw new Error("Wrong data type");
      }
      const lights = [];
      lights.push(
        await hueClient.turnLightOnOff(ipAddress, username, 1, {
          on: req.body.on,
        })
      );
      lights.push(
        await hueClient.turnLightOnOff(ipAddress, username, 2, {
          on: req.body.on,
        })
      );
      lights.push(
        await hueClient.turnLightOnOff(ipAddress, username, 3, {
          on: req.body.on,
        })
      );
      if (
        lights[0] === undefined ||
        lights[1] === undefined ||
        lights[2] === undefined
      ) {
        throw new Error("Operation failed");
      }
      res.status(200).json({ success: true, lights: lights });
    } catch (error) {
      next(error);
    }
  })
  .put("/color/:lightId", async (req, res, next) => {
    try {
      if (
        req.body.red === undefined ||
        req.body.green === undefined ||
        req.body.blue === undefined
      ) {
        throw new Error("Data not found");
      }
      const { red, green, blue } = req.body;
      const [hue, saturation, brightness] = rgbToHsb(red, green, blue);
      const light = await hueClient.changeColor(
        ipAddress,
        username,
        req.params.lightId,
        { bri: brightness, sat: saturation, hue: hue }
      );
      if (light === undefined) {
        throw new Error("Operation failed");
      }
      res.status(200).json({ success: true, light: light });
    } catch (error) {
      next(error);
    }
  });
