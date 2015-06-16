using DE.HD7.CadPessoas.Dominio;
using DE.HD7.CadPessoas.Repositorio;

namespace DE.HD7.CadPessoas.Aplicacao
{
    public static class Construtor<T> where T : Entidade
    {
        public static Aplicacao<T> Aplicacao()
        {
            return new Aplicacao<T>(new ContextoAplicacao<T>());
        }
    }
}
