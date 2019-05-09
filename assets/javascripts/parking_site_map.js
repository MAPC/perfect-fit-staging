window.addEventListener('DOMContentLoaded', () => {
    let projection = d3.geoAlbers()
                        .scale(90000)
                        .rotate([71.057,0])
                        .center([0, 42.313])
                        .translate([960/2,500/2]);
    let path = d3.geoPath().projection(projection)
    let svg = d3.select("body").append("svg")
                .attr("width", 960)
                .attr("height", 500);
    d3.json("/assets/data/ma-munis.json").then(function (geojson) {
        svg.append("g")
           .selectAll('path')
           .data(geojson.features)
           .enter()
           .append('path')
           .attr( "fill", "#ccc" )
           .attr( "stroke", "#333")
           .attr("d", path);
      });
    d3.csv("/assets/data/perfect_fit_parking_data.csv").then(function(data) {
       svg.append("g")
          .selectAll("circle")
          .data(data)
          .enter()
          .append("circle")
          .attr("cx", (d) => { console.log([d.longitude, d.latitude]); return projection([d.longitude, d.latitude])[0]; })
          .attr("cy", (d) => { return projection([d.longitude, d.latitude])[1]; })
          .attr("r", "2px")
          .attr("fill", "blue")
    });
});
