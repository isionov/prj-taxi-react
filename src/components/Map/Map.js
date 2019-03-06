import React, { Component } from "react";

import mapboxgl from "mapbox-gl/dist/mapbox-gl.js";

import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

import OrderForm from "../OrderForm";

const styles = () => ({
  wrap: { flexGrow: 1, flexDirection: "column" }
});

class Map extends Component {
  map = null;
  mapContainer = React.createRef();

  removePath = () => {
    if (this.map) {
      this.map.removeLayer("route");
      this.map.removeSource("route");
    }
  };

  addPath = coords => {
    if (this.map)
      this.map.addLayer({
        id: "route",
        type: "line",
        source: {
          type: "geojson",
          data: {
            type: "Feature",
            properties: {},
            geometry: {
              type: "LineString",
              coordinates: coords
            }
          }
        },
        layout: {
          "line-join": "round",
          "line-cap": "round"
        },
        paint: {
          "line-color": "#888",
          "line-width": 8
        }
      });
    this.map.flyTo({ center: coords[0], zoom: 10 });
  };

  componentDidMount() {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiaWxpYWlzIiwiYSI6ImNqcmRxNHZlbTFsemI0NG4weW92Zm94d3gifQ.0Ngw_ekGu3GEqrmGKdrOlw";
    this.map = new mapboxgl.Map({
      container: "rootMap",
      style: "mapbox://styles/mapbox/streets-v9",
      center: [30.2656504, 59.8029126],
      zoom: 15
    });
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    const { classes } = this.props;

    return (
      <Grid container={true} className={classes.wrap}>
        <Grid className={classes.wrap} id="rootMap" ref={this.mapContainer} />
        <OrderForm addPath={this.addPath} removePath={this.removePath} />
      </Grid>
    );
  }
}

export default withStyles(styles)(Map);
