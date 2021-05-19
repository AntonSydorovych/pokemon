// let items = [
//   {
//     name: "Charmander",
//     number: '#001',
//     id: 1,
//     type: "Fire",
//     attack: 52,
//     defense: 43,
//     hp: 39,
//     spAttack: 60,
//     spDefense: 50,
//     speed: 65,
//     weight: 85,
//     totalMoves: 89
//   },
//   {
//     name: "Bulbazar",
//     number: '#002',
//     id: 2,
//     type: "Grass",
//     attack: 11,
//     defense: 12,
//     hp: 13,
//     spAttack: 14,
//     spDefense: 15,
//     speed: 16,
//     weight: 17,
//     totalMoves: 18
//   },
//   {
//     name: "Pikachu",
//     number: '#003',
//     id: 3,
//     type: "Electric",
//     attack: 21,
//     defense: 22,
//     hp: 23,
//     spAttack: 24,
//     spDefense: 25,
//     speed: 26,
//     weight: 27,
//     totalMoves: 28
//   },
//   {
//     name: "Charmander",
//     number: '#004',
//     id: 4,
//     type: "Fire",
//     attack: 52,
//     defense: 43,
//     hp: 39,
//     spAttack: 60,
//     spDefense: 50,
//     speed: 65,
//     weight: 85,
//     totalMoves: 89
//   },
//   {
//     name: "Bulbazar",
//     number: '#005',
//     id: 5,
//     type: "Grass",
//     attack: 11,
//     defense: 12,
//     hp: 13,
//     spAttack: 14,
//     spDefense: 15,
//     speed: 16,
//     weight: 17,
//     totalMoves: 18
//   },
//   {
//     name: "Pikachu",
//     number: '#006',
//     id: 6,
//     type: "Electric",
//     attack: 21,
//     defense: 22,
//     hp: 23,
//     spAttack: 24,
//     spDefense: 25,
//     speed: 26,
//     weight: 27,
//     totalMoves: 28
//   },
//   {
//     name: "Charmander",
//     number: '#007',
//     id: 7,
//     type: "Fire",
//     attack: 52,
//     defense: 43,
//     hp: 39,
//     spAttack: 60,
//     spDefense: 50,
//     speed: 65,
//     weight: 85,
//     totalMoves: 89
//   },
//   {
//     name: "Bulbazar",
//     number: '#008',
//     id: 8,
//     type: "Grass",
//     attack: 11,
//     defense: 12,
//     hp: 13,
//     spAttack: 14,
//     spDefense: 15,
//     speed: 16,
//     weight: 17,
//     totalMoves: 18
//   },
//   {
//     name: "Pikachu",
//     number: '#009',
//     id: 9,
//     type: "Electric",
//     attack: 21,
//     defense: 22,
//     hp: 23,
//     spAttack: 24,
//     spDefense: 25,
//     speed: 26,
//     weight: 27,
//     totalMoves: 28
//   },
//   {
//     name: "Charmander",
//     number: '#010',
//     id: 10,
//     type: "Fire",
//     attack: 52,
//     defense: 43,
//     hp: 39,
//     spAttack: 60,
//     spDefense: 50,
//     speed: 65,
//     weight: 85,
//     totalMoves: 89
//   },
//   {
//     name: "Bulbazar",
//     number: '#011',
//     id: 11,
//     type: "Grass",
//     attack: 11,
//     defense: 12,
//     hp: 13,
//     spAttack: 14,
//     spDefense: 15,
//     speed: 16,
//     weight: 17,
//     totalMoves: 18
//   },
//   {
//     name: "Pikachu",
//     number: '#012',
//     id: 12,
//     type: "Electric",
//     attack: 21,
//     defense: 22,
//     hp: 23,
//     spAttack: 24,
//     spDefense: 25,
//     speed: 26,
//     weight: 27,
//     totalMoves: 28
//   }
// ];

/*

useEffect(async (id = 4) => {
    const result = await axios(
      `https://pokeapi.co/api/v2/pokemon/${id}`,
    );

    const picture = await axios(
      `https://pokeres.bastionbot.org/images/pokemon/${id}.png
      `,
    );

    let data = result.data;

    let soloPoke = {
      picture: `https://pokeres.bastionbot.org/images/pokemon/${data.id}.png`,
      name: data.name,
      number: '# ' + data.id,
      id: data.id,
      type: data.types[0].type.name,
      attack: data.stats[1].base_stat,
      defense: data.stats[2].base_stat,
      hp: data.stats[0].base_stat,
      spAttack: data.stats[3].base_stat,
      spDefense: data.stats[4].base_stat,
      speed: data.stats[5].base_stat,
      weight: data.weight,
      totalMoves: data.moves.lenght
    }

    setpokeInfo(soloPoke);

  }, []);

*/
