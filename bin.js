const program = require('commander');
const client = require('./client');
const octokit = require('@octokit/rest');
const client = octokit();
const getTrendingRepos = require('./functions/getTrendingRepos');
const getStargazers = require('./functions/stargazers');
const createCSV = require('./createCSV');

program
    .version('0.1.0')
    .option('-t, --token [token]', 'GitHub token')
    .option('-l, --language [language]', 'Repo language')
    .parse(process.argv);

if (program.token) {
    client.authenticate({
       type: 'token',
       token: program.token
    });

    start();
}

async function start() {
        let stargazersArray = [];

        const items = await getTrendingRepos(program.language);

        await Promise.all(items.map(item => {
            return getStargazers(item.owner.login, item.name).then(response => {
                response.data.forEach(user => {
                    stargazersArray.push({name: user.user.login, repo: user.user.html_url})
                });
            });
        }));
        console.log('[INFO] Les post les plus populaires sur GitHub');
        await createCSV(stargazersArray);
}
