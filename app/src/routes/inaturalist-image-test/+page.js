export async function load({ fetch, url }) {
    // Extract query parameters from the URL
    const taxonId = url.searchParams.get('taxon_id') || 54262; // Default to a specific taxon ID if not provided
    const perPage = url.searchParams.get('per_page') || 200; // Optional: allow per_page customization
    const allowedLicenses = [
      'cc-by', 'cc-by-nc', 'cc-by-nd', 'cc-by-sa', 'cc-by-nc-sa', 'cc-by-nc-nd'
    ];
  
    try {
      const response = await fetch(
        `https://api.inaturalist.org/v1/observations?verifiable=true&spam=false&taxon_id=${taxonId}&quality_grade=research&per_page=10`
      );
  
      if (!response.ok) {
        throw new Error('Failed to fetch observations');
      }
  
      const observations = await response.json();
  
      return { data: observations }
    
    } catch (err) {
      console.log(err)
    }
  } 