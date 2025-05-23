import React, { useEffect, useState, useRef } from 'react';
import ForceGraph2D from 'react-force-graph-2d';

// Helper to flatten tree structure into nodes/links
function treeToGraph(tree, links = [], parent = null, nodes = []) {
  nodes.push({ ...tree });
  if (parent) {
    links.push({ source: parent.id, target: tree.id });
  }
  if (tree.children) {
    tree.children.forEach(child => treeToGraph(child, links, tree, nodes));
  }
  return { nodes, links };
}

// Color helpers
const colorMap = {
  'S3': ['#a259ff', '#f857a6'], // purple-pink
  'R3': ['#ff5858', '#ffb347'], // red-orange
  'C3': ['#ffe259', '#43cea2'], // yellow-green
  'root': ['#fff', '#fff']
};

function getNodeColor(node) {
  if (node.type === 'root') return '#fff';
  if (node.id.startsWith('S3')) return colorMap['S3'][0];
  if (node.id.startsWith('R3')) return colorMap['R3'][0];
  if (node.id.startsWith('C3')) return colorMap['C3'][0];
  return '#888';
}

const ArchitectureGraph = () => {
  const [fullData, setFullData] = useState(null); // full tree
  const [graphData, setGraphData] = useState({ nodes: [], links: [] });
  const [expanded, setExpanded] = useState({ SRC9: true });
  const [animPhase, setAnimPhase] = useState(0);
  const animRef = useRef();

  // Animate phase for link pulsing
  useEffect(() => {
    let frame;
    const animate = () => {
      setAnimPhase(phase => (phase + 0.03) % (2 * Math.PI));
      frame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(frame);
  }, []);

  // Helper: recursively collect visible nodes/links based on expanded state
  function collectVisible(tree, expandedMap, parent = null, nodes = [], links = []) {
    nodes.push({ ...tree });
    if (parent) links.push({ source: parent.id, target: tree.id });
    if (tree.children && expandedMap[tree.id]) {
      tree.children.forEach(child => collectVisible(child, expandedMap, tree, nodes, links));
    }
    return { nodes, links };
  }

  useEffect(() => {
    fetch('/SRC9/data/src9-architecture.json')
      .then(res => res.json())
      .then(data => {
        setFullData(data);
        // Start with only root expanded
        const { nodes, links } = collectVisible(data, { SRC9: true });
        // Add inter-module links if both ends are visible
        if (data.links) {
          data.links.forEach(link => {
            if (nodes.find(n => n.id === link.source) && nodes.find(n => n.id === link.target)) {
              links.push(link);
            }
          });
        }
        setGraphData({ nodes, links });
      });
  }, []);

  // Update graph when expanded state changes
  useEffect(() => {
    if (!fullData) return;
    const { nodes, links } = collectVisible(fullData, expanded);
    // Add inter-module links if both ends are visible
    if (fullData.links) {
      fullData.links.forEach(link => {
        if (nodes.find(n => n.id === link.source) && nodes.find(n => n.id === link.target)) {
          links.push(link);
        }
      });
    }
    setGraphData({ nodes, links });
  }, [expanded, fullData]);

  // Click to expand/collapse
  const handleNodeClick = node => {
    if (!node.children || node.children.length === 0) return;
    setExpanded(exp => ({ ...exp, [node.id]: !exp[node.id] }));
  };

  // Custom node drawing
  const nodeCanvasObject = (node, ctx, globalScale) => {
    const label = node.label;
    ctx.save();
    // Node size by type
    let r = 12;
    if (node.type === 'root') r = 22;
    else if (node.type === 'module') r = 18;
    else if (node.type === 'unit') r = 12;
    else if (node.type === 'node') r = 6;
    // Color
    let color = getNodeColor(node);
    // Glow for root and node
    if (node.type === 'root') {
      ctx.shadowColor = '#fff';
      ctx.shadowBlur = 32;
    } else if (node.type === 'node') {
      ctx.shadowColor = color;
      ctx.shadowBlur = 16;
    }
    // Draw circle
    ctx.beginPath();
    ctx.arc(node.x, node.y, r, 0, 2 * Math.PI, false);
    ctx.fillStyle = color;
    ctx.globalAlpha = 0.95;
    ctx.fill();
    ctx.globalAlpha = 1;
    ctx.shadowBlur = 0;
    // Orbiting mini-circles for units
    if (node.type === 'unit') {
      const miniCount = 6;
      const miniRadius = r + 10;
      for (let i = 0; i < miniCount; i++) {
        const angle = (2 * Math.PI * i) / miniCount + animPhase;
        const mx = node.x + miniRadius * Math.cos(angle);
        const my = node.y + miniRadius * Math.sin(angle);
        ctx.beginPath();
        ctx.arc(mx, my, 2.5, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.globalAlpha = 0.7;
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }
    // Draw label
    ctx.font = `${Math.max(10, r * 1.2)}px Inter, Arial`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#fff';
    if (node.type !== 'node') ctx.fillText(label, node.x, node.y - r - 10);
    ctx.restore();
  };

  // Custom link drawing
  const linkCanvasObject = (link, ctx) => {
    const isSpecial = link.type === 'inter-module' || link.type === 'feedback';
    const src = link.source, tgt = link.target;
    // Get node positions
    const x1 = typeof src === 'object' ? src.x : 0;
    const y1 = typeof src === 'object' ? src.y : 0;
    const x2 = typeof tgt === 'object' ? tgt.x : 0;
    const y2 = typeof tgt === 'object' ? tgt.y : 0;
    ctx.save();
    if (isSpecial) {
      // Glowing, dashed, animated
      ctx.strokeStyle = link.type === 'feedback' ? '#ffe259' : '#00fff7';
      ctx.lineWidth = 3;
      ctx.setLineDash([10, 10]);
      ctx.globalAlpha = 0.5 + 0.3 * Math.sin(animPhase * 2 + x1 + y1);
      ctx.shadowColor = ctx.strokeStyle;
      ctx.shadowBlur = 12;
    } else {
      // Tree link: subtle
      ctx.strokeStyle = '#444';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([]);
      ctx.globalAlpha = 0.7;
      ctx.shadowBlur = 0;
    }
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.globalAlpha = 1;
    ctx.shadowBlur = 0;
    ctx.restore();
  };

  return (
    <div style={{ width: '100%', height: '80vh', background: '#111' }}>
      <ForceGraph2D
        graphData={graphData}
        nodeId="id"
        linkDirectionalParticles={0}
        nodeLabel={node => `${node.label}${node.description ? `: ${node.description}` : ''}`}
        linkLabel={link => link.type || ''}
        nodeCanvasObject={nodeCanvasObject}
        linkCanvasObject={linkCanvasObject}
        onNodeClick={handleNodeClick}
      />
    </div>
  );
};

export default ArchitectureGraph; 