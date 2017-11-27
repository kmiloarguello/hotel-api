# HOTEL API

HOTEL API es una herramienta para buscar listas de hoteles. Puedes recibir listas de hoteles por nombre.

## Getting Started

Para poder abrir el API se debe clonar el proyecto 

```
git clone https://github.com/kmiloarguello/hotel-api.git
```


### Prerequisites

Necesitas tener instalado NodeJs, Graphql


### Installing

Para instalar las dependencias del proyecto

```
cd hotel-api
```
Y luego

```
npm install
```
Una vez finalizada la instalación puedes lanzar la aplicación.

## Running 

Para ejecutar la Aplicación debes escribir el tu terminal:

```
npm start
```
Esto crea un llamado a `nodemon index.js` para entorno de Desarrollo o a `node index.js` para ejecutar el servidor en el puerto `3000`.
Es decir, que tendrás un servidor corriendo en `http://localhost:3000`

## API

Hotel API está construida con NodeJS y Graphql. Así que funciona a través de `Queries`, de esta manera, la forma de hacer consultas a la API es por ese medio.

El API posee varios esquemas que conforman la estructura de los datos. Por ejemplo para los datos de cada Hotel se define un esquema de la siguiente manera: 

```
type Hotel{
        id:ID!
        name:String
        stars:Int
        image:String
        price:String
    }
```
Si te fijas en la estructura existe un `id` el cual debe estar presente en todos los `queries` que se creen. Y además, se crea una estructura conformada por `name` que recibe un type String,`stars` que recibe un type Int, `image` que recibe otro String, y `price` con otro String.

Para el API se crearon Mutaciones para poder crear la información y guardarla con `Mongoose`.

Para esto creamos un modelo de esquema de Mongoose, el cual debe recibir los datos y con el cual, Graphql se va a comunicar después.

```
...
const HotelSchema = mongoose.Schema({
    name: {
        type: String,
        unique: true
    },
    stars:Number,
    image:String,
    price:String
});
...

```
Si te fijas, maneja la misma estructura del esquema de Graphql. Ahora bien, las mutaciones se conectan a Mongoose para poder crear la nueva información, para esto se define el siguiente esquema:

```
input HotelInput{
        name:String
        stars:Int
        image:String
        price:String
}
...
type Mutation{
   registerHotel(input: HotelInput): Hotel
}

```
## Get Data

Para interactuar con el API, debes dirigirte a `http://localhost:3000/graphql` y allí podrás ver la interfaz creada por el package `graphql-tools` el cual nos sirve para testear nuestra API.

En esa interfaz puedes escribir los siguientes comandos:

**Ejemplo 1:** Si quieres recibir la lista completa de hoteles

```
{
  allHotels
}
```
Y le das al boton de "Play". Inmediatamente Graphql te retorna el id de lo que llamaste.

```
{
  allHotels{
  id
}
```
La ventaja sobre API REST es que podemos hacer varios llamados en uno solo. Por ejemplo si quisieras llamar el nombre de todos los hoteles debes escribir lo siguiente:
```
{
  allHotels{
  name
}
```

**Ejemplo 2:** Si quieres recibir un hotel en especial

Puedes llamar un Hotel si le pasas el nombre como parámetro al query. Por ejemplo.

```
{
  hotelByName(name: "Saint Simon") {
    id
    name
    stars
    image
    price
  }
}

```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **CAMILO ARGUELLO** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone who's code was used
* Inspiration
* etc
