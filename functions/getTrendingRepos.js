const formatDate = require('formatDate');

/**
 * Get trending repositories
 *
 * @params language
 * @returns {Promise<void>}
 */
async function getTrendingRepos (language) {
    try {


        const date = new Date();

        const response = await client.search.repos({
            q: `stars:>100 language:${language} created:>${formatDate(date.getFullYear(), date.getMonth(), date.getDay())}`,
            sort: 'stars'
        });

        console.log('\x1b[32m',`[INFO] Most trending repo of the last 2 days in ${language} are retrieved with success`);

        return { items } = await response.data.items;

    } catch (error) {
        console.log('\x1b[31m', `[ERROR] ${error}`)
    }
}

module.exports = getTrendingRepos;
