const elasticlunr = require('elasticlunr');

class UrlItem {
    constructor(id, url, match) {
        this.id = id;
        this.url = url;
        this.match = match;
    }
};

module.exports = class UrlManager {

    findBestMatchForURL(url, setOfRules) {
        // Let's convert the rules to a standard array.
        const urlItemsArray = [];
        let matchResult = null;

        const idx = elasticlunr(function () {
            this.addField('id');
            this.addField('url');
        });

        // Insert all docs.
        Object.entries(setOfRules).forEach((value, i) => {
            urlItemsArray.push(new UrlItem(i, value[0], value[1]));
            idx.addDoc({
                id: i,
                url: value[0]
            });
        });

        // Search result.
        const result = idx.search(url);
        if (result) {
            matchResult = urlItemsArray[result[0].ref].match;
        }

        return matchResult;
    }
};