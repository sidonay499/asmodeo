import * as Yup from 'yup';

export const validateAdmin = Yup.object().shape({
    name:Yup.string()
        .min(3,"Nombre muy corto")
        .max(50,'Nombre muy largo')
        .matches('^[a-zA-Z]+$','Formato inválido')
        .required('El nombre es requerido'),
    surname:Yup.string()
        .min(5,'El apellido es muy corto')
        .max(50,'El apellido es un largo')
        .matches('^[a-zA-Z]+$','Formato inválido')
        .required('El apellido es requerido'),
    password:Yup.string()
        .min(8,'Contraseña demasiado corta')
        .max(40,'Contraseña demasiado larga')
        .matches('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%])','Formato inválido')
        .required('La contraseña es requerida'),
    email:Yup.string()
        .email('Email invalido')
        .required('El email es requerido')
})

export const validateInbox = Yup.object().shape({
    name:Yup.string()
        .min(3,"Nombre y Apellido muy corto")
        .max(60,'Nombre y Apellido muy largo')
        .matches(/^[a-zA-Z ]+$/,'Formato inválido')
        .required('El nombre es requerido'),
    message:Yup.string()
        .min(10,'Muy corto')
        .max(600,'Muy largo')
        .matches(/^[a-zA-Z0-9\s.,:¡!¿?áéíóúüÁÉÍÓÚÜñÑ\-]+$/, 'Formato inválido')
        .required('El mensaje es requerido'),
})

export const validateLogin = Yup.object().shape({
    email:Yup.string()
        .email('Email invalido')
        .required('El email es requerido'),
    password:Yup.string()
        .min(8,'Contraseña demasiado corta')
        .max(40,'Contraseña demasiado larga')
        .matches('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%])','Formato inválido')
        .required('La contraseña es requerida')
})

export const validateCode = Yup.object().shape({
    code:Yup.string()
        .min(6,'Código inválido')
        .max(6,'Código inválido')
        .required('Ingrese el código')
})

export const validateEscortFemale = Yup.object().shape({
    imageProfile:Yup.mixed()
        .required('La imagen de perfil es obligatoria'),
    images:Yup.mixed()
        .required('Las imágenes son obligatorias'),
    name:Yup.string()
        .min(3,'Nombre demasiado corto')
        .max(12,'Nombre demasiado largo')
        .required('El nombre es obligatorio'),
    age:Yup.number()
        .max(100)
        .positive('Debe ser un número positivo')
        .integer('La edad debe ser un número entero')
        .required('La edad es obligatoria'),
    heigth:Yup.number()
        .min(100,'Debe ser mayor a 100cm')
        .max(280,'Debe der menor a 280cm')
        .positive('Debe ser un número positivo')
        .integer('El peso debe ser un número entero')
        .required('La altura es obligatoria y en centímetros'),
    weigth:Yup.number()
        .min(30,'Debe ser mayor a 30')
        .max(200,'Debe ser menor a 200')
        .positive('Debe ser un número positivo')
        .integer('El peso debe ser un número entero')
        .required('El peso es obligatorio'),
    hairColor:Yup.mixed()
        .oneOf([
            'NEGRO',
            'RUBIO',
            'CASTAÑO', 
            'CASTAÑO OSCURO',
            'RUBIO OSCURO', 
            'COLORADO'
        ],'Elija una opción: NEGRO, RUBIO, CASTAÑO, CASTAÑO OSCURO, RUBIO OSCURO, COLORADO')
        .required('El color de pelo es obligatorio'),
    eyesColor:Yup.mixed()
        .oneOf([
            'NEGROS', 
            'AZULES', 
            'CELESTES', 
            'VERDES', 
            'MARRONES', 
            'CAFÉ', 
            'MARRON CLARO', 
            'MIEL'
        ],'Elija una opción: NEGROS, AZULES, CELESTES, VERDES, MARRONES, CAFÉ, MARRON CLARO, MIEL')
        .required('El color de ojos es obligatorio'),
    shaved:Yup.mixed()
        .oneOf([
            'FULL', 
            'PARCIAL', 
            'NATURAL'
        ],'Elija una opción: FULL, PARCIAL, NATURAL')
        .required('La depilación es obligatoria'),
    category:Yup.mixed()
        .oneOf([
            'UNIVERSE',
            'GALAXY',
            'STAR',
            'ECLIPSE',
            'EQUINOX',
            'MOON',
            'MASSAGE',
            'VIRTUAL'
        ],'Elija una opción: UNIVERSE, GALAXY, STAR, ECLIPSE, EQUINOX, MOON, MASSAGE o VIRTUAL')
        .required('La categoría es obligatorio'),
    tattoos:Yup.boolean(),
    breast:Yup.number()
        .min(30,'Debe ser mayor a 30')
        .max(400,'Debe ser menor a 400')
        .positive('Debe ser un número positivo')
        .required('La medida es requerido'),
    waist:Yup.number()
        .min(30,'Debe ser mayor a 30')
        .max(400,'Debe ser menor a 400')
        .positive('Debe ser un número positivo')
        .required('La medida es requerido'),
    hip:Yup.number()
        .min(30,'Debe ser mayor a 30')
        .max(400,'Debe ser menor a 400')
        .positive('Debe ser un número positivo')
        .required('La medida es requerido'),
    bodyType:Yup.mixed()
        .oneOf([
            'DELGADA', 
            'MUY DELGADA', 
            'VOLUPTUOSA', 
            'RELLENA'
        ],'Elija una opción: DELGADA, MUY DELGADA, VOLUPTUOSA, RELLENA')
        .required('El tipo de cuerpo es obligatorio'),
    breasts:Yup.mixed()
        .oneOf([
            'PEQUEÑOS', 
            'PERFECTOS', 
            'GRANDES', 
            'EXTRA GRANDES'
        ],'Elija una opción: PEQUEÑOS, PERFECTOS, GRANDES, EXTRA GRANDES')
        .required('El tipo de pechos es obligatorio'),
    ass:Yup.mixed()
        .oneOf([
            'CHICA', 
            'PERFECTA', 
            'GRANDE'
        ],'Elija una opción: CHICA, PERFECTA, GRANDE')
        .required('El tipo de cola es obligatorio'),
    bioType:Yup.mixed()
        .oneOf([
            'TONÍFICADA', 
            'MUSCÚLOSA', 
            'ATLÉTICA', 
            'NORMAL'
        ],'Elija una opción: TONÍFICADA, MUSCÚLOSA, ATLÉTICA, NORMAL')
        .required('El biotipo es obligatorio'),
    tattoos:Yup.boolean(),
    description:Yup.string()
        .min(10,'Muy corta')
        .max(1000, 'Muy larga')
        .required('La descripción es obligatoria'),
    price:Yup.number()
        .min(2, 'Precio minímo: 2')
        .max(20000,'Precio maximo : 20.000')
        .integer('El precio debe ser un número entero')
        .required('El precio es obligatorio'),
    phone:Yup.string()
        .min(8,"Teléfono muy corto")
        .max(22,"Teléfono muy largo")
        .matches(/^[0-9]+$/, "Solo se permiten números, sin espacios ni símbolos"),
    location:Yup.string()
        .min(4, 'Localidad muy corta')
        .max(100, 'Localidad muy larga')
        .required('La localidad es obligatoria'),
    state:Yup.string()
        .min(5, 'Provincia muy corta')
        .max(300, 'No debe tener más de 300 caracteres')
        .required('La Provincia es requerida'),
    country:Yup.string()
        .min(3, 'Nombre de país muy corto')
        .max(50, 'Nombre de país muy largo')
        .required('El país es obligatorio')   
})

export const validateEscortMale = Yup.object().shape({
    imageProfile:Yup.string()
        .required('La imagen de perfil es obligatoria'),
    images:Yup.mixed()
        .required('Las imágenes son obligatorias'),
    name:Yup.string()
        .min(3,'Nombre demasiado corto')
        .max(12,'Nombre demasiado largo')
        .required('El nombre es obligatorio'),
    age:Yup.number()
        .max(100)
        .positive('Debe ser un número positivo')
        .integer('La edad debe ser un número entero')
        .required('La edad es obligatoria'),
    heigth:Yup.number()
        .min(100,'Debe ser mayor a 100cm')
        .max(280,'Debe der menor a 280cm')
        .positive('Debe ser un número positivo')
        .integer('El peso debe ser un número entero')
        .required('La altura es obligatoria y en centímetros'),
    weigth:Yup.number()
        .min(30,'Debe ser mayor a 30')
        .max(200,'Debe ser menor a 200')
        .positive('Debe ser un número positivo')
        .integer('El peso debe ser un número entero')
        .required('El peso es obligatorio'),
    hairColor:Yup.mixed()
        .oneOf([
            'NEGRO',
            'RUBIO',
            'CASTAÑO', 
            'CASTAÑO OSCURO',
            'RUBIO OSCURO', 
            'COLORADO'
        ],'Elija una opción: NEGRO, RUBIO, CASTAÑO, CASTAÑO OSCURO, RUBIO OSCURO, COLORADO')
        .required('El color de pelo es obligatorio'),
    eyesColor:Yup.mixed()
        .oneOf([
            'NEGROS', 
            'AZULES', 
            'CELESTES', 
            'VERDES', 
            'MARRONES', 
            'CAFÉ', 
            'MARRON CLARO', 
            'MIEL'
        ],'Elija una opción: NEGROS, AZULES, CELESTES, VERDES, MARRONES, CAFÉ, MARRON CLARO, MIEL')
        .required('El color de ojos es obligatorio'),
    shaved:Yup.mixed()
        .oneOf([
            'FULL', 
            'PARCIAL', 
            'NATURAL'
        ],'Elija una opción: FULL, PARCIAL, NATURAL')
        .required('La depilación es obligatoria'),
    bodyType:Yup.mixed()
        .oneOf([
            'DELGADO', 
            'MUY DELGADO', 
            'RELLENO',
            'NORMAL'
        ],'Elija una opción: DELGADO, MUY DELGADO, RELLENO o NORMAL')
        .required('El tipo de cuerpo es obligatorio'),
    bioType:Yup.mixed()
        .oneOf([
            'TONÍFICADO', 
            'MUSCÚLOSO', 
            'ATLÉTICO', 
            'NORMAL'
        ],'Elija una opción: TONÍFICADO, MUSCÚLOSO, ATLÉTICO o NORMAL')
        .required('El biotipo es obligatorio'),
    category:Yup.mixed()
        .oneOf([
            'UNIVERSE',
            'GALAXY',
            'STAR',
            'ECLIPSE',
            'EQUINOX',
            'MOON',
            'MASSAGE',
            'VIRTUAL'
        ],'Elija una opción: UNIVERSE, GALAXY, STAR, ECLIPSE, EQUINOX, MOON, MASSAGE o VIRTUAL')
        .required('La categoría es obligatorio'),
    tattoos:Yup.boolean(),
    description:Yup.string()
        .min(10,'Muy corta')
        .max(1000, 'Muy larga')
        .required('La descripción es obligatoria'),
    price:Yup.number()
        .min(2, 'Caracteres minímos: 2')
        .integer('El precio debe ser un número entero')
        .required('El precio es obligatorio'),
    phone:Yup.string()
        .min(8,"Teléfono muy corto")
        .max(22,"Teléfono muy largo")
        .matches(/^[0-9]+$/, "Solo se permiten números, sin espacios ni símbolos")
        .required('El teléfono es obligatorio'),
    location:Yup.string()
        .min(4, 'Localidad muy corta')
        .max(100, 'Localidad muy larga')
        .required('La localidad es obligatoria'),
    state:Yup.string()
        .min(5, 'Provincia muy corta')
        .max(300, 'No debe tener más de 300 caracteres')
        .required('La Provincia es requerida'),
    country:Yup.string()
        .min(3, 'Nombre de país muy corto')
        .max(50, 'Nombre de país muy largo')
        .required('El país es obligatorio'),
    penis:Yup.number()
        .min(1,'Demasiado corto')
        .max(50,'Demasiado largo')
        .positive('Debe ser un numero positivo')
        .required('La medida es obligatorio'),
}) 