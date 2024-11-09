import { error } from '@sveltejs/kit';
import { googleSearch } from '@nrjdalal/google-parser'

/** @type {import('./$types').PageServerLoad} */
export async function load({ request }) {
    const url = new URL(request.url);
    let query = url.searchParams.get('q');
    if (!query) {
        throw error(400, 'Missing query');
    }
    /*
    return {
        success: true,
        timestamp: Date.now(),
        query: query,
        results: [
            {title: "Hello world 2", url: "https://example.com/ff", description: "This is a sample result"},
            {title: "Hello world 1", url: "https://example.com/q", description: "This is a sample result"},
            {title: "Hello world 3 ", url: "https://example.com/m", description: "This is a sample result"},
        ]
    };
    */
    
	const google_response = await googleSearch({ query: query });

    //console.log(google_response);
    let results = google_response.data.results;

    if (results.length > 20) {
        results = results.slice(0, 20);
    }

	return {
        success: true,
        timestamp: Date.now(),
        query: query,
        results: results
    };
}