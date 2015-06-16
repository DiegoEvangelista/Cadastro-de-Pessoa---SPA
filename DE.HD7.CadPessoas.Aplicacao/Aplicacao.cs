using DE.HD7.CadPessoas.Dominio;
using DE.HD7.CadPessoas.Dominio.Interfaces;
using System.Collections.Generic;

namespace DE.HD7.CadPessoas.Aplicacao
{
    public class Aplicacao<T> where T : Entidade
    {
        private readonly IContexto<T> _contexto;
        public Aplicacao(IContexto<T> repositorio)
        {
            _contexto = repositorio;
        }
        public void Salvar(T entidade)
        {
            _contexto.Salvar(entidade);
        }
        public void Excluir(string id)
        {
            _contexto.Excluir(id);
        }
        public IEnumerable<T> ListarTodos()
        {
            return _contexto.ListarTodos();
        }
        public T ListarPorId(string id)
        {
            return _contexto.ListarPorId(id);
        }
    }
}
