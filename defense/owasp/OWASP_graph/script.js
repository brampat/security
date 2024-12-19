console.log(typeof jQuery);
console.log("Loaded jQuery version:", jQuery.fn.jquery);

function getNodes() {
    let nodes = (function() {
        let json = null;
        $.ajax({
            'async': false,
            'global': false,
            'url': "./data/OWASP_nodes.json",
            'dataType': "json",
            'success': function(data) {
                json = data;
            }
        });
        return json;
    })();
    let allNodes = [];
    for (var i in nodes) {
        allNodes.push(nodes[i]);
    }
    return allNodes;
}

function getLinks() {
    let links = (function() {
        let json = null;
        $.ajax({
            'async': false,
            'global': false,
            'url': "./data/OWASP_links.json",
            'dataType': "json",
            'success': function(data) {
                json = data;
            }
        });
        return json;
    })();
    return links;
}

let nodes = getNodes();
let links = getLinks();

// Define width and height before SVG creation
const width = 4000;
const height = 4000;

// Map nodes by their labels for quick lookup
let nodeMap = {};
nodes.forEach(node => nodeMap[node.label] = node);

// Update links to use actual node references
links.forEach(link => {
    link.source = nodeMap[link.source];
    link.target = nodeMap[link.target];
});

// D3.js code to create the Force-directed graph
const svg = d3.select("#graph-container")
    .append("svg")
    .attr("width", "100%")
    .attr("height", "90%")
    .attr("viewBox", `-${width / 32} ${height / 4} ${width} ${height}`) // Center and fit graph in viewport
    .attr("preserveAspectRatio", "xMidYMid meet")
    .call(d3.behavior.zoom().on("zoom", function() {
        svg.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
    }))
    .append("g");

const linkGroup = svg.append("g").attr("class", "links");
const nodeGroup = svg.append("g").attr("class", "nodes");

let link = linkGroup.selectAll(".link")
// let link = svg.selectAll(".link")
    .data(links)
    .enter().append("line")
    .attr("class", "link")
    .style("stroke", "black")
    .style("stroke-width", 1);

let node = svg.append("g")
    .attr("class", "nodes")
    .selectAll("g");

// Create the force layout
const force = d3.layout.force()
    .nodes(nodes)
    .links(links)
    .size([width, height])
    // .linkDistance(100)
    .charge(function(i) {
        if (i == 0) return -40;
        if (i < 23) return -50;
        return -7500;
    })
    .on("tick", ticked);

force.nodes(nodes)
    .links(links)
    .start();  // Start the simulation

function validateData(nodes, links) {
    nodes.forEach(node => {
        console.assert(node.label !== undefined, 'Node label is undefined:', node);
    });
    links.forEach(link => {
        console.assert(link.source !== undefined, 'Link source is undefined:', link);
        console.assert(link.target !== undefined, 'Link target is undefined:', link);
        console.assert(nodes.find(n => n.label === link.source.label), 'Link source node not found:', link.source);
        console.assert(nodes.find(n => n.label === link.target.label), 'Link target node not found:', link.target);
    });
    console.log("All data is valid");
}

validateData(nodes, links);

function renderGraph(nodes, links) {
    // Update links
    const linkSelection = linkGroup.selectAll(".link")
        .data(links)
        .enter().append("line")
        .attr("class", "link")
        .style("stroke", "black")
        .style("stroke-width", 1);

    // Update nodes
    const nodeSelection = nodeGroup.selectAll(".node")
        .data(nodes)
        .enter().append("g")
        .attr("class", "node")
        .call(d3.behavior.drag()
            .on("dragstart", dragstarted)
            .on("drag", dragged)
            .on("dragend", dragended));

    nodeSelection.append("circle")
        .attr("dy", 30)
        .attr("x", -40)
        .attr("y", -50)
        .attr("width", 80)
        .attr("height", 100)
        .attr("r", 100)
        .attr("class", function(d) { return "container " + d.tags; })
    ;

    nodeSelection.append("foreignObject")
        .attr("x", -62)
        .attr("y", -62)
        .attr("width", 125)
        .attr("height", 125)
        .append("xhtml:div")
            .style("display", "flex")
            .style("justify-content", "center")
            .style("align-items", "center")
            .style("width", "100%")
            .style("height", "100%")
            .style("text-align", "center")
            .text(d => d.name);

}

function ticked() {
    // Update links
    svg.selectAll(".link")
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);

    // Update nodes
    svg.selectAll(".node")
        .attr("transform", d => `translate(${d.x},${d.y})`);
}

function dragstarted(d) {
    d3.event.sourceEvent.stopPropagation();
    d3.select(this).classed("dragging", true);
    force.stop();
}

function dragged(d) {
    d.x = d3.event.x;
    d.y = d3.event.y;
    ticked();
}

function dragended(d) {
    d3.select(this).classed("dragging", false);
    force.resume();
}


// Toggle event listeners
d3.selectAll(".filter").on("change", () => {
    updateGraph();
});

// Example update function for nodes
function updateNodes() {
    const nodeGroup = svg.selectAll(".node")
        .data(nodes, d => d.id);  // Use a unique key function

    nodeSelection.append("circle")
        .attr("dy", 30)
        .attr("x", -40)
        .attr("y", -50)
        .attr("width", 80)
        .attr("height", 100)
        .attr("r", 100)
        .attr("class", function(d) { return "container " + d.tags; })
    ;

    nodeGroup.select("text")
        .text(d => d.label);

    // Enter new nodes
    const nodeEnter = nodeGroup.enter().append("g")
        .attr("class", "node")
        .call(force.drag);  // Enable drag behavior

    nodeEnter.append("foreignObject")
        .attr("x", -62)
        .attr("y", -62)
        .attr("width", 125)
        .attr("height", 125)
        .append("xhtml:div")
            .style("display", "flex")
            .style("justify-content", "center")
            .style("align-items", "center")
            .style("width", "100%")
            .style("height", "100%")
            .style("text-align", "center")
            .text(d => d.name);

    // Exit any old nodes
    nodeGroup.exit().remove();

    // Restart the force layout
    force.start();
}


function updateGraph() {
    const showOwaspWeb = d3.select("#web").property("checked");
    const showOwaspProactive = d3.select("#proactive").property("checked");
    const showOwaspMobile = d3.select("#mobile").property("checked");
    const showOwaspMitigation = d3.select("#mitigations").property("checked");
    const showOwaspToolsTechniques = d3.select("#toolsTechniques").property("checked");

    // Filter nodes and links based on the checkbox status
    const filteredNodes = nodes.filter(d => {
        if (d.tags.includes("web") && showOwaspWeb)                         { return true; }
        if (d.tags.includes("proactive") && showOwaspProactive)             { return true; }
        if (d.tags.includes("mobile") && showOwaspMobile)                   { return true; }
        if (d.tags.includes("mitigations") && showOwaspMitigation)          { return true; }
        if (d.tags.includes("toolsTechniques") && showOwaspToolsTechniques) { return true; }
        return false;
    });

    const hiddenNodes = nodes

    // Filter links based on the filtered nodes
    const filteredNodeIds = new Set(filteredNodes.map(d => d.label));
    const filteredLinks = links.filter(d => {
        return filteredNodeIds.has(d.source.label) && filteredNodeIds.has(d.target.label);
    });

    // Update the links selection
    let linkUpdate = linkGroup.selectAll(".link")
        .data(filteredLinks, d => d.source.label + "-" + d.target.label);

    // Remove any old links
    linkUpdate.exit().remove();

    // Enter new links
    linkUpdate.enter().append("line")
        .attr("class", "link")
        .style("stroke", "black")
        .style("stroke-width", 1);

    // Update existing links
    linkUpdate.style("stroke", "black")
        .style("stroke-width", 1);

    // Update the nodes selection
    let nodeUpdate = nodeGroup.selectAll(".node")
        .data(filteredNodes, d => d.label);

    // Remove old nodes
    nodeUpdate.exit().remove();  // This removes all elements for nodes that are not in filteredNodes

    // Enter new nodes
    let nodeEnter = nodeUpdate.enter().append("g")
        .attr("class", "node")
        .call(force.drag);

    nodeEnter.append("circle")
        .attr("dy", 30)
        .attr("x", -40)
        .attr("y", -50)
        .attr("width", 80)
        .attr("height", 100)
        .attr("r", 100)
        .attr("class", function(d) { return "container " + d.tags; })
    ;

    nodeEnter.append("foreignObject")
        .attr("x", -62)
        .attr("y", -62)
        .attr("width", 125)
        .attr("height", 125)
        .append("xhtml:div")
            .style("display", "flex")
            .style("justify-content", "center")
            .style("align-items", "center")
            .style("width", "100%")
            .style("height", "100%")
            .style("text-align", "center")
            .text(d => d.name);


    // Restart the force layout simulation with collision detection
    force.nodes(filteredNodes)
        .links(filteredLinks)
        // .charge(-20)
        .linkDistance(250)
        .on("tick", function(e) {
            // Update node positions
            nodeUpdate.attr("transform", d => `translate(${d.x}, ${d.y})`);

            // Update link positions
            linkUpdate.attr("x1", d => d.source.x)
                .attr("y1", d => d.source.y)
                .attr("x2", d => d.target.x)
                .attr("y2", d => d.target.y);
        })
        .start();
}

// Initial call to render the graph
renderGraph(nodes, links);

// Call updateGraph() whenever the data changes (e.g., due to filtering)
updateGraph();


