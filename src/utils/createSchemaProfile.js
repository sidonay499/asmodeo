export default function createSchemaProfile(name,id,imageProfile,description,socials){
    const schemaProfile = {
        "@context":"https://schema.org",
        "@graph":[
            {
                "@type": "WebSite",
                "@id": "https://asmodeo.net/#website",
                "url": "https://asmodeo.net/",
                "name": "Asmodeo"
            },
            {
                "@type":"ProfilePage",
                "@id":`https://asmodeo.net/${name}/${id}`,
                "url":`https://asmodeo.net/${name}/${id}`,
                "name":name,
                "mainEntity":{
                    "@type":"Person",
                    "@id": `https://asmodeo.net/${name}/${id}` + "#person",
                    "name": name,
                    "url": `https://asmodeo.net/${name}/${id}`
                },
                "primaryImageOfPage":{
                    "@id":`https://asmodeo.net/${name}/${id}` + "#image",
                    "breadcrumb": { "@id": `https://asmodeo.net/${name}/${id}` + "#breadcrumb" },
                    "isPartOf": { "@id": "https://asmodeo.net/#website" }
                },
                "isPartOf":{
                    "@id":"https://asmodeo.net/#website"
                }
            },
            {
                "@type": "Person",
                "@id": `https://asmodeo.net/${name}/${id}` + "#person",
                "name": name,
                "url": `https://asmodeo.net/${name}/${id}`,
                "image": imageProfile,
                "description": description,
                "identifier": id,
                "additionalType": "https://schema.org/Person",
                "sameAs": socials || []
            },
            {
                "@type":"ImageObject",
                "@id":`https://asmodeo.net/${name}/${id}`,
                "contentUrl":imageProfile,
                "caption":`${name} profile photo`
            },
            {
            "@type":"BreadcrumbList",
            "itemListElement":[
                    {
                        "@type":"ListItem",
                        "position":1,
                        "name":"Home",
                        "item":"https://asmodeo.net/"
                    },
                    {
                        "@type":"ListItem",
                        "position":2,
                        "name":name,
                        "item":`https://asmodeo.net/${name}/${id}`
                    }
                ]
            }
        ]
    }
    return schemaProfile
}