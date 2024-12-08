// Load data from CSV file
d3.csv("melted_data.csv").then(function(data) {
    // Create the violin plot using Plotly and D3.js
    var layout = {
      title: "Violin Plot: Textblob Subjectivity & Polarity",
      xaxis: { title: "Analysis Type" },
      yaxis: { title: "Value" },
      violinmode: "group"
    };
  
    var config = { responsive: true };
  
    var traces = [];
    var variables = [...new Set(data.map(d => d.variable))];
  
    variables.forEach(function(variable, index) {
      var subset = data.filter(d => d.variable === variable);
      var trace = {
        type: "violin",
        x: subset.map(d => d.variable),
        y: subset.map(d => d.value),
        legendgroup: variable,
        scalegroup: variable,
        name: variable,
        side: "both",
        line: { color: getColor(index, variables.length) }, // Different color for each violin plot
        fillcolor: getColor(index, variables.length),
        hoveron: "points",
        hoverinfo: "y+name",
        box: { visible: true },
        meanline: { visible: true },
        scalemode: "count"
      };
      traces.push(trace);
    });
  
    Plotly.newPlot("plot", traces, layout, config);
  }).catch(function(error) {
    throw error;
  });
  
  // Function to get different colors
  function getColor(index, total) {
    var colorScale = d3.scaleSequential()
      .domain([0, total])
      .interpolator(d3.interpolateRainbow);
    return colorScale(index);
  }
  