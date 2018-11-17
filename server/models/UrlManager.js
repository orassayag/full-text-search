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
        // Let's convert the rules to standard array.
        const urlItemsArray = [];
        let matchResult = null;

        const idx = elasticlunr(function() {
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


/* module.exports = class UrlManager {

    findBestMatchForURL(url, setOfRules) {

        debugger;

        const search = new fullTextSearch({
            ignore_case: false,   // default = true, Ignore case during all search queries
            index_amount: 8,      // default = 12, The more indexes you have, the faster can be your search but the slower the 'add' method  gets
            minimum_chars: 3      // default = 1, The less minimum chars you want to use for your search, the slower the 'add' method gets
          });

        Object.entries(setOfRules).forEach((value) => {
            search.add(value[1].toString());
        });

        var results = search.search(url);
    }
};
 */
/* module.exports = class UrlManager {

    findBestMatchForURL(url, setOfRules) {

        debugger;

        // Let's convert the rules to standard array.
        const urlItemsArray = [];

        Object.entries(setOfRules).forEach((value) => {
            urlItemsArray.push(new UrlItem(value[0], value[1]));
        });

        // Convert the array to Json for fuse.js
        //const list = JSON.stringify(urlItemsArray);
        const list = '{ "name":"John", "age":30, "car":null }';

        const options = {
            caseSensitive: false,
            shouldSort: true,
            threshold: 0.6,
            location: 0,
            distance: 100,
            maxPatternLength: 32,
            minMatchCharLength: 1,
            keys: [
                'name'
            ]
        };
        const fuse = new Fuse(list, options); // "list" is the item array
        const result = fuse.search('John');

    }
}; */