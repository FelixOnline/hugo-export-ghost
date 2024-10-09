import fm from 'front-matter';
import string from '@tryghost/string';

export default (fileName, fileContents, options = {}) => {
    let frontmatter = fm(fileContents);
    let frontmatterAttributes = frontmatter.attributes;

    const defaultImage = 'https://f001.backblazeb2.com/file/felixonline/img/upload/201102092131-jk708-FelixPro.jpg';

    const slug = string.slugify(frontmatterAttributes.id).replace(/_/g, '-');
    const author = {
        url: `${options.url}/author/${slug}/`,
        data: {
            name: frontmatterAttributes.name,
            slug: slug,
            email: `${slug}@${(options.email) ? options.email : 'example.com'}`,
            roles: ['Contributor']
        }
    };

    if (frontmatterAttributes.position) {
        author.data.bio = frontmatterAttributes.position;
    }

    if (frontmatterAttributes.image && frontmatterAttributes.image !== defaultImage) {
        author.data.profile_image = frontmatterAttributes.image;
    }

    if (frontmatterAttributes.twitter) {
        author.data.twitter = `https://x.com/${frontmatterAttributes.twitter}`;
    }

    if (frontmatterAttributes.facebook) {
        author.data.facebook = frontmatterAttributes.facebook;
    }

    if (frontmatterAttributes.website_url) {
        author.data.website = frontmatterAttributes.website_url;
    }

    return author;
};

