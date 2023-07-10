const axios = require("axios");

class HueClient {
  async fetchLightsInfo(ipAddres, username) {
    return await axios
      .get(`http://${ipAddres}/api/${username}/lights`)
      .then((res) => {
        const lights = {};
        for (const light in res.data) {
          lights[light] = {
            isConnected: res.data[light].state.reachable,
            state: res.data[light].state.on,
            brightness: res.data[light].state.bri,
            hue: res.data[light].state.hue,
            saturation: res.data[light].state.sat,
          };
        }
        return lights;
      })
      .catch((err) => console.log(err));
  }

  async fetchOneLightInfo(ipAddres, username, lightNumber) {
    return await axios
      .get(`http://${ipAddres}/api/${username}/lights/${lightNumber}`)
      .then((res) => {
        const light = {
          lightNumber: lightNumber,
          isConnected: res.data.state.reachable,
          state: res.data.state.on,
          brightness: res.data.state.bri,
          hue: res.data.state.hue,
          saturation: res.data.state.sat,
          xy: [res.data.state.xy[0], res.data.state.xy[1]],
          ct: res.data.state.ct,
        };
        return light;
      })
      .catch((err) => console.log(err));
  }

  async turnLightOnOff(ipAddres, username, lightNumber, value) {
    return await axios
      .put(`http://${ipAddres}/api/${username}/lights/${lightNumber}/state`, {
        on: value.on,
      })
      .then((res) => res.data)
      .catch((err) => console.log(err));
  }

  async changeColor(ipAddres, username, lightNumber, value) {
    console.log(value);
    return await axios
      .put(`http://${ipAddres}/api/${username}/lights/${lightNumber}/state`, {
        bri: value.bri,
        sat: value.sat,
        hue: value.hue,
      })
      .then((res) => res.data)
      .catch((err) => console.log(err));
  }
}

const hueClient = new HueClient();
exports = module.exports = hueClient;
