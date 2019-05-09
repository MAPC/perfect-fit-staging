const projection = d3.geoAlbers()
  .scale(180000)
  .rotate([71.057, 0])
  .center([0, 42.413])
  .translate([960 / 2, 500 / 2]);


function populateMap(data) {
  const parkingMap = d3.select('.parking-map');
  parkingMap.append('g')
    .selectAll('circle')
    .data(data)
    .enter()
    .append('circle')
    .attr('class', 'site')
    .attr('cx', d => projection([d.longitude, d.latitude])[0])
    .attr('cy', d => projection([d.longitude, d.latitude])[1])
    .attr('r', '4px')
    .attr('fill', 'blue');
}

function brushmoved(x, circle, sliderHeight, sliderData) {
  const s = d3.event.selection;
  const handle = d3.selectAll('.handle--custom');
  if (s == null) {
    handle.attr('display', 'none');
    circle.classed('active', false);
  } else {
    const sx = s.map(x.invert);
    circle.classed('active', (d) => { return sx[0] <= d && d <= sx[1]; });
    handle.attr('display', null).attr('transform', (d, i) => { return "translate(" + s[i] + "," + sliderHeight / 2 + ")"; });
    console.log('sx[0]:', sx[0]);
    console.log('sx[1]', sx[1]);
    d3.selectAll('.site').remove();
    //populateMap with filtered data
    populateMap(sliderData);
  }
}

function createSlider(sliderData) {
  const demandUnit = sliderData.map(object => object.demandunit);
  const sliderSvg = d3.select('.slider');
  const sliderMargin = { top: 0, right: 70, bottom: 50, left: 70 };
  const sliderWidth = +sliderSvg.attr('width') - sliderMargin.left - sliderMargin.right;
  const sliderHeight = +sliderSvg.attr('height') - sliderMargin.top - sliderMargin.bottom;
  const g = sliderSvg.append('g').attr('transform', `translate(${sliderMargin.left}, ${sliderMargin.top})`);

  const sliderX = d3.scaleLinear().domain(d3.extent(demandUnit)).range([0, sliderWidth]);
  const sliderY = d3.randomNormal(sliderHeight / 2, sliderHeight / 8);

  g.append('g')
    .attr('class', 'axis axis--x')
    .attr('transform', `translate(0, ${sliderHeight})`)
    .call(d3.axisBottom(sliderX));

  const circle = g.append('g')
    .attr('class', 'circle')
    .selectAll('circle')
    .data(demandUnit)
    .enter()
    .append('circle')
    .attr('transform', d => `translate(${sliderX(d)}, ${sliderY()})`)
    .attr('r', 3.5);

  const brush = d3.brushX()
    .extent([[0, 0], [sliderWidth, sliderHeight]])
    .on('start brush end', () => brushmoved(sliderX, circle, sliderHeight, sliderData));

  const gBrush = g.append('g')
    .attr('class', 'brush')
    .call(brush);

  gBrush.selectAll('.handle--custom')
    .data([{ type: 'w' }, { type: 'e' }])
    .enter().append('path')
    .attr('class', 'handle--custom')
    .attr('fill', '#666')
    .attr('fill-opacity', 0.8)
    .attr('stroke', '#000')
    .attr('stroke-width', 1.5)
    .attr('cursor', 'ew-resize')
    .attr('d', d3.arc()
      .innerRadius(0)
      .outerRadius(sliderHeight / 2)
      .startAngle(0)
      .endAngle((d, i) => { return i ? Math.PI : -Math.PI; }));

  gBrush.call(brush.move, [0.3, 0.5].map(sliderX));
}

function createMap(data) {
  const parkingMap = d3.select('.parking-map');
  const path = d3.geoPath().projection(projection);
  parkingMap.append('g')
    .selectAll('path')
    .data(data.features)
    .enter()
    .append('path')
    .attr('fill', '#ccc')
    .attr('stroke', '#333')
    .attr('d', path)
    .on('mouseover', (d) => {
      d3.select('h2').text(d.properties.town);
    })
    .on('mouseout', () => {
      d3.select('h2').text('Hover to see town name.');
    });
}

window.addEventListener('DOMContentLoaded', () => {
  Promise.all([
    d3.json('/assets/data/ma-munis.json'),
    d3.csv('/assets/data/perfect_fit_parking_data.csv'),
  ]).then((data) => {
    // const surveyedMunicipalities = ['ARLINGTON', 'CHELSEA', 'EVERETT', 'MALDEN', 'MELROSE'];
    // const filteredMunicipalities = data[0].features.filter(municipality => surveyedMunicipalities.includes(municipality.properties.town));
    // create an array from demandunit column
    createMap(data[0]);
    populateMap(data[1]);
    createSlider(data[1]);
  });
});

// filter map to towns we want
// optimize geojson but removing data properties we do not need
// Figure out fixing X axis start and end for the slider
// Grab values the brush has selected
// show on map only selected/filtered values
