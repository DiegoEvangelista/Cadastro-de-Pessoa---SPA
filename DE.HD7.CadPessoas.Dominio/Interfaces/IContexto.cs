using System;
using System.Collections.Generic;

namespace DE.HD7.CadPessoas.Dominio.Interfaces
{
    public interface IContexto<T> where T : Entidade
    {
        void Salvar(T entidade);
        void Excluir(string id);
        IEnumerable<T> ListarTodos();
        IEnumerable<T> ListarPorFiltro(Func<T, bool> filtro);
        T ListarPorId(string id);
    }
}
