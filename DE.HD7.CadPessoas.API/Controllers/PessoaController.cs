using DE.HD7.CadPessoas.Aplicacao;
using DE.HD7.CadPessoas.Dominio;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace DE.HD7.CadPessoas.API.Controllers
{
    public class PessoaController : ApiController
    {
        public IEnumerable<Pessoa> Get()
        {
            //var pessoa = new Pessoa();
            //pessoa.Nome = "Diego";
            //pessoa.Idade = 28;
            //Construtor<Pessoa>.Aplicacao().Salvar(pessoa);
            return Construtor<Pessoa>.Aplicacao().ListarTodos().OrderBy(x => x.Nome).ToList();
        }

        public Pessoa Get(string id)
        {
            return Construtor<Pessoa>.Aplicacao().ListarPorId(id);
        }

        public HttpResponseMessage Post(Pessoa pessoa)
        {
            if (!ModelState.IsValid)
                return Request.CreateResponse(HttpStatusCode.BadRequest, ModelState);

            var app = Construtor<Pessoa>.Aplicacao();
            app.Salvar(pessoa);

            return Request.CreateResponse(HttpStatusCode.Created, pessoa);
        }

        public HttpResponseMessage Put(string id, Pessoa pessoa)
        {
            if (!ModelState.IsValid)
                return Request.CreateResponse(HttpStatusCode.BadRequest, ModelState);

            if (id != pessoa.Id)
                return Request.CreateResponse(HttpStatusCode.BadRequest);

            var app = Construtor<Pessoa>.Aplicacao();
            var pessoaBanco = app.ListarPorId(id);
            if (pessoaBanco == null)
                return Request.CreateResponse(HttpStatusCode.BadRequest);

            app.Salvar(pessoa);
            return Request.CreateResponse(HttpStatusCode.OK);
        }

        public HttpResponseMessage Delete(string id)
        {
            var app = Construtor<Pessoa>.Aplicacao();
            var pessoaBanco = app.ListarPorId(id);
            if (pessoaBanco == null)
                return Request.CreateResponse(HttpStatusCode.NotFound);

            app.Excluir(id);
            return Request.CreateResponse(HttpStatusCode.OK);
        }
    }
}