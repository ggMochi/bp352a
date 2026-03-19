// Mapeamento de categorias de indicadores
const indicatorCategories = {
  'NTD': 'Doenças Tropicais Negligenciadas',
  'MALA': 'Malária',
  'HIV': 'HIV/AIDS',
  'TUB': 'Tuberculose',
  'CHOLERA': 'Cólera',
  'MENINGITIS': 'Meningite'
};

// Busca indicadores na API
async function fetchIndicators() {
  const input = document.getElementById('searchInput').value.trim();
  const resultsDiv = document.getElementById('results');
  
  if (!input) {
    showError("Por favor, digite um termo de busca");
    return;
  }

  resultsDiv.innerHTML = `
    <div class="loading">
      <div class="spinner"></div>
      <p>Buscando indicadores...</p>
    </div>
  `;
  
  try {
    const proxy = 'https://corsproxy.io/?';
    const apiUrl = `https://ghoapi.azureedge.net/api/Indicator?$filter=startswith(IndicatorCode, '${input}')`;
    const url = proxy + encodeURIComponent(apiUrl);
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Erro na API: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (data.value && data.value.length > 0) {
      displayResults(data.value, input);
    } else {
      showError(`Nenhum indicador encontrado com o termo "${input}". Tente termos como NTD, MALA ou HIV.`);
    }
  } catch (error) {
    showError(`Erro ao buscar indicadores: ${error.message}`);
    console.error("Erro detalhado:", error);
  }
}

// Exibe os resultados na página
function displayResults(indicators, searchTerm) {
  const resultsDiv = document.getElementById('results');
  
  // Ordena os indicadores por código
  indicators.sort((a, b) => a.IndicatorCode.localeCompare(b.IndicatorCode));
  
  // Agrupa por categoria quando a busca é ampla
  const isBroadSearch = searchTerm.length <= 4;
  const groupedIndicators = isBroadSearch ? groupIndicators(indicators) : null;
  
  let html = `
    <h2>${indicators.length} Indicadores Encontrados</h2>
    <div class="search-info">
      <p>Termo buscado: <strong>${searchTerm}</strong></p>
    </div>
  `;
  
  if (isBroadSearch && groupedIndicators) {
    // Mostra agrupado por categoria
    Object.entries(groupedIndicators).forEach(([category, items]) => {
      const categoryName = indicatorCategories[category] || category;
      html += `
        <div class="category-group">
          <h3 class="category-title">${categoryName}</h3>
          <div class="indicators-list">
            ${items.map(indicator => createIndicatorCard(indicator)).join('')}
          </div>
        </div>
      `;
    });
  } else {
    // Mostra lista simples
    html += `
      <div class="indicators-list">
        ${indicators.map(indicator => createIndicatorCard(indicator)).join('')}
      </div>
    `;
  }
  
  resultsDiv.innerHTML = html;
}

// Agrupa indicadores por categoria
function groupIndicators(indicators) {
  return indicators.reduce((acc, indicator) => {
    // Extrai o prefixo do código (ex: NTD_LEISH -> NTD)
    const category = indicator.IndicatorCode.split('_')[0];
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(indicator);
    return acc;
  }, {});
}

// Cria o HTML para um card de indicador
function createIndicatorCard(indicator) {
  return `
    <div class="indicator-item" onclick="copyToClipboard('${indicator.IndicatorCode}')">
      <div class="indicator-code">${indicator.IndicatorCode}</div>
      <div class="indicator-name">${indicator.IndicatorName || 'Descrição não disponível'}</div>
      ${indicator.Definition ? `
        <div class="indicator-definition">
          <p>${indicator.Definition}</p>
        </div>` : ''}
    </div>
  `;
}

// Copia o código do indicador para a área de transferência
function copyToClipboard(text) {
  navigator.clipboard.writeText(text)
    .then(() => {
      // Feedback visual
      const originalText = event.currentTarget.querySelector('.indicator-code').textContent;
      event.currentTarget.querySelector('.indicator-code').textContent = 'Copiado!';
      event.currentTarget.style.backgroundColor = '#e8f5e9';
      
      setTimeout(() => {
        event.currentTarget.querySelector('.indicator-code').textContent = originalText;
        event.currentTarget.style.backgroundColor = '';
      }, 2000);
    })
    .catch(err => {
      console.error('Falha ao copiar: ', err);
      showError('Copiado para Área de Transferência');
    });
}

// Mostra mensagem de erro
function showError(message) {
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = `
    <div class="error">
      <p>${message}</p>
      <button onclick="fetchIndicators()">Voltar para pagina anterior</button>
    </div>
  `;
}

// Busca um exemplo
function searchExample(term) {
  document.getElementById('searchInput').value = term;
  fetchIndicators();
}

// Busca ao pressionar Enter
document.getElementById('searchInput').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') fetchIndicators();
});

// Busca automática ao carregar
document.addEventListener('DOMContentLoaded', () => {
  // Pode adicionar uma busca inicial se desejar
    document.getElementById('searchInput').value = 'HIV';
   fetchIndicators();
});