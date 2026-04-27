export default function generateDescription(name){
    const templates = [
        `${name} is a popular profile on Asmodeo. Explore detailed insights, photos, and updates about ${name}.`,
        `Discover ${name} on Asmodeo. View profile details, images, and related personalities.`,
        `${name}'s profile on Asmodeo features curated content, images, and more.`,
        `Learn more about ${name}, a trending profile on Asmodeo.`,
        `${name} is featured on Asmodeo with profile insights and images.`,
        `Explore ${name}'s profile on Asmodeo including photos and details.`
    ];
    return templates[Math.floor(Math.random() * templates.length)];
}