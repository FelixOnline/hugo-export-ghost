import fm from 'front-matter';

export default (fileName, fileContents, options = {}) => {
    let frontmatter = fm(fileContents);
    let frontmatterAttributes = frontmatter.attributes;

    const defaultImage = 'https://f001.backblazeb2.com/file/felixonline/img/upload/201102092131-jk708-FelixPro.jpg';

    return {
        url: `${options.url}/authors/${frontmatterAttributes.id}/`,
        data: {
            name: frontmatterAttributes.name,
            bio: frontmatterAttributes.position,
            slug: frontmatterAttributes.id,
            email: `${frontmatterAttributes.id}@${(options.email) ? options.email : 'example.com'}`,
            profile_image: frontmatterAttributes.image !== defaultImage ? frontmatterAttributes.image : null,
            website: frontmatterAttributes.website_url,
            twitter: frontmatterAttributes.twitter,
            facebook: frontmatterAttributes.facebook,
            roles: ['Contributor']
        }
    };
};

