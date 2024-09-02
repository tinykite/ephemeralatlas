export async function load({ fetch, url }) {
    // Extract query parameters from the URL
    const taxonId = url.searchParams.get('taxon_id') || 47851; // Default to a specific taxon ID if not provided
    const perPage = url.searchParams.get('per_page') || 200; // Optional: allow per_page customization
    const allowedLicenses = [
      'cc-by', 'cc-by-nc', 'cc-by-nd', 'cc-by-sa', 'cc-by-nc-sa', 'cc-by-nc-nd'
    ];
  
    try {
      const response = await fetch(
        `https://api.inaturalist.org/v1/observations?verifiable=true&spam=false&taxon_id=${taxonId}&quality_grade=research&per_page=${perPage}`
      );
  
      if (!response.ok) {
        throw new Error('Failed to fetch observations');
      }
  
      const data = await response.json();

      console.log(data)
  
      // Filter observations to exclude those without Creative Commons licenses
      const observations = data.results.filter((observation) => {
        const defaultPhoto = observation.default_photo;
        return defaultPhoto && allowedLicenses.includes(defaultPhoto.license_code);
      });
  
      return {
        props: { observations }
      };
    } catch (err) {
      return {
        props: { error: `Error fetching data: ${err.message}` }
      };
    }
  }