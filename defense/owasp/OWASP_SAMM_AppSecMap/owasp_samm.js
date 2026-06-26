// Extracted from owasp_samm2_white_bg.html
// Exposes sendPrompt used by onclick attributes
let promptModal = null;
let lastPromptTrigger = null;
let promptCloseTimer = null;

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function buildSafeLink(url, label) {
  return '<a href="' + escapeHtml(url) + '" target="_blank" rel="noopener noreferrer">' + escapeHtml(label) + '</a>';
}

function renderPromptHTML(message) {
  const rawMessage = String(message ?? '').trim();
  if (!rawMessage) return '<p>No details available.</p>';

  const linkTokens = [];
  const tokenized = rawMessage.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, (_, label, url) => {
    const token = '__PROMPT_LINK_' + linkTokens.length + '__';
    linkTokens.push(buildSafeLink(url, label));
    return token;
  });

  let html = escapeHtml(tokenized);
  html = html.replace(/(https?:\/\/[^\s<]+)/g, url => buildSafeLink(url, url));
  linkTokens.forEach((tokenHtml, index) => {
    html = html.replace('__PROMPT_LINK_' + index + '__', tokenHtml);
  });

  const paragraphs = html
    .split(/\n\s*\n/)
    .map(block => block.trim())
    .filter(Boolean)
    .map(block => '<p>' + block.replace(/\n/g, '<br>') + '</p>');

  return paragraphs.join('');
}

function getPromptTrigger(triggerEl) {
  if (triggerEl?.getBoundingClientRect) return triggerEl;

  const activeElement = document.activeElement;
  if (activeElement?.getBoundingClientRect && activeElement !== document.body) {
    return activeElement;
  }

  const evt = window.event;
  const eventTarget = evt?.currentTarget || evt?.target;
  if (eventTarget?.getBoundingClientRect) return eventTarget;

  return null;
}

function setPromptAnimationOrigin(triggerEl) {
  if (!promptModal) return;

  const panelRect = promptModal.panel.getBoundingClientRect();
  const triggerRect = triggerEl?.getBoundingClientRect?.();

  if (!triggerRect || !panelRect.width || !panelRect.height) {
    promptModal.panel.style.setProperty('--prompt-from-x', '0px');
    promptModal.panel.style.setProperty('--prompt-from-y', '12px');
    promptModal.panel.style.setProperty('--prompt-from-scale-x', '0.96');
    promptModal.panel.style.setProperty('--prompt-from-scale-y', '0.96');
    return;
  }

  const triggerCenterX = triggerRect.left + (triggerRect.width / 2);
  const triggerCenterY = triggerRect.top + (triggerRect.height / 2);
  const panelCenterX = panelRect.left + (panelRect.width / 2);
  const panelCenterY = panelRect.top + (panelRect.height / 2);

  const deltaX = triggerCenterX - panelCenterX;
  const deltaY = triggerCenterY - panelCenterY;
  const scaleX = Math.min(1, Math.max(0.18, triggerRect.width / panelRect.width));
  const scaleY = Math.min(1, Math.max(0.14, triggerRect.height / panelRect.height));

  promptModal.panel.style.setProperty('--prompt-from-x', deltaX + 'px');
  promptModal.panel.style.setProperty('--prompt-from-y', deltaY + 'px');
  promptModal.panel.style.setProperty('--prompt-from-scale-x', scaleX.toFixed(3));
  promptModal.panel.style.setProperty('--prompt-from-scale-y', scaleY.toFixed(3));
}

function animatePromptOpen(triggerEl) {
  if (!promptModal) return;

  window.clearTimeout(promptCloseTimer);
  promptModal.root.classList.remove('closing', 'animate-in');
  promptModal.root.classList.add('open');
  promptModal.root.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');

  requestAnimationFrame(() => {
    setPromptAnimationOrigin(triggerEl);
    requestAnimationFrame(() => {
      promptModal.root.classList.add('animate-in');
      promptModal.closeBtn.focus();
    });
  });
}

function finishPromptClose() {
  if (!promptModal) return;
  promptModal.root.classList.remove('open', 'closing', 'animate-in');
  promptModal.root.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
  if (lastPromptTrigger && typeof lastPromptTrigger.focus === 'function') {
    lastPromptTrigger.focus();
  }
}

function closePromptModal() {
  if (!promptModal || !promptModal.root.classList.contains('open')) return;

  window.clearTimeout(promptCloseTimer);
  promptModal.root.classList.remove('animate-in');
  promptModal.root.classList.add('closing');
  promptCloseTimer = window.setTimeout(finishPromptClose, 220);
}

function ensurePromptModal() {
  if (promptModal) return promptModal;

  const root = document.createElement('div');
  root.className = 'prompt-modal';
  root.setAttribute('role', 'dialog');
  root.setAttribute('aria-modal', 'true');
  root.setAttribute('aria-hidden', 'true');

  const panel = document.createElement('div');
  panel.className = 'prompt-panel';

  const header = document.createElement('div');
  header.className = 'prompt-header';

  const title = document.createElement('h2');
  title.className = 'prompt-title';
  title.textContent = 'Hint details';

  const closeBtn = document.createElement('button');
  closeBtn.type = 'button';
  closeBtn.className = 'prompt-close';
  closeBtn.setAttribute('aria-label', 'Close hint details');
  closeBtn.innerHTML = '&times;';

  const content = document.createElement('div');
  content.className = 'prompt-content';

  header.appendChild(title);
  header.appendChild(closeBtn);
  panel.appendChild(header);
  panel.appendChild(content);
  root.appendChild(panel);
  document.body.appendChild(root);

  closeBtn.addEventListener('click', closePromptModal);
  root.addEventListener('click', (event) => {
    if (event.target === root) closePromptModal();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closePromptModal();
  });

  promptModal = { root, panel, content, closeBtn };
  return promptModal;
}

function sendPrompt(message, triggerEl) {
  try {
    // Log for debugging
    console.log('sendPrompt:', message);
    lastPromptTrigger = getPromptTrigger(triggerEl);
    const modal = ensurePromptModal();
    modal.content.innerHTML = renderPromptHTML(message);
    animatePromptOpen(lastPromptTrigger);
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

function getStreamFromLabel(label) {
  const match = String(label || '').match(/-(A|B)(?:\s|$)/i);
  return match ? match[1].toUpperCase() : '';
}

function applyToolMetadata(toolEl, label) {
  if (!toolEl || !label) return;

  const stream = getStreamFromLabel(label);
  if (stream) toolEl.dataset.stream = stream;
  if (!toolEl.dataset.primaryLabel) toolEl.dataset.primaryLabel = label;
}

function removeEmptyPlaceholderTsubs(scope) {
  if (!scope?.querySelectorAll) return;

  scope.querySelectorAll('.tsub').forEach(tsub => {
    const hasText = Boolean((tsub.textContent || '').trim());
    const hasChildNodes = tsub.children.length > 0;
    if (!hasText && !hasChildNodes) tsub.remove();
  });
}

function getToolStream(toolEl) {
  if (!toolEl) return 'A';

  if (toolEl.dataset.stream) return toolEl.dataset.stream;

  const markers = Array.from(toolEl.querySelectorAll('.tsub'));
  for (const marker of markers) {
    for (const cls of Array.from(marker.classList)) {
      const match = cls.match(/-(A|B)$/i);
      if (match) return match[1].toUpperCase();
    }
  }

  return 'A';
}

function ensurePracticeStreamColumns(practiceItemsEl) {
  if (!practiceItemsEl) return null;

  let streamACol = practiceItemsEl.querySelector(':scope > .col[data-stream="A"]');
  let streamBCol = practiceItemsEl.querySelector(':scope > .col[data-stream="B"]');

  if (!streamACol || !streamBCol) {
    const existingTools = Array.from(practiceItemsEl.querySelectorAll(':scope > .tool, :scope > .col > .tool'));
    practiceItemsEl.innerHTML = '';

    streamACol = document.createElement('div');
    streamACol.className = 'col';
    streamACol.dataset.stream = 'A';

    streamBCol = document.createElement('div');
    streamBCol.className = 'col';
    streamBCol.dataset.stream = 'B';

    practiceItemsEl.appendChild(streamACol);
    practiceItemsEl.appendChild(streamBCol);

    existingTools.forEach(toolEl => {
      const targetCol = getToolStream(toolEl) === 'B' ? streamBCol : streamACol;
      targetCol.appendChild(toolEl);
    });
  }

  return { A: streamACol, B: streamBCol };
}

function placeToolInStreamColumn(practiceEl, toolEl) {
  if (!practiceEl || !toolEl) return;

  const practiceItemsEl = practiceEl.querySelector('.practice-items');
  if (!practiceItemsEl) return;

  const columns = ensurePracticeStreamColumns(practiceItemsEl);
  if (!columns) return;

  const stream = getToolStream(toolEl);
  const targetCol = columns[stream] || columns.A;
  if (toolEl.parentElement !== targetCol) {
    targetCol.appendChild(toolEl);
  }
}

function alignToolsToStreams() {
  document.querySelectorAll('.practice').forEach(practiceEl => {
    const practiceItemsEl = practiceEl.querySelector('.practice-items');
    if (!practiceItemsEl) return;

    ensurePracticeStreamColumns(practiceItemsEl);
    Array.from(practiceEl.querySelectorAll('.tool')).forEach(toolEl => {
      placeToolInStreamColumn(practiceEl, toolEl);
    });
  });
}

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

  removeEmptyPlaceholderTsubs(body);

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
          placeToolInStreamColumn(practiceEl, toolEl);
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
              applyToolMetadata(toolEl, item.label);
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
                if (item.prompt) {
                  span.onclick = (event) => {
                    event.stopPropagation();
                    sendPrompt(item.prompt, event.currentTarget);
                  };
                }
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
                    applyToolMetadata(parentTool, item.label);
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
                      if (item.prompt) {
                        span.onclick = (event) => {
                          event.stopPropagation();
                          sendPrompt(item.prompt, event.currentTarget);
                        };
                      }
                      body.appendChild(span);
                    }

                    ensureToolStructure(parentTool);
                    return;
                  } else {
                    applyToolMetadata(target.closest('.tool'), item.label);
                    target.textContent = item.name || '';
                    target.onclick = item.prompt ? (event) => sendPrompt(item.prompt, event.currentTarget) : null;
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
      alignToolsToStreams();
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
        if (!tn) return;
        const name = tn.textContent.trim();
        for (let i = 0; i < toolsList.length; i++) {
          const cand = toolsList[i];
          if (cand.tname === name) {
            const label = cand.label;
            applyToolMetadata(toolEl, label);
            toolsList.splice(i,1);
            break;
          }
        }
        // ensure structure and collapsible behavior for existing tools
        ensureToolStructure(toolEl);
        placeToolInStreamColumn(prEl, toolEl);
      });
    });
    removeEmptyPlaceholderTsubs(document);
    alignToolsToStreams();
  }).catch(e => console.warn('annotateStaticTsubs: failed', e));
}

document.addEventListener('DOMContentLoaded', function(){
  ensurePromptModal();
  annotateStaticTsubs();
  populatePracticesFromJSON();
  window.addEventListener('resize', debounce(equalizePracticeHeights, 120));
});
