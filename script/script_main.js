// Mapeamento de indicadores para títulos
const indicatorTitles = {
  'NTD_LEISHCNUM': 'Casos de Leishmaniose Cutânea',
  'NTD_LEISHVNUM': 'Casos de Leishmaniose Visceral',
  'NTD_LEPR3': 'Casos de Hanseníase em Tratamento',
  'NTD_LEPR8': 'Novos Casos de Hanseníase em Crianças (<15 anos)',
  'NTD_LEPR4': 'Taxa de Prevalência de Hanseníase',
  'NTD_RAB2': 'Mortes por Raiva Humana',
  'NTD_7': 'População em Áreas de Risco para Tracoma',
  'NTD_8': 'Pessoas Tratadas para Tracoma',
  'MALARIA_CONF_CASES': 'Casos de Malária',
  'MALARIA_INDIG': 'Casos de Malária em Áreas Indígenas',
  'NTD_TSOL1': 'Endemicidade de Taenia'
};
const hanseniaseData = {
  name: "Hanseníase",
  description: "Doença infecciosa crônica que atinge a pele e os nervos, também conhecida como lepra.",
  causativeAgent: "Mycobacterium leprae",
  symptoms: "Manchas esbranquiçadas ou avermelhadas na pele, com perda de sensibilidade, formigamento e fraqueza muscular.",
  incubationPeriod: "De 2 a 7 anos",
  treatment: "Poliquimioterapia gratuita oferecida pelo SUS, com antibióticos combinados.",
  treatmentDuration: "De 6 a 12 meses, dependendo do tipo",
  prevention: "Diagnóstico e tratamento precoce são as melhores formas de evitar a transmissão.",
  vaccine: "BCG pode ajudar na proteção",
  source: {
    name: "Ministério da Saúde - Hanseníase",
    url: "https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/h/hanseniase"
  }
};

const tracomaData = {
  name: "Tracoma",
  description: "Infecção nos olhos que pode causar cegueira se não tratada. É transmitida pelo contato com secreções oculares.",
  causativeAgent: "Chlamydia trachomatis",
  symptoms: "Olhos vermelhos, coceira, secreção e sensação de areia nos olhos.",
  incubationPeriod: "De 5 a 12 dias",
  treatment: "Antibióticos como azitromicina ou tetraciclina ocular.",
  treatmentDuration: "De 1 a 6 semanas, dependendo da gravidade",
  prevention: "Higiene facial, lavar o rosto, evitar compartilhamento de toalhas.",
  vaccine: "Não existe vacina",
  source: {
    name: "Ministério da Saúde - Tracoma",
    url: "https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/t/tracoma"
  }
};

const malariaData = {
  name: "Malária",
  description: "Doença infecciosa transmitida pela picada de mosquito infectado, comum em regiões tropicais.",
  causativeAgent: "Parasitas do gênero Plasmodium",
  symptoms: "Febre alta, calafrios, suor excessivo, dor de cabeça, náusea e cansaço.",
  incubationPeriod: "De 7 a 30 dias",
  treatment: "Medicamentos antimaláricos, variando com a espécie do parasita.",
  treatmentDuration: "Em geral, de 3 a 7 dias",
  prevention: "Uso de mosquiteiros, repelentes, telas nas janelas e controle do mosquito.",
  vaccine: "Sim, em uso limitado (ex: RTS,S para crianças na África)",
  source: {
    name: "Ministério da Saúde - Malária",
    url: "https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/m/malaria"
  }
};

const diseaseInfo = {
  'NTD_LEISHCNUM': {
    name: "Leishmaniose Cutânea",
    description: "Doença causada por um protozoário transmitido pela picada de um mosquito conhecido como mosquito-palha.",
    causativeAgent: "Leishmania braziliensis",
    symptoms: "Feridas na pele com bordas elevadas, que não doem e podem durar muito tempo. Podem deixar cicatrizes.",
    treatment: "Medicamentos específicos como Glucantime®, anfotericina B ou miltefosina.",
    treatmentDuration: "Cerca de 20 a 30 dias",
    prevention: "Usar repelente, telas nas janelas, roupas compridas e evitar áreas de mato ao amanhecer e anoitecer.",
    source: {
      name: "Ministério da Saúde - Leishmaniose Tegumentar",
      url: "https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/l/lt"
    }
  },

  'NTD_LEISHVNUM': {
    name: "Leishmaniose Visceral",
    description: "Doença grave causada por um protozoário, também transmitido pela picada do mosquito-palha.",
    causativeAgent: "Leishmania infantum",
    symptoms: "Febre prolongada, fraqueza, barriga inchada (aumento do fígado e baço), emagrecimento e anemia.",
    treatment: "Medicamentos como Glucantime®, anfotericina B ou miltefosina.",
    treatmentDuration: "Cerca de 20 a 30 dias",
    prevention: "Uso de repelente, telas, roupas protetoras e combate ao mosquito.",
    source: {
      name: "Ministério da Saúde - Leishmaniose Visceral",
      url: "https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/l/leishmaniose-visceral"
    }
  },

  'NTD_RAB2': {
    name: "Raiva",
    description: "Doença viral grave transmitida principalmente pela mordida de animais como cães e morcegos infectados.",
    causativeAgent: "Vírus da raiva",
    symptoms: "Febre, dor de cabeça, confusão, agitação, medo da água e paralisia. Sem tratamento, leva à morte.",
    incubationPeriod: "De 1 a 3 meses (pode variar)",
    treatment: "Após a exposição: vacina contra raiva e soro antirrábico. Após sintomas: não há tratamento eficaz.",
    treatmentDuration: "Esquema de vacina por 14 dias (em média)",
    prevention: "Vacinar animais domésticos, evitar contato com animais desconhecidos ou silvestres.",
    vaccine: "Sim, para prevenção e após exposição",
    source: {
      name: "Ministério da Saúde - Raiva",
      url: "https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/r/raiva"
    }
  },

  'NTD_TSOL1': {
    name: "Infecção por Taenia solium (Teníase e Cisticercose)",
    description: "Infecção causada por um verme (tênia) que pode viver no intestino ou se espalhar pelo corpo.",
    causativeAgent: "Taenia solium",
    symptoms: "Teníase: dor abdominal, perda de peso, náusea. Cisticercose: pode afetar o cérebro, causando convulsões.",
    incubationPeriod: "Teníase: dias a semanas; Cisticercose: meses a anos",
    treatment: "Medicamentos antiparasitários como praziquantel ou albendazol.",
    treatmentDuration: "Em geral, de 1 a 15 dias, dependendo da forma da doença",
    prevention: "Evitar carne de porco mal cozida, lavar bem os alimentos e mãos.",
    vaccine: "Não disponível para humanos",
    source: {
      name: "Secretaria de Estado da Saúde de São Paulo - Taenia solium",
      url: "https://www.saude.sp.gov.br/resources/cve-centro-de-vigilancia-epidemiologica/areas-de-vigilancia/doencas-transmitidas-por-agua-e-alimentos/doc/parasitas/taenia_solium.pdf"
    }
  },

  // Referências múltiplas apontando para o mesmo conteúdo
  'NTD_LEPR3': hanseniaseData,
  'NTD_LEPR8': hanseniaseData,
  'NTD_LEPR4': hanseniaseData,

  'NTD_7': tracomaData,
  'NTD_8': tracomaData,

  'MALARIA_CONF_CASES': malariaData,
  'MALARIA_INDIG': malariaData,
};


let selectedIndicator = 'NTD_LEISHVNUM';
let selectedCountry = 'BRA';
let chartInstance = null;

async function fetchData() {
  const url = `/.netlify/functions/fetchData?indicator=${selectedIndicator}&country=${selectedCountry}`;

  try {
    document.getElementById('mainResult').innerHTML = '<div class="loading">Carregando dados...</div>';

    const response = await fetch(url);

    if (!response.ok) throw new Error(`Erro HTTP: ${response.status}`);

    const data = await response.json();

    if (!data.value || data.value.length === 0) {
      throw new Error('Nenhum dado encontrado para o país selecionado');
    }

    const processedRecords = data.value.map(record => ({
      ...record,
      TimeDim: record.TimeDim || null,
      Value: record.Value || 'Não disponível',
      NumericValue: record.NumericValue ?? null
    }));

    displayAllData(processedRecords);

  } catch (error) {
    showError(error);
  }
}

function displayStatusData(records) {
  const mainDiv = document.getElementById('mainResult');
  const latestRecord = records[0];
  
  const html = `
    <div class="data-grid">
      <div class="data-item">
        <div class="data-label">Status Atual</div>
        <div class="data-value">${latestRecord.Value}</div>
      </div>
      <div class="data-item">
        <div class="data-label">Última Atualização</div>
        <div class="data-value">${latestRecord.Date ? new Date(latestRecord.Date).toLocaleDateString('pt-BR') : 'Não disponível'}</div>
      </div>
    </div>
    <div class="data-warning">
      <p>Este é um indicador de status. Dados temporais podem não estar disponíveis.</p>
    </div>
  `;
  
  mainDiv.innerHTML = html;
  document.getElementById('detailedResults').innerHTML = '';
  document.getElementById('statsSummary').innerHTML = '';
}

function displayNumericalData(records) {
  const sortedRecords = [...records].sort((a, b) => (b.TimeDim || 0) - (a.TimeDim || 0));
  displayMainResults(sortedRecords);
  displayDetailedTable(sortedRecords);
  displayStatsSummary(sortedRecords);
}

function displayDiseaseInfo(indicator) {
  const info = diseaseInfo[indicator];
  const infoDiv = document.getElementById('diseaseInfoContent');
  
  if (!info) {
    infoDiv.innerHTML = '<p class="no-data">Informações não disponíveis para esta doença.</p>';
    return;
  }

  let sourceHtml = '';
  if (info.source) {
   sourceHtml = `
  <div class="source-info">
    <p>Mais informações em:</p>
    <a href="${info.source.url}" target="_blank" rel="noopener noreferrer">
      ${info.source.name}
    </a>
  </div>
`;
  }

  infoDiv.innerHTML = `
    <div class="disease-info-content">
      <div class="disease-fact">
        <h3>Descrição</h3>
        <p>${info.description}</p>
      </div>
      
      <div class="disease-fact">
        <h3>Sintomas</h3>
        <p>${info.symptoms}</p>
      </div>
      
      <div class="disease-fact">
        <h3>Tratamento</h3>
        <p>${info.treatment}</p>
      </div>
      
      <div class="disease-fact">
        <h3>Prevenção</h3>
        <p>${info.prevention}</p>
      </div>
      
      ${sourceHtml}
    </div>
  `;
}
function onIndicatorChange() {
  selectedIndicator = document.getElementById('indicatorSelector').value;
  document.getElementById('indicatorTitle').textContent = indicatorTitles[selectedIndicator] + ' no Brasil';
  displayDiseaseInfo(selectedIndicator);
  fetchData();
}

function displayAllData(records) {
  const filteredRecords = records.filter(record => record.SpatialDim === selectedCountry);
  
  if (filteredRecords.length === 0) {
    document.getElementById('mainResult').innerHTML = '<p class="no-data">Nenhum dado disponível para o Brasil.</p>';
    return;
  }

  const isStatusIndicator = filteredRecords.every(record => record.NumericValue === null);

  if (isStatusIndicator) {
    displayStatusData(filteredRecords);
  } else {
    displayNumericalData(filteredRecords);
  }
  
  displayMetadata(filteredRecords[0]);
}

function displayMainResults(records) {
      const mainDiv = document.getElementById('mainResult');
      
      // Encontrar o registro mais recente com dados válidos
      let latestRecord = records.find(r => r.NumericValue !== null) || records[0];
      
      let html = `
        <div class="data-grid">
          <div class="data-item">
            <div class="data-label">Último Ano com Dados</div>
            <div class="data-value">${latestRecord.TimeDim}</div>
          </div>
          
          <div class="data-item">
            <div class="data-label">Valor Reportado</div>
            <div class="data-value">${
              latestRecord.NumericValue !== null ? 
              formatValue(latestRecord.NumericValue, selectedIndicator) : 
              `<span class="no-data">${latestRecord.Value || 'Sem dados'}</span>`
            }</div>
          </div>
          
          <div class="data-item">
            <div class="data-label">Região</div>
            <div class="data-value">${latestRecord.ParentLocation || 'Não especificado'}</div>
          </div>
          
          <div class="data-item">
            <div class="data-label">Última Atualização</div>
            <div class="data-value">${new Date(latestRecord.Date).toLocaleDateString('pt-BR')}</div>
          </div>
        </div>
      `;
      
      mainDiv.innerHTML = html;
}

function formatValue(value, indicator) {
      // Formatação especial para diferentes tipos de indicadores
      if (indicator === 'NTD_LEPR4' || indicator === 'NTD_LEPR8') {
        return `${value.toLocaleString('pt-BR')} por milhão`;
      }
      return value.toLocaleString('pt-BR');
}

function displayDetailedTable(records) {
      const detailedDiv = document.getElementById('detailedResults');
      
      let html = `
        <table>
          <thead>
            <tr>
              <th>Ano</th>
              <th>Valor Reportado</th>
              <th>Período</th>
              <th>Data de Atualização</th>
            </tr>
          </thead>
          <tbody>
      `;
      
      records.forEach(record => {
        html += `
          <tr>
            <td>${record.TimeDim}</td>
            <td>${
              record.NumericValue !== null ? 
              formatValue(record.NumericValue, selectedIndicator) : 
              `<span class="no-data">${record.Value || 'Sem dados'}</span>`
            }</td>
            <td>${formatPeriod(record.TimeDimensionBegin, record.TimeDimensionEnd)}</td>
            <td>${new Date(record.Date).toLocaleDateString('pt-BR')}</td>
          </tr>
        `;
      });
      
      html += `</tbody></table>`;
      detailedDiv.innerHTML = html;
}

function displayMetadata(record) {
      const metadataDiv = document.getElementById('metadataResults');
      
      let html = `
        <div class="data-grid">
          <div class="data-item">
            <div class="data-label">Código do Indicador</div>
            <div class="data-value">${record.IndicatorCode}</div>
          </div>
          
          <div class="data-item">
            <div class="data-label">Tipo de Dado Geográfico</div>
            <div class="data-value">${record.SpatialDimType || 'Não especificado'}</div>
          </div>
          
          <div class="data-item">
            <div class="data-label">Região Pai</div>
            <div class="data-value">${record.ParentLocation || 'N/A'} (${record.ParentLocationCode || 'N/A'})</div>
          </div>
          
          <div class="data-item">
            <div class="data-label">Fonte dos Dados</div>
            <div class="data-value">${record.DataSourceDim || 'Não especificada'}</div>
          </div>
          
          ${record.Comments ? `
          <div class="data-item">
            <div class="data-label">Comentários</div>
            <div class="data-value">${record.Comments}</div>
          </div>
          ` : ''}
        </div>
      `;
      
      metadataDiv.innerHTML = html;
}

function displayStatsSummary(records) {
      const statsDiv = document.getElementById('statsSummary');
      
      const anosComDado = records.filter(r => r.NumericValue !== null);
      const anosSemDado = records.length - anosComDado.length;
      
      // Cálculos estatísticos básicos
      const valores = anosComDado.map(r => r.NumericValue);
      const total = valores.reduce((sum, val) => sum + val, 0);
      const media = valores.length > 0 ? total / valores.length : 0;
      const maxVal = Math.max(...valores);
      const minVal = Math.min(...valores);
      
      const anos = records.map(r => r.TimeDim);
      const periodo = `${Math.min(...anos)} - ${Math.max(...anos)}`;
      
      statsDiv.innerHTML = `
        <div class="data-grid">
          <div class="data-item">
            <div class="data-label">Período de Dados</div>
            <div class="data-value">${periodo}</div>
          </div>
          
          <div class="data-item">
            <div class="data-label">Total no Período</div>
            <div class="data-value">${total.toLocaleString('pt-BR')}</div>
          </div>
          
          <div class="data-item">
            <div class="data-label">Média Anual</div>
            <div class="data-value">${media.toLocaleString('pt-BR', {maximumFractionDigits: 2})}</div>
          </div>
          
          <div class="data-item">
            <div class="data-label">Anos sem Dados</div>
            <div class="data-value">${anosSemDado}</div>
          </div>
          
          <div class="data-item">
            <div class="data-label">Valor Máximo</div>
            <div class="data-value">${maxVal.toLocaleString('pt-BR')} (${records.find(r => r.NumericValue === maxVal).TimeDim})</div>
          </div>
          
          <div class="data-item">
            <div class="data-label">Valor Mínimo</div>
            <div class="data-value">${minVal.toLocaleString('pt-BR')} (${records.find(r => r.NumericValue === minVal).TimeDim})</div>
          </div>
        </div>
      `;
      
      drawChart(records);
}

function drawChart(records) {
      const canvas = document.getElementById('simpleChart');
      const ctx = canvas.getContext('2d');
      
    // Destruir o gráfico anterior se existir
      if (chartInstance) {
        chartInstance.destroy();
      }
      
      // Preparar dados para o gráfico
      const sortedRecords = [...records].sort((a, b) => a.TimeDim - b.TimeDim);
      const labels = sortedRecords.map(r => r.TimeDim);
      const dataValues = sortedRecords.map(r => r.NumericValue);
      
      // Configuração do gráfico
      chartInstance = new Chart(ctx, {
        type: 'line',
        data: {
          labels: labels,
          datasets: [{
            label: indicatorTitles[selectedIndicator],
            data: dataValues,
            backgroundColor: 'rgba(0, 109, 119, 0.2)',
            borderColor: 'rgba(0, 109, 119, 1)',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(0, 109, 119, 1)',
            pointRadius: 4,
            pointHoverRadius: 6,
            fill: true
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Valor Reportado'
              }
            },
            x: {
              title: {
                display: true,
                text: 'Ano'
              }
            }
          },
          plugins: {
            tooltip: {
              callbacks: {
                label: function(context) {
                  return `${indicatorTitles[selectedIndicator]}: ${context.parsed.y.toLocaleString('pt-BR')}`;
                }
              }
            },
            legend: {
              position: 'top',
            }
          }
        }
      });
}

function formatPeriod(start, end) {
      if (!start || !end) return 'Não especificado';
      
      try {
        const startDate = new Date(start).getFullYear();
        const endDate = new Date(end).getFullYear();
        return startDate === endDate ? startDate : `${startDate}-${endDate}`;
      } catch {
        return 'Não especificado';
      }
}
    
function showError(error) {
  console.error('Erro:', error);
  
  const errorHtml = `
    <div class="error">
      <h3>Erro ao Carregar Dados</h3>
      <p><strong>${error.name}:</strong> ${error.message}</p>
      <p>Detalhes técnicos foram registrados no console.</p>
      <button onclick="fetchComparisonData()" class="retry-button">
        Tentar Novamente
      </button>
    </div>
  `;
  
  const mainResult = document.getElementById('mainResult');
  if (mainResult) {
    mainResult.innerHTML = errorHtml;
  } else {
    document.body.insertAdjacentHTML('beforeend', errorHtml);
  }
}


document.addEventListener('DOMContentLoaded', async () => {
  try {
    displayDiseaseInfo(selectedIndicator)
    fetchData()
    
    
  } catch (error) {
    console.error('Falha na inicialização:', error);
    showError(error);
  }
});
