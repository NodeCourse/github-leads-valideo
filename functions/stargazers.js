const client = require('../client');

/**
 * Get all stargazers from a repo
 *
 * @param ownerLogin
 * @param repoName
 * @returns {Promise<any>}
 */
async function getStargazers (ownerLogin, repoName) {
    try {
        return await client.activity.getStargazersForRepo({
            owner: ownerLogin,
            repo: repoName
        });
    } catch (error) {
        console.log('\x1b[31m', `[ERROR] ${error}`);
    }

}

module.exports = getStargazers;