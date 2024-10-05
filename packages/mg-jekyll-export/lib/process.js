import processPost from './process-post.js';
import processAuthor from './process-author.js';

export default (input, options = {}) => {
    let output = {};

    let globalUser = {
        url: `/authors/felix/`,
        data: {
            name: "Felix",
            slug: "felix",
            bio: "The student newspaper of Imperial College London",
            email: "felix@imperial.ac.uk",
        },
    };

    let authorsDict = {};
    if (input.authors && input.authors.length > 0) {
        input.authors.forEach(author => {
            let processedAuthor = processAuthor(author.fileName, author.fileContents, options);
            authorsDict[processedAuthor.data.slug] = processedAuthor;
        });
    }

    if (input.posts && input.posts.length > 0) {
        output.posts = input.posts.map(post => processPost(post.fileName, post.fileContents, authorsDict, globalUser, options));
    }

    return output;
};
