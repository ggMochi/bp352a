export async function handler(event) {
  const indicator = event.queryStringParameters.indicator;
  const country = event.queryStringParameters.country || "BRA";

  const url = `https://ghoapi.azureedge.net/api/${indicator}?$filter=SpatialDim eq '${country}'`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
}
