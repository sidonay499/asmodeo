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
        .min(20,'Muy corto')
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

export const validateName = Yup.object().shape({
  name: Yup.string()
    .min(3,'Nombre demasiado corto')
    .max(100,'Nombre demasiado largo')
    .required('El nombre es obligatorio'),
})
export const validateAge = Yup.object().shape({
  age: Yup.number()
    .max(100)
    .positive('Debe ser un número positivo')
    .integer('La edad debe ser un número entero')
    .required('La edad es obligatoria'),
})
export const validateHeigth = Yup.object().shape({
  heigth: Yup.number()
    .min(100,'Debe ser mayor a 100cm')
    .max(280,'Debe ser menor a 280cm')
    .positive('Debe ser un número positivo')
    .integer('La altura debe ser un número entero')
    .required('La altura es obligatoria'),
})
export const validateWeigth = Yup.object().shape({
  weigth: Yup.number()
    .min(30)
    .max(200)
    .positive('Debe ser un número positivo')
    .integer('El peso debe ser un número entero')
    .required('El peso es obligatorio'),
})
export const validateHairColor = Yup.object().shape({
  hairColor: Yup.mixed()
    .oneOf([
      'NEGRO','RUBIO','CASTAÑO','CASTAÑO OSCURO','RUBIO OSCURO','COLORADO'
    ])
    .required('El color de pelo es obligatorio'),
})
export const validateEyesColor = Yup.object().shape({
  eyesColor: Yup.mixed()
    .oneOf([
      'NEGROS','AZULES','CELESTES','VERDES','MARRONES','CAFÉ','MARRON CLARO','MIEL'
    ])
    .required('El color de ojos es obligatorio'),
})
export const validateShaved = Yup.object().shape({
  shaved: Yup.mixed()
    .oneOf(['FULL','PARCIAL','NATURAL'])
    .required('La depilación es obligatoria'),
})
export const validateCategory = Yup.object().shape({
  category: Yup.mixed()
    .oneOf([
      'UNIVERSE','GALAXY','STAR','ECLIPSE','EQUINOX','MOON','MASSAGE','VIRTUAL'
    ])
    .required('La categoría es obligatoria'),
})
export const validateTattoos = Yup.object().shape({
  tattoos: Yup.boolean(),
})
export const validateBodyType = Yup.object().shape({
  bodyType: Yup.mixed()
    .oneOf([
      'DELGADA','MUY DELGADA','VOLUPTUOSA','RELLENA',
      'DELGADO','MUY DELGADO','NORMAL'
    ])
    .required('El tipo de cuerpo es obligatorio'),
})
export const validatePrice = Yup.object().shape({
  price: Yup.number()
    .min(2)
    .max(20000)
    .integer('El precio debe ser un número entero')
    .required('El precio es obligatorio'),
})
export const validatePhone = Yup.object().shape({
  phone: Yup.string()
    .min(8)
    .max(22)
    .matches(/^\+?[0-9]+$/, "Solo números, sin espacios ni guiones")
    .required('El teléfono es obligatorio'),
})
export const validateLocation = Yup.object().shape({
  location: Yup.string()
    .matches(/^[A-ZÁÉÍÓÚÑ\s]+$/, 'Solo mayúsculas sin números')
    .min(4)
    .max(100)
    .required('La localidad es obligatoria'),
})
export const validateDescription = Yup.object().shape({
  description: Yup.string()
    .min(10,'Muy corta')
    .max(1000,'Muy larga')
    .required('La descripción es obligatoria'),
})
export const validateState = Yup.object().shape({
  state: Yup.string()
    .matches(/^[A-ZÁÉÍÓÚÑ\s]+$/, 'Solo mayúsculas sin números')
    .min(5)
    .max(300)
    .required('La provincia es obligatoria'),
})
export const validateCountry = Yup.object().shape({
  country: Yup.string()
    .matches(/^[A-ZÁÉÍÓÚÑ\s]+$/, 'Solo mayúsculas sin números')
    .min(3)
    .max(50)
    .required('El país es obligatorio'),
})
export const validateBreasts = Yup.object().shape({
  breasts: Yup.mixed()
    .oneOf(['PEQUEÑOS','PERFECTOS','GRANDES','EXTRA GRANDES']),
})
export const validateAss = Yup.object().shape({
  ass: Yup.mixed()
    .oneOf(['CHICA','PERFECTA','GRANDE']),
})
export const validatePenis = Yup.object().shape({
  penis: Yup.number()
    .min(1)
    .max(50)
    .positive(),
})
export const validateMeasures = Yup.object().shape({
  breast: Yup.number()
    .min(30)
    .max(400)
    .positive("solo positivo"),

  waist: Yup.number()
    .min(30)
    .max(400)
    .positive("solo positivo"),

  hip: Yup.number()
    .min(30)
    .max(400)
    .positive("solo positivo"),
})

export const validateEscort = Yup.object().shape({
  imageProfile: Yup.mixed()
    .required('La imagen de perfil es obligatoria')
    .test(
      'fileType',
      'Solo se permiten imágenes (jpg, jpeg, png, webp)',
      (value) => {
        if (!value) return false
        return [
          'image/jpeg',
          'image/png',
          'image/jpg',
          'image/webp'
        ].includes(value.type)
      }
    )
    .test(
      'fileSize',
      'La imagen debe pesar menos de 2MB',
      (value) => {
        if (!value) return false
        return value.size <= 2 * 1024 * 1024
      }
    ),
//   images: Yup.mixed()
//     .required('Las imágenes son obligatorias'),

//   name: Yup.string()
//     .min(3,'Nombre demasiado corto')
//     .max(100,'Nombre demasiado largo')
//     .required('El nombre es obligatorio'),

//   age: Yup.number()
//     .max(100)
//     .positive('Debe ser un número positivo')
//     .integer('La edad debe ser un número entero')
//     .required('La edad es obligatoria'),

//   heigth: Yup.number()
//     .min(100,'Debe ser mayor a 100cm')
//     .max(280,'Debe ser menor a 280cm')
//     .positive('Debe ser un número positivo')
//     .integer('La altura debe ser un número entero')
//     .required('La altura es obligatoria'),

//   weigth: Yup.number()
//     .min(30)
//     .max(200)
//     .positive('Debe ser un número positivo')
//     .integer('El peso debe ser un número entero')
//     .required('El peso es obligatorio'),

//   hairColor: Yup.mixed()
//     .oneOf([
//       'NEGRO','RUBIO','CASTAÑO','CASTAÑO OSCURO','RUBIO OSCURO','COLORADO'
//     ])
//     .required('El color de pelo es obligatorio'),

//   eyesColor: Yup.mixed()
//     .oneOf([
//       'NEGROS','AZULES','CELESTES','VERDES','MARRONES','CAFÉ','MARRON CLARO','MIEL'
//     ])
//     .required('El color de ojos es obligatorio'),

//   shaved: Yup.mixed()
//     .oneOf(['FULL','PARCIAL','NATURAL'])
//     .required('La depilación es obligatoria'),

//   category: Yup.mixed()
//     .oneOf([
//       'UNIVERSE','GALAXY','STAR','ECLIPSE','EQUINOX','MOON','MASSAGE','VIRTUAL'
//     ])
//     .required('La categoría es obligatoria'),

//   tattoos: Yup.boolean(),

//   bodyType: Yup.mixed()
//     .oneOf([
//       'DELGADA','MUY DELGADA','VOLUPTUOSA','RELLENA',
//       'DELGADO','MUY DELGADO','NORMAL'
//     ])
//     .required('El tipo de cuerpo es obligatorio'),

//   bioType: Yup.mixed()
//     .oneOf([
//       'TONÍFICADA','TONÍFICADO',
//       'MUSCÚLOSA','MUSCÚLOSO',
//       'ATLÉTICA','ATLÉTICO',
//       'NORMAL'
//     ])
//     .required('El biotipo es obligatorio'),

//   description: Yup.string()
//     .min(10,'Muy corta')
//     .max(1000,'Muy larga')
//     .required('La descripción es obligatoria'),

//   price: Yup.number()
//     .min(2)
//     .max(20000)
//     .integer('El precio debe ser un número entero')
//     .required('El precio es obligatorio'),

//   phone: Yup.string()
//     .min(8)
//     .max(22)
//     .matches(/^\+?[0-9]+$/, "Solo números, sin espacios ni guiones")
//     .required('El teléfono es obligatorio'),

//   location: Yup.string()
//     .min(4)
//     .max(100)
//     .required('La localidad es obligatoria'),

//   state: Yup.string()
//     .min(5)
//     .max(300)
//     .required('La provincia es obligatoria'),

//   country: Yup.string()
//     .min(3)
//     .max(50)
//     .required('El país es obligatorio'),

//   /* ========= CAMPOS SOLO FEMENINO (opcionales) ========= */

//   breast: Yup.number()
//     .min(30)
//     .max(400)
//     .positive(),

//   waist: Yup.number()
//     .min(30)
//     .max(400)
//     .positive(),

//   hip: Yup.number()
//     .min(30)
//     .max(400)
//     .positive(),

//   breasts: Yup.mixed()
//     .oneOf(['PEQUEÑOS','PERFECTOS','GRANDES','EXTRA GRANDES']),

//   ass: Yup.mixed()
//     .oneOf(['CHICA','PERFECTA','GRANDE']),

//   /* ========= CAMPO SOLO MASCULINO (opcional) ========= */

//   penis: Yup.number()
//     .min(1)
//     .max(50)
//     .positive(),
})