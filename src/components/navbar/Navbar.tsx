import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <div className='w-full bg-indigo-900 text-white
              flex justify-center py-4'>

        <div className="container flex justify-between text-lg">
          <Link to='/home' className='text-2x1 font-bold'>Blog Pessoal</Link>

          <div className='flex gap-4'>
            Postagens
            <Link to='/temas' className='hover:underline'>Temas</Link>
            <Link to='/cadastroTema' className='hover:underline'>Cadastrar Tema</Link>
            Perfil
            Sair
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar