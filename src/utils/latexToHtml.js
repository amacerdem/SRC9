export const latexToHtml = (latex) => {
  // Basic LaTeX to HTML conversion
  let html = latex
    // Replace LaTeX document class and packages
    .replace(/\\documentclass.*?\n/, '')
    .replace(/\\usepackage.*?\n/g, '')
    .replace(/\\geometry.*?\n/, '')
    .replace(/\\title.*?\n/, '')
    .replace(/\\date.*?\n/, '')
    .replace(/\\begin\{document\}/, '')
    .replace(/\\end\{document\}/, '')
    
    // Convert sections
    .replace(/\\section\*\{([^}]+)\}/g, '<h1>$1</h1>')
    .replace(/\\subsection\*\{([^}]+)\}/g, '<h2>$1</h2>')
    .replace(/\\subsubsection\*\{([^}]+)\}/g, '<h3>$1</h3>')
    
    // Convert itemize environments
    .replace(/\\begin\{itemize\}/g, '<ul>')
    .replace(/\\end\{itemize\}/g, '</ul>')
    .replace(/\\item\s+(.*?)(?=\\item|\\end\{itemize\}|$)/g, '<li>$1</li>')
    
    // Convert math environments
    .replace(/\\\[(.*?)\\\]/g, '$$$1$$')
    .replace(/\$\$(.*?)\$\$/g, '$$$1$$')
    
    // Convert text formatting
    .replace(/\\textbf\{([^}]+)\}/g, '<strong>$1</strong>')
    .replace(/\\textit\{([^}]+)\}/g, '<em>$1</em>')
    
    // Convert tables
    .replace(/\\begin\{tabular\}(.*?)\\end\{tabular\}/gs, (match, content) => {
      const rows = content.split('\\\\').map(row => {
        const cells = row.split('&').map(cell => `<td>${cell.trim()}</td>`).join('');
        return `<tr>${cells}</tr>`;
      }).join('');
      return `<table class="border-collapse border border-gray-300">${rows}</table>`;
    })
    
    // Convert verbatim environments
    .replace(/\\begin\{verbatim\}(.*?)\\end\{verbatim\}/gs, (match, content) => {
      return `<pre class="bg-gray-100 p-4 rounded">${content}</pre>`;
    })
    
    // Convert center environments
    .replace(/\\begin\{center\}(.*?)\\end\{center\}/gs, (match, content) => {
      return `<div class="text-center">${content}</div>`;
    });

  return html;
}; 