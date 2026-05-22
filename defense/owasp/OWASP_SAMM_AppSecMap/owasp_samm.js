// Extracted from owasp_samm2_white_bg.html
// Exposes sendPrompt used by onclick attributes
function sendPrompt(message) {
  try {
    // Log for debugging
    console.log('sendPrompt:', message);
    // Show a simple dialog (keeps existing behaviour visible). Replace as needed.
    alert(message);
  } catch (e) {
    console.error(e);
  }
}

// Optional: support keyboard / future enhancements
// Equalise practice heights across business functions so rows align
function equalizePracticeHeights() {
  const bodies = Array.from(document.querySelectorAll('.bf-body'));
  if (!bodies.length) return;
  const maxCount = Math.max(...bodies.map(b => b.querySelectorAll('.practice').length));

  // reset heights
  bodies.forEach(b => b.querySelectorAll('.practice').forEach(p => p.style.height = 'auto'));

  const maxHeights = new Array(maxCount).fill(0);
  for (let i = 0; i < maxCount; i++) {
    bodies.forEach(b => {
      const p = b.querySelectorAll('.practice')[i];
      if (p) {
        const h = p.getBoundingClientRect().height;
        if (h > maxHeights[i]) maxHeights[i] = h;
      }
    });
  }

  bodies.forEach(b => {
    const ps = b.querySelectorAll('.practice');
    ps.forEach((p, idx) => {
      if (maxHeights[idx]) p.style.height = maxHeights[idx] + 'px';
    });
  });
}

// Debounce helper
function debounce(fn, wait){
  let t;
  return function(){ clearTimeout(t); t = setTimeout(() => fn(), wait); };
}

// Collapsible threshold
const COLLAPSE_THRESHOLD = 5;

// Ensure tool DOM structure: .tname (always visible) + .tool-body (holds .tsub spans)
function ensureToolStructure(toolEl) {
  if (!toolEl) return;
  // move any loose .tsub into .tool-body
  let body = toolEl.querySelector('.tool-body');
  if (!body) {
    body = document.createElement('div');
    body.className = 'tool-body';
    // move existing tsub spans into body
    Array.from(toolEl.querySelectorAll('.tsub')).forEach(s => body.appendChild(s));
    toolEl.appendChild(body);
  }

  const tsubsCount = body.querySelectorAll('.tsub').length;
  let toggle = toolEl.querySelector('.toggle-btn');

  if (tsubsCount > COLLAPSE_THRESHOLD) {
    toolEl.classList.add('collapsible');
    if (!toggle) {
      toggle = document.createElement('button');
      toggle.className = 'toggle-btn';
      toggle.setAttribute('aria-expanded', 'false');
      toggle.innerHTML = '&#x25BC; (' + tsubsCount + ')'; // down-triangle
      // place toggle inside .tname if exists
      const tn = toolEl.querySelector('.tname');
      if (tn) tn.appendChild(toggle);

      toggle.addEventListener('click', (e) => {
        e.stopPropagation();
        const practiceEl = toolEl.closest('.practice');
        if (!practiceEl) return;
        // Determine row index within its bf-body
        const siblingPractices = Array.from(practiceEl.parentNode.querySelectorAll('.practice'));
        const rowIndex = siblingPractices.indexOf(practiceEl);
        // collect practices at same row index across all bf bodies
        const bodies = Array.from(document.querySelectorAll('.bf-body'));
        const rowPractices = bodies.map(b => b.querySelectorAll('.practice')[rowIndex]).filter(Boolean);

        const wasCollapsed = toolEl.classList.contains('collapsed');
        const nowCollapsed = !wasCollapsed;
        // toggle collapsed state
        if (nowCollapsed) toolEl.classList.add('collapsed'); else toolEl.classList.remove('collapsed');

        // Update aria and label
        toggle.setAttribute('aria-expanded', (!nowCollapsed).toString());
        toggle.innerHTML = (nowCollapsed ? '&#x25BC; (' + tsubsCount + ')' : '&#x25B2; (' + tsubsCount + ')');

        if (!nowCollapsed) {
          // expanding: redistribute heights within the row so total height stays constant
          const totalHeight = rowPractices.reduce((s,p) => s + p.getBoundingClientRect().height, 0);
          const expandedWeight = Math.min(6, 1 + Math.ceil(tsubsCount / COLLAPSE_THRESHOLD) + 1);
          const sumWeights = expandedWeight + (rowPractices.length - 1) * 1;

          rowPractices.forEach(p => {
            if (p === practiceEl) {
              const newH = Math.floor(totalHeight * expandedWeight / sumWeights);
              p.style.height = newH + 'px';
            } else {
              const newH = Math.floor(totalHeight * 1 / sumWeights);
              p.style.height = newH + 'px';
            }
          });
        } else {
          // collapsing: restore equal heights across the row
          equalizePracticeHeights();
        }
      });

      // collapse by default to avoid cutting off other boxes
      toolEl.classList.add('collapsed');
    } else {
      // update count / label
      toggle.innerHTML = (toolEl.classList.contains('collapsed') ? '&#x25BC; (' + tsubsCount + ')' : '&#x25B2; (' + tsubsCount + ')');
      toggle.setAttribute('aria-expanded', (!toolEl.classList.contains('collapsed')).toString());
    }
  } else {
    toolEl.classList.remove('collapsible');
    toolEl.classList.remove('collapsed');
    if (toggle) toggle.remove();
  }
}

// Load practices data from JSON and populate existing static DOM, grouping items by exact tname
function populatePracticesFromJSON() {
  fetch('data/practices.json')
    .then(res => res.json())
    .then(data => {
      // Normalize: support both grouped (practices with .tools) and flattened list
      let items = [];
      if (Array.isArray(data) && data.length && data[0] && data[0].tools) {
        data.forEach(pr => {
          (pr.tools || []).forEach(t => {
            items.push({
              label: t.label,
              tname: t.tname,
              name: t.name,
              prompt: t.prompt,
              bf: pr.bf,
              practice_id: pr.id,
              practice_title: pr.title
            });
          });
        });
      } else if (Array.isArray(data)) {
        items = data;
      } else {
        console.warn('populatePracticesFromJSON: unexpected JSON shape', data);
        return;
      }

      // Group items by practice_title then by exact tname
      const grouped = {}; // { practiceTitle: { tname: [items] } }
      items.forEach(item => {
        const pTitle = (item.practice_title || item.title || '').trim();
        const tname = (item.tname || '').trim();
        if (!grouped[pTitle]) grouped[pTitle] = {};
        if (!grouped[pTitle][tname]) grouped[pTitle][tname] = [];
        grouped[pTitle][tname].push(item);
      });

      Object.keys(grouped).forEach(pTitle => {
        const practiceEl = Array.from(document.querySelectorAll('.practice')).find(pr => {
          const h = pr.querySelector('.practice-header');
          return h && h.textContent.trim() === pTitle;
        });

        // For each tname group, ensure there's a separate .tool box titled with the exact tname
        Object.keys(grouped[pTitle]).forEach(tname => {
          const itemsForTname = grouped[pTitle][tname];
          if (!tname) return; // skip empty tname groups

          if (practiceEl) {
            const practiceItemsEl = practiceEl.querySelector('.practice-items');

            // Find exact-match tool element by full tname
            let toolEl = Array.from(practiceEl.querySelectorAll('.tool')).find(t => {
              const tn = t.querySelector('.tname');
              return tn && tn.textContent.trim() === tname;
            });

            // If not found, create a new tool box and set its tname to the exact tname
            if (!toolEl) {
              // Use an existing tool's class for styling if available, otherwise 'tool'
              const sampleTool = practiceEl.querySelector('.tool');
              toolEl = document.createElement('div');
              toolEl.className = sampleTool ? sampleTool.className : 'tool';
              // Do not set a global onclick on the tool; individual spans will handle prompts
              const tnSpan = document.createElement('span');
              tnSpan.className = 'tname';
              tnSpan.textContent = tname;
              toolEl.appendChild(tnSpan);
              // create body wrapper for tsubs
              const body = document.createElement('div');
              body.className = 'tool-body';
              toolEl.appendChild(body);
              practiceItemsEl.appendChild(toolEl);
            }

            // Append each item as its own span inside the tool box's body
            const container = toolEl.querySelector('.tool-body') || toolEl;
            itemsForTname.forEach(item => {
              const labelClass = item.label || '';
              const className = 'tsub' + (labelClass ? ' ' + labelClass : '');
              const existingSame = Array.from(container.querySelectorAll('.tsub')).some(s => {
                const classesMatch = labelClass ? s.classList.contains(labelClass) : true;
                const textMatch = (s.textContent || '').trim() === (item.name || '').trim();
                return classesMatch && textMatch;
              });
              if (!existingSame) {
                const span = document.createElement('span');
                span.className = className;
                span.textContent = item.name || '';
                if (item.prompt) span.onclick = () => sendPrompt(item.prompt);
                container.appendChild(span);
              }
            });

            // ensure wrapped and collapsible if needed
            ensureToolStructure(toolEl);

          } else {
            // No matching practice element found in DOM: fallback to label-based placement for each item
            grouped[pTitle][tname].forEach(item => {
              if (item.label) {
                const target = document.querySelector('.tsub.' + CSS.escape(item.label));
                if (target) {
                  const parentTool = target.closest('.tool');
                  if (parentTool) {
                    // ensure parent has tool-body
                    let body = parentTool.querySelector('.tool-body');
                    if (!body) {
                      body = document.createElement('div');
                      body.className = 'tool-body';
                      Array.from(parentTool.querySelectorAll('.tsub')).forEach(s => body.appendChild(s));
                      parentTool.appendChild(body);
                    }

                    const labelClass = item.label || '';
                    const className = 'tsub' + (labelClass ? ' ' + labelClass : '');
                    const existingSame = Array.from(body.querySelectorAll('.tsub')).some(s => {
                      const classesMatch = labelClass ? s.classList.contains(labelClass) : true;
                      const textMatch = (s.textContent || '').trim() === (item.name || '').trim();
                      return classesMatch && textMatch;
                    });
                    if (!existingSame) {
                      const span = document.createElement('span');
                      span.className = className;
                      span.textContent = item.name || '';
                      if (item.prompt) span.onclick = () => sendPrompt(item.prompt);
                      body.appendChild(span);
                    }

                    ensureToolStructure(parentTool);
                    return;
                  } else {
                    target.textContent = item.name || '';
                    target.onclick = item.prompt ? () => sendPrompt(item.prompt) : null;
                    return;
                  }
                }
              }
              console.warn('populatePracticesFromJSON: could not place item (no practice and no label target)', item);
            });
          }
        });
      });

      // Recalculate heights after DOM updates
      equalizePracticeHeights();
    })
    .catch(err => console.error('Failed to load practices.json', err));
}

// Annotate any existing static .tsub spans with label classes from practices.json
function annotateStaticTsubs() {
  // Ensure existing static .tsub spans have the corresponding label class, without changing displayed text
  fetch('data/practices.json').then(r => r.json()).then(data => {
    const lookup = {};

    // Support grouped structure or flattened list
    if (Array.isArray(data) && data.length && data[0] && data[0].tools) {
      data.forEach(pr => {
        lookup[pr.title] = (pr.tools || []).map(t => ({ tname: t.tname, label: t.label }));
      });
    } else if (Array.isArray(data)) {
      // flattened: group by practice_title
      data.forEach(item => {
        const title = item.practice_title || item.title || 'unknown';
        lookup[title] = lookup[title] || [];
        lookup[title].push({ tname: item.tname, label: item.label });
      });
    }

    document.querySelectorAll('.practice').forEach(prEl => {
      const header = prEl.querySelector('.practice-header');
      if (!header) return;
      const title = header.textContent.trim();
      const toolsList = lookup[title] ? lookup[title].slice() : [];

      const toolEls = prEl.querySelectorAll('.tool');
      toolEls.forEach(toolEl => {
        const tn = toolEl.querySelector('.tname');
        const ts = toolEl.querySelector('.tsub');
        if (!tn || !ts) return;
        const name = tn.textContent.trim();
        for (let i = 0; i < toolsList.length; i++) {
          const cand = toolsList[i];
          if (cand.tname === name) {
            const label = cand.label;
            if (label) {
              ts.classList.add(label);
            }
            toolsList.splice(i,1);
            break;
          }
        }
        // ensure structure and collapsible behavior for existing tools
        ensureToolStructure(toolEl);
      });
    });
  }).catch(e => console.warn('annotateStaticTsubs: failed', e));
}

document.addEventListener('DOMContentLoaded', function(){
  annotateStaticTsubs();
  populatePracticesFromJSON();
  window.addEventListener('resize', debounce(equalizePracticeHeights, 120));
});
