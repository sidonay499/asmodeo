
const translations = (word)=>{
    console.log(word)
    let parseWord = ''

    if(word === 'name') parseWord = 'NOMBRE'
    if(word === 'age') parseWord = 'EDAD'
    if(word === 'heigth') parseWord = 'ALTURA'
    if(word === 'weigth') parseWord = 'PESO'
    if(word === 'hairColor') parseWord = 'COLOR DE PELO'
    if(word === 'eyesColor') parseWord = 'COLOR DE OJOS'
    if(word === 'shaved') parseWord = 'DEPILACIÓN'
    if(word === 'measures') parseWord = 'MEDIDAS'
    if(word === 'bodyType') parseWord = 'TIPO DE CUERPO'
    if(word === 'breasts') parseWord = 'PECHOS'
    if(word === 'ass') parseWord = 'CULO'
    if(word === 'penis') parseWord = 'PENE'
    if(word === 'bioType') parseWord = 'BIOTIPO'
    if(word === 'tattoos') parseWord = 'TATUAJES'
    if(word === 'active') parseWord = 'ESTADO'
    if(word === 'description') parseWord = 'DESCRIPCIÓN'
    if(word === 'price') parseWord = 'PRECIO'
    if(word === 'phone') parseWord = 'TELÉFONO'
    if(word === 'location') parseWord = 'LOCALIDAD'
    if(word === 'state') parseWord = 'PROVINCIA'
    if(word === 'country') parseWord = 'PAÍS'
    if(word === 'category') parseWord = 'CATEGORÍA'

    return parseWord
}

export default translations