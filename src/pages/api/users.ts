// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const handler = async( req: NextApiRequest, res: NextApiResponse) => {
  
  let resultado = await getDadosTeste();
  // retornando os dados para api
  res.status(200).json(resultado);
}

export default handler;


// função que pega os usuarios;
async function getDadosTeste() {
  let url = 'https://jsonplaceholder.typicode.com/users';
  let data = await fetch(url);
  data = await data.json();

  return data;
}
