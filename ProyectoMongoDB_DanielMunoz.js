//Base de Datos

	//Mi base de datos, va a consistir sobre fútbol, es decir va a contener 5 colecciones, presidente, club, jugador, equipo y torneo. Comando de creación:    
			
			use FutbolDB


//Colecciones
	
	//Presidente, va a constar de nombre(que debe ser String y es necesario), 
	//creacion(va a ser un int, que va a mirar si es mayor que 1863, año que se creo el futbol y 
	//menor que 2021, año actual y experiencia que solo vas a poder elegir si y no.)  
	//Comando usado:

		db.createCollection("presidente", {
		   validator: {
		      $jsonSchema: {
		         bsonType: "object",
		         required: [ "nombre", "acciones", "experiencia" ],
		         properties: {
		            nombre: {
		               bsonType: "string",
		               description: "debe ser string y es un requisito"
		            },
		            acciones: {
		               bsonType: "int",
		               minimum: 51,
		               maximum: 100,
		               description: "Debe haber sido creado entre [ 51, 100 ] y es un requisito"
		            },
		            experiencia: {
		               enum: [ "Si", "No"],
		               description: "Solo puedes elegir entre Si o No"
		            }
		         }
		      }
		   }
		})


	//Club, va a constar de nombre(sera tipo String y sera necesario para poder insertar), 
	//origen(sera tambien String y sera tambien necesario para saber de donde es el club), 
	//presidente(tendra una relacion entre presidente y club) y creacion(va a ser un int, 
	//que va a mirar si es mayor que 1863, año que se creo el futbol y menor que 2021, año actual). 
	//Comando usado:

		db.createCollection("club", {
		   validator: {
		      $jsonSchema: {
		         bsonType: "object",
		         required: [ "nombre", "origen", "presidente", "creacion" ],
		         properties: {
		            nombre: {
		               bsonType: "string",
		               description: "debe ser string y es un requisito"
		            },
                    origen: {
		               bsonType: "string",
		               description: "debe ser string y es un requisito"
		            },
                    presidente: {
		               bsonType: "string",
		               description: "debe ser string y es un requisito"
		            },
		            creacion: {
		               bsonType: "int",
		               minimum: 1863,
		               maximum: 2021,
		               description: "Debe haber sido creado entre [ 1863, 2021 ] y es un requisito"
		            }
		         }
		      }
		   }
		})


	//Jugador, va a constar de nombre(sera tipo String y sera necesario para poder insertar), 
	//club_juagdor(hara referencia a club, sera un requisito para insertar), 
	//posicion(tendrea que especificar una pososicion que coincida con algunas de las posibles), 
	//numero(sera un int, que sera del 1 al 99), nacionalidad(solo debe poner una y ya podra insertar) 
	//y estadisticas, que contiene goles y asistencias(las dos validan que son mayor que 0 y que son int). 
	//Comando usado:
		
		db.createCollection("jugador", {
		   validator: {
		      $jsonSchema: {
		         bsonType: "object",
		         required: [ "nombre_jugador", "club_jugador", "posicion", "numero", "nacionalidad" ],
		         properties: {
		            nombre_jugador: {
		               bsonType: "string",
		               description: "debe ser string y es un requisito"
		            },
                    club_jugador: {
		               bsonType: "string",
		               description: "debe ser string y es un requisito"
		            },
                    posicion: {
		               enum: [ "POR", "LI", "LD", "DFC", "CAR", "MCD", "MC", "MI", "MD", "MCO", "EI", "ED", "SD", "DC"],
		               description: "Solo puedes elegir entre las diferentes posiciones de un jugador"
		            },
		            numero: {
		               bsonType: "int",
		               minimum: 1,
		               maximum: 99,
		               description: "Debe haber sido creado entre [ 1, 99 ] y es un requisito"
		            },
		            nacionalidad: {
		               bsonType: "string",
		               description: "debe ser string y es un requisito"
		            },
		            estadisticas: {
						bsonType: "object",
						required: [ "goles", "asistencias" ],
						properties: {
							goles: {
								bsonType: "int",
                                minimum: 0,
								description: "debe ser un numero y como minimo solo puede tener 0 goles"
							},
							asistencias: {
								bsonType: "int",
								minimum: 0,
								description: "debe ser un numero y como minimo solo puede tener 0 asistencias"
                            }
                        }
                    }
		         }
		      }
		   }
		})



	//Equipo, va a constar de nombre_equipo(string que sera su nombre y necesario), 
	//club_equipo(hara referencia a club, sera un requisito para insertar) y 
	//fomracion(solo tendra disponibles 3 fomraciones para elegir). 
	//Comando usado:
	
		db.createCollection("equipo", {
		   validator: {
		      $jsonSchema: {
		         bsonType: "object",
		         required: [ "nombre_equipo", "club_equipo", "formacion" ],
		         properties: {
		            nombre_equipo: {
		               bsonType: "string",
		               description: "debe ser string y es un requisito"
		            },
                    club_equipo: {
		               bsonType: "string",
		               description: "debe ser string y es un requisito"
		            },
                    formacion: {
		               enum: [ "3-4-3", "4-3-3", "5-3-2"],
		               description: "Solo puedes elegir entre las diferentes formaicones de un equipo"
		            }
		         }
		      }
		   }
		})



	//Copa, constara de un nombre_copa(sera un string que especifique su nombre), 
	//y dos equipos, es decir equipo1(hara referencia a equipo, sera un requisito para insertar) 
	//y equipo2 igual(hara referencia a equipo, sera un requisito para insertar). 
	//Comando usado:

		db.createCollection("copa", {
		   validator: {
		      $jsonSchema: {
		         bsonType: "object",
		         required: [ "nombre_copa", "equipo1", "equipo2" ],
		         properties: {
		            nombre_copa: {
		               bsonType: "string",
		               description: "debe ser string y es un requisito"
		            },
                    equipo1: {
		               bsonType: "string",
		               description: "debe ser string y es un requisito"
		            },
                    equipo2: {
		               bsonType: "string",
		               description: "debe ser string y es un requisito"
		            }
		         }
		      }
		   }
		})


//Docomuentos

	//Presidente. Comando de creación:

		db.presidente.insert({
			_id: "P1",
		    nombre: "Florentino Perez",
		    acciones : NumberInt(52),
		    experiencia : "Si"
		}),

		db.presidente.insert({
			_id: "P2",
		    nombre: "Joan Laporte",
		    acciones : NumberInt(54),
		    experiencia : "Si"
		}),

		db.presidente.insert({
			_id: "P3",
		    nombre: "Enrique Cerezo",
		    acciones : NumberInt(51),
		    experiencia : "Si"
		}),

		db.presidente.insert({
			_id: "P4",
		    nombre: "Andrea Agnelli",
		    acciones : NumberInt(60),
		    experiencia : "No"
		});



	//Club. Comando de creación:
		
		db.club.insert({
			_id: "CL1",
		   nombre: "Real Madrid C.F.",
		   origen: "España",
		   presidente: "Florentino Perez",
		   creacion: NumberInt(1902)
		}),

		db.club.insert({
			_id: "CL2",
		   nombre: "F.C. Barcelona",
		   origen: "España",
		   presidente: "Joan Laporte",
		   creacion: NumberInt(1899)
		}),

		db.club.insert({
			_id: "CL3",
		   nombre: "Club Atletico de Madrid",
		   origen: "España",
		   presidente: "Enrique Cerezo",
		   creacion: NumberInt(1903)
		}),

		db.club.insert({
			_id: "CL4",
		   nombre: "Juventus de Turín",
		   origen: "España",
		   presidente: "Andrea Agnelli",
		   creacion: NumberInt(1897)
		});



	//Jugador. Comando de creación:

		//Juventus de Turin
			db.jugador.insert({
				_id: "J1",
			   nombre_jugador: "Cristiano Ronaldo",
			   club_jugador: "Juventus de Turin",
			   posicion: "DC",
			   numero: NumberInt(7),
			   nacionalidad: "Portugal",
			   estadiscticas: {
			      goles: NumberInt(45),
			      asistencias: NumberInt(17)
			   }
			}),

			db.jugador.insert({
				_id: "J2",
			   nombre_jugador: "Yassine Bounou",
			   club_jugador: "Juventus de Turin",
			   posicion: "POR",
			   numero: NumberInt(13),
			   nacionalidad: "Marruecos",
			   estadiscticas: {
			      goles: NumberInt(0),
			      asistencias: NumberInt(1)
			   }
			}),

			db.jugador.insert({
				_id: "J3",
			   nombre_jugador: "Jesús Navas",
			   club_jugador: "Juventus de Turin",
			   posicion: "LD",
			   numero: NumberInt(16),
			   nacionalidad: "España",
			   estadiscticas: {
			      goles: NumberInt(3),
			      asistencias: NumberInt(8)
			   }
			}),

			db.jugador.insert({
				_id: "J4",
			   nombre_jugador: "Diego Carlos",
			   club_jugador: "Juventus de Turin",
			   posicion: "DFC",
			   numero: NumberInt(20),
			   nacionalidad: "Brasil",
			   estadiscticas: {
			      goles: NumberInt(2),
			      asistencias: NumberInt(1)
			   }
			}),

			db.jugador.insert({
				_id: "J5",
			   nombre_jugador: "Jules Koundé",
			   club_jugador: "Juventus de Turin",
			   posicion: "DFC",
			   numero: NumberInt(12),
			   nacionalidad: "Francia",
			   estadiscticas: {
			      goles: NumberInt(4),
			      asistencias: NumberInt(0)
			   }
			}),

			db.jugador.insert({
				_id: "J6",
			   nombre_jugador: "Ivan Rakitic",
			   club_jugador: "Juventus de Turin",
			   posicion: "MC",
			   numero: NumberInt(6),
			   nacionalidad: "Croacia",
			   estadiscticas: {
			      goles: NumberInt(0),
			      asistencias: NumberInt(7)
			   }
			}),

			db.jugador.insert({
				_id: "J7",
			   nombre_jugador: "Lucas Ocampos",
			   club_jugador: "Juventus de Turin",
			   posicion: "MCO",
			   numero: NumberInt(14),
			   nacionalidad: "Argentina",
			   estadiscticas: {
			      goles: NumberInt(12),
			      asistencias: NumberInt(4)
			   }
			}),

			db.jugador.insert({
				_id: "J8",
			   nombre_jugador: "Papu Gómez",
			   club_jugador: "Juventus de Turin",
			   posicion: "ED",
			   numero: NumberInt(24),
			   nacionalidad: "Argentina",
			   estadiscticas: {
			      goles: NumberInt(1),
			      asistencias: NumberInt(11)
			   }
			});

		//Real Madrid C.F.

			db.jugador.insert({
				_id: "J9",
			   nombre_jugador: "Thibaut Courtois",
			   club_jugador: "Real Madrid C.F.",
			   posicion: "POR",
			   numero: NumberInt(1),
			   nacionalidad: "Belgica",
			   estadiscticas: {
			      goles: NumberInt(0),
			      asistencias: NumberInt(0)
			   }
			}),

			db.jugador.insert({
				_id: "J10",
			   nombre_jugador: "Ferland Mendy",
			   club_jugador: "Real Madrid C.F.",
			   posicion: "LI",
			   numero: NumberInt(23),
			   nacionalidad: "Francia",
			   estadiscticas: {
			      goles: NumberInt(0),
			      asistencias: NumberInt(0)
			   }
			}),

			db.jugador.insert({
				_id: "J11",
			   nombre_jugador: "Sergio Ramos",
			   club_jugador: "Real Madrid C.F.",
			   posicion: "DFC",
			   numero: NumberInt(4),
			   nacionalidad: "España",
			   estadiscticas: {
			      goles: NumberInt(5),
			      asistencias: NumberInt(3)
			   }
			}),

			db.jugador.insert({
				_id: "J12",
			   nombre_jugador: "Carlos Casemiro",
			   club_jugador: "Real Madrid C.F.",
			   posicion: "MCD",
			   numero: NumberInt(14),
			   nacionalidad: "Brasil",
			   estadiscticas: {
			      goles: NumberInt(4),
			      asistencias: NumberInt(4)
			   }
			}),

			db.jugador.insert({
				_id: "J13",
			   nombre_jugador: "Toni Kross",
			   club_jugador: "Real Madrid C.F.",
			   posicion: "MC",
			   numero: NumberInt(8),
			   nacionalidad: "Alemania",
			   estadiscticas: {
			      goles: NumberInt(2),
			      asistencias: NumberInt(10)
			   }
			}),

			db.jugador.insert({
				_id: "J14",
			   nombre_jugador: "Luka Modric",
			   club_jugador: "Real Madrid C.F.",
			   posicion: "MC",
			   numero: NumberInt(10),
			   nacionalidad: "Croacia",
			   estadiscticas: {
			      goles: NumberInt(0),
			      asistencias: NumberInt(7)
			   }
			}),

			db.jugador.insert({
				_id: "J15",
			   nombre_jugador: "Karim Benzema",
			   club_jugador: "Real Madrid C.F.",
			   posicion: "DC",
			   numero: NumberInt(14),
			   nacionalidad: "Francia",
			   estadiscticas: {
			      goles: NumberInt(31),
			      asistencias: NumberInt(11)
			   }
			}),

			db.jugador.insert({
				_id: "J16",
			   nombre_jugador: "Vinícius Júnior",
			   club_jugador: "Real Madrid C.F.",
			   posicion: "EI",
			   numero: NumberInt(20),
			   nacionalidad: "Brasil",
			   estadiscticas: {
			      goles: NumberInt(5),
			      asistencias: NumberInt(7)
			   }
			}),
                        
            		db.jugador.insert({
            			_id: "J17",
			   nombre_jugador: "Eden Hazard",
			   club_jugador: "Real Madrid C.F.",
			   posicion: "ED",
			   numero: NumberInt(7),
			   nacionalidad: "Belgica",
			   estadiscticas: {
			      goles: NumberInt(0),
			      asistencias: NumberInt(0)
			   }
			});

		//F.C. Barcelona

			db.jugador.insert({
				_id: "J18",
			   nombre_jugador: "Marc-André ter Stegen",
			   club_jugador: "F.C. Barcelona",
			   posicion: "POR",
			   numero: NumberInt(1),
			   nacionalidad: "Alemania",
			   estadiscticas: {
			      goles: NumberInt(0),
			      asistencias: NumberInt(0)
			   }
			}),
                        
            		db.jugador.insert({
            			_id: "J19",
			   nombre_jugador: "Gerard Piqué",
			   club_jugador: "F.C. Barcelona",
			   posicion: "DFC",
			   numero: NumberInt(3),
			   nacionalidad: "España",
			   estadiscticas: {
			      goles: NumberInt(1),
			      asistencias: NumberInt(0)
			   }
			}),
                        
            		db.jugador.insert({
            			_id: "J20",
			   nombre_jugador: "Sergio Busquets",
			   club_jugador: "F.C. Barcelona",
			   posicion: "MCD",
			   numero: NumberInt(5),
			   nacionalidad: "España",
			   estadiscticas: {
			      goles: NumberInt(0),
			      asistencias: NumberInt(5)
			   }
			}),
                        
            		db.jugador.insert({
		            	_id: "J21",
			   nombre_jugador: "Pedro",
			   club_jugador: "F.C. Barcelona",
			   posicion: "MC",
			   numero: NumberInt(16),
			   nacionalidad: "España",
			   estadiscticas: {
			      goles: NumberInt(3),
			      asistencias: NumberInt(2)
			   }
			}),
                        
            		db.jugador.insert({
		            	_id: "J22",
			   nombre_jugador: "Frenkie de Jong",
			   club_jugador: "F.C. Barcelona",
			   posicion: "MC",
			   numero: NumberInt(21),
			   nacionalidad: "Holanda",
			   estadiscticas: {
			      goles: NumberInt(4),
			      asistencias: NumberInt(4)
			   }
			}),
                        
            		db.jugador.insert({
		            	_id: "J23",
			   nombre_jugador: "Philippe Coutinho",
			   club_jugador: "F.C. Barcelona",
			   posicion: "MCO",
			   numero: NumberInt(14),
			   nacionalidad: "Brasil",
			   estadiscticas: {
			      goles: NumberInt(1),
			      asistencias: NumberInt(0)
			   }
			}),
                        
            		db.jugador.insert({
		            	_id: "J24",
			   nombre_jugador: "Antoine Griezmann",
			   club_jugador: "F.C. Barcelona",
			   posicion: "EI",
			   numero: NumberInt(7),
			   nacionalidad: "Belgica",
			   estadiscticas: {
			      goles: NumberInt(17),
			      asistencias: NumberInt(7)
			   }
			}),
                        
			db.jugador.insert({
				_id: "J25",
			   nombre_jugador: "Ousmane Dembélé",
			   club_jugador: "F.C. Barcelona",
			   posicion: "EI",
			   numero: NumberInt(11),
			   nacionalidad: "Francia",
			   estadiscticas: {
			      goles: NumberInt(11),
			      asistencias: NumberInt(4)
			   }
			}),
                        
			db.jugador.insert({
				_id: "J26",
			   nombre_jugador: "Lionel Messi",
			   club_jugador: "F.C. Barcelona",
			   posicion: "ED",
			   numero: NumberInt(10),
			   nacionalidad: "Argentina",
			   estadiscticas: {
			      goles: NumberInt(40),
			      asistencias: NumberInt(21)
			   }
			});

		//Club Atletico de Madrid

			db.jugador.insert({
				_id: "J27",
			   nombre_jugador: "Jan Oblak",
			   club_jugador: "Club Atletico de Madrid",
			   posicion: "POR",
			   numero: NumberInt(13),
			   nacionalidad: "Eslovenia",
			   estadiscticas: {
			      goles: NumberInt(0),
			      asistencias: NumberInt(0)
			   }
			}),
			
			db.jugador.insert({
				_id: "J28",
			   nombre_jugador: "Mario Hermoso",
			   club_jugador: "Club Atletico de Madrid",
			   posicion: "DFC",
			   numero: NumberInt(22),
			   nacionalidad: "España",
			   estadiscticas: {
			      goles: NumberInt(2),
			      asistencias: NumberInt(0)
			   }
			}),
			
			db.jugador.insert({
				_id: "J29",
			   nombre_jugador: "Stefan Savic",
			   club_jugador: "Club Atletico de Madrid",
			   posicion: "DFC",
			   numero: NumberInt(15),
			   nacionalidad: "Montenegro",
			   estadiscticas: {
			      goles: NumberInt(0),
			      asistencias: NumberInt(0)
			   }
			}),
			
			db.jugador.insert({
				_id: "J30",
			   nombre_jugador: "Jorge Resurreción",
			   club_jugador: "Club Atletico de Madrid",
			   posicion: "MC",
			   numero: NumberInt(6),
			   nacionalidad: "España",
			   estadiscticas: {
			      goles: NumberInt(0),
			      asistencias: NumberInt(5)
			   }
			}),
			
			db.jugador.insert({
				_id: "J31",
			   nombre_jugador: "Saúl Ñiguez",
			   club_jugador: "Club Atletico de Madrid",
			   posicion: "MC",
			   numero: NumberInt(8),
			   nacionalidad: "España",
			   estadiscticas: {
			      goles: NumberInt(1),
			      asistencias: NumberInt(3)
			   }
			}),
			
			db.jugador.insert({
				_id: "J32",
			   nombre_jugador: "Marcos Llorente",
			   club_jugador: "Club Atletico de Madrid",
			   posicion: "MD",
			   numero: NumberInt(14),
			   nacionalidad: "España",
			   estadiscticas: {
			      goles: NumberInt(15),
			      asistencias: NumberInt(9)
			   }
			}),
			
			db.jugador.insert({
				_id: "J33",
			   nombre_jugador: "Yannick Carrasco",
			   club_jugador: "Club Atletico de Madrid",
			   posicion: "MI",
			   numero: NumberInt(10),
			   nacionalidad: "Bélgica",
			   estadiscticas: {
			      goles: NumberInt(7),
			      asistencias: NumberInt(5)
			   }
			}),
			
			db.jugador.insert({
				_id: "J34",
			   nombre_jugador: "Joao Felix",
			   club_jugador: "Club Atletico de Madrid",
			   posicion: "SD",
			   numero: NumberInt(7),
			   nacionalidad: "Portugal",
			   estadiscticas: {
			      goles: NumberInt(9),
			      asistencias: NumberInt(11)
			   }
			}),
			
			db.jugador.insert({
				_id: "J35",
			   nombre_jugador: "Luis Suarez",
			   club_jugador: "Club Atletico de Madrid",
			   posicion: "DC",
			   numero: NumberInt(9),
			   nacionalidad: "Uruguay",
			   estadiscticas: {
			      goles: NumberInt(20),
			      asistencias: NumberInt(2)
			   }
			});



	//Equipo. Comando de creación:
	
		db.equipo.insert({
			_id: "EQ1",
		    nombre_equipo: "Real Madrid C.F.",
		    club_equipo : "Real Madrid C.F.",
		    formacion : "4-3-3"
		}),

		db.equipo.insert({
			_id: "EQ2",
		    nombre_equipo: "Real Madrid Castilla",
		    club_equipo : "Real Madrid C.F.",
		    formacion : "5-3-2"
		}),
		
		db.equipo.insert({
			_id: "EQ3",
		    nombre_equipo: "F.C. Barcelona",
		    club_equipo : "F.C. Barcelona",
		    formacion : "4-3-3"
		}),
		
		db.equipo.insert({
			_id: "EQ4",
		    nombre_equipo: "Atletico de Madrid",
		    club_equipo : "Club Atletico de Madrid",
		    formacion : "5-3-2"
		}),
                
		db.equipo.insert({
			_id: "EQ5",
		    nombre_equipo: "Juventus de Turín",
		    club_equipo : "Juventus de Turín",
		    formacion : "3-4-3"
		});


	//Copa. Comando de creación:

		db.copa.insert({
			_id: "CO1",
		    nombre_copa: "Supercopa de Europa",
		    equipo1 : "Real Madrid C.F.",
		    equipo2 : "Juventus de Turín"
		}),
        
        db.copa.insert({
        	_id: "CO2",
		    nombre_copa: "Champions League",
		    equipo1 : "Real Madrid C.F.",
		    equipo2 : "Juventus de Turín"
		}),
       
       //Aqui le añado dos equipos mas, para demotrar que puedes añadir mas equipos o cualquier cosa en realidad, eso es lo bueno de MongoDB
        db.copa.insert({
        	_id: "CO3",
		    nombre_copa: "Supercopa de España",
		    equipo1 : "F.C. Barcelona",
		    equipo2 : "Real Madrid C.F.",
            equipo3 : "Atletico de Madrid",
		    equipo4 : "Real Madrid Castilla"
		});
		

//Operaciones de obtención de información

	//Empezamos por lo simple, una busqueda general del documento

		//Presidente busqueda. Comando de creación:
			db.presidente.find();

		//Club busqueda. Comando de creación:
			db.club.find();

		//Jugador busqueda. Comando de creación:
			db.jugador.find();

		//Equipo busqueda. Comando de creación:
			db.equipo.find();

		//Copa busqueda. Comando de creación:
			db.copa.find();

	//Empezamos añadiendo cosas a la busqueda

		//Presidente busqueda sin años de experiencia y con .pretty()
		//Comando usado:
			db.presidente.find({experiencia: "No"}).pretty();

		//Club busqueda para que solo nos muestre el nombre del club, 
		//para ello solo tenemos que indicar el nombre_club y tambien añadimos .pretty() para una mejor presentacion
		//Comando usado:
			db.club.find({}, {nombre:1, _id:0})

		//Jugador busqueda con .sort(), sirve para ordenar, 
		//que nos muestre los jugadores con mas de 10G y que solo sean del Real Madrid C.F.
		//Comando usado:
			db.jugador.find({club_jugador: "Real Madrid C.F."}).sort({numero : 1})


		//Jugador busqueda que los jugadores que superen los 10 goles y asistencias, y que no 
		//aparezca su id y su posicion.
		//Comando usado:
			db.getCollection('jugador').find({"estadiscticas.goles":{$gt:10}, "estadiscticas.asistencias":{$gt:10}}, {_id:0, "posicion":0}).sort({"estadiscticas.goles" : -1}).pretty()

		//Equipo busqueda que solo aparezcan las fomrmaciones 4-3-3 y 3-4-3, y no muestre el _id.
		//Comando usado:
			db.equipo.find({formacion : { $in: [ "4-3-3", "3-4-3" ]}} , {_id:0}).pretty();

		//Copa busqueda que solo nos muestre la Champions League
		//Comando usado:
			db.copa.find({nombre_copa:"Champions League"}).pretty();

		//LOOKUP, esto hace que te agrega al club sus respectivos jugadores
		//Comando usado:
			db.club.aggregate([
			   {
			     $lookup:
			       {
			         from: "jugador",
			         localField: "nombre",
			         foreignField: "club_jugador",
			         as: "Jugadores"
			       }
			  }
			])

		//LOOKUP, va a agregar los detalles de los equipos que participan en la copa
		//Comando usado:
			db.copa.aggregate([
			   	{
				    $lookup:
					    {
				        	from: "club",
				        	localField: "equipo1",
					        foreignField: "nombre",
					        as: "equipo1"
				    	}
			 	},
                   {
				   	$lookup:
				       	{
				        	from: "club",
				        	localField: "equipo2",
				        	foreignField: "nombre",
				        	as: "equipo2"
				       	}
                   }
			]) 

			 
//Actualizar documentos

	//Actualizar por _id los goles y asistencias de un jugador
	//Comando usado:
		db.jugador.update({
		    _id: "J1"
		},
		{
		    $set: {
		        "estadiscticas.goles": 64,
		        "estadiscticas.asistencias": 60
		    }
		})


	//Añadir a los porteros salvadas si no tiene esa estadistica
	//Comando usado:
		db.jugador.update({
		    posicion: "POR"
		},
		{
		    $set: {
		        "estadiscticas.paradas": 102
		    }
		},
                    {multi:true}
		)

	//Actualizar la posicion a los SD que tengan menos de 10 goles y 5 asistencias, 
	//su nueva posicion sera MCO.
	//Comando usado:

		db.jugador.update({
		    posicion: "SD",
                    "estadiscticas.goles":{$lt:10},
		    "estadiscticas.asistencias":{$gt:5}
		},
		{
		    $set: {
		        posicion: "MCO"
		    }
		},
                    {multi:true}
		)

	//Añadir a los porteros salvadas si no tiene esa estadistica
	/Comando usado:
		db.jugador.update({
		    posicion: "POR"
		},
		{
		    $set: {
		        "estadiscticas.paradas": 102
		    }
		},
                    {multi:true}
		)




//Borrar colecciones y documentos

	//Borrar copa simple
	//Comando usado:
		db.copa.drop()
		
	//Borrar equipo simple
	//Comando usado:
		db.equipo.drop()
		
	//Borrar jugador simple
	//Comando usado:
		db.jugador.drop()
		
	//Borrar club simple
	//Comando usado:
		db.club.drop()

	//Borrar presidente simple
	//Comando usado:
		db.presidente.drop()

	//Borrar jugadores con menos de 5 goles
	//Comando usado:
		db.jugador.remove({"estadiscticas.goles":{$lt:5}})

	//Borrar jugadores que su club contenga F.C y C.F.
	/Comando usado:
		db.jugador.remove({"club_jugador":{$in:[/F.C./, /C.F./]}})

	//Borrar presidentes que sus acciones superen los 55
	//Comando usado:
		db.presidente.remove({"acciones":{$gt:55}})