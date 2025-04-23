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

export const validateConsult = Yup.object().shape({
    name:Yup.string()
        .min(3,"Nombre y Apellido muy corto")
        .max(60,'Nombre y Apellido muy largo')
        .matches('^[a-zA-Z ]+$','Formato inválido')
        .required('El nombre es requerido'),
    phone:Yup.string()
        .min(8,"Teléfono muy corto")
        .max(22,"Teléfono muy largo")
        .matches(/^\+?[0-9 ()-]+$/, "Formato inválido")
        .required('El teléfono es requerido'),
    email:Yup.string()
        .email('Email invalido')    
        .required('El email es requerido'),
    message:Yup.string()
        .min(10)
        .max(300)
        .matches(/^[a-zA-Z0-9\s]+$/,'Formato inválido')
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
        .required('El nombre es obligatorio'),
    age:Yup.number()
        .integer('La edad debe ser un número entero')
        .required('La edad es obligatoria'),
    heigth:Yup.string()
        .required('La altura es obligatoria'),
    weigth:Yup.number()
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
        ],'Tiene que elegir una opción: NEGRO, RUBIO, CASTAÑO, CASTAÑO OSCURO, RUBIO OSCURO, COLORADO')
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
        ],'Tiene que elegir una opción: NEGROS, AZULES, CELESTES, VERDES, MARRONES, CAFÉ, MARRON CLARO, MIEL')
        .required('El color de ojos es obligatorio'),
    shaved:Yup.mixed()
        .oneOf([
            'FULL', 
            'PARCIAL', 
            'NATURAL'
        ],'Tiene que elegir una opción: FULL, PARCIAL, NATURAL')
        .required('La depilación es obligatoria'),
    breast:Yup.number()
        .positive('Debe ser un número positivo')
        .required('La medida es requerido'),
    waist:Yup.number()
        .positive('Debe ser un número positivo')
        .required('La medida es requerido'),
    hip:Yup.number()
        .positive('Debe ser un número positivo')
        .required('La medida es requerido'),
    bodyType:Yup.mixed()
        .oneOf([
            'DELGADA', 
            'MUY DELGADA', 
            'VOLUPTUOSA', 
            'RELLENA'
        ],'Tiene que elegir una opción: DELGADA, MUY DELGADA, VOLUPTUOSA, RELLENA')
        .required('El tipo de cuerpo es obligatorio'),
    breasts:Yup.mixed()
        .oneOf([
            'PEQUEÑOS', 
            'PERFECTOS', 
            'GRANDES', 
            'EXTRA GRANDES'
        ],'Tiene que elegir una opción: PEQUEÑOS, PERFECTOS, GRANDES, EXTRA GRANDES')
        .required('El tipo de pechos es obligatorio'),
    ass:Yup.mixed()
        .oneOf([
            'CHICA', 
            'PERFECTA', 
            'GRANDE'
        ],'Tiene que elegir una opción: CHICA, PERFECTA, GRANDE')
        .required('El tipo de cola es obligatorio'),
    bioType:Yup.mixed()
        .oneOf([
            'TONÍFICADA', 
            'MUSCÚLOSA', 
            'ATLÉTICA', 
            'NORMAL'
        ],'Tiene que elegir una opción: TONÍFICADA, MUSCÚLOSA, ATLÉTICA, NORMAL')
        .required('El biotipo es obligatorio'),
    tattoos:Yup.boolean(),
    description:Yup.string()
        .min(10,'Muy corta')
        .max(300, 'Muy larga')
        .required('La descripción es obligatoria'),
    price:Yup.number()
        .min(2, 'Caracteres minímos: 2')
        .integer('El precio debe ser un número entero')
        .required('El precio es obligatorio'),
    phone:Yup.string()
        .min(8,"Teléfono muy corto")
        .max(22,"Teléfono muy largo")
        .matches('^[0-9]+$', "Solo se permiten números, sin espacios ni símbolos"),
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
    images:Yup.array()
        .of(
            Yup.string()
            .required('Cada imagen debe ser una URL válida')
        )
        .min(1, 'Debe haber al menos una imagen')
        .required('Las imágenes son obligatorias'),
    name:Yup.string()
        .required('El nombre es obligatorio'),
    age:Yup.number()
        .integer('La edad debe ser un número entero')
        .required('La edad es obligatoria'),
    heigth:Yup.string()
        .required('La altura es obligatoria'),
    weigth:Yup.number()
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
        ],'Tiene que elegir una opción: NEGRO, RUBIO, CASTAÑO, CASTAÑO OSCURO, RUBIO OSCURO, COLORADO')
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
        ],'Tiene que elegir una opción: NEGROS, AZULES, CELESTES, VERDES, MARRONES, CAFÉ, MARRON CLARO, MIEL')
        .required('El color de ojos es obligatorio'),
    shaved:Yup.mixed()
        .oneOf([
            'FULL', 
            'PARCIAL', 
            'NATURAL'
        ],'Tiene que elegir una opción: FULL, PARCIAL, NATURAL')
        .required('La depilación es obligatoria'),
    breast:Yup.number()
        .positive('Debe ser un número positivo')
        .required('La medida es requerido'),
    waist:Yup.number()
        .positive('Debe ser un número positivo')
        .required('La medida es requerido'),
    hip:Yup.number()
        .positive('Debe ser un número positivo')
        .required('La medida es requerido'),
    bodyType:Yup.mixed()
        .oneOf([
            'DELGADA', 
            'MUY DELGADA', 
            'VOLUPTUOSA', 
            'RELLENA'
        ],'Tiene que elegir una opción: DELGADA, MUY DELGADA, VOLUPTUOSA, RELLENA')
        .required('El tipo de cuerpo es obligatorio'),
    breasts:Yup.mixed()
        .oneOf([
            'PEQUEÑOS', 
            'PERFECTOS', 
            'GRANDES', 
            'EXTRA GRANDES'
        ],'Tiene que elegir una opción: PEQUEÑOS, PERFECTOS, GRANDES, EXTRA GRANDES')
        .required('El tipo de pechos es obligatorio'),
    ass:Yup.mixed()
        .oneOf([
            'CHICA', 
            'PERFECTA', 
            'GRANDE'
        ],'Tiene que elegir una opción: CHICA, PERFECTA, GRANDE')
        .required('El tipo de cola es obligatorio'),
    bioType:Yup.mixed()
        .oneOf([
            'TONÍFICADA', 
            'MUSCÚLOSA', 
            'ATLÉTICA', 
            'NORMAL'
        ],'Tiene que elegir una opción: TONÍFICADA, MUSCÚLOSA, ATLÉTICA, NORMAL')
        .required('El biotipo es obligatorio'),
    tattoos:Yup.boolean(),
    description:Yup.string()
        .min(10,'Muy corta')
        .max(300, 'Muy larga')
        .required('La descripción es obligatoria'),
    price:Yup.number()
        .min(2, 'Caracteres minímos: 2')
        .integer('El precio debe ser un número entero')
        .required('El precio es obligatorio'),
    phone:Yup.string()
        .min(8,"Teléfono muy corto")
        .max(22,"Teléfono muy largo")
        .matches(/^[0-9]+$/, "Solo se permiten números, sin espacios ni símbolos"),
    location:Yup.string()
        .min(10, 'Localidad muy corta')
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