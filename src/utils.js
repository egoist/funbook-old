export function slugify(input) {
  return input
     // remove html tags
    .replace(/<(?:.|\n)*?>/gm, '')
    .replace(/[!\"#$%&'\(\)\*\+,\/:;<=>\?\@\[\\\]\^`\{\|\}~]/g, '') // eslint-disable-line no-useless-escape
    // Replace dots and spaces with a sepeator
    .replace(/(\s|\.)/g, '-')
    // Convert 2 or more sepeators into just one sepeator
    .replace(/-{2,}/g, '-')
    // Make the whole thing lowercase
    .toLowerCase()
}

export function getChapterSlug(chapter) {
  return chapter.id || (chapter.title && slugify(chapter.title))
}
