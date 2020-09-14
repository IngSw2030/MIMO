# MIMO

Estructura de las entidades

Entidad: Costumer {
-email: string
-nomre: string
-contraseña : string -[Mascotas]:{
-nombre: string
-edad: int
-genero: bool
-tipo: string
-foto: base64
}

-[historialDeCompras]:
{idProducto:producto, fechaDeCompra:date}
]
}

Entidad: Producto: { //incluye comida, accesorios
-tipo: string
-nombre: string
-precio: int
-foto: base64
-descripcion: string
}
Entidad: Servicios {
-tipo: string
-precioMin: int
-precioMax: int
-direccion: string //si es a domicilio dira eso.
-descripcion: string
-promCalificaion: int
}
Entidad: Veterinarias {
-nombre: string
-animales: [string] //tipos de animales
-direccion: string
-descripcion: string //datos interesantes de la veterinaria e.g equipo medico -[comentario]:{
-id:Costumer
-coment: string
-calificacion: int
}
}  
Entidad: Retailer
-email: string
-nombre: string
-contrasenia : string
-Numero: string
-catalogo: [Producto]
-Veterinaria: Veterinaria //puede ser vacio
}
