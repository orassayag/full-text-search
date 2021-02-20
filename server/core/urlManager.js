const UrlManager = require('../models/UrlManager.js');

const manager = new UrlManager();

const setOfRules = {
    'www.facebook.com/connect.js': 'Facebook',
    'www.facebook.com/v1/v1.js': 'Facebook Connect',
    'www.google-analytics.com/*': 'Google Analytics',
    'www.google-analytics.com/scripts/index_v1.js': 'Google Analytics v1',
    'www.google-analytics.com/scripts/index_v2.js': 'Google Analytics v2',
    'www.twitter.com/scripts/v1/index.js': 'Twitter',
    'www.twitter.com/scripts/v2/index.js': 'Twitter',
    'www.linkedin.com/scripts/*/index.js': 'Twitter',
    'www.outbrain.com/scripts/*': 'Outbrain',
    'www.testdomain.com/scripts/*': 'Outbrain'
};

const urlsForTest = [{
    url: 'www.facebook.com/connect.js',
    match: 'Facebook'
},
{
    url: 'www.facebook.com/v1/v1.js',
    match: 'Facebook Connect'
},
{
    url: 'www.google-analytics.com/*',
    match: 'Google Analytics'
},
{
    url: 'www.google-analytics.com/scripts/index_v1.js',
    match: 'Google Analytics v1'
},
{
    url: 'www.google-analytics.com/scripts/index_v2.js',
    match: 'Google Analytics v2'
},
{
    url: 'www.twitter.com/scripts/v1/index.js',
    match: 'Twitter'
},
{
    url: 'www.twitter.com/scripts/v2/index.js',
    match: 'Twitter'
},
{
    url: 'www.linkedin.com/scripts/*/index.js',
    match: 'Twitter'
},
{
    url: 'www.outbrain.com/scripts/*',
    match: 'Outbrain'
},
{
    url: 'www.testdomain.com/scripts/*',
    match: 'Outbrain'
}
];

urlsForTest.forEach(url => {
    manager.findBestMatchForURL(url.url, setOfRules);
});